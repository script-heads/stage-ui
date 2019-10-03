import React, { useState, useEffect, forwardRef, useRef, useReducer, Fragment } from 'react'
import SelectTypes from './types'
import createStyles from './styles'
import Field from '../../misc/hocs/Field'
import Icon from '../../content/Icon'

//TODO: Открывать вариативно вверх или вниз

const Select = (props: SelectTypes.Props, ref) => {

    const {
        multiselect,
        onChange,
        options,
        values,
        defaultValues,
        placeholder,
        searchable
    } = props;

    if (!options) return null

    const initialState = {
        selectedOptions: defaultValues || [],
        availableOptions: options,
        underOverlay: false,
        opened: false,
        searchValue: '',
        empty: true,
        cursor: -1
    }

    let nextSelectedOptions

    function reducer(state, action) {
        switch (action.type) {
            case 'setSelectedOptions':
                return {
                    ...state,
                    selectedOptions: action.payload,
                    availableOptions: options.filter(option =>
                        !action.payload.includes(option) &&
                        option.text
                            .toLocaleUpperCase()
                            .includes(state.searchValue.toLocaleUpperCase())
                    ),
                    cursor: -1
                };

            // Set selected and available options when user select one and clear cursor position
            case 'toggleOption':
                nextSelectedOptions = state.selectedOptions;

                if (multiselect) {
                    state.selectedOptions.includes(action.payload)
                        ? nextSelectedOptions = state.selectedOptions.filter(selectedOption =>
                            selectedOption.value != action.payload.value
                        )
                        : nextSelectedOptions.push(action.payload)
                } else {
                    nextSelectedOptions = [action.payload];
                }

                onChange && onChange(nextSelectedOptions, action.payload);

                return {
                    ...state,
                    searchValue: '',
                    empty: nextSelectedOptions.length === 0,
                    selectedOptions: nextSelectedOptions,
                    availableOptions: options.filter(option =>
                        !nextSelectedOptions.includes(option) &&
                        option.text
                            .toLocaleUpperCase()
                            .includes(state.searchValue.toLocaleUpperCase())
                    ),
                    cursor: -1
                };

            // Open or close and clear cursor position
            case 'toggleOpen':
                return {
                    ...state,
                    open: typeof action.payload === 'undefined' ? !state.open : action.payload,
                    cursor: -1
                };

            // Set available options when user search one and clear cursor position
            case 'search':
                return {
                    ...state,
                    open: true,
                    searchValue: action.payload,
                    availableOptions: options.filter(option =>
                        !state.selectedOptions.includes(option) &&
                        option.text
                            .toLocaleUpperCase()
                            .includes(action.payload.toLocaleUpperCase())
                    ),
                    cursor: -1
                }

            case 'reduceSelectedOptions':
                nextSelectedOptions = state.selectedOptions.slice(0, -1)
                return {
                    ...state,
                    selectedOptions: nextSelectedOptions,
                    availableOptions: options.filter(option =>
                        !nextSelectedOptions.includes(option) &&
                        option.text
                            .toLocaleUpperCase()
                            .includes(state.searchValue.toLocaleUpperCase())
                    ),
                    empty: nextSelectedOptions.length === 0 ? true : false
                }

            case 'setCursor':
                return {
                    ...state,
                    cursor: action.payload
                }

            case 'clear':
                return {
                    ...state,
                    searchValue: '',
                    selectedOption: [],
                    availableOptions: options,
                    cursor: -1
                }

            case 'setOverlay':
                return {
                    ...state,
                    underOverlay: action.payload,
                    cursor: -1
                }

            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const styles = createStyles(props);

    useEffect(() => {
        if (values) {
            dispatch({ type: 'setSelectedOptions', payload: values });
        }
    }, [props.values])


    /*
    * Keyboard control
    */

    function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
        switch (event.key) {
            case 'Enter':
                if (state.cursor != -1) {
                    dispatch({
                        type: 'toggleOption',
                        payload: state.availableOptions[state.cursor]
                    })
                }
                dispatch({ type: 'toggleOpen' });
                break;
            case 'ArrowUp':
                event.preventDefault();
                state.cursor > 0 && dispatch({
                    type: 'setCursor',
                    payload: state.cursor - 1
                })
                break;
            case 'ArrowDown':
                event.preventDefault();
                state.cursor < state.availableOptions.length - 1 && dispatch({
                    type: 'setCursor',
                    payload: state.cursor + 1
                })
                break;
            case 'Backspace':
                !searchable && dispatch({ type: 'reduceSelectedOptions' })
                break;
        }
    }

    // console.log(state);
    /*
    * Set field value
    */

    let fieldValue = <span css={styles.placeholder}>{placeholder}</span>

    if (multiselect && (!state.empty || searchable)) {
        fieldValue =
            <Options
                styles={styles}
                selected={state.selectedOptions}
                searchable={searchable}
                placeholder={placeholder}
                searchValue={state.searchValue}
                onSearch={(value) => dispatch({ type: 'search', payload: value })}
                onClose={(option) => dispatch({ type: 'toggleOption', payload: option })}
            />
    }

    if (!multiselect) {
        if (searchable && state.empty) {
            fieldValue =
                <Search
                    styles={styles}
                    placeholder={placeholder}
                    searchValue={state.selectedOptions[0] ? state.selectedOptions[0].text : state.searchValue}
                    onSearch={(value) => dispatch({ type: 'search', payload: value })}
                />
        } else if (!state.empty) {
            fieldValue = <span>{state.selectedOptions[0].text}</span>
        }
    }

    return (
        <Field
            {...props}
            ref={ref}
            fieldStyles={styles.fieldStyles(state.open)}

            isEmpty={state.empty}
            manyLines={multiselect && !state.empty}
            insideLabelStyles={multiselect && !state.empty && styles.insideLabelStyles}

            onClick={() => dispatch({ type: 'toggleOpen' })}
            onClear={() => dispatch({ type: 'clear' })}
            onKeyDown={(e) => handleKeyDown(e)}

            onBlur={() => dispatch({ type: 'toggleOpen', payload: false })}
            onLabelOverlay={(state) => dispatch({ type: 'setOverlay', payload: state })}

            children={(
                <Fragment>
                    {!state.underOverlay && fieldValue}
                    {state.open && (
                        <div css={styles.dropMenu}>
                            {state.availableOptions
                                .map((option, i) => (
                                    <div
                                        key={option.value}
                                        css={styles.dropItem(i === state.cursor)}
                                        children={option.text}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log('happen');
                                            dispatch({ type: 'toggleOption', payload: option });
                                            dispatch({ type: 'toggleOpen', payload: false })
                                        }}
                                    />
                                ))}
                        </div>
                    )}
                </Fragment>
            )}

            rightChild={(
                <Icon type={i =>
                    i.filled[state.open ? 'arrowIosUpward' : 'arrowIosDownward']
                } />
            )}
        />
    )
}

const Options = (props: {
    selected: SelectTypes.Option[],
    onClose: (option) => void,
    styles: any,
    searchValue: string,
    placeholder?: string
    onSearch: (searchValue: string) => void
    searchable?: boolean
}) => {

    const { selected, onClose, styles, searchable } = props;

    return (
        <div css={styles.options}>
            {selected.map(option => (
                <div key={option.value} css={styles.optionItem}>
                    <span css={styles.optionItemText}>{option.text}</span>
                    <Icon
                        type={(i) => i.outline.close}
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose(option)
                        }}
                    />
                </div>
            ))}
            {searchable && <Search {...props} size={4} />}
        </div>
    )
}

const Search = (props: {
    searchValue: string,
    onSearch: (searchValue: string) => void
    size?: number
    styles: any
    placeholder?: string
    defaultValue?: string
}) => {
    const { searchValue, onSearch, styles, defaultValue, placeholder } = props;

    return (
        <input
            defaultValue={defaultValue}
            placeholder={placeholder}
            value={searchValue}
            css={styles.input}
            size={props.size}
            autoFocus
            onChange={e => onSearch(e.target.value)}
        />
    )
}

export default forwardRef(Select);
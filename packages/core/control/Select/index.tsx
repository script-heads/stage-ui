import React, { useEffect, forwardRef, useReducer } from 'react'
import SelectTypes from './types'
import createStyles from './styles'
import Field from '../../misc/hocs/Field'
import Icon from '../../content/Icon'
import Drop from '../../layout/Drop'

let nextSelectedOptions

const Select = (props: SelectTypes.Props, ref) => {

    const {
        multiselect,
        onChange,
        options = [],
        values = [],
        defaultValues = [],
        placeholder,
        searchable,
        disabled
    } = props;

    const styles = createStyles(props);
    let approvedDefaultValues = defaultValues 
        ? options.filter(option => includeOption(defaultValues, option)) 
        : [];

    if (!multiselect && approvedDefaultValues.length != 0) {
        approvedDefaultValues = [approvedDefaultValues[0]]
    }

    const initialState: SelectTypes.State = {
        selectedOptions: approvedDefaultValues,
        availableOptions: getAvailableOptions(
            options,
            approvedDefaultValues,
            ''
        ),
        underOverlay: false,
        open: false,
        searchValue: '',
        empty: approvedDefaultValues.length === 0,
        cursor: -1
    }

    function reducer(state: SelectTypes.State, action: SelectTypes.Actions) {
        switch (action.type) {
            case 'setSelectedOptions':
                return {
                    ...state,
                    selectedOptions: action.payload,
                    availableOptions: getAvailableOptions(
                        options,
                        action.payload,
                        state.searchValue
                    ),
                    empty: action.payload.length === 0,
                    cursor: -1
                };

            case 'toggleOption':
                nextSelectedOptions = state.selectedOptions;
                if (multiselect) {
                    includeOption(state.selectedOptions, action.payload)
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
                    empty: nextSelectedOptions.length === 0,
                    selectedOptions: nextSelectedOptions,
                    searchValue: '',
                    availableOptions: getAvailableOptions(
                        options,
                        nextSelectedOptions,
                        ''
                    ),
                    cursor: -1
                };

            case 'toggleOpen':
                return {
                    ...state,
                    open: !disabled ? action.payload : false,
                    cursor: -1
                };

            case 'search':
                return {
                    ...state,
                    open: true,
                    searchValue: action.payload,
                    availableOptions: getAvailableOptions(
                        options,
                        state.selectedOptions,
                        action.payload
                    ),
                    cursor: -1
                }

            case 'reduceSelectedOptions':
                nextSelectedOptions = state.selectedOptions.slice(0, -1)
                onChange && onChange(nextSelectedOptions);
                return {
                    ...state,
                    selectedOptions: nextSelectedOptions,
                    availableOptions: getAvailableOptions(
                        options,
                        nextSelectedOptions,
                        state.searchValue
                    ),
                    empty: nextSelectedOptions.length === 0,
                }

            case 'setCursor':
                return {
                    ...state,
                    cursor: action.payload
                }

            case 'clear':
                onChange && onChange([]);
                return {
                    ...state,
                    searchValue: '',
                    selectedOptions: [],
                    availableOptions: options,
                    empty: true,
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

    useEffect(() => {
        if (values.length != 0) {
            dispatch({ type: 'setSelectedOptions', payload: values });
        }
    }, [values])

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
                dispatch({ type: 'toggleOpen', payload: !state.open });
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
                !searchable || !state.searchValue && dispatch({ type: 'reduceSelectedOptions' })
                break;
        }
        props.onKeyDown && props.onKeyDown(event)
    }
    
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
                disabled={disabled}
                placeholder={state.empty ? placeholder : ''}
                searchValue={state.searchValue}
                onSearch={(value) => dispatch({ type: 'search', payload: value })}
                onClose={(option) => dispatch({ type: 'toggleOption', payload: option })}
            />
    }

    if (!multiselect) {
        if (searchable) {
            fieldValue =
                <Search
                    styles={styles}
                    disabled={disabled}
                    placeholder={placeholder}
                    searchValue={state.empty 
                        ? state.searchValue 
                        : state.selectedOptions[0].text
                    }
                    onSearch={(value) => {
                        !state.empty && dispatch({ type: 'clear' })
                        dispatch({ type: 'search', payload: value })
                    }}
                />
        } else if (!state.empty) {
            fieldValue = <span>{state.selectedOptions[0].text}</span>
        }
    }

    return (
        <Drop
            onClickOutside={(e, ot) => {
                ot && dispatch({
                    type: 'toggleOpen',
                    payload: false
                })
            }}
            stretchWidth
            justify='start'
            target={(
                <Field
                    {...props}
                    tabIndex={props.tabIndex || 0}
                    ref={ref}
                    fieldStyles={styles.fieldStyles(state.open)}

                    isEmpty={state.empty}
                    manyLines={multiselect && !state.empty}
                    insideLabelStyles={multiselect && !state.empty && styles.insideLabelStyles}

                    onClick={(e) => {
                        dispatch({ type: 'toggleOpen', payload: true })
                        props.onClick && props.onClick(e);
                    }}
                    onClear={() => dispatch({ type: 'clear' })}
                    onKeyDown={(e) => handleKeyDown(e)}
                    onLabelOverlay={(state) => dispatch({
                        type: 'setOverlay',
                        payload: state
                    })}

                    children={!state.underOverlay && fieldValue}

                    rightChild={(
                        <Icon
                            type={i =>
                                i.filled[state.open ? 'arrowIosUpward' : 'arrowIosDownward']
                            }
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch({ type: 'toggleOpen', payload: !state.open })
                            }}
                        />
                    )}
                />
            )}
        >
            {state.open &&
                <div css={styles.dropMenu}>
                    {state.availableOptions
                        .map((option, i) => (
                            <div
                                key={option.value}
                                css={styles.dropItem(i === state.cursor)}
                                children={option.text}
                                onMouseDown={(e) => {
                                    dispatch({ type: 'toggleOption', payload: option });
                                    dispatch({ type: 'toggleOpen', payload: false })
                                }}
                            />
                        ))}
                </div>
            }
        </Drop>
    )
}

const Options = (props: SelectTypes.OptionsProps ) => {

    const { selected, onClose, styles, searchable, disabled } = props;

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

const Search = (props: SelectTypes.SearchProps) => {
    const { searchValue, onSearch, styles, defaultValue, placeholder, disabled } = props;

    return (
        <input
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            value={searchValue}
            css={styles.input}
            size={props.size}
            autoFocus
            onChange={e => onSearch(e.target.value)}
        />
    )
}

function getAvailableOptions(options: SelectTypes.Option[], selectedOptions: SelectTypes.Option[], search: string) {
    return options.filter(option =>
        !includeOption(selectedOptions, option) &&
        option.text
            .toLocaleUpperCase()
            .includes(search.toLocaleUpperCase())
    )
}

function includeOption(options: SelectTypes.Option[], option: SelectTypes.Option) {
    let includes = false
    options.map(o => {
        if(o.value === option.value) {
            includes = true
        }
    })
    return includes
}
export default forwardRef(Select);
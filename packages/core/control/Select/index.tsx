import React, { forwardRef, useReducer, useRef, Fragment, useImperativeHandle, useEffect } from 'react'
import SelectTypes from './types'
import createStyles from './styles'
import Field from '../../misc/hocs/Field'
import Icon from '../../content/Icon'
import Drop from '../../layout/Drop'
import SelectReducer from './reducer';

const Select = (props: SelectTypes.Props, ref) => {

    const {
        multiselect,
        onChange,
        options = [],
        values,
        defaultValues = [],
        placeholder,
        searchable,
        disabled
    } = props;

    let approvedDefaultValues = defaultValues 
        ? options.filter(option => includeOption(defaultValues, option)) 
        : [];

    if (!multiselect && approvedDefaultValues.length != 0) {
        approvedDefaultValues = [approvedDefaultValues[0]]
    }

    const initialState: SelectTypes.State = {
        selectedOptions: approvedDefaultValues,
        underOverlay: false,
        open: false,
        searchValue: '',
        empty: approvedDefaultValues.length === 0,
        cursor: -1
    }

    const styles = createStyles(props);
    const targetRef = useRef(null);
    const [state, dispatch] = useReducer(SelectReducer, initialState);

    useImperativeHandle(ref, () => {
        return targetRef.current
    });

    useEffect(() => {
        if (values) {
            dispatch({type: 'setSelectedOptions', payload: values})
        }
    }, [values])

    const availableOptions = getAvailableOptions(
        options,
        state.selectedOptions,
        state.searchValue,
    );

    function toggleOpen() {
        if (state.open) {
            dispatch({type: 'toggleOpen', payload: false})
        } else if(!disabled && availableOptions.length != 0) {
            dispatch({type: 'toggleOpen', payload: true})
        }      
    }

    function toggleOption (option: SelectTypes.Option) {
        let nextSelectedOptions = state.selectedOptions;
        if (multiselect) {
            includeOption(state.selectedOptions, option)
                ? nextSelectedOptions = state.selectedOptions.filter(selectedOption =>
                    selectedOption.value != option.value
                )
                : nextSelectedOptions.push(option)
        } else {
            nextSelectedOptions = [option];
        }
        !values && dispatch({type: 'setSelectedOptions', payload: nextSelectedOptions})
        onChange && onChange(([] as any).concat(nextSelectedOptions), option)
    }

    function reduceSelectedOptions () {
        const nextSelectedOptions = state.selectedOptions.slice(0, -1)
        !values && dispatch({type: 'setSelectedOptions', payload: nextSelectedOptions})
        onChange && onChange(([] as any).concat(nextSelectedOptions) as SelectTypes.Option[])
    }

    function clear () {
        !values && dispatch({type: 'clear'})
        onChange && onChange([])
    }
                
    /*
    * Keyboard control
    */
    function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
        switch (event.key) {
            case 'Enter':
                if (state.cursor != -1) {
                    toggleOption(availableOptions[state.cursor]);
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
                state.cursor < availableOptions.length - 1 && dispatch({
                    type: 'setCursor',
                    payload: state.cursor + 1
                })
                break;
            case 'Backspace':
                !searchable || !state.searchValue && reduceSelectedOptions()
                break;
        }
        props.onKeyDown && props.onKeyDown(event)
    }

    function handleSearch (value) {
        dispatch({ type: 'search', payload: value })
        const nextAvailableOptions = getAvailableOptions(
            options,
            state.selectedOptions,
            value,
        );

        if (nextAvailableOptions.length != 0) {
            !state.open && dispatch({ type: 'toggleOpen', payload: true })
        } else {
            state.open && dispatch({ type: 'toggleOpen', payload: false })
        }
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
                onSearch={handleSearch}
                onClose={(option) => toggleOption(option)}
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
                    onSearch={handleSearch}
                />
        } else if (!state.empty) {
            fieldValue = <span>{state.selectedOptions[0].text}</span>
        }
    }

    return (
        <Fragment>
            <Field
                {...props}
                tabIndex={props.tabIndex || 0}
                ref={targetRef}
                fieldStyles={styles.fieldStyles(state.open)}

                isEmpty={state.empty}
                manyLines={multiselect && !state.empty}
                insideLabelStyles={multiselect && !state.empty && styles.insideLabelStyles}

                onClick={(e) => {
                    searchable && e.target.toString() === '[object HTMLInputElement]'
                        ? !state.open && dispatch({ type: 'toggleOpen', payload: true })
                        : toggleOpen()
                    props.onClick && props.onClick(e);
                }}
                onClear={() => clear()}
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
                            toggleOpen()
                        }}
                    />
                )}
            />
            {state.open && 
                <Drop
                    onClickOutside={(e, ot) => {
                        ot && state.open && dispatch({type: 'toggleOpen', payload: false})
                    }}
                    stretchWidth
                    justify='start'
                    target={targetRef}
                >
                    <div css={styles.dropMenu}>
                        {availableOptions
                            .map((option, i) => (
                                <div
                                    key={option.value}
                                    css={styles.dropItem(i === state.cursor)}
                                    children={option.text}
                                    onMouseDown={(e) => {
                                        toggleOption(option);
                                        !multiselect && state.open && dispatch({type: 'toggleOpen', payload: false})
                                    }}
                                />
                            ))}
                    </div>
                </Drop>
            }
        </Fragment>
    )
}

const Options = (props: SelectTypes.OptionsProps ) => {

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
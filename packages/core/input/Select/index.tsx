import React, { useState, useEffect, forwardRef, useRef } from 'react'
import SelectTypes from './types'
import createStyles from './styles'
import Field from '../../misc/hocs/Field'
import Icon from '../../content/Icon'

//TODO: Открывать вариативно вверх или вниз

const Select = (props: SelectTypes.Props, ref) => {

    const { multiselect, onChange, options, values, placeholder } = props
    const [selectedOptions, setSelectedOptions] = useState<SelectTypes.Option[]>([])
    const [underOverlay, setUnderOverlay] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const [serachValue, setSearchValue] = useState<string>('');
    const styles = createStyles(props);

    useEffect(() => {
        setSelectedOptions(values
            ? Array.isArray(values) ? values : [values]
            : []
        );
    }, [values])

    function toggleSelectedOption(option: SelectTypes.Option) {
        let nextSelectedOptions = selectedOptions;

        if (multiselect) {
            selectedOptions.includes(option)
                ? nextSelectedOptions = selectedOptions.filter(selectedOption =>
                    selectedOption.value != option.value
                )
                : nextSelectedOptions.push(option)
        } else {
            nextSelectedOptions = [option];
        }

        onChange && onChange(nextSelectedOptions, option);
        setSelectedOptions(nextSelectedOptions);
    }

    function onSearch(nextSearchValue: string | number) {
        if (nextSearchValue === 8 && serachValue === '') {
            setSelectedOptions(selectedOptions.slice(0, -1));
        }

        if (typeof nextSearchValue != 'number') {
            setOpen(true);
            setSearchValue(nextSearchValue);
        }
    }

    return (
        <Field
            {...props}
            ref={ref}
            isEmpty={selectedOptions.length > 0}
            fieldStyles={styles.fieldStyles(open)}
            onClick={(e) => { setOpen(!open) }}
            onEnter={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
            onLabelOverlay={(state) => setUnderOverlay(state)}
            manyLines={selectedOptions.length > 0 && multiselect}
            insideLabelStyles={selectedOptions.length > 0 && multiselect && props.decoration != 'underline'}
            rightChild={(
                <Icon type={i =>
                    i.filled[open ? 'arrowIosUpward' : 'arrowIosDownward']
                } />
            )}
            onClear={() => {
                setSelectedOptions([]);
                setSearchValue('')
            }}
        >
            {
                !underOverlay && (selectedOptions.length > 0
                    ? multiselect
                        ? <Options
                            selected={selectedOptions}
                            searchValue={serachValue}
                            onSearch={onSearch}
                            onClose={toggleSelectedOption}
                            styles={styles}
                        />
                        : selectedOptions[0] && <span>{selectedOptions[0].text}</span>
                    : <span css={styles.placeholder}>{placeholder}</span>)
            }
            {open && (
                <div css={styles.dropMenu}>
                    {options
                        .filter(option =>
                            !selectedOptions.includes(option) &&
                            option.text
                                .toLocaleUpperCase()
                                .includes(serachValue.toLocaleUpperCase())
                        )
                        .map(option => (
                            <div
                                key={option.value}
                                css={styles.dropItem}
                                children={option.text}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSelectedOption(option);
                                    setOpen(false);
                                }}
                            />
                        ))}
                </div>
            )}
        </Field>
    )
}

const Options = (props: {
    selected: SelectTypes.Option[],
    onClose: (option) => void,
    styles: any,
    searchValue: string,
    onSearch: (searchValue: string | number) => void
}) => {

    const { selected, onClose, styles, searchValue, onSearch } = props;

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
            <input
                value={searchValue}
                css={styles.input}
                size={4}
                onKeyDown={(e) => onSearch(e.keyCode)}
                onChange={e => onSearch(e.target.value)}
            />
        </div>
    )
}

export default forwardRef(Select);
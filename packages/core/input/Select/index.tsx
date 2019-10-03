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
    const [cursor, setCursor] = useState<number>(-1);
    const styles = createStyles(props);

    const availableOptions: SelectTypes.Option[] = options
        .filter(option =>
            !selectedOptions.includes(option) &&
            option.text
                .toLocaleUpperCase()
                .includes(serachValue.toLocaleUpperCase())
        )

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

    function toogleOpen(value?) {
        setOpen(value || !open);
        setCursor(-1);
    }

    function handleSearch(nextSearchValue: string | number) {
        if (nextSearchValue === 8 && serachValue === '') {
            setSelectedOptions(selectedOptions.slice(0, -1));
        }

        if (typeof nextSearchValue != 'number') {
            setOpen(true);
            setSearchValue(nextSearchValue);
        }
        setCursor(-1);
    }

    function handleCursorChange(event: React.KeyboardEvent<HTMLElement>) {
        event.preventDefault();
        if (event.keyCode === 38 && cursor > 0) {
            setCursor(cursor - 1)
        }
        if (event.keyCode === 40 && cursor < availableOptions.length - 1) {
            setCursor(cursor + 1)
        }
    }

    function handleEnterPress() {
        if (cursor != -1) {
            toggleSelectedOption(availableOptions[cursor])
        }
        toogleOpen()
    }

    return (
        <Field
            {...props}
            ref={ref}
            isEmpty={selectedOptions.length > 0}
            fieldStyles={styles.fieldStyles(open)}
            manyLines={selectedOptions.length > 0 && multiselect}
            insideLabelStyles={selectedOptions.length > 0 && multiselect && props.decoration != 'underline'}
            rightChild={(
                <Icon type={i =>
                    i.filled[open ? 'arrowIosUpward' : 'arrowIosDownward']
                } />
            )}
            onClick={() => toogleOpen()}
            onKeyDown={handleCursorChange}
            onEnter={() => handleEnterPress()}
            onBlur={() => toogleOpen(false)}
            onLabelOverlay={(state) => setUnderOverlay(state)}
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
                            onSearch={handleSearch}
                            onClose={toggleSelectedOption}
                            styles={styles}
                        />
                        : selectedOptions[0] && (
                            <span>{selectedOptions[0].text}</span>
                        )
                    : <span css={styles.placeholder}>{placeholder}</span>)
            }
            {open && (
                <div css={styles.dropMenu}>
                    {availableOptions
                        .map((option, i) => (
                            <div
                                key={option.value}
                                css={styles.dropItem(i === cursor)}
                                children={option.text}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSelectedOption(option);
                                    toogleOpen(false)
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
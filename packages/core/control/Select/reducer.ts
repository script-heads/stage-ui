import Types from "./types";

export default (state: Types.State, action: Types.Actions) => {
    switch (action.type) {
        case 'setSelectedOptions':
            return {
                ...state,
                selectedOptions: action.payload,
                empty: action.payload.length === 0,
                searchValue: '',
                cursor: -1
            };

        case 'toggleOpen':
            return {
                ...state,
                open: action.payload,
                cursor: -1
            };

        case 'search':
            return {
                ...state,
                searchValue: action.payload,
                cursor: -1
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
                selectedOptions: [],
                empty: true,
                cursor: -1
            }

        default:
            throw new Error();
    }
}
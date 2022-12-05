const initialState = {
    filters: [],
    curentFilterHeroes: 'all'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SPEND_FILTERS_HEROES':
            return {
                ...state,
                filters: action.payload
            }
        case 'CURENT_FILTER_HIROES':
            return {
                ...state,
                curentFilterHeroes: action.payload
            }

        default: return state
    }
}

export default filters;
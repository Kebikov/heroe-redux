const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    curentFilterHeroes: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_DELETE':
            let arrHeroes = state.heroes.filter(item => item.id !== action.payload);
            return {
                ...state,
                heroes: arrHeroes
            }
        case 'HEROES_ADD_NEW':
            return {
                ...state,
                heroes: action.payload
            }
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

export default reducer;
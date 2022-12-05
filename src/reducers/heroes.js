const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = (state = initialState, action) => {
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

        default: return state
    }
}

export default heroes;
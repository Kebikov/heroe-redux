
export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesDelete = (arr) => {
    return {
        type: 'HEROES_DELETE',
        payload: arr
    }
}

export const heroesAdd = (arr) => {
    return {
        type: 'HEROES_ADD_NEW',
        payload: arr
    }
}

export const spendFiltersHeroes = (filters) => {
    return {
        type: 'SPEND_FILTERS_HEROES',
        payload: filters
    }
}

export const curentFilterHeroes = (currentFilter) => {
        return {
            type: 'CURENT_FILTER_HIROES',
            payload: currentFilter 
        }
}

export const fetchHeroes = (request) => (dispatch) => {
    dispatch('HEROES_FETCHING');
    request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()));
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(heroesFetching);
    request("http://localhost:3001/filters")
        .then(data => dispatch(spendFiltersHeroes(data)))
        .catch(() => dispatch(heroesFetchingError()));
}

import { createAction } from "@reduxjs/toolkit";
import { heroesFetched, heroesFetchingError, heroesFetching } from '../components/heroesList/heroesSlice';

export const spendFiltersHeroes = createAction('SPEND_FILTERS_HEROES');

export const curentFilterHeroes = createAction('CURENT_FILTER_HIROES');

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


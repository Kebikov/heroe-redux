import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroesFetching: state => {
            state.heroesLoadingStatus = 'loading'
        },
        heroesFetched: (state, action) => {
            state.heroes = action.payload;
            state.heroesLoadingStatus = 'idle';
        },
        heroesFetchingError: state => {
            state.heroesLoadingStatus = 'error';
        },
        heroesDelete: (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        },
        heroesAdd: (state, action) => {
            state.heroes = action.payload
        },
        heroesTest: {
            reducer: (state, action) => {
                state.test = action.payload;
            },
            prepare: (text) => {
                const id = 'Vasia';
                return { payload: [id, text]}
            }
        }
    }
});

const {actions, reducer} = heroesSlice;

export default reducer;
export const {
    heroesFetching, 
    heroesFetched, 
    heroesFetchingError, 
    heroesDelete, 
    heroesAdd,
    heroesTest
} = actions;





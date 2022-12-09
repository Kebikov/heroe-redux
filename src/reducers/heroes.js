// import { createReducer } from "@reduxjs/toolkit";
// import {
//     heroesFetching,
//     heroesFetched,
//     heroesFetchingError,
//     heroesDelete,
//     heroesAdd
// } from '../actions/index.js';

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }

// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading';
//         })
//         .addCase(heroesFetched, (state, action) => {
//             state.heroes = action.payload;
//             state.heroesLoadingStatus = 'idle';
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error';
//         })
//         .addCase(heroesDelete, (state, action) => {
//             state.heroes = state.heroes.filter(item => item.id !== action.payload);
//         })
//         .addCase(heroesAdd, (state, action) => {
//             state.heroes = action.payload
//         })
//         .addDefaultCase(() => {});
// });
// //builder обьект который помогает строить reducer при помоши трех встроеных методов
// //встроеный функционал toolkit все сделает за нас для соблюдения имутабельности

// // const heroes = (state = initialState, action) => {
// //     switch (action.type) {
// //         case 'HEROES_FETCHING':
// //             return {
// //                 ...state,
// //                 heroesLoadingStatus: 'loading'
// //             }
// //         case 'HEROES_FETCHED':
// //             return {
// //                 ...state,
// //                 heroes: action.payload,
// //                 heroesLoadingStatus: 'idle'
// //             }
// //         case 'HEROES_FETCHING_ERROR':
// //             return {
// //                 ...state,
// //                 heroesLoadingStatus: 'error'
// //             }
// //         case 'HEROES_DELETE':
// //             let arrHeroes = state.heroes.filter(item => item.id !== action.payload);
// //             return {
// //                 ...state,
// //                 heroes: arrHeroes
// //             }
// //         case 'HEROES_ADD_NEW':
// //             return {
// //                 ...state,
// //                 heroes: action.payload
// //             }

// //         default: return state
// //     }
// // }

// export default heroes;
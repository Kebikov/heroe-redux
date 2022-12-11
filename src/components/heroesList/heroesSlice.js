import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

export const  fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/heroes");
    }
);
//тип действия в формате имя среза/тип действия
//эта функция вернет promis(т.е. асинхронный код)
//передаем в extraReducers

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        // heroesFetching: state => {
        //     state.heroesLoadingStatus = 'loading'
        // },
        // heroesFetched: (state, action) => {
        //     state.heroes = action.payload;
        //     state.heroesLoadingStatus = 'idle';
        // },
        // heroesFetchingError: state => {
        //     state.heroesLoadingStatus = 'error';
        // },
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => {
                    state.heroesLoadingStatus = 'loading'
                })
            .addCase(fetchHeroes.fulfilled,  (state, action) => {
                console.log('11111',action.payload);
                state.heroes = action.payload;
                state.heroesLoadingStatus = 'idle';
            })
            .addCase(fetchHeroes.rejected, state => {
                state.heroesLoadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    }
});
//как и в createReducer у обьекта builder есть три метода: addCase/addDefaultCase/addMatcher
//pending -когда запрос только формируются
//fulfilled - асинхронная операция выполнилась успешно
//rejected - произошла ошибка
//данные из fetchHeroes автоматически попадут в payload


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





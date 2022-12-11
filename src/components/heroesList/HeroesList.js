import { useHttp } from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { fetchFilters } from '../../actions';
import { fetchHeroes } from './heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

const HeroesList = () => {
    useEffect(() => {
        dispatch(fetchHeroes());
        dispatch(fetchFilters(request));
    }, []);

    //* code 
    const createfilterHeroes = createSelector(
        (state) => state.filters.curentFilterHeroes,
        (state) => state.heroes.heroesLoadingStatus,
        (state) => state.heroes.heroes,
        (curentFilterHeroes, heroesLoadingStatus, heroesAll) => {
            if(curentFilterHeroes === 'all') {
                let heroes = heroesAll;
                return {curentFilterHeroes, heroesLoadingStatus, heroes};
            }else{
                let heroes = heroesAll.filter(item => item.element === curentFilterHeroes);
                return {curentFilterHeroes, heroesLoadingStatus, heroes};
            }
        }
    )
    const filterHeroes = useSelector(createfilterHeroes);
    const {heroesLoadingStatus, heroes} = filterHeroes;

    const dispatch = useDispatch();
    const {request} = useHttp();

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem key={id} id={id} {...props}/>
        });
    }

    const elements = renderHeroesList(heroes);

    //* return 
    return (
        <ul>
            {console.log('render')}
            {elements.length === 0 ? <h5 className="text-center mt-5">Героев пока нет</h5> : elements}
        </ul>
    )
}

export default HeroesList;


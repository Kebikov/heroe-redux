
//= Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО! Представьте, что вы попросили бэкенд-разработчика об этом
import { useSelector, useDispatch } from 'react-redux';
import { curentFilterHeroes } from '../../actions/index';
import { useState } from 'react';

const HeroesFilters = () => {
    const state = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const [activeButton, setActiveButton] = useState('all');

    //* code 
    const filter = (value) => {
        setActiveButton(value);
        dispatch(curentFilterHeroes(value));
    }

    const items = state.filters.map((item, i) => {
        let style;
        switch(item.value) {
            case 'all':
                style = 'btn btn-outline-dark';
                break;
            case 'fire':
                style = 'btn btn-danger';
                break;
            case 'water':
                style = 'btn btn-primary';
                break;
            case 'wind':
                style = 'btn btn-success';
                break;
            case 'earth':
                style = 'btn btn-secondary';
                break;

            default: style = 'btn btn-outline-dark';
        }
        return (
            <button onClick={() => filter(item.value)} className={activeButton === item.value ? style + ' active' : style} key={i}>{item.textRu}</button>
        )
    });

    //* return 
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {items}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;
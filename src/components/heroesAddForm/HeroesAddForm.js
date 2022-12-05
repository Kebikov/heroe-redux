import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';
import { heroesAdd, heroesFetchingError } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';

//= Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid

//= Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе данных из фильтров

const HeroesAddForm = () => {
    const formRef = useRef(null);
    const filters = useSelector(state => state.filters.filters);
    const heroes = useSelector(state => state.heroes.heroes);
    const dispatch = useDispatch();
    const { request } = useHttp();

    //* code 
    const submitForm = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);
        const newHeroes = {};
        formData.forEach((value, key) => {
            newHeroes[key] = value;
        });
        newHeroes.id = uuidv4();
        let arr = [...heroes, newHeroes];
        dispatch(heroesAdd(arr));

        request(`http://localhost:3001/heroes`, 'POST', JSON.stringify(newHeroes))
            .then(data => form.reset())
            .catch(() => dispatch(heroesFetchingError()));
        
    }

    const filterOption = filters.filter(item => item.value !== 'all');

    const optionHeroes =  filterOption.map(item => {
        let i = uuidv4();
        return  <option value={item.value} key={i}>{item.textRu}</option>
    });

    //* return 
    return (
        <form className="border p-4 shadow-lg rounded" ref={formRef}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element">
                    <option >Я владею элементом...</option>
                    {optionHeroes}
                </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick={submitForm}>Создать</button>
        </form>
    )
}

export default HeroesAddForm;
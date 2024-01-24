import React, { useState, useEffect } from 'react'
import useFetch from './useFetch'
import { MonsterCardComponent } from './MonsterCardComponent';
import './MonsterCardCSS.css'


export const HomeComponent = () => {

    const { data } = useFetch('https://jsonplaceholder.typicode.com/users');
    const [filtered, setFiltered] = useState(data);
    const [searchMonster, setSearchMonster] = useState('');

    useEffect(() => {
        const fetchData = async () => {
 
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
          
            const filteredData = data.filter((monster) =>
                monster.name.toLowerCase().includes(searchMonster.toLowerCase())
            );

            setFiltered(filteredData);
        };

        fetchData();
        
    }, [searchMonster]); // Използване на searchMonster като зависимост, за да следим промените в него

    const handleChange = (e) => {
        setSearchMonster(e.target.value);
    };

    return (
        <div className="home-component">
            <h1>Monsters Rolodex</h1>
            <input type="search"
                className='search-box'
                placeholder='search monster'
                onChange={handleChange}
            />
            {filtered && <MonsterCardComponent data={filtered} />}
        </div>

    )
}

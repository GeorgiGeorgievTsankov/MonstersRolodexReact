import React, { useState, useEffect } from 'react'
import { MonsterCardComponent } from './MonsterCardComponent';
import './MonsterCardCSS.css'


export const HomeComponent = () => {

    const [filtered, setFiltered] = useState([]);
    const [searchMonster, setSearchMonster] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setFiltered(users))
    }, []);



    const handleChange = (e) => {
        const searchString = e.target.value.toLowerCase()
        setSearchMonster(searchString);
    };


    const filteredData = filtered.filter((monster) => {
        return monster.name.toLowerCase().includes(searchMonster.toLowerCase())

    });

   


    return (
        <div className="home-component">
            <h1>Monsters Rolodex</h1>
            <input type="search"
                className='search-box'
                placeholder='search monster'
                onChange={handleChange}
            />
            <MonsterCardComponent data={filteredData} />
        </div>

    )
}

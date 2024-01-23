import React, { useState } from 'react'
import useFetch from './useFetch'
import { MonsterCardComponent } from './MonsterCardComponent';
import './MonsterCardCSS.css'


export const HomeComponent = () => {

    const { data } = useFetch('https://jsonplaceholder.typicode.com/users');

    const [filtered, setFiltered] = useState(data)

    return (
        <div className="home-component">
            <h1>Monsters Rolodex</h1>
            <input type="search"
                className='search-box'
                placeholder='search monster'
                onChange={(e) => {
                    const searchMonster = e.target.value.toLocaleLowerCase()
                    console.log(searchMonster);

                    const filteredData = data.filter((monster) => {
                        return monster.name.toLocaleLowerCase().includes(searchMonster);
                        
                    })

                    setFiltered(filteredData);
                  
                    
                }}
            />
            {filtered && <MonsterCardComponent data={filtered} />}
        </div>

    )
}

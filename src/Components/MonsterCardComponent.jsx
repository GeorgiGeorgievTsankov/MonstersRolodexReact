import React from 'react'


export const MonsterCardComponent = ({ data }) => {


    return (
        <div className="card-component">
            {data.map((monster) => (
                <div className="card" key={monster.id}>
                    <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}  />
                    <h1>{monster.name}</h1>
                    <p>{monster.email}</p>
                </div>
            ))}
        </div>
    )
}

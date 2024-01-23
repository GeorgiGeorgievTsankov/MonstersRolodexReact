import React from 'react'


export const MonsterCardComponent = ({ data }) => {


    return (
        <div className="card-component">
            {data.map((monster) => (
                <div className="card" key={monster.id}>
                    <h1>{monster.name}</h1>
                    <p>{monster.email}</p>
                </div>
            ))}
        </div>
    )
}

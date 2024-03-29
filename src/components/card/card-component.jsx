import React from 'react'
import "./card.styles.css"
export const Card = (props) => {
  return (
    <div className='card-container'>
        <img className = "card-container-img"src={`https://robohash.org/${props.monsters.id}?set=set2`} alt="monsters"/>
        <h2>{props.monsters.name}</h2>
        <p>{props.monsters.email}</p>
    </div>
  )
}

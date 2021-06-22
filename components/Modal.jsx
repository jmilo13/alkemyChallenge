import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

export default function Modal (props) {
  const { isOn, data } = props
    const { name, image, powerstats, biography, appearance, work} = data
    const { alignment, aliases} = biography
    const { combat, durability, intelligence, power, speed, strength } = powerstats
    const physical = Object.values(appearance)
    console.log(physical)
    console.log((physical[2])[1])
    const element = (
      
        
      <section className="details-section">
        <div className="details-section__container">
          <div className="details-section__header">
            <h2 className="details-section__name">{name}</h2>
            <p className="details-section__alignment">{alignment}</p>
          </div>
          <div>
            <img className="details-section__image" src={image.url} alt={name}></img>
          </div>
        <div>
          <h3>Habilidades</h3>
          <ul className="details-section__skills">
            <li>Combate: {combat}</li>
            <li>Durabilidad: {durability}</li>
            <li>Inteligencia: {intelligence}</li>
            <li>Poder: {power}</li>
            <li>Velocidad: {speed}</li>
            <li>Fuerza: {strength}</li>
          </ul>
        </div>
        <div>
          <h3>Características</h3>
          <ul>
            <li>Altura: {(physical[2])[1]}</li>
            <li>Peso: {(physical[3])[1]}</li>
            <li>Color de ojos: {physical[4]}</li>
            <li>Color de cabello: {physical[5]}</li>
            <li>Trabajo: {work.occupation}</li>
            <li>Alias: <ul>{aliases.map((item)=> <li key={item}>{item}</li>)}</ul></li>
          </ul>
        </div>
      </div>
      <style jsx>
          {`
          .details-section{
            width: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #000;
          }
          .details-section__container{
            display: flex;
            height: fit-content;
            flex-wrap: wrap;
            max-width: 30rem;
            padding: 1rem;
            border: solid 1px;
            background: #fff;
          }
          .details-section__header{
            width: 100%;
            text-align: center;
          }
          .details-section__container ul{
            padding-left: 1rem;
            list-style: none;
          }
          .details-section__image{
            width: 10rem;
          }
          .details-section::after{
            
          }
          `}
        </style>
      </section>
    )
    const lugar = document.querySelector('#modal-root')
    return isOn === true && ReactDOM.createPortal(element, lugar)
  }
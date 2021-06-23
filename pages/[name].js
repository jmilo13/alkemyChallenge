import React, { useContext } from 'react'
import TeamContext from '@context/TeamContext'
import { Button } from 'react-bootstrap'

export default function Details () {
    const context = useContext(TeamContext)
    console.log(context.item)

    const { name, image, powerstats, biography, appearance, work} = context.item
    const { alignment, aliases} = biography
    const { combat, durability, intelligence, power, speed, strength } = powerstats
    const physical = Object.values(appearance)

    return  ( 
    <section className="details-section">
        <div className="details-section__container">
            <div className="details-section__header">
                <h2 className="details-section__name">{name}</h2>
                <p className="details-section__alignment">{alignment === 'bad'? 'Villano' : 'Héroe'}</p>
                {context.team===true ? <Button variant="danger">Eliminar</Button> :
                <Button variant="primary">Agregar</Button>}
            </div>
            <img className="details-section__image" src={image.url} alt={name}></img>
            <div className="details-section__skills">
                <h3>Habilidades</h3>
                <ul>
                    <li><img src="/icons/swords.svg"/><span>Combate:</span> {combat}</li>
                    <li><img src="/icons/shield.svg"/><span>Resistencia:</span> {durability}</li>
                    <li><img src="/icons/thinking.svg"/><span>Inteligencia:</span> {intelligence}</li>
                    <li><img src="/icons/power.svg"/><span>Poder:</span> {power}</li>
                    <li><img src="/icons/speed.svg"/><span>Velocidad:</span> {speed}</li>
                    <li><img src="/icons/strength.svg"/><span>Fuerza:</span> {strength}</li>
                </ul>
            </div>
            <div className="details-section__features">
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
                display: flex;
                min.height: 100%;
                padding: 1rem;
                justify-content: center;
                align-items: center;
                margin-left: 3rem;
                background: url('/images/heroesYVillanos.jpg') center;
            }
            .details-section::before{
                position: absolute;
                content: "";
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgb(0 0 0 / 25%);
            }
            .details-section__container{
                position: relative;
                display: flex;
                height: fit-content;
                flex-wrap: wrap;
                justify-content: space-evenly;
                align-items: flex-start;
                max-width: 90%;
                padding: 1rem;
                border: solid 1px;
                border-radius: 1rem;
                color: #fffdfd;
                border-radius: 1rem;
                box-shadow: 0 0 7px 0px;
            }
            .details-section__container::before{
                position: absolute;
                content: "";
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgb(0 0 0 / 40%);
                backdrop-filter: blur(5px);
                border-radius: 1rem;
            }
            .details-section__header{
                width: 100%;
                text-align: center;
                z-index: 1;
            }
            .details-section__container ul{
                padding-left: 1.5rem;
            }
            .details-section__image{
                width: 10rem;
                margin: 1rem 0 1rem 0;
                z-index: 1;
            }
            .details-section__skills, .details-section__features{
                width: 15rem;
                padding: 1rem;
                z-index: 1;
            }
            .details-section__skills{
                border-top: solid 1px;
                border-bottom: solid 1px;

            }
            .details-section__skills ul{
                list-style: none;
                padding: 0;
            }
            .details-section__skills img{
                max-width: 25px;
            }
            @media (min-width: 530px) {
            .details-section__skills{
                border: none;
                }
            .details-section__features{
                border-top: solid 1px
            }
            }
            @media (min-width: 800px) {
            .details-section__skills{
                border-left: solid 1px;
            }
            .details-section__features{
                border-top: none;
                border-left: solid 1px
            }
            
            }
            `}
        </style>
  </section>
    )
}
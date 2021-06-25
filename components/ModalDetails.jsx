import React, { useContext, useState } from 'react'
import TeamContext from '@context/TeamContext'
import ReactDOM from 'react-dom'
import ButtomTeamContainer from '@components/ButtonTeamContainer'
import {Alert } from 'react-bootstrap'

export default function Details (props) {

    const [error, setError ] = useState(false)
    const context = useContext(TeamContext)
    const {isOn, setIsOn } = props
    console.log(isOn)

    const handleClick = (e) => {
        setIsOn(false)
        e.stopPropagation(e)
    }

    const { id, name, image, powerstats, biography, appearance, work} = context.item
    const { alignment, aliases} = biography
    const { combat, durability, intelligence, power, speed, strength } = powerstats
    const physical = Object.values(appearance)
    const element =  ( 
    <section className="details-section">
        
        <div className="details-section__container">
        <button className= "details-section__close-button" onClick={handleClick}></button>
            <div className="details-section__header">
                <div>
                <h2 className="details-section__name">{name}</h2>
                <p className="details-section__alignment">{alignment === 'bad'? 'Villano' : 'Héroe'}</p>
                </div>
                <ButtomTeamContainer setError={setError} component='team' id={id} data={context.item} type={context.team.length > 0 && context.team.includes(context.item) ? 'remove' : 'add'}/>  
            </div>
            <img className="details-section__image" src={image.url} alt={name}></img>
            <div className="details-section__skills">
                <h3>Habilidades</h3>
                <ul>
                    <li><img src="/icons/combat.svg"/><span>Combate:</span> {combat}</li>
                    <li><img src="/icons/durability.svg"/><span>Resistencia:</span> {durability}</li>
                    <li><img src="/icons/intelligence.svg"/><span>Inteligencia:</span> {intelligence}</li>
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
            {error&&
                <Alert variant="danger" onClose={() => setError(false)} dismissible>
                <Alert.Heading>No puedes agregarlo</Alert.Heading>
                <p>
                    Recuerda: Equipo de máximo seis (tres heroes y tres villanos). No puedes repetir.
                </p>
                </Alert>
            } 
        </div>
        <style jsx>
            {`
            .details-section{
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                height: 100vh;
                padding: 1rem;
                justify-content: center;
                margin-left: 3rem;

            }
            .details-section::before{
                position: fixed;
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
                max-height: 95vh;
                overflow: auto;
                background: rgb(0 0 0 / 77%);
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
            .details-section__close-button{
                position: absolute;
                width: 1rem;
                height: 1rem;
                right: 1rem;
                border: none;
                background: url('/icons/close.svg') center/cover no-repeat;
                z-index:2
            }
            .details-section__header{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
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
            @media (min-width: 565px) {
            .details-section__skills{
                border: none;
                }
            .details-section__features{
                border-top: solid 1px
            }
            .details-section__container{
                height: fit-content;
                overflow: hidden;
                background: none;
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
    const lugar = document.querySelector('#modal-root')
    return isOn === true && ReactDOM.createPortal(element, lugar)
}
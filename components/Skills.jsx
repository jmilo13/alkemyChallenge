import React, { useContext } from 'react'
import TeamContext from '@context/TeamContext'



export default function Features () {
    const context = useContext(TeamContext)
    const getTotal = (skill) => {
        return (context.team.map((element) => parseInt(element.powerstats[skill]))).reduce((acumulator, element) => acumulator + element)
    }
    return (
        <section className="characters">
            <h1>Habilidades del equipo</h1>
            <ul>
            <li><img src="/icons/swords.svg"/><span>Combate:</span> {getTotal('combat')}</li>
                    <li><img src="/icons/shield.svg"/><span>Resistencia:</span> {getTotal('durability')}</li>
                    <li><img src="/icons/thinking.svg"/><span>Inteligencia:</span> {getTotal('intelligence')}</li>
                    <li><img src="/icons/power.svg"/><span>Poder:</span> {getTotal('power')}</li>
                    <li><img src="/icons/speed.svg"/><span>Velocidad:</span> {getTotal('speed')}</li>
                    <li><img src="/icons/strength.svg"/><span>Fuerza:</span> {getTotal('strength')}</li>
            </ul>
            <style jsx>
                {`
                .characters{
                    color: #fff;
                    background: #000;
                }
                .characters img{
                    max-width: 2rem;
                    margin-right: 0.5rem
                }
                .characters ul{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    list-style: none;
                }
                .characters li{
                    min-width: 10rem;
                    text-align: left;
                }
                `}
            </style>
        </section>
    ) 
}
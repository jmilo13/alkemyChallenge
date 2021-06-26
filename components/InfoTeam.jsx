import React, { useContext, useEffect, useState } from 'react'
import TeamContext from '@context/TeamContext'

export default function InfoTeam () {
    const [principal, setPrincipal] = useState('')
    const totalSkill = []
    let maxSkill 
    const context = useContext(TeamContext)
    const getTotal = (type, skill, value) => {
        if(value){
            const total = ((context.team.map((element) => parseInt(element[type][skill][value]))).reduce((acumulator, element) => acumulator + element))/context.team.length 
            return total.toFixed(1)
        }else{    
            const total = ((context.team.map((element) => isNaN(element[type][skill]) ? 0 : parseInt(element[type][skill]))).reduce((acumulator, element) => acumulator + element))/context.team.length 
            totalSkill.push({[skill]: total})
            return total.toFixed(1)    
        }
    }

    useEffect(() => {
        maxSkill = totalSkill.reduce((prev, curr) => {
            return Object.values(prev)[0] > Object.values(curr)[0] ? prev : curr
        })
        setPrincipal(Object.keys(maxSkill)[0])
    },)
    
    return (
        <section className="characters">
            <div className="characters__container-header">
                <h1 className="characters__title">Tu equipo</h1>
                <img className="characters__principal-skill" src={`/icons/${principal}.svg`} alt={principal}/>
            </div>
    
            <div className="characters__container">
                <h2>Habilidades</h2>
                <ul>
                    <li><img src="/icons/combat.svg" alt=""/><span>Combate:</span> {getTotal('powerstats', 'combat')}</li>
                    <li><img src="/icons/durability.svg" alt=""/><span>Resistencia:</span> {getTotal('powerstats', 'durability')}</li>
                    <li><img src="/icons/intelligence.svg" alt=""/><span>Inteligencia:</span> {getTotal('powerstats', 'intelligence')}</li>
                    <li><img src="/icons/power.svg" alt=""/><span>Poder:</span> {getTotal('powerstats', 'power')}</li>
                    <li><img src="/icons/speed.svg" alt=""/><span>Velocidad:</span> {getTotal('powerstats', 'speed')}</li>
                    <li><img src="/icons/strength.svg" alt=""/><span>Fuerza:</span> {getTotal('powerstats', 'strength')}</li>
                </ul>
            </div>
            <div className="characters__container">
            <h2>Características</h2>
                <ul>
                    <li><img src="/icons/weight.svg" alt=""/><span>Peso:</span> {getTotal('appearance', 'weight', 1)}</li>
                    <li><img src="/icons/height.svg" alt=""/><span>Altura:</span> {getTotal('appearance', 'height', 1)}</li>
                </ul>
            </div>
            <style jsx>
                {`
                .characters{
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    width: 100%;
                    padding: 1rem;
                    color: #fff;
                    border-radius: 1rem;
                    background: #1F618D;
                }
                .characters__container-header{
                    width: 100%;
                    margin-bottom: 1rem;
                    padding-bottom: 1rem;
                    border-bottom: solid 1px #fff
                }
                .characters__principal-skill{
                    max-width: 3rem;
                    padding: 0.5rem;
                    background: #007bff;
                    border-radius: 50%
                }
                .characters__container{
                    max-width: 26rem;
                }
                .characters__container img{
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
                    margin: 0.5rem 0;
                    text-align: left;
                }
                `}
            </style>
        </section>
    ) 
}
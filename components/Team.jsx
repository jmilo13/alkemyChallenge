import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TeamList from './TeamList'

export default function Team () {
    const [team, setTeam] = useState([])

    useEffect(async () => {
        console.log('funciona el useEffect')  
        const api = 'https://rickandmortyapi.com/api/character'
        const response = await axios.get(api)
        setTeam(response.data.results)
    },[])
    console.log(team)
    return (
        <section className="team-section">
            <h1>Tu equipo</h1>
            {team? <div className="team-section__container"><TeamList data={team}/></div> 
            : <h3>No tienes miembros en tu equipo, busca algunos y súmalos.</h3>
            }
            <style jsx>
                {`
                .team-section{
                    padding: 2rem 1rem;
                    text-align: center;
                }
                .team-section__container{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                `}
            </style>
        </section>
    ) 
}
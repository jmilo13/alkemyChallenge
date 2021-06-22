import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './List'
import Features from '@components/Features'

export default function Team () {
    const [team, setTeam] = useState([])

    useEffect(async () => {
        const api = 'http://localhost:3000/api/team'
        const response = await axios.get(api)
        setTeam(response.data.data)
    },[])
    return (

        <section className="team-section">
            <h1>Tu equipo</h1>
            {team? <div className="team-section__container">
                    <List data={team} component="team"/>
                    <Features/>
                    </div> 
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
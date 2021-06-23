import React, { useContext, useEffect } from 'react'
import List from './List'
import Skills from '@components/Skills'
import TeamContext from '@context/TeamContext'

export default function Team() {
    const context = useContext(TeamContext)
    console.log(context.team)

    useEffect(async () => {
        const local = JSON.parse(localStorage.getItem('team'))
        context.setTeam(local)
    }, [])
    return (

        <section className="team-section">
            <h1>Tu equipo</h1>
            {context.team.length > 0? <div className="team-section__container">
                <List data={context.team} component="team" />
                <Skills />
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
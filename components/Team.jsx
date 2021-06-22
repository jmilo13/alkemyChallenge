import React, { useContext, useEffect } from 'react'
import List from './List'
import Features from '@components/Features'
import ItemContext from '@context/ItemContext'

export default function Team() {
    const context = useContext(ItemContext)

    useEffect(async () => {
        const local = JSON.parse(localStorage.getItem('team'))
        context.setTeam(local)
    }, [])
    return (

        <section className="team-section">
            <h1>Tu equipo</h1>
            {context.team ? <div className="team-section__container">
                <List data={context.team} component="team" />
                <Features />
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
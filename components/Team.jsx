import React, { useContext, useEffect } from 'react'
import List from './List'
import InfoTeam from '@components/InfoTeam'
import TeamContext from '@context/TeamContext'

export default function Team() {
    const context = useContext(TeamContext)

    useEffect(async () => {
        if(localStorage.getItem('team')===null){
            return console.log('no hay nada en local')
        }
        const local = JSON.parse(localStorage.getItem('team'))
        context.setTeam(local)
    }, [])
    return (

        <section className="team-section">
            {context.team.length > 0? <div className="team-section__container">
                <InfoTeam />
                <List data={context.team} component="team" />
            </div>
                : <React.Fragment> 
                    <h4>No tienes miembros en tu equipo, busca algunos y súmalos</h4>
                    <p>Son máximo seis (tres heroes y tres villanos) No puedes repetirlos</p>
                </React.Fragment>
            }
            <style jsx>
                {`
                .team-section{
                    padding: 2rem;
                    text-align: center;
                }
                .team-section__container{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    max-width: 63rem;
                    margin: auto;
                }
                `}
            </style>
        </section>
    )
}
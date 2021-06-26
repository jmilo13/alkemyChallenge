import React, { useContext } from 'react'
import SearchForm from '@components/SearchForm'
import Welcome from '@components/welcomeSection'
import Team from '@components/Team'
import UserContext from '@context/UserContext'
import TeamContext from '@context/TeamContext'

export default function Home() {
    const context = useContext(UserContext)
    const teamContext = useContext(TeamContext)

    if (context.token) {
        return (
            <React.Fragment>
                <main>
                    <SearchForm />
                    <Team />
                    
                </main>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                {teamContext.team.leangth === undefined & context.token != undefined ? <div className="loading"><img src="/images/loading.gif"/></div> : <Welcome />}
                <style jsx>
                    {`
                    .loading{
                        position: absolute;
                        display: flex;
                        justify-content: center;
                        align-items :center;
                        top:0;
                        bottom: 0;
                        left: 3rem;
                        right: 0;
                    }
                    .loading img{
                        width: 10rem;
                    }
                    `}
                </style>
            </React.Fragment>
        )
    }
}
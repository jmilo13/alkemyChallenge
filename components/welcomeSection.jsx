import React from 'react'
import Login from '../components/Login'

export default function Welcome () {
    return (
        <main className="welcome-page">
            <section className="welcome-page__container">
                <div className="welcome-page__description">
                    <h1>Bienvenido</h1>
                    <p>Puedes armar tu equipo con los héroes y villanos que quieras</p>
                    <Login />
                </div>
            </section>
            <style jsx>
                {`
                .welcome-page{
                display: flex;
                position: relative;
                width: 100vw;
                height: 100vh;
                margin: 0;
                background: url('/images/heroesYVillanos.jpg') center;
                }
                .welcome-page::before{
                position: absolute;
                content: "";
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgb(0 0 0 / 25%);
                }
                .welcome-page__container{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 90%;
                margin: auto;
                padding: 2rem;
                color: #fffdfd;
                max-width: 30rem;
                border-radius: 1rem;
                text-align: center;
                box-shadow: 0 0 7px 0px;
                }
                .welcome-page__container::before{
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
                .welcome-page__description{
                position: relative;
                }
                `}
            </style>
        </main>
    )
}
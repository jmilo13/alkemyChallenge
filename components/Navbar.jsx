import React from 'react'


export default function Navbar () {
    return (
        <header className='header'>
            <div className="header__logo"></div>
            <nav className="header__nav">
                <button className="header__login-button"></button>
            </nav>
            <style jsx>
                {`
                .header {
                position: fixed;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                top: 0;
                bottom: 0;
                width: 3.2rem;
                padding: 1rem 0;
                background: #2e4053;
                }
                .header__nav {
                display: flex;
                align-items: flex-end;
                }
                .header__logo {
                display: flex;
                color: #fff;
                font-size: 2.5rem;
                width: fit-content;
                align-items: flex-start;
                justify-content: center;
                }
                .header__login-button {
                padding: 0.5rem;
                }
                `}
            </style>
        </header> 
    )
}

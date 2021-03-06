import React, {useContext} from 'react'
import UserContext from '@context/UserContext'

export default function Navbar ({children}) {
    const context = useContext(UserContext)

    const handleClick = () => {
        localStorage.removeItem('token')
        context.setToken(null)       
    }
    
    return (
        <header className='header'>
            <div className="header__logo">
                <img src="./images/logo.png" alt="logo"/>
            </div>
            <nav className="header__nav">
                <button className="header__login-button" onClick={handleClick}></button>
            </nav>
            {children}
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
                    background-color: #2e4053;
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
                    padding: 0.3rem;
                    align-items: flex-start;
                    justify-content: center;
                }
                .header__logo img{
                    width: 100%;
                }
                .header__login-button {
                    position: relative;
                    width: 2rem;
                    height: 2rem;
                    padding: 0.5rem;
                    background: url('/icons/exit.svg') center/cover no-repeat;
                    border: none;
                    transition: all 0.5s;
                }
                .header__login-button:hover:after {
                    content: 'Cerrar sesi??n';
                    position: absolute;
                    left: 3rem;
                    top: 0;
                    width: 8em;
                    background-color: #2e4053;
                    color: #fff;
                    border-radius: 0.3rem;  
                }
                `}
            </style>
        </header> 
    )
}

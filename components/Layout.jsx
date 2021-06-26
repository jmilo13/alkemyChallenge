import React from 'react'
import Navbar from './Navbar'

export default function Layout ({children}) {
    return (
        <React.Fragment>
            <header>
                <Navbar/>
            </header>
            {children}
        </React.Fragment>
    )
}
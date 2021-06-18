import React, {useContext} from 'react'
import SearchForm from '../components/SearchForm'
import Navbar from '../components/Navbar'
import Welcom from '../components/welcomeSection'
import UserContext from '../context/UserContext'


export default function Home () {  
    const context = useContext(UserContext)
    if(context.token) { return (
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <SearchForm/>
            </main>
        </React.Fragment>
    )
    }
    else{ return (
        <Welcom />
    )}
}
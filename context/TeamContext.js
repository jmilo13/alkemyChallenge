import React, { useState } from 'react'

const TeamContext = React.createContext({})

export function TeamContextProvider ({children}) {
    const [item, setItem] = useState('')
    const [team, setTeam] = useState([])
    return  <TeamContext.Provider value={{item, setItem, team, setTeam}}>
        {children}
    </TeamContext.Provider>

}

export default TeamContext
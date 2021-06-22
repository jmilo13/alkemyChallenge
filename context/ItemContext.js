import React, { useState } from 'react'

const ItemContext = React.createContext({})

export function ItemContextProvider ({children}) {
    const [item, setItem] = useState('')
    const [team, setTeam] = useState('')
    return  <ItemContext.Provider value={{item, setItem, team, setTeam}}>
        {children}
    </ItemContext.Provider>

}

export default ItemContext
import React, {useState, useEffect} from 'react'

const UserContext = React.createContext({})

export function UserContextProvider ({children}) {
    const [token, setToken] = useState('')
    
    useEffect(() => {
    setToken(localStorage.getItem('token'))
      }, [])
    return <UserContext.Provider value={{token, setToken}}>
        {children}
    </UserContext.Provider>

}

export default UserContext
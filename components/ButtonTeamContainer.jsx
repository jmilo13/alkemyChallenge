import React, { useContext } from "react"
import TeamContext from '@context/TeamContext'
import ButtonTeam from "./ButtonTeam"

export default function ButtomTeamContainer (props) {
    const context = useContext(TeamContext)
    const isTeam = props.component === 'team' ? true : false
    const handleClick = (e) => {
        console.log('boton')
        if (props.type === 'remove') {
            const local = JSON.parse(localStorage.getItem('team'))
            const data = local.filter((element) => element.id !== props.id)
            localStorage.setItem('team', JSON.stringify(data))
            context.setTeam(data)
        } else {
            let data = []
            const local = JSON.parse(localStorage.getItem('team'))
            if (local) {
                data = local
                data.push(props.data)
            } else {
                data[0] = props.data
            }
            localStorage.setItem('team', JSON.stringify(data))
            context.setTeam(data)
        }
        e.stopPropagation()
    }
    return <ButtonTeam onClick={handleClick} isTeam={isTeam} type={props.type}/>
}

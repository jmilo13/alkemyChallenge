import React, { useContext } from "react"
import TeamContext from '@context/TeamContext'
import ButtonTeam from "./ButtonTeam"

export default function ButtomTeamContainer (props) {
    const context = useContext(TeamContext)
    const local = JSON.parse(localStorage.getItem('team'))
    const isTeam = props.component === 'team' ? true : false
    
    const handleClick = (e) => {
        console.log('boton')
        
            if (props.type === 'remove') {  
                const data = local.filter((element) => element.id !== props.id)
                localStorage.setItem('team', JSON.stringify(data))
                context.setTeam(data)
            }
            if(props.type === 'add' && context.team.length < 6) {
                try{
                let data = []
                if (local) {
                    data = local
                    data.push(props.data)
                } else {
                    data[0] = props.data
                }
                localStorage.setItem('team', JSON.stringify(data))
                context.setTeam(data)
                }catch(error){
                    console.log('error duplicado')
                }
            }else if(context.team.length === 6){
                console.log('sólo puedes agregar 6 a tu equipo')
            }
            e.stopPropagation()
            }
            console.log(context.team.length)
    return <ButtonTeam onClick={handleClick} isTeam={isTeam} type={props.type}/>
}

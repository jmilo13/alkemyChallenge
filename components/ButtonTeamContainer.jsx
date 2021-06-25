import React, { useContext, useState } from "react"
import TeamContext from '@context/TeamContext'
import ButtonTeam from "./ButtonTeam"



export default function ButtomTeamContainer (props) {
    const context = useContext(TeamContext)
    const local = JSON.parse(localStorage.getItem('team'))
    const isTeam = props.component === 'team' ? true : false
    const duplicate = context.team.length > 0 && (context.team.map(element => element.id)).includes(props.data.id)
console.log(duplicate)
    const handleClick = (e) => {
        console.log('entro al click')
        const good = context.team.length > 0 && (context.team.map(element => element.biography.alignment === 'good' || element.biography.alignment === 'neutral' ? 1 : 0)).reduce((prev, curr) => prev + curr)
        const bad = context.team.length > 0 && (context.team.map(element => element.biography.alignment === 'bad' ? 1 : 0)).reduce((prev, curr) => prev + curr)
        const isPossible = () => {
            if(props.data.biography.alignment === 'bad' && bad < 3){
                return true
            }else if(  good < 3 && props.data.biography.alignment === 'good' || props.data.biography.alignment === 'neutral'){
                return true
            }
            return false
        } 
        console.log(context.team)
            if (props.type === 'remove') {  
                const data = local.filter((element) => element.id !== props.id)
                localStorage.setItem('team', JSON.stringify(data))
                context.setTeam(data)
            }else if(props.type === 'add' && duplicate != true && isPossible() && context.team.length < 6 || context.team.length === undefined) {
                let data = []
                if (local) {
                    data = local  
                    data.push(props.data)
                }else {
                    data[0] = props.data
                }
                localStorage.setItem('team', JSON.stringify(data))
                context.setTeam(data)
            }else{
                console.log('error para ingresar, recuerda...')
            }
            
            e.stopPropagation()
            context.setItem(props.data)
            }
    return <ButtonTeam onClick={handleClick} isTeam={isTeam} type={props.type}/>
}

import React, { useContext } from "react"
import { useRouter } from 'next/router'
import TeamContext from '@context/TeamContext'
import ButtomTeamContainer from "./ButtonTeamContainer"

export default function Item(props) {
    const context = useContext(TeamContext)
    const router = useRouter()
    const { information, component } = props
    const isTeam = component === 'team' ? true : false
    const { image, id, name, biography } = information

    console.log(context.team);
    const handleElement = () => {
        console.log('caja')
        context.setItem(information)
        isTeam ? context.setTeam(true) : context.setTeam(false)
        console.log('click en imagen')
        router.push(`/${name}`)
    }
    // const handleClick = (e) => {
    //     console.log('boton')
    //     if (isTeam) {
    //         const local = JSON.parse(localStorage.getItem('team'))
    //         const data = local.filter((element) => element.id !== id)
    //         localStorage.setItem('team', JSON.stringify(data))
    //         context.setTeam(data)
    //     } else {
    //         let data = []
    //         const local = JSON.parse(localStorage.getItem('team'))
    //         if (local) {
    //             data = local
    //             data.push(information)
    //         } else {
    //             data[0] = information
    //         }
    //         localStorage.setItem('team', JSON.stringify(data))
    //         context.setTeam(data)
    //     }
    //     e.stopPropagation()
    // }
    return (
        <section className='card' key={id} onClick={handleElement}>
            <img className='card__image' src={image.url}/>
            <div className='card__button-container'>
                <ButtomTeamContainer component="team" id={id} type={isTeam ? 'remove' : 'add'} data={information}/>
            </div>
            {/* <button onClick={handleClick} type="button" className={isTeam ? "card__button remove" : "card__button add"}></button> */}
            <div className='card__details'>
                <h2 className='card__details--name'>{name}</h2>
                <p className='card__details--aligment'>{biography.alignment === 'bad' ? 'Villano' : 'Héroe'}</p>
            </div>
            <style jsx>
                {`
                .card {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    width: 12rem;
                    height: 15rem;
                    margin: 1rem;
                    box-shadow: 0px 0px 9px 0px;
                    transition: all 500ms;
                    cursor: pointer;
                }
                .card:hover {
                    transform: scale(1.05);
                }
                .card__image {
                    width: 100%;
                    height: 100%;
                }
                .card__details {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    padding: 1rem;
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.9) 0%,
                        rgba(0, 0, 0, 0) 100%
                );
                    color: #fff;
                }
                .card,
                .card__image,
                .card__details {
                    border-radius: 1rem;
                }
                .card__button-container{
                    position:absolute;
                    bottom: 0.5rem;
                    right: 0.5rem;
                    z-index: 1
                }
                {/* .card__button{
                    position:absolute;
                    bottom: 0.5rem;
                    right: 0.5rem;
                    width: 2rem;
                    height: 2rem;
                    border: none;
                    z-index: 1
                }
                .remove{
                    background: url('/icons/remove.svg') center/cover no-repeat;
                }
                .add{
                    background: url('/icons/add.svg') center/cover no-repeat
                } */}
                `}
            </style>
        </section>
    )
}
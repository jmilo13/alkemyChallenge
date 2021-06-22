import React, { useContext } from "react"
import { useRouter } from 'next/router'
import { add, remove } from "./plugins/MakeTeam"

import ItemContext from '@context/ItemContext'

export default function Item(props) {
    const context = useContext(ItemContext)
    const router = useRouter()
    const { information, component } = props
    const isTeam = component === 'team' ? true : false
    const { image, id, name, biography } = information

    console.log(context.team);
    const handleImage = () => {
        context.setItem(information)
        isTeam ? context.setTeam(true) : context.setTeam(false)
        router.push(`/${name}`)
    }
    const handleClick = () => {
        if (isTeam) {
            const local = JSON.parse(localStorage.getItem('team'))
            const data = local.filter((element) => element.id !== id)
            localStorage.setItem('team', JSON.stringify(data))
            context.setTeam(data)
            console.log(JSON.parse(localStorage.getItem('team')))
        } else {
            let data = []
            const local = JSON.parse(localStorage.getItem('team'))
            if (local) {
                data = local
                data.push(information)
            } else {
                data[0] = information
            }
            localStorage.setItem('team', JSON.stringify(data))
            context.setTeam(data)
            console.log(JSON.parse(localStorage.getItem('team')))
        }
    }
    return (
        <section className='card' key={id}>
            <img className='card__image' src={image.url} onClick={handleImage} />
            <button onClick={handleClick} type="button" className={isTeam ? "card__button remove" : "card__button add"}></button>
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
                .card__button{
                    position:absolute;
                    top: 0;
                    right: 0;
                    width: 2rem;
                    height: 2rem;
                    border: none;

                }
                .remove{
                    background: url('/icons/remove.svg') center/cover no-repeat;
                }
                .add{
                    background: url('/icons/add.svg') center/cover no-repeat
                }
                `}
            </style>
        </section>
    )
}
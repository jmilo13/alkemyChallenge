import React, { useContext, useState } from "react"
import TeamContext from '@context/TeamContext'
import ButtomTeamContainer from "./ButtonTeamContainer"
import ModalDetails from '@components/ModalDetails'
import ModalError from '@components/ModalError'

export default function Item(props) {
    const [error, setError ] = useState(false)
    const [isOn, setIsOn] = useState(false)
    const context = useContext(TeamContext)
    const { information, component } = props
    const isTeam = component === 'team' ? true : false
    const { image, id, name, biography } = information
    const handleElement = () => {
        console.log('oprimio imagen')
        context.setItem(information)
        setIsOn(true)
    }
    return (
        <section className='card' key={id} onClick={handleElement}>
            <img className='card__image' src={image.url}/>
            <div className='card__button-container'>
                <ButtomTeamContainer setError={setError} component="team" id={id} type={isTeam ? 'remove' : 'add'} data={information}/>
            </div>
            <div className='card__details'>
                <h2 className='card__details--name'>{name}</h2>
                <p className='card__details--aligment'>{biography.alignment === 'bad' ? 'Villano' : 'Héroe'}</p>
            </div>
            {isOn&& <ModalDetails isOn={isOn} setIsOn={setIsOn}/>}
            {error&& <ModalError error={error} setError={setError}/>}
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
                    top: 0.2rem;
                    right: 0.2rem;
                }
                `}
            </style>
        </section>
    )
}
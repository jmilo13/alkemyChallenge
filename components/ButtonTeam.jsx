import React from 'react'

export default function ButtonTeam (props) {
    return (
        <React.Fragment>
            <button onClick={props.onClick} type="button" className={props.type === 'remove' ? "card__button remove" : "card__button add"}>{props.text}</button>
            <style jsx>
                {`
                .card__button{
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
                }
                `}
            </style>
        </React.Fragment>
    )
}
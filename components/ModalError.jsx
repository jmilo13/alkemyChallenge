import React  from 'react'
import ReactDOM from 'react-dom'
import {Alert } from 'react-bootstrap'

export default function Details (props) {
    const {error, setError } = props

    const handleClick = (e) => {
      setError(false)
      e.stopPropagation(e)
    }

    const element =  ( 
      <section className="error-modal">
      <Alert variant="danger" onClick={handleClick} dismissible>
      <Alert.Heading>No puedes agregarlo</Alert.Heading>
      <p>
          Recuerda: Equipo de máximo seis (tres heroes y tres villanos). No puedes repetir.
      </p>
      </Alert>
      <style jsx>
        {`
        .error-modal{
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          height: 100vh;
          padding: 1rem;
          justify-content: center;
          align-items: center;
        }
        .error-modal::before{
          position: fixed;
          content: "";
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgb(0 0 0 / 25%);
            }
        `}
      </style>
      </section>
    )
    const modalRoot = document.querySelector('#modal-root')
    return error === true && ReactDOM.createPortal(element, modalRoot)
}


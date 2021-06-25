import React  from 'react'
import ReactDOM from 'react-dom'
import {Modal, Button} from 'bootstrap'

export default function ModalError (props) {
  const { isOn, data } = props
    const element = (
                <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
    )
    const lugar = document.querySelector('#modal-root')
    return isOn === true && ReactDOM.createPortal(element, lugar)
  }
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

function Modal (props) {
    const [isBrowser, setIsBrowser] = useState(false)
    useEffect(() => {
        setIsBrowser(true);
      }, []);
    console.log(isBrowser)
    if(!props.isOpen){
        return null
    }
    if(isBrowser){
    ReactDOM.createPortal(
        <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>

        {props.children}
      </div>
    </div>,
        document.querySelector('#modal'))
     }else{
         return null
     } 
}

export default Modal
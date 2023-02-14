import React from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'    
const Backdrop = props =>{
    return <div className={classes.backdrop} onClick={props.toggleCart}/>
}
const ModalOverlay = props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');
export default function Modal(props) {
  return (
        <React.Fragment>
           {ReactDom.createPortal(<Backdrop toggleCart={props.toggleCart}/>,portalElement)}
           {ReactDom.createPortal(<ModalOverlay >{props.children}</ModalOverlay>,portalElement)}
        </React.Fragment>
  )
}

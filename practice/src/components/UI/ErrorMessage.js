import React from "react";
import Card from "./Card";
import Button from "./Button";
import './ErrorMessage.css'

export default function ErrorMessage(props){
    const clickHandler = ()=>{
        props.setShow();
    }
    return <div>
        <div className="backdrop" onClick={clickHandler}/>
        <Card className='modal'>
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={clickHandler}>Okay</Button>
            </footer>
        </Card>
    </div>
}
import React from 'react'
import classes from './Header.module.css'
import meals from '../../assests/meals.jpeg'
import HeaderCartButton from './HeaderCartButton'
export default function Header(props){

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton toggleCart={props.toggleCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A display full of meals"/>
            </div>
        </React.Fragment>
    )
}
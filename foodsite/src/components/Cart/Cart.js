import React from 'react'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'
export default function Cart(props) {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = id =>{
        cartCtx.removeItem(id);
    } 
    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item,totalAmount : 1});
    }
    const cartItems = <ul className={classes['cart-items']}>
           {
            cartCtx.items.map((item) =>{
               return <CartItem key={item.id} name={item.name} 
               totalAmount = {item.totalAmount} price = {item.price}
               onRemove ={cartItemRemoveHandler.bind(null,item.id)}
               onAdd={cartItemAddHandler.bind(null,item)}
               />
            })
           }
    </ul>
    return (
        <Modal toggleCart={props.toggleCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.toggleCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

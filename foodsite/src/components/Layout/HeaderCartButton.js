import React ,{useContext,useState,useEffect} from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/CartContext'
export default function HeaderCartButton(props) {
  const cardCtx = useContext(CartContext);
  const {items} =cardCtx;
  const [btnHigh,setBtnHigh] = useState(false);
  let tValue = 0;
  for(let i=0;i<cardCtx.items.length;i++){
    tValue += cardCtx.items[i].totalAmount;
  }
  const btnClasses = `${classes.button} ${btnHigh ? classes.bump : ''}`
  
  useEffect(()=>{
    if(cardCtx.items.length === 0)return;
    setBtnHigh(true);

    const timer = setTimeout(()=>{
      setBtnHigh(false);
    },300);
    return ()=>{
      clearTimeout(timer);
    }
  },[items])
  return (
    <button className={btnClasses} onClick={props.toggleCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>{tValue}</span>
    </button>
  )
}

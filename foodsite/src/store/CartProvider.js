import React ,{useReducer}from 'react'
import CartContext from './CartContext'

export default function CartProvider(props) {

  const defaultState = {
    items : [],
    totalAmount : 0
  };
  const reducer = (state,action)=>{
    switch (action.type){
        case 'ADD' : {
          const updatedTotalAmount = state.totalAmount + action.item.price * action.item.totalAmount;
         
         const exisitingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
         );
         const existingCartItem = state.items[exisitingCartItemIndex];
         let updatedItems;
         let updatedItem;
          if(existingCartItem){
              updatedItem ={
              ...existingCartItem,totalAmount : existingCartItem.totalAmount + action.item.totalAmount
            };
            updatedItems = [...state.items];
            updatedItems[exisitingCartItemIndex]=updatedItem;
          }
          else{
             updatedItems = state.items.concat(action.item);
          }
          return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
          };
        }

        case 'REMOVE' :{
          const exisitingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
           );
           const existingCartItem = state.items[exisitingCartItemIndex];
           const updatedTotalAmount = state.totalAmount - existingCartItem.price;
           let updatedItems;
           if(existingCartItem.totalAmount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id);
           }
           else{
            const updatedItem = {...existingCartItem,totalAmount : existingCartItem.totalAmount -1};
            updatedItems = [...state.items];
            updatedItems[exisitingCartItemIndex]=updatedItem;
           }
           return{
            items : updatedItems,
            totalAmount : updatedTotalAmount
           }
          }
        default :
            return state;
    }
}
  const [cartState,dispatch] = useReducer(reducer,defaultState);
    const addItemTocart = (item)=>{
      return dispatch({type : 'ADD' ,item : item})
    }
    const removeItemFromCart = (id) =>{
      return dispatch({type : 'REMOVE' ,id : id})
    }
    const cartValue ={
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemTocart,
        removeItem : removeItemFromCart
    };
  return (
    <CartContext.Provider value={cartValue}>
        {props.children}
    </CartContext.Provider>
  )
}

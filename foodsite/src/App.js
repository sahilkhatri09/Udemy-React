import React,{useState} from "react";
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [show , showHandler] = useState(false);
  const toggleCart = ()=>{
    showHandler((prev)=>{
      return !prev
    })
  }
  // const showtoggleHandler = ()=>{
  //   showHandler(true);
  // }
  // const hidetoggleHandler =()=>{
  //   showHandler(false)
  // }
  return (
   <CartProvider>
    {show && <Cart toggleCart={toggleCart}/>}
    <Header toggleCart={toggleCart}/>
    <main>
      <Meals/>
    </main>
   </CartProvider>
  );
}

export default App;

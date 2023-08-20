import Link from 'next/link'
import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart'
import { useStateContext } from '@/context/StateContext'



const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return (
    <div className='navbar-container'>
      <h2 className='logo'>
        <Link href="/">M.Yosry Headphones</Link>
      </h2>

      <button type='button' className='cart-icon'
        onClick={()=> setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
      
    </div>
  )
}

export default NavBar
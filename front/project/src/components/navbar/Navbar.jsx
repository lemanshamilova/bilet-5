import React from 'react'
import './navbar.scss'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';





const Navbar = () => {
  return (
    <header>
        <div className="container">
            <div className="nav">
                <div className='left'>
                <HiMiniMagnifyingGlass />
                    <input type="text" placeholder='Search' />
                </div>
                <div className='margin'>
                    <p>SHOPPERS</p>
                </div>
                <div className='icons'>
                <FaUser />
                <GoHeart />
                <MdShoppingCart />


                </div>

            </div>
            <hr />
            <div className='navbar'>
                <ul>
                    <li>
                        <NavLink to={"/"}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/add"}>ADD</NavLink>
                    </li>
                    <li>
                        <NavLink >SHOP</NavLink>
                    </li>
                    <li>
                        <NavLink >CATALOGUE</NavLink>
                    </li>
                    <li>
                        <NavLink >NEW ARRIVALS</NavLink>
                    </li>
                    <li>
                        <NavLink >CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      
    </header>
  )
}

export default Navbar

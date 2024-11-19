import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({category,setCategory}) => {
  return (
    <div className='menu' id='menu'>
       <marquee className='headlines' behavior="left" direction="left">
       Limited Time: 50% Off on All Desserts – Order Now!
        </marquee>
      <h1>Explore the Menu You Want to Order</h1>
      <p className='menu-text'>Choose from a wide variety of delicious options crafted to satisfy every taste.</p>
      <div className="menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} className="menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Menu

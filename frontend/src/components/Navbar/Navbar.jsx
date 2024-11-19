import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = ({ setShowLogin }) => {
  const { getTotal, token, setToken } = useContext(StoreContext);
  const [showDropdown, setShowDropdown] = useState(false);

 
  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };
  const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='navbar'>
      <Link to={"/"}>
        <h1 className='logo'>Foodzy</h1>
      </Link>

      <div className='navbar-right'>
        <div className='navbar-search-icon'>
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotal() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <div className='btn'>
            <button onClick={() => setShowLogin(true)}>Sign In</button>
          </div>
        ) : (
          <div className='profile' onClick={toggleDropdown}>
            <FaUserAlt className="profile-icon" />
            {showDropdown && (
              <ul className="profile-dropdown">
                <li onClick={()=>navigate('/myorders')}>My Orders</li>
                <hr />
                <li onClick={logout}>Logout</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

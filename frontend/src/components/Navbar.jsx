import React, { useContext, useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { shopContext } from '../context/shopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(shopContext);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();

  const logout = async () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }
  useEffect(() => {
    const handleClickoutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false)
      };
    }
    document.addEventListener('mousedown', handleClickoutside);
    return () => {
      document.removeEventListener('mousedown', handleClickoutside)
    }
  }, [])

  return (
    <div className=' flex items-center justify-between py-5 font-medium '>
      <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

      <ul className=' hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink onClick={() => setHidden(false)} to='/' className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className='bg-gray-700 h-[1.5px] w-1/2 border-none hidden' />
        </NavLink>

        <NavLink onClick={() => setHidden(true)} to='/collection' className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className='bg-gray-700 h-[1.5px] w-1/2 border-none hidden' />
        </NavLink>

        <NavLink onClick={() => setHidden(false)} to='/about' className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className='bg-gray-700 h-[1.5px] w-1/2 border-none hidden' />
        </NavLink>

        <NavLink onClick={() => setHidden(false)} to='/contact' className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className='bg-gray-700 h-[1.5px] w-1/2 border-none hidden' />
        </NavLink>

      </ul>
      <div className=" flex items-center gap-6">
        {hidden ? <img onClick={() => { setShowSearch(true) }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" /> : null}


        <div className='group relative'>
          <img onClick={() => {
            if (!token) {
              navigate('/login')
            }
            else {
              setDropdown(!dropdown)
            }
          }} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
          {/* Dropdown menu */}
          {token &&
            <div ref={dropdownRef} className={`group-hover:block ${dropdown && token ? "block" : 'hidden'} absolute dropdown-menu right-0 pt-4`}>

              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>

                {/* <p className='cursor-pointer hover:text-black'>My Profile</p> */}
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>

              </div>
            </div>}

        </div>
        <Link to="/cart" className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white aspect-square leading-4 rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 sm:hidden cursor-pointer' alt="" />
      </div>

      {/* sidebar menu for small screens */}

      <div className={`absolute top-0 right-0 h-screen overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex  cursor-pointer items-center gap-4 p-4 w-fit'>
            <img src={assets.dropdown_icon} className='rotate-180 h-4' alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar

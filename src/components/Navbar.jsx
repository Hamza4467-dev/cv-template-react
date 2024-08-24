import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const navigateTo = (url) => {
    navigate(url)
  }
  const activeLinks = ({ isActive }) => {
    return (
      isActive ? "active-link " : "inactive-link"
    )
  }
  const goBack = () => {
    navigate(-1)
  }


  return (
    <>
      <ul>
        <li>
          <NavLink to='/list' className={activeLinks}>
            List
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' className={activeLinks}>
            Login
          </NavLink>
        </li>

        <button className='btn btn-primary'

          onClick={() => navigateTo("/login")}
        >Add to cart</button>
        <button className='btn btn-danger'

          onClick={() => navigateTo("/list")}
        >List</button>
        <button className='btn btn-sm btn-black' onClick={goBack}>GO BACK</button>
      </ul>
    </>
  )
}

export default Navbar

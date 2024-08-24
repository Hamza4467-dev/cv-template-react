import React, { useContext } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom'; // Removed 'to' from the import statement
import { NavLink, useNavigate } from 'react-router-dom';
function Header() {
  // const navigate = useNavigate()
  // const activeLinks = ({ isActive }) => {
  //   return isActive ? "active-link " : "inactive-link"

  // }
  const navigation = useNavigate()
  const activeClass = ({ isActive }) => {
    return isActive ? "active-link " : "inactive-link"
  }
  const homeButton = () => {
    navigation("/")
  }
  return (
    <>
      {/* <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              MyWebsite
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li >
                  <NavLink
                    className={activeLinks}
                    to="/"

                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={activeLinks}
                    to="/login"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={activeLinks}

                    to="/list"
                  >
                    Services
                  </NavLink>
                </li>


              </ul>
            </div>
          </div>
        </nav>
      </div> */}
      <div>
        <NavLink to="/" className={activeClass}>Home</NavLink>
        <NavLink to="/about" className={activeClass}>About</NavLink>
        <button onClick={homeButton}>home</button>
      </div>
    </>
  );
}

export default Header;

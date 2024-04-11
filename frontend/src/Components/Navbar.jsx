/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between'>
          <div className="container">
            <div
              data-type="grid-layout"
              className="react-grid-item ltr  undefined  cd-padding   "
              id="Divp3Mo"
              data-clientid="Divp3Mo"
              data-displayname="Container"
            >
              <div
                data-type="grid-layout"
                className="react-grid-item ltr  false  cd-padding   "
                id="DivDk3X"
                data-clientid="DivDk3X"
                data-displayname="Div"
              >
                <div
                  data-type="grid-layout"
                  className="react-grid-item ltr  false  cd-padding   "
                  id="DivApFM"
                  data-clientid="DivApFM"
                  data-displayname="Div"
                >
                  <img
                    src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1678986391/static/framesvg_1678986390_65036.svg"
                    alt="logo"
                  />
                </div>
                <span
                  id="SpantifI"
                  data-clientid="SpantifI"
                  data-displayname="Text"
                  className="react-grid-item ltr  false   "
                >
                  <p>HealHive </p>
                </span>
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#symptoms">Check Symptoms</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
  )
}

export default Navbar
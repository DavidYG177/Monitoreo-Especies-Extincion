import React from "react"
import "./Header.css"
import Incognito from "../assets/logo.png"

function Header() {
  return (
    <header className="header">
      <figure>
        <img src={Incognito} alt="?" className="header__logo" />
      </figure>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#">Extintos</a>
          </li>
          <li>
            <a href="#">Vulnerables</a>
          </li>
          <li>
            <a href="#">En peligro</a>
          </li>
          <li>
            <a href="#">Cambio climatico</a>
          </li>
          <li>
            <a href="#">Contaminacion</a>
          </li>
          <li>
            <a href="#">Galeria</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header

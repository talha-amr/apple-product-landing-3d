import React from 'react'
import { navItems } from '../constants'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple Logo" />
        <ul>
          {navItems.map(({ label }) => (
            <li key={label}>
              <a href={`/${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button><img src="search.svg" alt="Search" /></button>
          <button><img src="cart.svg" alt="Bag" /></button>
        </div>
      </nav>
    </header>

  )
}

export default Navbar
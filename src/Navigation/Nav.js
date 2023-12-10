import { AiOutlineSearch } from 'react-icons/ai'

import "./Nav.css"

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input" placeholder="BUSQUE AQUI" />
        <a href="#">
          <AiOutlineSearch className='nav-icons'/>
        </a>
      </div>
    </nav>
  )
}

export default Nav;
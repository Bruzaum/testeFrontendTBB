import { AiOutlineSearch } from 'react-icons/ai'

import "./Nav.css"

function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nav-header">
        <h1><span className="nav-header-blue">O QUE VOCÊ</span> <span className="nav-header-purple">ESTÁ PROCURANDO?</span></h1>
        <div className="nav-container">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="BUSQUE AQUI"
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav;
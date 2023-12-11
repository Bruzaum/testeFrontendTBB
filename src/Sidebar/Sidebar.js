import Category from "./Category/Category"
import "./Sidebar.css"
import RexonaLogo from "../assets/rexona-logo.png"

function Sidebar({handleCategoryChange}) {

  return (
    <section className="sidebar">
        <div className="logo-container">
            <img src={RexonaLogo} alt="Rexona logo" />
        </div>

        <Category handleCategoryChange={handleCategoryChange}/>
    </section>
  )
}

export default Sidebar;

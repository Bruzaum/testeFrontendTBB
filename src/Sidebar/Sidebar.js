import Category from "./Category/Category"
import "./Sidebar.css"
import RexonaLogo from "../assets/rexona-logo.png"

import productsDataBase from "../data/products.json"
import Input from "../components/Input";

function Sidebar({handleCategoryChange}) {


  function categoryList(products) {
    const categories = {}

    const categoriesList =  products.map((product) => (
      categories.name = product.category.name
    ))

    const uniqueCategoriesList = [...new Set(categoriesList)]

    return uniqueCategoriesList.map((categories) => (
      <Input
        key={Math.random()}
        categoryName={categories}
      />
    ))
  }

  const resultCategoriesList = categoryList(productsDataBase.data.nodes)

  

  return (
    <section className="sidebar">
        <div className="logo-container">
            <img src={RexonaLogo} alt="Rexona logo" />
        </div>

        <Category handleCategoryChange = {handleCategoryChange} resultCategoriesList={resultCategoriesList} />
    </section>
  )
}

export default Sidebar;

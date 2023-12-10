import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";

import productsDataBase from "./data/products.json"

function App() {

  // productsDataBase.data.nodes.forEach((product) => console.log(product.name))

  // Input Filter Begin
  const [query, setQuery] = useState("")

  const handleInputChange = e => {
    setQuery(e.target.value)
  }

  const filteredItems = productsDataBase.data.nodes.filter(product => 
    product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)   
  );
  // Input Filter End

  // Category Filter
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems
    }

    // Selected Category Filter
    if(selected) {
      filteredProducts = filteredProducts.filter(product => product.category.name === selected )
    }

    return filteredProducts.map((product) => (
      <Card
        key={product.id}
        img={product.images[0].asset.url}
        imgAlt={product.images[0].alt}
        name={product.name}
      />
    ))
  }

  const result = filteredData(productsDataBase.data.nodes, selectedCategory, query)


  return (
    <>
      <Sidebar handleCategoryChange={handleCategoryChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products result={result}/>
    </>
  );
}

export default App;

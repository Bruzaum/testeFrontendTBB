import "./Category.css"

function Category({handleCategoryChange, resultCategoriesList}) {
  return (
    <div>
      <h2 className="sidebar-title">Filtros</h2>

      <div>
        <label className="sidebar-label-container" >
          <input onChange={handleCategoryChange} type="radio" />
        </label>

        { resultCategoriesList }
        
      </div>
    </div>
  )
}

export default Category;

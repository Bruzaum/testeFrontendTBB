import "./Category.css"
import Input from "../../components/Input";

function Category({ handleCategoryChange }) {

  return (
    <div>
      <h2 className="sidebar-title">Filtros</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleCategoryChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Todas
        </label>

        <Input
          handleCategoryChange={handleCategoryChange}
          categoryName="Roll On"
          value="Roll On"
          name="test"
        />

        <Input
          handleCategoryChange={handleCategoryChange}
          categoryName="Alcohol en Gel"
          value="Alcohol en Gel"
          name="test"
        />

        <Input
          handleCategoryChange={handleCategoryChange}
          categoryName="Aerosol"
          value="Aerosol"
          name="test"
        />

        <Input
          handleCategoryChange={handleCategoryChange}
          categoryName="Jabón Líquido"
          value="Jabón Líquido"
          name="test"
        />

        <Input
          handleCategoryChange={handleCategoryChange}
          categoryName="Jabón Barra"
          value="Jabón Barra"
          name="test"
        />

        <Input
          handleCategoryChange={handleCategoryChange}
          categoryName="Crema Soft Solid"
          value="Crema Soft Solid"
          name="test"
        />

        <Input
          handleCategoryChange={handleCategoryChange}
          categoryName="Talco"
          value="Talco"
          name="test"
        />
        
      </div>
    </div>
  )
}

export default Category;

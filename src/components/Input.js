function Input({ handleCategoryChange, categoryName}) {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleCategoryChange} type="radio"/>
      <span className="checkmark"></span>{categoryName}
    </label>
  )
}

export default Input;

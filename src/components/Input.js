function Input({ handleCategoryChange, value, name, categoryName}) {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleCategoryChange} type="radio" value={value} name={name}/>
      <span className="checkmark"></span>{categoryName}
    </label>
  )
}

export default Input;

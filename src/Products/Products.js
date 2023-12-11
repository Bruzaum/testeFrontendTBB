import "./Products.css"

function Products({ result, number }) {
  return (
    <>
      <div className="products-container">
        <p className="products-number">({number} produtos)</p>
        <section className="card-container" >
          { result }
        </section>
      </div>
    </>
  )
}

export default Products;

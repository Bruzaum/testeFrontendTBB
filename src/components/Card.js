function Card({ img, imgAlt, name}) {
  return (
    <section className="card" >
      <img src={img} 
            alt={imgAlt} 
            className="card-img"
      />
      <div className="card-details">
        <h3 className="card-title">{name}</h3>
      </div>
    </section>
  )
}

export default Card;

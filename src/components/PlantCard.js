import React, { useState } from "react";

function PlantCard({ plant, onDelete }) {
  const [inStock, setInStock] = useState(true)
  
  function handleClick() {
    setInStock(false);
  }

  function handleDeleteClick(e) {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => onDelete(plant.id))
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <div>
          <button>Out of Stock</button>
          <button onClick={handleDeleteClick} className="primary">Delete</button>
        </div>
      )}
    </li>
  );
}

export default PlantCard;

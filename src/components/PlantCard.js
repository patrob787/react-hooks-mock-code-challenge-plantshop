import React, { useState } from "react";

function PlantCard({ plant, onDelete, onUpdatePrice }) {
  const [inStock, setInStock] = useState(true);
  const [updateClick, setUpdateClick] = useState(true);
  const [newPrice, setNewPrice] = useState("");
  
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

  function handleUpdateClick() {
    setUpdateClick(!updateClick)
  }

  function handleUpdatePrice(e) {
    setNewPrice(e.target.value)
  }

  function onSubmitNewPrice(e) {
    e.preventDefault();
    const updatePlant = {
      ...plant,
      price: newPrice
    }

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatePlant)
    })
    .then(resp => resp.json())
    .then(data => onUpdatePrice(data))

    // console.log(updatePlant)
    // onUpdatePrice(updatePlant)
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {inStock ? (
        <div>
          <button onClick={handleClick} className="primary">In Stock</button>
          {updateClick ? <div><button onClick={handleUpdateClick} className="primary">Update Price</button></div> :
          <div>
            <button onClick={handleUpdateClick}>Cancel</button>
            <form onSubmit={onSubmitNewPrice}>
              <input onChange={handleUpdatePrice} type="number" value={newPrice} />
              <input type="submit" className="primary" />
            </form>
          </div>
          }
        </div>
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

import React, { useState } from "react";

function NewPlantForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleImageChange(e) {
    setImage(e.target.value)
  }

  function handlePriceChange(e) {
    setPrice(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name: name,
      image: image,
      price: price
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    .then(data => onSubmit(data))

  };


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input onChange={handleNameChange} type="text" name="name" placeholder="Plant name" value={name} />
        <input onChange={handleImageChange} type="text" name="image" placeholder="Image URL" value={image} />
        <input onChange={handlePriceChange} type="number" name="price" step="0.01" placeholder="Price" value={price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

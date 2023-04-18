import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setPlantList(data)
    });
  }, [])

  function onSubmit(plantObj) {
    setPlantList([...plantList, plantObj])
  }

  function onSearch(text) {
    setSearch(text);
  }

  function onDelete(id) {
    const reducedPlants = plantList.filter((plant) => {
      return plant.id !== id;
    })
    setPlantList(reducedPlants)
  }

  function onUpdatePrice(plant) {
    const updatedPlants = plantList.map((item) => {
      if (item.id === plant.id) {
        return plant;
      } else {
        return item;
      }
    })
    setPlantList(updatedPlants)
  }

  const searchedPlants = plantList.filter((plant) => {
    if (plant.name.toLowerCase().includes(search.toLowerCase()))
    return plant;
  })

  return (
    <main>
      <NewPlantForm onSubmit={onSubmit} />
      <Search onSearch={onSearch} />
      <PlantList plantList={searchedPlants} onDelete={onDelete} onUpdatePrice={onUpdatePrice} />
    </main>
  );
}

export default PlantPage;

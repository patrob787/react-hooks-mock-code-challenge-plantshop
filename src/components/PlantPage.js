import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([]);

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

  return (
    <main>
      <NewPlantForm onSubmit={onSubmit} />
      <Search />
      <PlantList plantList={plantList} />
    </main>
  );
}

export default PlantPage;

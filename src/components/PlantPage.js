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

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantList={plantList} />
    </main>
  );
}

export default PlantPage;

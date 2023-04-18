import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList }) {
  
  const renderPlantCards = plantList.map((plant) => {
    return <PlantCard key ={plant.name} plant={plant} />
  })
  
  return (
    <ul className="cards">{renderPlantCards}</ul>
  );
}

export default PlantList;

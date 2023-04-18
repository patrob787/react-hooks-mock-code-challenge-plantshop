import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, onDelete }) {
  
  const renderPlantCards = plantList.map((plant) => {
    return <PlantCard key ={plant.name} plant={plant} onDelete={onDelete} />
  })
  
  return (
    <ul className="cards">{renderPlantCards}</ul>
  );
}

export default PlantList;

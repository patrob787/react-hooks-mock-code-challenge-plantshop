import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, onDelete, onUpdatePrice }) {
  
  const renderPlantCards = plantList.map((plant) => {
    return <PlantCard 
              key ={plant.name} 
              plant={plant} 
              onDelete={onDelete} 
              onUpdatePrice={onUpdatePrice} 
            />
  })
  
  return (
    <ul className="cards">{renderPlantCards}</ul>
  );
}

export default PlantList;

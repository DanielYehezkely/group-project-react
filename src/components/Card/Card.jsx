import React, { useState } from "react";
import "./Card.css";
import { useApiContext } from "../../context/ApiContext";
const Card = (name, image) => {
  const handleDeleteClick = () => {};
  return (
    <div className={`card`}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      <div className="confirm-buttons">
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};
export default Card;

import React from "react";
import { useApiContext } from "../../context/ApiContext";
import "./HomePage.css";
import Card from "../../components/Card/Card";
import { useEffect } from "react";
const HomePage = () => {
  const { pokemons } = useApiContext();
  console.log(pokemons);
  return (
    <div className="cards">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} image={pokemon.image} name={pokemon.name} />
      ))}
    </div>
  );
};

export default HomePage;

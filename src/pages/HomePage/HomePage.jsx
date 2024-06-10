import React from "react";

import { useApiContext } from "../../context/ApiContext";

import "./HomePage.css";

const HomePage = () => {
  const { pokemons } = useApiContext();

  const i = 10;

  return <div></div>;
};

export default HomePage;

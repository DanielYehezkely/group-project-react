import React, { useState } from 'react';
import './UploadPokemon.css';
import { useApiContext } from '../../context/ApiContext';
import Loader from '../../components/Loader/Loader';

const UploadPokemon = () => {
  const { isLoading, catchPokemon } = useApiContext();
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonType, setPokemonType] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!pokemonName || !pokemonType || !pokemonImage) {
      alert("Please fill out all fields");
      return;
    }

    const newPokemon = {
      name: pokemonName,
      type: pokemonType,
      imageUrl: pokemonImage,
    };

    await catchPokemon(newPokemon);
    setPokemonName('');
    setPokemonType('');
    setPokemonImage('');
  };

  return (
    <div className="UploadPokemon">
      <div className="pokemon-card">
        <h2>Upload Pokemon</h2>
        <form className='upload-form' onSubmit={handleSubmit}>
          <label>Pokemon Name:</label>
          <input
            type='text'
            name='PokemonName'
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            placeholder='Enter Name here'
          />
          <label>Pokemon Type:</label>
          <select
            name="PokemonType"
            value={pokemonType}
            onChange={(e) => setPokemonType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="ice">Ice</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
          </select>
          <label>Pokemon Image URL:</label>
          <input
            type='text'
            name='PokemonImage'
            value={pokemonImage}
            onChange={(e) => setPokemonImage(e.target.value)}
            placeholder='Image URL here'
          />
          {isLoading ? <Loader /> : <input type="submit" value="Catch the Pokemon!" />}
        </form>
      </div>
    </div>
  );
};

export default UploadPokemon;

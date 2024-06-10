import { createContext, useState, useContext, useEffect } from "react";
import { addPokemon, getPokemons, deletePokemon } from "../api/api";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

  const [pokemons, setPokemons] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const fetchPokemonsData = async () => {
    setIsLoading(true)
    try {
      const data = getPokemons()
      setPokemons(data);
    } catch (error) {
      setErrorMessage(error.errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPokemonsData();
  }, []);

  const catchPokemon = async (pokemon) => {
    setIsLoading(true)
    try {
      const result = await addPokemon(pokemon);
      await fetchPokemonsData()
    } catch (error) {
      setErrorMessage(error)
    } finally {
      setIsLoading(false)
    }
  }

  const deletePokemonData = async (pokemon) => {
    try {
      const result = await deletePokemon(pokemon)
      await fetchPokemonsData()
    } catch (error) {
      setErrorMessage(error)
    } finally {
      setIsLoading(false)
    }
  }

  // why we pass it as object            vvvvvvv
  return <ApiContext.Provider value={{ pokemons, catchPokemon, deletePokemonData, errorMessage, isLoading}} >
    {children}
  </ApiContext.Provider>
};

export const useApiContext = () => {
  return useContext(ApiContext);
};
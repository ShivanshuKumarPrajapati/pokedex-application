import React, { useState,useEffect } from 'react';

import Layout from './Layout';
import './App.css';
import Grid from './components/Grid';
import Search from './components/Search';

function App() {

  const [state, setState] = useState({
    pokemons: [],
    notFound: false,
    total: 0,
    searching: false,
  });

  const [searchState, setSearchState] = useState([]);

  const fetchData = async (limit, offset) => {
    const api = await fetch(
				`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
			);
			const data = await api.json();
			const promises = await data.results.map(async (pokemon) => {
				const result = await fetch(pokemon.url);
				const res = await result.json();
				return res;
			});

			const results = await Promise.all(promises);

			setState((prev) => ({
				pokemons: [...prev.pokemons,...results],
				notFound: false,
				total: state.total + results.length,
			}));  
  }

  const searchPokemon = async (pokemon) => {
    if (pokemon === null) {
      setSearchState([]);
      setState({
        ...state,
        notFound: false
      })
      return;
    }

    setState({
      ...state,
			notFound: false,
			searching: true,
    });
    
    pokemon = pokemon.trim();
    const api = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
		);
		const data = await api.json().catch(() => undefined);
		if (!data) {
      setState({
        ...state,
				notFound: true,
			});
			return;
    } else {

      setSearchState([data]);
      setState({
        ...state,
        notFound: false,
        searching: false,
      });
    }
    setState({
      ...state,
			searching: false,
    });
    
  }

  useEffect(() => {
    const limit = 20;
    const offset = 0;
    setState({
      search: [],
      pokemons: [],
      notFound: false,
      total: 0,
      searching: false,
    });
    fetchData(limit, offset);
  }, []);

  const nextPokemon = () => {
    fetchData(20, state.total);
  }
  
    const poke =searchState.length > 0 ? searchState : state.pokemons; 

  return (
		<React.Fragment>
			<Layout>
				<Search handleSearch={searchPokemon} />
				{state.notFound ? (
					<div>'Pokemon not found'</div>
				) : (
					<Grid pokemons={poke} nextPokemon={nextPokemon} />
				)}
			</Layout>
		</React.Fragment>
	);
}

export default App;

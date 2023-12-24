import React, { useState,useEffect } from 'react';

import Layout from './Layout';
import './App.css';
import Grid from './components/Grid';


function App() {

  const [state, setState] = useState({
    search: [],
    pokemons: [],
    notFound: false,
    total:0
  });

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
				search: [],
				pokemons: [...state.pokemons, ...results],
				notFound: false,
				total: prev.total + results.length,
			}));  
  }


  useEffect(() => {
    const limit = 20;
    const offset = 0;
    fetchData(limit, offset);
  }, []);

  
    const poke =state.search.length > 0 ? state.search : state.pokemons; 

  return (
    <React.Fragment>
      <Layout>
        <Grid pokemons={poke} />
        </Layout>
    </React.Fragment>
  );
}

export default App;

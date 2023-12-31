import React from 'react'
import Card from './Card'

const Grid = ({ pokemons, nextPokemon }) => {
	
	return (
		<div className="grid">
			<div className="grid__pokemon">
				{pokemons.map((poke) => (
					<Card key={poke.name} pokemon={poke}></Card>
				))}
			</div>
			{pokemons.length >= 20 && (
				<div className="grid__wrapper-button">
					<button className="grid__button" type="button" onClick={nextPokemon}>
						Show more
					</button>
				</div>
			)}
		</div>
	);
};

export default Grid
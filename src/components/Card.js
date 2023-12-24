import React,{useState} from 'react'
import PokeballImage from "../assets/pokeball.png";
import { searchIcon } from "../utils/icons";
import Modal from './Modal';

const Card = ({ pokemon }) => {
    
    const [showModal, setShowModal] = useState(false);

    const handleModal = async() => {
        await setShowModal(!showModal);
        document.body.classList.toggle("dark");
    }
    return (
			<React.Fragment>
				<div
					className="card"
					onClick={handleModal}
					style={{
						backgroundColor: `var(--bg-poke-color-light-${pokemon.types[0].type.name})`,
					}}
				>
					<div className="card__title">
						<img className="card__title-img" src={PokeballImage} alt="" />
						<span className="card__title-text">{`#${pokemon.order}`}</span>
					</div>
					<div
						className="card__badge"
						style={{
							backgroundColor: `var(--bg-poke-color-dark-${pokemon.types[0].type.name})`,
						}}
					>
						<img
							className="card__badge-Icon"
							src={searchIcon(pokemon.types[0].type.name)}
							alt=""
						/>
						<span className="card__badge-text">
							{pokemon.types[0].type.name}
						</span>
					</div>
					<h3 className="card__name">{pokemon.name}</h3>
					<img
						className="card__image"
						width={120}
						height={120}
						src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.order}.svg`}
						alt=""
						loading="lazy"
					/>
				</div>
				{showModal && (
					<Modal handleModal={handleModal} pokemon={pokemon} />
				)}
			</React.Fragment>
		);
}

export default Card
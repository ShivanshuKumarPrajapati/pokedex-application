import bug from "../assets/icons/bug.png";
import dark from "../assets/icons/dark.png";
import dragon from "../assets/icons/dragon.png";
import electric from "../assets/icons/electric.png";
import fairy from "../assets/icons/fairy.png";
import fighting from "../assets/icons/fighting.png";
import fire from "../assets/icons/fire.png";
import flying from "../assets/icons/flying.png";
import ghost from "../assets/icons/ghost.png";
import grass from "../assets/icons/grass.png";
import ground from "../assets/icons/ground.png";
import ice from "../assets/icons/ice.png";
import normal from "../assets/icons/normal.png";
import poison from "../assets/icons/poison.png";
import psychic from "../assets/icons/psychic.png";
import rock from "../assets/icons/rock.png";
import steel from "../assets/icons/steel.png";
import water from "../assets/icons/water.png";

const icons = {
	bug: bug,
	dark: dark,
	dragon: dragon,
	electric: electric,
	fairy: fairy,
	fighting: fighting,
	fire: fire,
	flying: flying,
	ghost: ghost,
	grass: grass,
	ground: ground,
	ice: ice,
	normal: normal,
	poison: poison,
	psychic: psychic,
	rock: rock,
	steel: steel,
	water: water,
};

export function searchIcon(search) {
	if (search) {
		search = Object.entries(icons).filter((icon) => icon[0] === search);
		return search[0][1];
	}
}

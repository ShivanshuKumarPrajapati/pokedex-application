import React,{useState} from 'react'
import SearchIcon from "../assets/busqueda.svg";

const Search = ({handleSearch}) => {

    const [search, setSearch] = useState('');

    const onChangeHandler = (e) => { 
		setSearch(e.target.value);
		if (e.target.value.length === 0) {
			handleSearch(null);
		}
    }

    const handleSubmit = (e) => {
        if (e.keyCode === 13 || e.type === 'click') {
            e.preventDefault();
            if (search.length === 0)
                handleSearch(null);
            else
                handleSearch(search);
        }
    }

    return (
			<div className="search">
				<div className="search__wrapper">
					<input
						className="search__input"
						type="search"
						onChange={onChangeHandler}
						placeholder="Search your pokemon ... "
						onKeyDown={handleSubmit}
						autoFocus
					/>
					<img className="search__icon" src={SearchIcon} alt="" />
				</div>
				<button className="search__button" onClick={handleSubmit}>
					Search
				</button>
			</div>
		);
}

export default Search
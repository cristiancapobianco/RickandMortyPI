
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

export default function Nav(onSearch) {
    const randomNumber = () => {
        let min = 1;
        let max = 826;
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    return (
        <div>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <Link to='/fav'>
                <button>Favoritos</button>
            </Link>
            <SearchBar onSearch={onSearch} />
            <button onClick={() => onSearch.onSearch(randomNumber())}>random</button>
        </div>
    )
}


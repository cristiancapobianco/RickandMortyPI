import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "axios";
import Cards from "../Cards/Cards";


export default function Detail({ character, onSearch, setCharacter }) {
    const { id } = useParams()
    
    useEffect(() => {
        onSearch(id, "detail")
        console.log(character);
        return setCharacter([])
    }, [id])

    return (
        <div>
            <Link to="/home">
                <button>back</button>
            </Link>
            <Cards key={character.id} characters={character} />
        </div>

    )
}
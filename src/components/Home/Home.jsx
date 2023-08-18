import Cards from "../Cards/Cards"
import Nav from "../Nav/Nav"
import style from "./Home.module.css"

export default function Home({characters, onClose, onSearch}) {
    return(
        <div>
            <Nav class="Nav" onSearch={onSearch}/>
            <Cards characters={characters} onClose={onClose} />
        </div>
    )
}
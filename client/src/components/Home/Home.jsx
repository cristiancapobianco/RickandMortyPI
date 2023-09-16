import Cards from "../Cards/Cards"
import Nav from "../Nav/Nav"
import "./Home.module.css"

export default function Home({characters, onClose}) {
    return(
        <div>
            <Nav class="Nav"/>
            <Cards characters={characters} onClose={onClose} />
        </div>
    )
}
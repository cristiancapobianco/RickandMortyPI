import { connect } from "react-redux"
import Cards from "../Cards/Cards"

function Fav({myFavorites}) {
    return(
        <div>
            <Cards characters={myFavorites}></Cards>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps)(Fav)
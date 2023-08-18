import { Link } from "react-router-dom";
import style from "./Card.module.css"
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions"
import { useState, useEffect } from "react";

function Card({ id, name, image, onClose, myFavorites, addFav, removeFav}) {

   const [isFav, setIsFav] = useState(false)

   const handleFav = () => {
      if(isFav === true) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({ id, name, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div class="Card" key={id} id={id}>
         <button onClick={() => onClose(id)}>X</button>
         {
            isFav ? (
               <button onClick={handleFav}>❤</button>
            ) : (
               <button onClick={handleFav}>💛</button>
            )
         }
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img src={image} alt="Not found" />
      </div>
   );
}

function mapDispatchToProps(dispatch){
   return {
      addFav: function (character) {
         dispatch(addFav(character))
      },
      removeFav: function (id) {
         dispatch(removeFav(id))
      }

   }
}

function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)
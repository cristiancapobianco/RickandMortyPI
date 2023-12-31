import Card from '../Card/Card';
import "./Cards.module.css"

export default function Cards({ characters, onClose }) {
   return <div class="Cards">
      {characters.map(({ id, name, status, species, gender, origin, image }) => {
         return (
            <Card
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin}
               image={image}
               onClose={onClose}></Card>

         )
      })}
   </div>;

}

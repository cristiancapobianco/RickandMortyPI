import { useState } from "react";
import onSearch from "../../utils/onSearch";

export default function SearchBar(props) {

   const [id, setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value)
    }
   return (
      <div>
         <input type='search' onChange={handleChange} />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}

import {useState} from 'react';

const [ setCharacter] = useState([])
const [characters, setCharacters] = useState([]);


function onSearch(id, string = 'all') {
    axios(`http://localhost:3001/rickandmorty/${id}`).then(({ data }) => {
        if ("id" in data) {
            if (string !== 'all') {
                setCharacter([data])
            } else {
                setCharacters([...characters, data])
            }
        }
    }).catch((error) => {
        window.alert(error.response.data.error)
    })
}

export default onSearch;
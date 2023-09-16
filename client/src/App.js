import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import About from './components/About/About';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Fav from './components/Fav/Fav';
const EMAIL = "a@a.com"
const PASSWORD = "lala123"

function App() {
   const navigate = useNavigate();
   const [character, setCharacter] = useState([])
   const [access, setAccess] = useState(false)
   const [characters, setCharacters] = useState([]);

   function onClose(id) {
      const lista = characters.filter((character) => character.id !== id)
      return setCharacters(lista)
   }
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true)
         navigate('/home')
      } else {
         alert("contraseña erronea")
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
   return (
      <div className='App'>
         <Routes>
            <Route path='/' element={<Form login={login}></Form>} ></Route>
            <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:id' element={<Detail setCharacter={setCharacter} character={character} onSearch={onSearch} />} ></Route>
            <Route path='/fav' element={<Fav />}></Route>
         </Routes>
      </div>
   );

}

export default App;

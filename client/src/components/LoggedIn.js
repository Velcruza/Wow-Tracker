import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from './HomePage'
import CharacterPage from "./CharacterPage";


function LoggedIn({ setCurrentUser, currentUser }){
    const [currentCharacter, setCurrentCharacter] = useState();
    const [chars , setChars] = useState([]);
    return(
        <Routes>
            <Route path='/' element={<HomePage setChars={setChars} chars={chars} setCurrentUser={setCurrentUser} currentUser={currentUser} currentCharacter={currentCharacter} setCurrentCharacter={setCurrentCharacter}/>}/>
            <Route path='/character' element={<CharacterPage setCurrentCharacter={setCurrentCharacter} currentCharacter={currentCharacter} setChars={setChars}/>}/>
        </Routes>
    )
}

export default LoggedIn
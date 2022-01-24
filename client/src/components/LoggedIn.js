import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from './HomePage'
import CharacterPage from "./CharacterPage";


function LoggedIn({ setCurrentUser, currentUser }){
    const [currentCharacter, setCurrentCharacter] = useState();
    return(
        <Routes>
            <Route path='/' element={<HomePage setCurrentUser={setCurrentUser} currentUser={currentUser} currentCharacter={currentCharacter} setCurrentCharacter={setCurrentCharacter}/>}/>
            <Route path='/character' element={<CharacterPage currentCharacter={currentCharacter}/>}/>
        </Routes>
    )
}

export default LoggedIn
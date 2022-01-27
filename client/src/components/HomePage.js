import { useEffect, useState } from "react";
import AddCharacter from "./AddCharacter";
import CharacterCard from "./CharacterCard";

function HomePage ({setCurrentUser, currentUser, setCurrentCharacter, setChars, chars}) {
    const [show, setShow] = useState(false)
    const handleLogout = () => {
        setCurrentUser(null)
        fetch('/logout', { method: 'DELETE' })
    }
    useEffect(() => {
        fetch("/my_characters")
        .then(res => res.json())
        .then(data => setChars(data))
    }, [])
    const charList = chars.map(character => <CharacterCard character={character} key={character.id} setCurrentCharacter={setCurrentCharacter}/>)
    return (
        <>
        <button onClick={handleLogout} style={{float: 'right', marginRight: 10, height: '30px'}}>Logout</button>
        User: {currentUser.username} <br/>
        Bio: {currentUser.bio} <br/>
        Character list: 
        {charList}
        <button onClick={()=>setShow(true)}> Add character </button>
        <AddCharacter show={show} setShow={setShow} chars={chars} setChars={setChars} currentUser={currentUser}/>
        </>
    )
}

export default HomePage
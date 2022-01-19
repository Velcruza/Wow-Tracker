import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

function HomePage ({setCurrentUser, currentUser}) {
    const [chars , setChars] = useState([]);
    const handleLogout = () => {
        setCurrentUser(null)
        fetch('/logout', { method: 'DELETE' })
    }
    useEffect(() => {
        fetch("/my_characters")
        .then(res => res.json())
        .then(data => setChars(data))
    }, [])
    const charList = chars.map(character => <CharacterCard character={character} key={character.id}/>)
    return (
        <>
        <button onClick={handleLogout} style={{float: 'right', marginRight: 10, height: '30px'}}>Logout</button>
        User: {currentUser.username} <br/>
        Bio: {currentUser.bio} <br/>
        Character list: 
        {charList}
        </>
    )
}

export default HomePage
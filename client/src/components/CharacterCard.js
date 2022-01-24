import { useNavigate } from 'react-router-dom';

function CharacterCard ({character, setCurrentCharacter}) {
    let history = useNavigate()
    function handleClick () {
        history("/character")
        setCurrentCharacter(character)
    }
    return (
        <div onClick={handleClick}>
        {character.name}
        </div>
    )
}

export default CharacterCard
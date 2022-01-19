

function CharacterCard ({character}) {
    
    function handleClick () {
        fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=${character.realm}&name=${character.name}&fields=mythic_plus_best_runs%2Cmythic_plus_alternate_runs%2Cmythic_plus_scores`)
        .then(res => res.json())
        .then(data => console.log(data))
        fetch(`https://www.warcraftlogs.com:443/v1/rankings/character/${character.name}/${character.realm}/US?api_key=ea89d8e5fef89c915d635e33e2a90235`)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div onClick={handleClick}>
        {character.name}
        </div>
    )
}

export default CharacterCard
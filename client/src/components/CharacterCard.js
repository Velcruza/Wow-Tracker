import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CharacterCard ({character, setCurrentCharacter}) {
    let history = useNavigate()
    const [spec, setSpec] = useState()
    function handleClick () {
        history("/character")
        setCurrentCharacter(character)
    }
    useEffect(() => {
        fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=${character.realm}&name=${character.name}`)
        .then(res => res.json())
        .then(data => handleData(data))
    }, [])
    function handleData (data) {
        if(data.class === "Warrior") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936140080005918752/class_warrior.png")
        } else if(data.class === "Paladin") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936139982429622292/class_paladin.png")
        } else if(data.class === "Hunter") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936139917757648987/class_hunter.png")
        } else if(data.class === "Rogue") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936140021684137994/class_rogue.png")
        } else if(data.class === "Priest") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936140001073299466/class_priest.png")
        } else if(data.class === "Shaman") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936140041644806174/class_shaman.png")
        } else if(data.class === "Mage") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936139937676406784/class_mage.png")
        } else if(data.class === "Warlock") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936140061802635394/class_warlock.png")
        } else if(data.class === "Monk") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936139961315500042/class_monk.png")
        } else if(data.class === "Druid") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936139899042664469/class_druid.png")
        } else if(data.class === "Demon Hunter") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936139877886619678/class_demon-hunter.png")
        } else if(data.class === "Death Knight") {
            setSpec("https://cdn.discordapp.com/attachments/933215019422851093/936139856306921492/class_death-knight.png")
        }
    } 
    return (
        <tr className="character-card" onClick={handleClick}>
            <td><img className="boss-img" src={spec}/> {character.name}-{character.realm}</td>
        </tr>
    )
}

export default CharacterCard
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function CharacterPage ({currentCharacter, setChars}) {
    const [mistsTyr, setMistsTyr] = useState(0);
    const [mistsFort, setMistsFort] = useState(0);
    const [topTyr, setTopTyr] = useState(0);
    const [topFort, setTopFort] = useState(0);
    const [pfTyr, setPfTyr] = useState(0);
    const [pfFort, setPfFort] = useState(0);
    const [nwTyr, setNwTyr] = useState(0);
    const [nwFort, setNwFort] = useState(0);
    const [dosTyr, setDosTyr] = useState(0);
    const [dosFort, setDosFort] = useState(0);
    const [soaTyr, setSoaTyr] = useState(0);
    const [soaFort, setSoaFort] = useState(0);
    const [sdTyr, setSdTyr] = useState(0);
    const [sdFort, setSdFort] = useState(0);
    const [hoaTyr, setHoaTyr] = useState(0);
    const [hoaFort, setHoaFort] = useState(0);
    const [rio, setRio] = useState(0);
    const [tara, setTara] = useState(0);
    const [eye, setEye] = useState(0);
    const [nine, setNine] = useState(0);
    const [remnant, setRemnant] = useState(0);
    const [soul, setSoul] = useState(0);
    const [pain, setPain] = useState(0);
    const [guardian, setGuardian] = useState(0);
    const [fate, setFate] = useState(0);
    const [kt, setKt] = useState(0);
    const [sylv, setSylv] = useState(0);
    let history = useNavigate()

    useEffect(() => {
        fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=${currentCharacter.realm}&name=${currentCharacter.name}&fields=mythic_plus_best_runs%2Cmythic_plus_alternate_runs%2Cmythic_plus_scores`)
        .then(res => res.json())
        .then(data => handleDungeons(data))
        fetch(`https://www.warcraftlogs.com:443/v1/rankings/character/${currentCharacter.name}/${currentCharacter.realm}/US?api_key=ea89d8e5fef89c915d635e33e2a90235`)
        .then(res => res.json())
        .then(data => handleBosses(data))
    }, [])
    function handleBosses (data) {
        data.forEach(boss => {
            if(boss.encounterName === "The Tarragrue" && boss.difficulty === 4) {
                setTara(parseInt(boss.percentile))
            } else if (boss.encounterName === "Kel'Thuzad" && boss.difficulty === 4) {
                setKt(parseInt(boss.percentile))
            } else if (boss.encounterName === "The Nine" && boss.difficulty === 4) {
                setNine(parseInt(boss.percentile))
            } else if (boss.encounterName === "Painsmith Raznal" && boss.difficulty === 4) {
                setPain(parseInt(boss.percentile))
            } else if (boss.encounterName === "Fatescribe Roh-Kalo" && boss.difficulty === 4) {
                setFate(parseInt(boss.percentile))
            } else if (boss.encounterName === "Remnant of Ner'zhul" && boss.difficulty === 4) {
                setRemnant(parseInt(boss.percentile))
            } else if (boss.encounterName === "The Eye of the Jailer" && boss.difficulty === 4) {
                setEye(parseInt(boss.percentile))
            } else if (boss.encounterName === "Soulrender Dormazain" && boss.difficulty === 4) {
                setSoul(parseInt(boss.percentile))
            } else if (boss.encounterName === "Sylvanas Windrunner" && boss.difficulty === 4) {
                setSylv(parseInt(boss.percentile))
            } else if (boss.encounterName === "Guardian of the First Ones" && boss.difficulty === 4) {
                setGuardian(parseInt(boss.percentile))
            }
        })
    }
    function handleDungeons (data) {
        setRio(data.mythic_plus_scores.all)
        data.mythic_plus_best_runs.forEach(dungeon => {
            if(dungeon.short_name === "MISTS" && dungeon.affixes[0].name === "Tyrannical") {
                setMistsTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "MISTS" && dungeon.affixes[0].name === "Fortified") {
                setMistsFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "TOP" && dungeon.affixes[0].name === "Tyrannical") {
                setTopTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "TOP" && dungeon.affixes[0].name === "Fortified") {
                setTopFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "PF" && dungeon.affixes[0].name === "Tyrannical") {
                setPfTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "PF" && dungeon.affixes[0].name === "Fortified") {
                setPfFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "NW" && dungeon.affixes[0].name === "Tyrannical") {
                setNwTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "NW" && dungeon.affixes[0].name === "Fortified") {
                setNwFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "DOS" && dungeon.affixes[0].name === "Tyrannical") {
                setDosTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "DOS" && dungeon.affixes[0].name === "Fortified") {
                setDosFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "SOA" && dungeon.affixes[0].name === "Tyrannical") {
                setSoaTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "SOA" && dungeon.affixes[0].name === "Fortified") {
                setSoaFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "SD" && dungeon.affixes[0].name === "Tyrannical") {
                setSdTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "SD" && dungeon.affixes[0].name === "Fortified") {
                setSdFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "HOA" && dungeon.affixes[0].name === "Tyrannical") {
                setHoaTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "HOA" && dungeon.affixes[0].name === "Fortified") {
                setHoaFort(dungeon.mythic_level)
            }
        })
        data.mythic_plus_alternate_runs.forEach(dungeon => {
            if(dungeon.short_name === "MISTS" && dungeon.affixes[0].name === "Tyrannical") {
                setMistsTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "MISTS" && dungeon.affixes[0].name === "Fortified") {
                setMistsFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "TOP" && dungeon.affixes[0].name === "Tyrannical") {
                setTopTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "TOP" && dungeon.affixes[0].name === "Fortified") {
                setTopFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "PF" && dungeon.affixes[0].name === "Tyrannical") {
                setPfTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "PF" && dungeon.affixes[0].name === "Fortified") {
                setPfFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "NW" && dungeon.affixes[0].name === "Tyrannical") {
                setNwTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "NW" && dungeon.affixes[0].name === "Fortified") {
                setNwFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "DOS" && dungeon.affixes[0].name === "Tyrannical") {
                setDosTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "DOS" && dungeon.affixes[0].name === "Fortified") {
                setDosFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "SOA" && dungeon.affixes[0].name === "Tyrannical") {
                setSoaTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "SOA" && dungeon.affixes[0].name === "Fortified") {
                setSoaFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "SD" && dungeon.affixes[0].name === "Tyrannical") {
                setSdTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "SD" && dungeon.affixes[0].name === "Fortified") {
                setSdFort(dungeon.mythic_level)
            } else if(dungeon.short_name === "HOA" && dungeon.affixes[0].name === "Tyrannical") {
                setHoaTyr(dungeon.mythic_level)
            } else if(dungeon.short_name === "HOA" && dungeon.affixes[0].name === "Fortified") {
                setHoaFort(dungeon.mythic_level)
            }
        })
    }
    function handleRemove () {
        console.log(currentCharacter.id)
        fetch(`/characters/${currentCharacter.id}`, {method: 'DELETE'})
        fetch("/my_characters")
        .then(res => res.json())
        .then(data => setChars(data))
        history('/')
    }
    function handleReturn () {
        history('/')
    }
    return (
        <div className="character-page">
            <Button variant="primary" onClick={handleReturn}>Back To Homepage</Button> <br/>
            <br/>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>{currentCharacter.name}-{currentCharacter.realm}</th>
                        <th>{rio} score</th>
                    </tr>
                    <tr>
                        <th>Bio</th>
                        <th>{currentCharacter.bio}</th>
                    </tr>
                </thead>
            </Table>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Dungeon Name</th>
                        <th><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936136515657039933/achievement_boss_archaedas.png"/> Tyrannical</th>
                        <th><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936136535328325662/ability_toughness.png"/> Fortified</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936135592226484234/12290-icon.png" /> Mists of Tirna Scithe</td>
                        <td>{mistsTyr}</td>
                        <td>{mistsFort}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936135701756542996/12293-icon.png" /> Theater of Pain</td>
                        <td>{topTyr}</td>
                        <td>{topFort}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936135633703944243/12289-icon.png" /> Plaguefall</td>
                        <td>{pfTyr}</td>
                        <td>{pfFort}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936135613315424316/12286-icon.png" /> The Necrotic Wake</td>
                        <td>{nwTyr}</td>
                        <td>{nwFort}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936135550493159455/12291-icon.png" /> De Other Side</td>
                        <td>{dosTyr}</td>
                        <td>{dosFort}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936135671423315968/12285-icon.png" /> Spires of Ascension</td>
                        <td>{soaTyr}</td>
                        <td>{soaFort}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936135651798155285/12284-icon.png" /> Sanguine Depths</td>
                        <td>{sdTyr}</td>
                        <td>{sdFort}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936135570223136768/12287-icon.png" /> Halls of Atonement</td>
                        <td>{hoaTyr}</td>
                        <td>{hoaFort}</td>
                    </tr>
                </tbody>
            </Table>
            <br/>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Boss Name</th>
                        <th>Parse %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936133700767318026/2423-icon.png"/> The Tarragrue</td>
                        <td>{tara}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936134499664822322/2433-icon.png"/> The Eye of the Jailer</td>
                        <td>{eye}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936134522465054780/2429-icon.png"/> The Nine</td>
                        <td>{nine}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936134540727025684/2432-icon.png"/> Remnant of Ner'zhul</td>
                        <td>{remnant}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936134562256408606/2434-icon.png"/> Soulrender Dormazain</td>
                        <td>{soul}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936134578593214524/2430-icon.png"/> Painsmith Raznal</td>
                        <td>{pain}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936134594976161802/2436-icon.png"/> Guardian of the First Ones</td>
                        <td>{guardian}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936134621521932339/2431-icon.png"/> Fatescribe Roh-Kalo</td>
                        <td>{fate}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936134640291414076/2422-icon.png"/> Kel'Thuzad</td>
                        <td>{kt}</td>
                    </tr>
                    <tr>
                        <td><img className="boss-img" src="https://cdn.discordapp.com/attachments/933215019422851093/936134661657215017/2435-icon.png"/> Sylvanas Windrunner</td>
                        <td>{sylv}</td>
                    </tr>
                </tbody>
            </Table>
            <br/>
            <Button variant="danger" onClick={handleRemove}>Remove Character</Button><br/>
        </div>
    ) 
}

export default CharacterPage
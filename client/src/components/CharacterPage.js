import { useEffect, useState } from "react"


function CharacterPage ({currentCharacter}) {
    const [mistsTyr, setMistsTyr] = useState();
    const [mistsFort, setMistsFort] = useState();
    const [topTyr, setTopTyr] = useState();
    const [topFort, setTopFort] = useState();
    const [pfTyr, setPfTyr] = useState();
    const [pfFort, setPfFort] = useState();
    const [nwTyr, setNwTyr] = useState();
    const [nwFort, setNwFort] = useState();
    const [dosTyr, setDosTyr] = useState();
    const [dosFort, setDosFort] = useState();
    const [soaTyr, setSoaTyr] = useState();
    const [soaFort, setSoaFort] = useState();
    const [sdTyr, setSdTyr] = useState();
    const [sdFort, setSdFort] = useState();
    const [hoaTyr, setHoaTyr] = useState();
    const [hoaFort, setHoaFort] = useState();
    const [rio, setRio] = useState();
    const [tara, setTara] = useState();
    const [eye, setEye] = useState();
    const [nine, setNine] = useState();
    const [remnant, setRemnant] = useState();
    const [soul, setSoul] = useState();
    const [pain, setPain] = useState();
    const [guardian, setGuardian] = useState();
    const [fate, setFate] = useState();
    const [kt, setKt] = useState();
    const [sylv, setSylv] = useState();

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
    return (
        <div>
            {currentCharacter.name}-{currentCharacter.realm} -- {rio} score<br/>
            Mists | Tyr:  {mistsTyr} | Fort: {mistsFort}<br/>
            TOP | Tyr: {topTyr}  | Fort: {topFort}  <br/>
            PF | Tyr:  {pfTyr} | Fort: {pfFort}  <br/>
            NW | Tyr: {nwTyr} | Fort: {nwFort} <br/>
            DOS | Tyr: {dosTyr} | Fort: {dosFort} <br/>
            SOA | Tyr: {soaTyr} | Fort: {soaFort} <br/>
            SD | Tyr: {sdTyr} | Fort: {sdFort} <br/>
            HOA | Tyr: {hoaTyr} | Fort: {hoaFort} <br/>
            <br/>
            <br/>
            Tarra: {tara}<br/>
            Eye: {eye}<br/>
            Nine: {nine}<br/>
            Remnant: {remnant}<br/>
            Soulredner: {soul}<br/>
            Painsmith: {pain}<br/>
            Guardian: {guardian}<br/>
            Fatescribe: {fate}<br/>
            KT: {kt}<br/>
            Sylv: {sylv}<br/>
        </div>
    ) 
}

export default CharacterPage
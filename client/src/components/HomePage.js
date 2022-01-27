import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react";
import AddCharacter from "./AddCharacter";
import CharacterCard from "./CharacterCard";
import Table from 'react-bootstrap/Table'

function HomePage ({setCurrentUser, currentUser, setCurrentCharacter, setChars, chars}) {
    const [show, setShow] = useState(false)
    const [editShow, setEditShow] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        bio: ''
    })
    const handleLogout = () => {
        setCurrentUser(null)
        fetch('/logout', { method: 'DELETE' })
    }
    useEffect(() => {
        fetch("/my_characters")
        .then(res => res.json())
        .then(data => setChars(data))
    }, [])
    const handleFormChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    function handleClose () {
        setEditShow(false)
        setFormData({
            name: '',
            bio: ''
        })
    }
    function handleSubmit (e) {
        e.preventDefault()
        fetch(`users/${currentUser.id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => setCurrentUser(data))
        setEditShow(false)
    }
    const charList = chars.map(character => <CharacterCard character={character} key={character.id} setCurrentCharacter={setCurrentCharacter}/>)
    return (
        <div className="homepage">
        <Button variant="danger" onClick={handleLogout} style={{float: 'right', marginRight: 10}}>Logout</Button>
        <br/>
        <br/>
        <Table striped bordered hover size="sm" variant="dark">
            <thead>
                <tr>
                    <th>User: {currentUser.username}</th>
                </tr>
                <tr>
                    <th>Bio: {currentUser.bio}</th>
                </tr>
            </thead>
        </Table>
        <Table striped bordered hover size="sm" variant="dark">
            <thead>
                <tr>
                    <th>Character List</th>
                </tr>
            </thead>
            <tbody>
                {charList}
            </tbody>
        </Table>
        <br/>
        <Button onClick={()=>setShow(true)}> Add character </Button>
        <AddCharacter show={show} setShow={setShow} chars={chars} setChars={setChars} currentUser={currentUser}/>
        <br/>
        <br/>
        <Button onClick={()=>setEditShow(true)}>Edit profile</Button>
        <Modal show={editShow} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleFormChange}
                    placeholder={currentUser.username}
                    />
                <Form.Label>Bio</Form.Label>
                <Form.Control
                    type="text"
                    id="bio"
                    value={formData.bio}
                    onChange={handleFormChange}
                    placeholder={currentUser.bio}
                    />
                <Button variant="success" type="submit">Add</Button>
            </Form>
        </Modal>
        </div>
    )
}

export default HomePage
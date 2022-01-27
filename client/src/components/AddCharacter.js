import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react"

function AddCharacter ({show, setShow, setChars, chars, currentUser}) {
    const [formData, setFormData] = useState({
        name: '',
        realm: '',
        bio: ''
    })
    function handleClose () {
        setShow(false)
        setFormData({
            name: '',
            realm: '',
            bio: ''
        })
    }
    const handleFormChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    function handleSubmit (e) {
        e.preventDefault()
        setChars([...chars, formData])
        fetch('/characters', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFormData({
                name: '',
                realm: '',
                bio: ''
            })
            fetch('user_characters', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({user_id: currentUser.id, character_id: data.id})
            })
        })
        setShow(false)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>Add Character</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                <Form.Label>Character Name</Form.Label>
                    <Form.Control
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    />
                <Form.Label>Character Realm</Form.Label>
                    <Form.Control
                    type="text"
                    id="realm"
                    value={formData.realm}
                    onChange={handleFormChange}
                    />
                <Form.Label>Character Bio & Contact Info</Form.Label>
                    <Form.Control
                    type="text"
                    id="bio"
                    value={formData.bio}
                    onChange={handleFormChange}
                    />
                <Button variant="success" type="submit">Add</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddCharacter
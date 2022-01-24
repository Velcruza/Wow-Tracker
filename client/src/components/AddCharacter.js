import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react"

function AddCharacter ({show, setShow}) {
    const [formData, setFormData] = useState({
        name: '',
        realm: ''
    })
    function handleClose () {
        setShow(false)
        setFormData({
            name: '',
            realm: ''
        })
    }
    const handleFormChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    function handleSubmit () {
        console.log("yey")
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
                <Button variant="success" type="submit">Add</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddCharacter
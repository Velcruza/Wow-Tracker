import { useEffect, useState } from "react"
import Message from "./Message"
import Table from 'react-bootstrap/Table'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

function Chat ({currentUser}) {
    const [messages, setMessages] = useState([])
    let history = useNavigate()
    const [value, setValue] = useState();
    useEffect(() => {
        fetch('/messages')
        .then(res => res.json())
        .then(data => setMessages(data))
    }, [])
    function handleReturn () {
        history('/')
    }
    const handleChange = (event) => {
        setValue(event.target.value);   
    }
    function handleSend (ev) {
        if(ev.key === 'Enter') {
            const messageObj = {
                text: ev.target.value,
                user_id: currentUser.id
            }
            fetch(`/messages`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(messageObj)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMessages([...messages, data])
                setValue("")
            })
        }
    }
    const messageList = messages.map(message => <Message message={message}/>)
    return (
        <div>
            <Button variant="primary" onClick={handleReturn}>Back To Homepage</Button> <br/> <br/>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Messages</th>
                    </tr>
                </thead>
                <tbody>
                    {messageList}
                </tbody>
                <tbody>
                    <tr>
                    <br/>
                    <TextField
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Send Message"
                    multiline
                    maxRows={1}
                    value={value}
                    onChange={handleChange}
                    onKeyPress={handleSend}
                    />
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Chat 
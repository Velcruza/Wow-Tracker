
function Message ({message}) {
    return (
        <tr>
            <td>{message.user.username} says: {message.text}</td>
        </tr>
    )
}

export default Message
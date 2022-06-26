const socket = io()

const messageForm = document.querySelector('#messageForm')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagesPoolm = document.querySelector('#messagesPool')

function sendMessage(messageInfo) {
    socket.emit('client:message', messageInfo)
}

function renderMessage(messageInfo) {
    
}

messageForm.addEventListener('submit', event => {
    event.preventDefault()

    const messageInfo = { username: usernameInput.value, message: messageInput.value }

    sendMessage(messageInfo)
})

socket.on('server:mensajes', renderMessage)
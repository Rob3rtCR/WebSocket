const express = require ('express')
const { Server: IOServer } = require('socket.io')
const path = require('path')
const { Socket } = require('dgram')
const app = express()
const expressServer = app.listen(8080, () => console.log('sevidor escuchando puerto 8080'))
const io = new IOServer(expressServer)
const messageArray = []

app.use(express.static(path.join(__dirname, '../public')))

io.on('connection', socket => {
    console.log(`Se conecto un usuario: ${socket.id}`)
    
    socket.on('client:message', messageInfo => {
        messageArray.push(messageInfo)

        io.emit('server:mensajes', messageArray)
    })
})
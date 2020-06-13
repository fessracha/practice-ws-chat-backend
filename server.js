const Ws = require('ws')

const server = new Ws.Server({ port: 3000 })

server.on('connection', wsConnect => {
    wsConnect.on('message', message => {
        server.clients.forEach(client => {
            if (client.readyState === Ws.OPEN) {
                client.send(message)
            }
        })
    })
})

console.log('server init')
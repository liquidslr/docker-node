const express = require('express')
const http = require('http')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const app = express()

const models = require('./app/models')

const server = http.createServer(app)

models.sequelize.sync().then(() => {
  server.listen(process.env.PORT || 5000)
})

/* For generating session */
let myStore = new SequelizeStore({
  db: models.sequelize,
  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
  expiration: 24 * 60 * 60 * 1000 // The maximum age (in milliseconds) of a valid session.
})

app.use(
  session({
    key: 'user_sid',
    secret: 'secretkey',
    store: myStore,
    resave: false,
    proxy: true
  })
)

myStore.sync()

// app.set('port', process.env.PORT || 5000)
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
  response.send('Hello World!')
})
app.get('/api', function (request, response) {
  response.send('Hello World!')
})

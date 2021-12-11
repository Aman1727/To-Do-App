let express = require('express')
let todoController = require('./controllers/todoController')

// express is a function which will return the object so fire that and store in the app variable
let app = express()

// Set up the template engine
app.set('view engine', 'ejs');

// Static Files 
app.use(express.static('./public'))


//Fire Controllers
todoController(app)


// listen to a port
app.listen(3000)
console.log('You are listening to port 3000 ...')


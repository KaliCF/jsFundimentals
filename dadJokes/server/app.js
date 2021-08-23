require('dotenv').config(); //configures our app to use an env file.

const { response } = require('express');
const Express = require('express'); //import the express framework
const controllers = require('./controllers');
const app = Express(); //make a local instance of the framework

app.use(Express.json());

app.use(Express.static(__dirname + '/public')); //serving a static file

app.get('/', (request, response) => response.render('index')); //http://localhost:4000/

const controller = require(`./controllers`);
app.use(`/joke`, controllers.jokeController)

app.use('/user', controllers.userController)

//app.get('/joke', (req, res) => res.send("I'm so punny"));

app.listen(process.env.PORT, () => {
    console.log(`[server]: App is listening on ${process.env.PORT}`)
})//how our app "listen", or run, on a specific port.
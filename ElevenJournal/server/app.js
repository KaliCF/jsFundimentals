require('dotenv').config();

const Express = require('express'); //Here we require the use of the express npm package that we've installed in our dependencies.
const app = Express(); //We create an instance of express. We're actually firing off a top-level express function, a function exported by the Express module. This allows us to create an Express app.

const dbConnection = require("./db");

app.use(require('./middleware/headers'));

const controllers = require("./controllers");

app.use('/test', (req, res) => { //creates endpoint
    res.send(`This is a message from the endpoint on the server!`)
});// res handles packaging up the response object, the .send() does the job of sending off the response.

//will use express to start a UNIX socket and listen for connections on the given path. The given path is localhost:3000 indicated by the parameter of 3000.
//We call an anonymous callback function when the connection happens with a simple . This allows us to see a message with the port that the server is running on.

app.use(Express.json());
// app.use(require('./middleware/validate-jwt'));
app.use("/journal", controllers.journalController);
app.use('/user', controllers.userController);


dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[server]: App is listening on 3000.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });


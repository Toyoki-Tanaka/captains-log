require('dotenv').config();
const express = require('express');
const app = express();
const Logs = require('./models/logs')
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const methodOverride = require('method-override')
/// Database Connection

//... and then farther down the file
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})

//////


const jsxViewEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());

app.use((req, res, next) => {
    console.log(("Middleware: I run for all routes"));
    next();
});

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));



// Seed Route

app.get('/logs/seed', async (req, res) => {
    try {
        await Logs.create([
            {
                title: "Benjamin",
                entry: "My day",
                shipIsBroken: false
            }
        ])
    }
    catch (err) {
        res.status(400).send(err)
    }
})





// New route
app.get('/logs/new', async (req, res) => {
    try {
        res.render('New')
    } catch (err) {
        res.status(400).send(err)
    }
})

// Create route

app.post('/logs', async (req, res) => {
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false
        const createdLogs = await Logs.create(req.body)
        res.status(201).redirect('/logs/new')
    } catch (err) {
        res.status(400).send(err)
    }
})










app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
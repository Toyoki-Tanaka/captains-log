require('dotenv').config();
const express = require('express');
const app = express();
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


app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));




// New route
app.get('/logs/new', async (req, res) => {
    try {
        res.render('New')
    } catch (err) {
        res.status(400).send(err)
    }
})











app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
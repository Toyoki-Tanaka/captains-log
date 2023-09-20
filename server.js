require('dotenv').config()
const express = require('express')
const app = express();
const Logs = require('./models/logs')
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const logsRouter = require('./controllers/logs')
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



app.use('/', logsRouter)






app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
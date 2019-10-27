const express    = require('express');
const exphbs     = require('express-handlebars');
const bodyParser = require('body-parser');
const path       = require('path');

// database
const db = require('./config/database');

// test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: '+err));

const app = express();

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// index route 
app.get('/', (req,res) => res.render('index', {layout: 'landing'}));

// gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))
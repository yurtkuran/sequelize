const express    = require('express');
const router     = express.Router();
const db         = require('../config/database');
const Gig        = require('../models/gigs');
const Sequelize  = require('sequelize');
const Op         = Sequelize.Op;

// get gig list
router.get('/', (req, res) => 
    Gig.findAll()
        .then(gigs => res.render('gigs', { gigs }))
        .catch(err => console.log(err)));

// display add gig form
router.get('/add', (req, res) => res.render('add'));


// add gig
router.post('/add', (req, res) => {

    let {title, technologies, budget, description, contact_email} = req.body;
    let errors = [];

    // validate fields
    if(!title) {
        errors.push({ text : 'Please add a title'})
    };
    if(!technologies) {
        errors.push({ text : 'Please add some technologies'})
    };
    if(!description) {
        errors.push({ text : 'Please add a description'})
    };
    if(!contact_email) {
        errors.push({ text : 'Please add a contact email'})
    };

    // check for errors
    if (errors.length > 0) {
        res.render('add', {
            errors,
            title, 
            technologies, 
            budget, 
            description, 
            contact_email
        });
    } else {
        
        if(!budget) {
            budget = 'Unknown';
        } else {
            budget = `$${budget}`;
        }

        // make technologies lower case and remove spaces after comma
        technologies = technologies.toLowerCase().replace(/, /g, ',');

        Gig.create({
            title,
            technologies,
            description,
            budget,
            contact_email
        })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err));
    }
});

// search for gigs
router.get('/search', (req, res) => {
    let { term } = req.query;

    // make lowercase
    term = term.toLowerCase();
    
    Gig.findAll({ where: { technologies: { [Op.like]: '%' + term + '%' } } })
        .then(gigs => res.render('gigs', { gigs }))
        .catch(err => console.log(err));
});

module.exports = router;
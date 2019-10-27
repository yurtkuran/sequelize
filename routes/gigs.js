const express = require('express');
const router  = express.Router();
const db      = require('../config/database');
const Gig     = require('../models/gigs');

// get gig list
router.get('/', (req, res) => 
    Gig.findAll()
        .then(gigs => {
            res.render('gigs', {
                gigs
            });
        })
        .catch(err => console.log(err)) );

// display add gig form
router.get('/add', (req, res) => res.render('add'));


// add gig
router.post('/add', (req, res) => {
    const data = {
        title:         'this is a test',
        technologies:  'react, js, html, node',
        budget:        '$800',
        description:   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo voluptatum facere accusamus, dolores deserunt quasi at nihil vero cumque dolore ducimus soluta nam quam consectetur temporibus quae mollitia impedit odit assumenda quisquam. Assumenda libero quasi a maxime optio alias in temporibus rerum deserunt quisquam voluptate eum cum est dolore minus consectetur labore, illum sequi esse nobis voluptatem amet laborum nihil. Culpa possimus unde, mollitia nisi repudiandae voluptatibus doloremque! Quidem temporibus porro quod, recusandae excepturi reprehenderit quia? Fugit ipsam tenetur quasi rerum temporibus nobis, in eaque nemo natus voluptate odit, dolore sint sit! Impedit explicabo ipsa ab in excepturi commodi, quisquam, qui suscipit earum ut porro corrupti aperiam quos natus molestias dolore distinctio saepe quo soluta possimus. Adipisci, odit consequuntur! Sit quam minus, earum, quos sequi quod amet vitae doloribus eius molestiae eos soluta harum enim consequatur aliquid ullam fugit corrupti voluptatibus placeat mollitia cum dignissimos. Inventore dolorum saepe quam ad rerum, distinctio nulla sit ipsam? Ut voluptatibus sit dolorem illo similique distinctio maxime animi tempore, nulla cum, magnam sunt error. Nisi totam repudiandae, id inventore cumque animi blanditiis modi delectus nobis quod quisquam explicabo ea ut culpa repellendus necessitatibus iste minus debitis consequuntur accusamus tempora labore laudantium. Sed, placeat.',
        contact_email: 'user1@gmail.com'
    }

    let {title, technologies, budget, description, contact_email} = data;

    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});


module.exports = router;
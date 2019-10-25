const Sequelize  = require('sequelize');
const db = require('../config/database');

class Gig extends Model {};

Gig.init({
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
}, { sequelize, modelName: 'gig' });

module.exports = Gig;
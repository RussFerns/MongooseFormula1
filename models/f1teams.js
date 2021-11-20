const mongoose = require('mongoose');

const f1teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sponsor: {
        type: String,
        required: false
    },
    chassis: {
        type: String,
        required: false
    },
    ranking: {
        type: Number,
        required: false
    },
    engine: {
        type: String,
        required: true
    },
    tires: {
        type: String,
        required: true
    },
    principal: {
        type: String,
        required: true
    },
    driver1: {
        name: {
            type: String,
            required: true
        },
        num : {
            type: String,
            required: true
        },
        points : {
            type: Number,
            required: false
        }
    },
    driver2: {
        name: {
            type: String,
            required: true
        },
        num : {
            type: String,
            required: true
        },
        points : {
            type: Number,
            required: false
        }
    }, 
    category: {
        type: String,
        required: false,
        lowercase: true,
        enum: ['top-team', 'mid-field', 'back-marker']
    }
})

const F1Team = mongoose.model('F1Team', f1teamSchema);

module.exports = F1Team;
const mongoose = require('mongoose')
//OPtional Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema ({
    airline: String,
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: { 
        type: Number,
        min: 10, 
        max: 9999
    },
    departs: Date 
})

module.exports = mongoose.model('Flight', flightSchema)
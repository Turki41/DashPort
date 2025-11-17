import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    name: {type: String, required: true},
    sub: {type: String, required: true},
    date: {type: String, required: false, default: ''},
    num: {type: String, reuired: false, default: null}
})

const Certificate = mongoose.model('Certificate', certificateSchema)

export default Certificate
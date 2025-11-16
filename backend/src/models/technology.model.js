import mongoose from 'mongoose'

const technologySchema = new mongoose.Schema({
    label: {type: String, required: true},
    name: {type: String, required: true},
    library: {type: String, required: true}
}, {timestamps: true})

const Technology = mongoose.model('Technology', technologySchema)

export default Technology
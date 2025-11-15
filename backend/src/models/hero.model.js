import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    links: {
        type: [{
            label: { type: String, required: true },
            url: { type: String, required: true }
        }], required: true
    }
}, { timestamps: true })

const Hero = mongoose.model('Hero', heroSchema)

export default Hero
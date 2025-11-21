import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    links: { type: [String], required: true }
}, { timestamps: true })

const Hero = mongoose.model('Hero', heroSchema)

export default Hero
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: [String], required: true },
    siteUrl: { type: String, required: true },
    img: { type: String, required: true }, // the secure url used to display the image from cloudinary.
    imgId: { type: String, required: true } // the image id used for deleting the image from cloudinary when its no longer needed.
}, { timestamps: true })

const Project = mongoose.model('Project', projectSchema)

export default Project
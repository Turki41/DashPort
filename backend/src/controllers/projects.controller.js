import Project from "../models/project.model.js"
import cloudinary from "../utils/cloudinary.js"

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find()

        if (projects.length === 0) {
            console.log('No Projects found')
            return res.status(404).json({ message: 'No Projects found' })
        }

        return res.status(200).json({ projects })

    } catch (error) {
        console.log('Error in getProjects controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const createProject = async (req, res) => {
    try {
        const { title, description, techStack, siteUrl, img } = req.body

        if (!title || !description || !siteUrl || !img) {
            return res.status(400).json({ message: 'Please fill all fields' })
        }

        if (!Array.isArray(techStack) || !techStack.every((tech) => typeof tech === 'string')) {
            return res.status(400).json({ message: 'Invalid inputs' })
        }

        const uploadImage = await cloudinary.uploader.upload(img, { folder: 'Projects_thumbnails' })

        const project = await Project.create({
            title,
            description,
            techStack,
            siteUrl,
            img: uploadImage.secure_url,
            imgId: uploadImage.public_id
        })

        return res.status(201).json({ project })

    } catch (error) {
        console.log('Error in createProject controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const editProject = async (req, res) => {
    try {
        const { projectId } = req.params
        const { title, description, techStack, siteUrl, img } = req.body

        if (!Array.isArray(techStack) || !techStack.every((tech) => typeof tech === 'string')) {
            return res.status(400).json({ message: 'Invalid inputs' })
        }

        const project = await Project.findById(projectId)

        if (!project) {
            return res.status(404).json({ message: 'No Project found' })
        }

        let Image = project.img
        let ImageId = project.imgId

        if (img) {
            await cloudinary.uploader.destroy(project.imgId) // delete old image 

            const newImage = await cloudinary.uploader.upload(img, { folder: 'Projects_thumbnails' }) // upload new image
            Image = newImage.secure_url
            ImageId = newImage.public_id
        }

        project.title = title || project.title
        project.description = description || project.description
        project.techStack = techStack || project.techStack
        project.siteUrl = siteUrl || project.siteUrl
        project.img = Image
        project.imgId = ImageId

        const updatedProject = await project.save()

        return res.status(200).json({ updatedProject })

    } catch (error) {
        console.log('Error in editProject controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const deleteProject = async (req, res) => {
    try {
        const {projectId} = req.params

        const project = await Project.findByIdAndDelete(projectId)

        if(!project) {
            return res.status(404).json({message: 'invalid projectId'})
        }

        return res.status(200).json({message: 'Project deleted successfully'})
        
    } catch (error) {
          console.log('Error in deleteProject controller', error.message)
        return res.status(500).json({ message: 'Internal server error' }) 
    }
}
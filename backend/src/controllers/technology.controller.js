import Technology from "../models/technology.model.js"

export const getTechnologies = async (req, res) => {
    try {
        const technologies = await Technology.find()

        if (technologies.length === 0) {
            console.log('No technologies found')
            return res.status(404).json({ message: 'No technologies found' })
        }

        return res.status(200).json({ technologies })

    } catch (error) {
        console.log('Error in getTechnologies controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const createTechnology = async (req, res) => {
    try {
        const { label, name, library, color } = req.body

        if (!label || !name || !library || !color) {
            console.log('missing values in create tech')
            return res.status(400).json({ message: 'Please fill all fields' })
        }

        const technology = await Technology.create({
            label,
            name,
            library,
            color
        })

        return res.status(201).json({ technology })

    } catch (error) {
        console.log('Error in createTechnology controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const editTechnology = async (req, res) => {
    try {
        const { techId } = req.params
        const { label, name, library, color } = req.body

        const tech = await Technology.findById(techId)

        if (!tech) {
            console.log('Invalid techId')
            return res.status(400).json({ message: 'Technology not found' })
        }

        tech.label = label || tech.label
        tech.name = name || tech.name
        tech.library = library || tech.library
        tech.color = color || tech.color

        const updatedTech = await tech.save()

        return res.status(200).json({ updatedTech })

    } catch (error) {
        console.log('Error in editTechnology controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const deleteTechnology = async (req, res) => {
    try {
        const { techId } = req.params

        const tech = await Technology.findByIdAndDelete(techId)

        if (!tech) {
            console.log('Invalid techId')
            return res.status(400).json({ message: 'Technology not found' })
        }

        return res.status(200).json({ message: 'Technology deleted successfully' })

    } catch (error) {
        console.log('Error in deleteTechnology controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}
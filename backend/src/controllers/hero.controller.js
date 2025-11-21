import Hero from "../models/hero.model.js"

export const getHero = async (req, res) => {
    try {
        const hero = await Hero.findOne()

        if (!hero) {
            console.log('No hero found')
            return res.status(404).json({ message: 'No hero found' })
        }

        return res.status(200).json({ hero })

    } catch (error) {
        console.log('Error in getHero contoller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const createHero = async (req, res) => {
    try {
        const { name, title, description, links } = req.body

        if (!name || !title || !description || !links) {
            console.log('All fields are required')
            return res.status(400).json({ message: 'Please fill all fields' })
        }

        if (!Array.isArray(links)) {
            console.log('Links should be an array of labels and urls')
            return res.status(400).json({ message: 'Invalid input' })
        }

        const hero = await Hero.create({
            name,
            title,
            description,
            links
        })

        return res.status(201).json({ hero })

    } catch (error) {
        console.log('Error in createHero controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const editHero = async (req, res) => {
    try {
        const { heroId } = req.params
        const { name, title, description, links } = req.body

        if (!heroId) {
            console.log('no heroId found')
            return res.status(404).json({ message: 'Invalid input' })
        }

        const hero = await Hero.findById(heroId)

        if (!hero) {
            console.log('no hero found')
            return res.status(404).json({ message: 'Invalid input' })
        }

        hero.name = name || hero.name
        hero.title = title || hero.title
        hero.description = description || hero.description
        hero.links = links || hero.links

        const updatedHero = await hero.save()

        return res.status(200).json({ updatedHero })

    } catch (error) {
        console.log('Error in editHero controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}
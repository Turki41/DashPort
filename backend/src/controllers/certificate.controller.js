import Certificate from "../models/certificate.model.js"

export const getCertificates = async (req, res) => {
    try {
        const certs = await Certificate.find()

        if (certs.length === 0) {
            console.log('No certificates found')
            return res.status(404).json({ message: 'No certificates found' })
        }

        return res.status(200).json({ certs })

    } catch (error) {
        console.log('Error in getCertificates controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const createCertificate = async (req, res) => {
    try {
        const { name, sub, date, num } = req.body

        if (!name, !sub) {
            console.log('name and sub are required to create certificate')
            return res.status(400).json({ message: 'Please fill all required fields' })
        }

        const certificate = await Certificate.create({
            name,
            sub,
            date,
            num
        })

        return res.status(201).json({ certificate })

    } catch (error) {
        console.log('Error in createCertificate controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const editCertificate = async (req, res) => {
    try {
        const { certId } = req.params
        const { name, sub, date, num } = req.body

        const certificate = await Certificate.findById(certId)

        if (!certificate) {
            console.log('Invalid certId')
            return res.status(404).json({ message: 'Certificate not found' })
        }

        certificate.name = name || certificate.name
        certificate.sub = sub || certificate.sub
        certificate.date = date || certificate.date
        certificate.num = num || certificate.num

        const updatedCertificate = await certificate.save()

        return res.status(200).json({ updatedCertificate })

    } catch (error) {
        console.log('Error in editCertificate controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const deleteCertificate = async (req, res) => {
    try {
        const { certId } = req.params

        const certificate = await Certificate.findByIdAndDelete(certId)

        if (!certificate) {
            console.log('Invalid certId')
            return res.status(404).json({ message: 'Certificate not found' })
        }

        return res.status(200).json({ message: 'Certificate deleted successfully' })
    } catch (error) {
        console.log('Error in deleteCertificate controller', error.message)
        return res.status(500).json({ message: 'Internal server error' })
    }
}
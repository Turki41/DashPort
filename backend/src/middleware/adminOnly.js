export const adminOnly = async (req, res, next) => {
    try {
        const {role} = req.user

        if(!role || role !== process.env.R) {
            console.log('Unauthorized: adminOnly')
            res.status(403).json({message: 'Unauthorized'})
        }

       next()
    } catch (error) {
        console.log('Error in adminOnly middleware')
        return res.status(500).json({message: 'Internal server error'})
    }
}
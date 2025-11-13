import jwt from 'jsonwebtoken'

const generateTokenAndSetCookies = (res, user) => {

    const tokenExpiry = user.role === process.env.R ? '30d' : '5m' // 5 minutes
    const cookieExpiry = user.role === process.env.R ? 30 * 24 * 60 * 60 * 1000 : 5 * 60 * 1000 // 5 minutes

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: tokenExpiry
    })

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: cookieExpiry, 
        path: '/', // visible for all routes
    })
}

export default generateTokenAndSetCookies
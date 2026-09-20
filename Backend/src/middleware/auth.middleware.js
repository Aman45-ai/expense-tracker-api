import jwt from 'jsonwebtoken'
import config from '../config/config.js'


const authMiddleware = (req, res, next) => {
    const authorization = req.header("Authorization")
    let token
    if (authorization) {
        const parts = authorization.split(" ")
        token = parts[1]
    }else{
        return res.status(401).send("Authorisation Unavailable")
    }
    try {
        const verification = jwt.verify(token, config.JWT_SECRET)
        req.userId = verification.userId
        next()
    } catch (error) {
        console.log("Error in verifying token", error)
        res.status(401).send("Token is not valid")
    }
}

export default authMiddleware
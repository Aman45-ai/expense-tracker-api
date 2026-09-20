import User from "../model/auth.model.js"
import bcrypt from 'bcrypt'
import config from "../config/config.js"
import jwt from 'jsonwebtoken'

const signup = async (req, res) => {
    try {
        const { email, password } = req.body

        const emailCheck = await User.findOne({
            email
        })

        if (emailCheck !== null) {
            return res.status(400).send("Email is already regestered with us")
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (!passwordRegex.test(password)) {
            return res.status(400).send("Password must contain At least 8 characters, At least 1 lowercase letter, At least 1 uppercase letter, At least 1 number and At least 1 special character")
        }

        const passwordHash = await bcrypt.hash(password, 10)
        await User.create({
            email,
            password: passwordHash
        })
        res.status(201).send("User regesterd Successfully")

    } catch (error) {
        console.log("Error in signingup", error)
        res.status(500).send("Internal Server Error")
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const emailMatch = await User.findOne({
            email
        })

        let passwordMatch

        if (emailMatch !== null) {
            passwordMatch = await bcrypt.compare(password, emailMatch.password)
        } else {
            return res.status(404).send("Invalid Credential")
        }

        if (passwordMatch) {
            const refreshToken = jwt.sign({ userId: emailMatch._id }, config.JWT_REFRESH_SECRET, { expiresIn: '7d' })
            const accessToken = jwt.sign({ userId: emailMatch._id }, config.JWT_SECRET, { expiresIn: '2h' })
            res.status(200).send({
                message: "Login Sucessfull",
                accessToken,
                refreshToken
            })
        } else {
            res.status(400).send("Please enter correct credentials")
        }

    } catch (error) {
        console.log("Error in logging in", error)
        res.status(500).send("Internal Server Error")
    }
}

const newToken = async (req, res) => {
    const refreshToken = req.header('Authorization')

    let token

    if (refreshToken) {
        const parts = refreshToken.split(" ")
        token = parts[1]
    }

    try {
        const verification = jwt.verify(token, config.JWT_REFRESH_SECRET)
        const generateAccessToken = jwt.sign({userId: verification.userId},config.JWT_SECRET,{expiresIn:'2h'})
        res.status(200).send({
                message: "New Access Token generated",
                accessToken: generateAccessToken
            })
    }catch(error){
        console.log("Error in generating access token",error)
        res.status(500).send("Internal Server Error")
    }
    
}

export default { signup, login, newToken }
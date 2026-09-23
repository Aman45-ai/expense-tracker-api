import app from "./src/app.js"
import cookieParser from "cookie-parser"

let port = 3000

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
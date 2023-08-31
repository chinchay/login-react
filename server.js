const express = require("express")
const app = express()

const cors = require("cors")
app.use( cors() )

app.use(
    "/login", (req, res) => {
        res.send(
            {
                token: "test123"
            }
        )
    }
)

app.listen(
    8123, () => console.log( "My API is running on http://localhost:8123/login" )
)
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3003
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(PORT, () => {
    console.log(`digoreng dadakan ${PORT}an`)
})
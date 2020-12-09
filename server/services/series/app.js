const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002
const router = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(PORT, () => {
    console.log(`digoreng dadakan ${PORT}an`)
})
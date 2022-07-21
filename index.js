if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const path = require("path");

//setting path
app.set('views', path.join(__dirname, 'views'))

//setting view engine to ejs
app.set('view engine', 'ejs')

//serving static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})
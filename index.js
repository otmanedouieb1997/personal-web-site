const express = require('express')
const ejs = require('ejs')
const fs = require('fs')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

const data = () => {
    let data = fs.readFileSync('./data/data.json','utf-8')
    data = JSON.parse(data)
    console.log(data[0].menu.length)
    return data
}

app.get('/', (req, res) => {
    let data1 = data()
    res.render('home',{data1})
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
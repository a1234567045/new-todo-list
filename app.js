const express = require('express')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const routes = require('./routes')
const PORT = process.env.PORT || 3000

require('./config/mongoose')

const app = express()


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})


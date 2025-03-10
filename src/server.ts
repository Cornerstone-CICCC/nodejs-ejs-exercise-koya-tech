// This is your server file :)
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

// Set EJS as view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))

// Serve static files from the public directory (located in dist)
app.use(express.static(path.join(__dirname, '../dist/public')))

// Import and mount routes
import homeRouter from './routes/home'
import aboutRouter from './routes/about'
import contactRouter from './routes/contact'

app.use('/', homeRouter)
app.use('/about', aboutRouter)
app.use('/contact', contactRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
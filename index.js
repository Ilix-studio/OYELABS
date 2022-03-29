const express = require('express');
const connectDB = require('./config/db');
const app = express()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listensing to http://localhost:5000`)
})

app.get('/', (req, res) => {
    res.status(200).send('Route ON');
})

//use middleare
app.use(express.json({ extented: false }));

//Routes
app.use('/api/customer', require('./routes/api/customerAPI'));
app.use('/api/student', require('./routes/api/studentAPI'));
app.use('/api/user', require('./routes/api/userAPI'));


//mongoDB
connectDB();
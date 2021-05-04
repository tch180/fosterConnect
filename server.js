const express = require('express');
const connectDB = require('./config/db');




//const path = require('path');

// express & bodyParser
const app = express();

// Connect DB
connectDB()









//init middleware
app.use(express.json({ extended: false }));

//ROUTES
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/admin', require('./routes/adminRoutes/Users'))

//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));

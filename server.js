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
app.use('/api/admin/users', require('./routes/adminRoutes/Users'))
app.use('/api/admin/post', require('./routes/adminRoutes/Posts'))

app.use('/api/posts', require('./routes/posts'))

//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));

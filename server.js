const express = require('express');
const connectDB = require('./config/db');
const User = require('./models/User')
const Post = require('./models/Post')
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')
const AdminBroMongoose = require('@admin-bro/mongoose')

AdminBro.registerAdapter(AdminBroMongoose)



//const path = require('path');

// express & bodyParser
const app = express();

// Connect DB
connectDB()



const adminBro = new AdminBro({
 
  resources: [User, Post],
  rootPath: '/admin',
})

const router = AdminBroExpressjs.buildRouter(adminBro)



//init middleware
app.use(express.json({ extended: false }));
app.use(adminBro.options.rootPath, router)



//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is up and running on ${PORT}\n adminBro is under localhost:8080/admin`));

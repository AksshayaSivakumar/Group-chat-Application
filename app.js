const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

dotenv.config();
const sequelize=require('./util/database.js');

const userRoutes = require('./routes/userRoute');
const chatRoutes = require('./routes/chatRoute');

const User = require('./models/user');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors({
    origin: '*',
    methods:['GET','POST'],
  
  }));
app.use(express.static('public'));
app.use(express.json());
io.on('connection', (socket) => {
    console.log('a user connected');
  });

app.use('/user', userRoutes);
app.use('/chat', chatRoutes);

sequelize
.sync()
//.sync({force:true})
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
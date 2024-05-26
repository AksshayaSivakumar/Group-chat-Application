const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');

dotenv.config();
const sequelize=require('./util/database.js');

const userRoutes = require('./routes/userRoute');

const User = require('./models/user');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/user', userRoutes);

sequelize
.sync()
//.sync({force:true})
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
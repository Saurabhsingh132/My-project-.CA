const express = require('express');
const userRouter = require('./routers/userRouter');
const cors = require('cors');
// initializing express
const app = express();

const port = 5000;
app.use(cors({
    origin : ['http://localhost:3000']
}))

app.use(express.json());


// middleware
app.use('/user',userRouter);


// route
app.get('/',(req,res) => {
    res.send ('responce from express');
});
app.get('/home',(req,res) => {
    res.send ('responc from home');
});
app.get('/add',(req,res) => {
    res.send ('responc from add');
});
app.get('/update',(req,res) => {
    res.send ('responc from update');
});
// starting tha server
app.listen( port, () => {console.log('server started') } );




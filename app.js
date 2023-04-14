var express = require('express');
var app = express();
app.use(express.json());
const { PORT } = require('./config.js');


const cors = require('cors');
app.use(cors({
    origin: '*'
}));

//connecting with db
require('./DBconnection/dbconnect');

const auth = require('./middlewares/checkAuth.js')

app.post('/protected', auth, (req, res) => {
    res.send(`Welcome..`);
  });

//only for testing purpose...
app.get('/',(req,res)=>{
     res.status(200).send("app is up and reuunig");
});

//auth routes require..
const authRoutes = require('./routes/authLogin');

// Set up for auth routes
app.use('/auth', authRoutes);

//address routes require..
const addressRoutes = require('./routes/address.routes');

//set up for address CURD opreactions.
app.use('/address', addressRoutes);

//service request routes require..
const service_request_Routes = require('./routes/service.request.routes');

//set up for address CURD opreactions.
app.use('/service_request',service_request_Routes);


// Start the server
app.listen(PORT,()=>{
    console.log(`SERVER is running port no ${PORT}`)
});

const express = require('express');
const bodyParser = require('body-parser');

//Create express app
const app = express();

//Setup the server port
const port = process.env.PORT || 5000;

//Parse request data content type application/xww-form-url-encoded
app.use(bodyParser.urlencoded({extended:false}));

//Parse request data content type application/json
app.use(bodyParser.json());

//Define root route
app.get('/',(req, res)=>{
   res.send('Hello World');
});

//Import emloyee router
const employeeRoutes = require('./src/routes/employee.route');

//create employee routes
app.use('/api/v1/employee', employeeRoutes);

//Listening to the port
app.listen(port, ()=>{
    console.log(` Server is running at port ${port}`);
});
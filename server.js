const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
const Port = 5000;  
const app = express();  
app.use(bodyParser.json());  
app.use(cors());  
app.get('/', function(req, res) {  
    res.send('hello server 5000 is working ');  
})  
app.post('/enroll', function(req, res) {  
    console.log(req.body);  
    res.status(200).send({  
        'messege enroll': 'data recived'  
    })  
})  
app.listen(Port, function() {  
    console.log('server running on localhost: ' + Port)  
});   
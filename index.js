const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const queries = require('./users/db_queries');

const app = express();

app.use(bodyParser.json());

app.get('/user/:userId/details', (req, res) => {
    // const userId = req.params.userId;
    // let userDetails = usersManager.getUserById(userId).then((userDetails) => {
    //     let responseObj = {};
    //     if (!userDetails) {
    //         res.statusCode = 403;
    //         responseObj.data = null;
    //         responseObj.error = "user not found"
    //     } else {
    //         responseObj.data = userDetails;
    //         responseObj.error = null;
    //     }
    //     responseObj = JSON.stringify(responseObj);
    //     res.send(responseObj);
});


app.post('/user/details/add', (req, res) => {
    const userDetails = req.body;
    usersManager.addUser(userDetails).then((userDetails) => {
        console.log(userDetails);
        res.send(JSON.stringify(userDetails));
    });
});

app.post('/user/login', (req, res) => {
    const userDetails = req.body;
    usersManager.addUser(userDetails).then((userDetails) => {
        console.log(userDetails);
        res.send(JSON.stringify(userDetails));
    });
});


app.get('/user/details', (req, res) => {
    const userDetails = req.body;
    usersManager.addUser(userDetails).then((userDetails) => {
        console.log(userDetails);
        res.send(JSON.stringify(userDetails));
    });
});


app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
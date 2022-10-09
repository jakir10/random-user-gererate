const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const userRoute = require('./routes/v1/user.route')

// middleware
app.use(cors());
app.use(express.json());

app.use('/', userRoute);

app.get('/', (req, res) => {
    res.send('Random user')
})

// server
app.listen(port, () => {
    console.log("Random user server is running");
})
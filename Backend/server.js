const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv .config();
app.get('/', (req, res) => {
    res.send("Stupid code Running ...... funny funny !");
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port "+process.env.PORT);
    // console.log("Database connection is successful");
});
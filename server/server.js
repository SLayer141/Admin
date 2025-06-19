const express = require('express');
const port = process.env.PORT
const app = express();


app.use(express.json());

app.post("/", (req, res) => {
    console.log("Hello from the server!");
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
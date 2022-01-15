const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
dotenv.config();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.listen(port, () => {console.log(`Server is running on port ${port}`)}); 


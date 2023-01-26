// Import 
const express = require('express');
//import express from 'express';
const app = express();
const PORT = 8080;

// middleware - built in in express
app.use(express.json())

app.listen(
  PORT,
  () => console.log(`it's live on port http://localhost:${PORT}`)
)

//this endpoint requeries request object (data received) and response object (data we send back)
app.get('/tshirt', (req,res) => {
    res.status(200).send({
      tshirt: 'regular',
      size: 'large'
    })
});

app.post('/tshirt/:id', (req,res) => {
    const { id } = req.params;
    const { logo } = req.body;
    //express does not pharse json from the body by default. Must defined a middleware the pharse

    if (!logo) {
      res.status(418).send({ message: 'We need a logo!' })
    };
    res.send({
      tshirt: `Tshirt with your logo = '${logo}' and id = ${id}`,
    });
});


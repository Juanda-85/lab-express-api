const express = require('express');
const app = express();

const data = require('./data.json')


app.get('/api', (request, response,) => {
    response.send("api is working")

})

app.get('/api/alldata', (request, response,) => {
    response.send(data)

})

app.get('/api/random', (request, response) => {
    let randomIndex = Math.floor(Math.random() * 10);

    response.send(data.players[randomIndex])
});

app.get('/api/players/:id', (request, response) => {
    const playerId = parseInt(req.params.id);
    const player = data.players.find(player => player.id === playerId);
  
    if (player) {
      res.json(player);
    } 
    else {
      res.status(404).json({ message: 'Player not found' });
    }
  });



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
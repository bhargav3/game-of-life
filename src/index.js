var GameOfLife = require('./lib/lib.js'),
game = new GameOfLife();
game.computeNext();
game.getDimensions();
game.getField();
/**
 * Importing library and instantiating the class
 * @type {lib|exports}
 */
var GameOfLife = require('./lib/lib.js'),
game = new GameOfLife();

// Mutating the cell field
game.computeNext();
// Printing the dimensions
game.getDimensions();
// Printing the current state of cell field
game.getField();
# Game of Life #

Program to calculate the next generation of Conway's game of life, given any starting position.
You start with a two dimensional grid of cells, where each cell is either alive or dead. The grid is finite, 
and no life can exist off the edges. When calculating the next generation of the grid, follow these four rules:

## Rules of the game
- Any live cell with fewer than two live neighbours dies, 
   as if caused by underpopulation.
- Any live cell with more than three live neighbours dies, 
   as if by overcrowding.
- Any live cell with two or three live neighbours lives 
   on to the next generation.
- Any dead cell with exactly three live neighbours becomes 
   a live cell.
   
## Build ##

Dependencies can be installed by

`npm install`

Code linting

`grunt`

## Running the game ##

Game can be run by passing the input through a file

`nodejs src/index.js < /tests/fixtures/stdin`


## Input format

*stdin* must contain the following input format

```
4 8
........
....*...
...**...
........
```

- Where 4 is the height of the cell field and 8 is the width of the cell field

- . or a DOT represents a dead cell

- * or an asterisk represents a live cell
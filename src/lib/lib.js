var lib,
    sget = require('sget');


/**
 * Initialize the width, height and the matrix array
 */
lib = function () {
    this.input();
};

lib.prototype.init = function (height, width, cellField) {
    this.height = height;
    this.width = width;
    this.cellField = cellField;
    this.tempField = new Array(this.height);
    var heightIterator = 0;
    while (heightIterator < this.height) {
        this.tempField[heightIterator] = new Array(this.width);
        heightIterator++;
    }
};

lib.prototype.input = function () {
    var input = sget().split('\n'),
        dimensions = input[0].split(' '),
        cellField = [],
        i = 0;

    if (dimensions.length !== 2) {
        return 1;
    }
    var height = parseInt(dimensions[0]);
    var width = parseInt(dimensions[1]);
    if (isNaN(height) || isNaN(width)) {
        return 1;
    }

    if (input.length !== height + 1) {
        return 1;
    }

    while (i < height) {
        var str = input[i + 1];
        str = str.replace(/\*/g, 1);
        str = str.replace(/\./g, 0);
        var inputArray = str.split('').map(Number);

        if (inputArray.length !== width) {
            return 1;
        }
        cellField.push(inputArray);
        i++;
    }

    this.init(height, width, cellField);
};


lib.prototype.computeNext = function () {
    for (var x = 0; x < this.height; x++) {
        for (var y = 0; y < this.width; y++) {
            var liveNeighbors = 0;
            for (var dx = -1; dx <= 1; dx++) {
                for (var dy = -1; dy <= 1; dy++) {
                    if (dx === 0 && dy === 0) {
                    }
                    else if (typeof this.cellField[x + dx] !== 'undefined' &&
                        typeof this.cellField[x + dx][y + dy] !== 'undefined' &&
                        this.cellField[x + dx][y + dy]) {
                        liveNeighbors++;
                    }
                }
            }
            var cellAlive = this.cellField[x][y];
            switch (liveNeighbors) {
                case 0:
                case 1:
                    cellAlive = 0;
                    break;
                case 2:
                    break;
                case 3:
                    cellAlive = 1;
                    break;
                default:
                    cellAlive = 0;
            }
            this.tempField[x][y] = cellAlive;
        }
    }
    this.cellField = this.tempField;
};

lib.prototype.getDimensions = function () {
    console.log(this.height + ' ' + this.width);
};

lib.prototype.getField = function () {
    for (var x = 0; x < this.cellField.length; x++) {
        var cellRow = '';
        for (var y = 0; y < this.cellField[x].length; y++) {
            if (this.cellField[x][y])
                cellRow += "*";
            else
                cellRow += ".";
        }
        console.log(cellRow);
    }
};

module.exports = lib;
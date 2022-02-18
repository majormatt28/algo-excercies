let grid1 = [ [" "," "," "],
              [" ","x"," "],
              [" "," "," "] ];

let grid2 = [ ["x","x"," "],
              [" ","x"," "],
              [" "," "," "] ];

let grid3 = [ ["x","x","x"],
              [" ","x"," "],
              [" ","x"," "] ];

let grid4 = [ ["x","x","x"],
              [" ","x"," "],
              [" "," "," "] ];

function nextActiveNeighbor(grid, activeCell) {
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
            let cell = grid[i][j];
            let counter = 0;
            let south = grid[i + 1][j];
            let east = grid[i][j + 1];
            let southEast = grid[i + 1][j + 1];
            let north = grid[i - 1][j];
            let northEast = grid[i - 1][j + 1];
            let northWest = grid[i - 1][j - 1];
            let southWest = grid[i + 1][j - 1];
            if (south === activeCell) {
                counter++;
            } 

            if (east === activeCell) {
                counter++;
            }

            if (southEast === activeCell) {
                counter++;
            }
            
            if (cell === activeCell && counter < 2) {
                cell = " ";
            }
        }
    }
}
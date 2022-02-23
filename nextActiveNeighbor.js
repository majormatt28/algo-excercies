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

function countActiveCell(grid, centerCell) {
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        counter = innerRow(centerCell, counter, row, i);
    }
    return counter;
}

function innerRow(centerCell, counter, row, i) {
    let c = counter;
    for (let j = 0; j < row.length; j++) {
        const cell = row[j];
        const thisCoordinate = [i, j];
        const distVer = Math.abs(centerCell[0] - thisCoordinate[0]);
        const distHor = Math.abs(centerCell[1] - thisCoordinate[1]);
        const isCenterCell = centerCell[0] === thisCoordinate[0] && centerCell[1] === thisCoordinate[1];
        const isNeighbor = distVer <= 1 && distHor <= 1;
        const isActive = cell === "x"; 
        if (!isCenterCell && isNeighbor && isActive) {
            c++;
        }
    } 
    return c;
}

// function nextActiveNeighbor(grid, activeCell) {
//     for (let i = 0; i < grid.length; i++) {
//         let row = grid[i];
//         for (let j = 0; j < row.length; j++) {
//             let cell = grid[i][j];
//             let counter = 0;
//             let south = grid[i + 1][j];
//             let east = grid[i][j + 1];
//             let southEast = grid[i + 1][j + 1];
//             let north = grid[i - 1][j];
//             let northEast = grid[i - 1][j + 1];
//             let northWest = grid[i - 1][j - 1];
//             let southWest = grid[i + 1][j - 1];
//             if (south === activeCell) {
//                 counter++;
//             } 

//             if (east === activeCell) {
//                 counter++;
//             }

//             if (southEast === activeCell) {
//                 counter++;
//             }
            
//             if (cell === activeCell && counter < 2) {
//                 cell = " ";
//             }
//         }
//     }
// }

console.log("The answer should be: ",countActiveCell(grid1, [0,0]));
console.log("The answer should be: ",countActiveCell(grid2, [0,0]));
console.log("The answer should be: ",countActiveCell(grid3, [0,0]));
console.log("The answer should be: ",countActiveCell(grid4, [0,0]))
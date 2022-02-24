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


function computeNext(grid) {
    let newGrid = new Array(grid.length).fill([]);

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            let numActiveCells = countActiveCell(grid, [i, j]);
            let cell = row[j];
            let isActive = isCellActive(cell);
            console.log("this is active cells: ",numActiveCells);
            console.log("this is a cell: ", cell);
            console.log("is this active: ", isActive);
            if (isActive && numActiveCells < 2) {
                cell = " ";
                console.log("this is turning the cell inactive: ", cell);
            } 
            console.log("before in newGrid: ", cell);
            newGrid[i][j] = cell;
        }
    }
    return newGrid;
}

function countActiveCell(grid, centerCell) {
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            const thisCoordinate = [i, j];
            const isCenterCell = areTheSame(centerCell, thisCoordinate );
            const isNeighbor = areNeighbors(centerCell, thisCoordinate);
            const isActive = isCellActive(cell); 
            if (!isCenterCell && isNeighbor && isActive) {
                counter++;
            }
        }
    }
    return counter;
}

function areTheSame(a,b) {
    return a[0] === b[0] && a[1] === b[1];  
}

function areNeighbors(c,d) {
    const distVer = Math.abs(c[0] - d[0]);
    const distHor = Math.abs(c[1] - d[1]);
    return distVer <= 1 && distHor <= 1;
}

function isCellActive(e) {
    return e === "x";
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

// console.log("The answer should be: ",computeNext(grid1));
console.log("The answer should be: ",computeNext(grid2));
// console.log("The answer should be: ",computeNext(grid3));
// console.log("The answer should be: ",computeNext(grid4));
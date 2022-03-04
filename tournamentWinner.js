//  let competitions1 =  [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"],
// ]

// let results1 = [0, 0, 1];

// const homeTeamWins = 1;

// function tournamentWinner(competitions, results) {
//     let talliedScores = tallyScores(competitions, results);
//     return findWinner(talliedScores);
// }

// function findWinner(talliedScores) {
//     let currWinningTeam = '';
//     let currHighestScore = 0;
//     for(let competitor in talliedScores) {
//         let scoreOfThisCompetitor = talliedScores[competitor];
//         if (scoreOfThisCompetitor > currHighestScore) {
//             currHighestScore = scoreOfThisCompetitor;
//             currWinningTeam = competitor;
//         }
//     }
//     return currWinningTeam;
// }

// function tallyScores(competitions, results) {
//     let tally = {};
//     for(let i = 0; i < competitions.length; i++) {
//         let result = results[i];
//         let competition = competitions[i];
//         console.log("competition",competition);
//         let compWinner = findCompWinner(competition, result);
//         let currentScore = tally[compWinner];
//         if(currentScore === undefined) {
//             currentScore = 0;
//         }
//         tally[compWinner] = currentScore + 1;
//     }
//     return tally;
// }

// function findCompWinner(competition,result) {
//     let homeTeam = competition[0];
//     let awayTeam = competition[1];

//     if (result === 1){
//         return homeTeam;
//     } else {
//         return awayTeam;
//     }
// }

// console.log(tallyScores(competitions1, results1));

let competitions1 =  [
    ["HTML", "C#"],
    ["C++", "Python"],
    ["C#", "HTML"],
    ["JavaScript", "Java"],
    ["Ruby", "C++"],
    ["JavaScript", "Ruby"]
]

let results1 = [-8, 0, 2, 0, -4, 10];


const homeTeamWins = 1;
const awayTeamWins = -1;

function tournamentWinner(competitions, results) {
    let talliedScores = tallyScores(competitions, results);
    return findWinner(talliedScores);
}

function findWinner(talliedScores) {
    let currWinningTeam = '';
    let currHighestScore = 0;
    for(let competitor in talliedScores) {
        let scoreOfThisCompetitor = talliedScores[competitor];
        if (scoreOfThisCompetitor > currHighestScore) {
            currHighestScore = scoreOfThisCompetitor;
            currWinningTeam = competitor;
        }
    }
    return currWinningTeam;
}

function tallyScores(competitions, results) {
    let tally = {};
    for(let i = 0; i < competitions.length; i++) {
        let result = results[i];
        let competition = competitions[i];
        let compWinner = findCompWinner(competition, result);
        let currentScore = tally[compWinner];
        if(currentScore === undefined) {
            currentScore = 0;
        }
        tally[compWinner] = currentScore + 1;
    }
    return tally;
}

function tallyNumWins(competitions, results) {
    let tally = {};
    for(let i = 0; i < competitions.length; i++) {
        let result = results[i];
        let competition = competitions[i];
    }
}

function findCompWinner(competition,result) {
    let homeTeam = competition[0];
    let awayTeam = competition[1];

    if (result === 1){
        return homeTeam;
    } else {
        return awayTeam;
    }
}


console.log(tallyWinNums(competitions1, results1));
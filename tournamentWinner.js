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

// let competitions1 =  [
//     ["HTML", "C#"],
//     ["C++", "Python"],
//     ["C#", "HTML"],
//     ["JavaScript", "Java"],
//     ["Ruby", "C++"],
//     ["JavaScript", "Ruby"]
// ]
//
// let results1 = [-8, 0, 2, 0, -4, 10];
//
//
//
//
// New rules:
// 1. The result of each match is no longer just win or lose, but win by a
// number of points. The winning team will get that number of points and the
// losing team gets no point.
// 2. In the results array, positive number means home team won, and negative
// means away team won.
// 3. Suppose tie is possible, recorded as 0 in the results.
// 4. The team with the highest total points wins. If there is a tie of total
// points, then the team with the most wins will be the final winner.

const competitions1 = [
    ["dragon", "panther"],
    ["rhino", "dragon"],
    ["panther", "rhino"],
    ["griffin", "rhino"],
    ["panther", "griffin"],
    ["dragon", "griffin"]
]
const results1 = [-8, 0, 2, 0, -4, 10];

// For this example input, the winner should be "panther".

const HOME_TEAM_WINS = 1;
const AWAY_TEAM_WINS = -1;

function tournamentWinner(competitions, results) {
    let talliedPoints = tallyPoints(competitions, results);
    let talliedWins = tallyWins(competitions, results);
    return findWinner(talliedPoints, talliedWins);
}

function findWinner(talliedPoints, talliedWins) {
    let currWinningTeam = '';
    let currHighestPoints = 0;
    let currHighestWins = 0;
    for(let competitor in talliedPoints) {
        let points = talliedPoints[competitor];
        let wins = talliedWins[competitor];
        if (compareFinalScores(points, wins, currHighestPoints, currHighestWins)) {
            currHighestPoints = points;
            currHighestWins = wins;
            currWinningTeam = competitor;
        }
    }
    return currWinningTeam;
}

/* Given player A has points0 and wins0 and player B has points1, wins1,
 * return true if A wins and false otherwise.
 */
function compareFinalScores(points0, wins0, points1, wins1) {
    return points0 > points1 ||
           points0 === points1 && wins0 > wins1;
}

/* Tally the total number of wins of all players.
 */
function tallyWins(competitions, results) {
    let tally = {};
    for(let i = 0; i < competitions.length; i++) {
        let result = results[i];
        let competition = competitions[i];
        let compWinner = findCompWinner(competition, result);
        if (compWinner) {
            let currentWins = tally[compWinner];
            if(currentWins === undefined) {
                currentWins = 0;
            }
            tally[compWinner] = currentWins + 1;
        }
    }
    return tally;
}

/* Tally the total number of points of all players.
 */
function tallyPoints(competitions, results) {
    let tally = {};
    for(let i = 0; i < competitions.length; i++) {
        let result = results[i];
        let competition = competitions[i];
        let compWinner = findCompWinner(competition, result);
        if (compWinner) {
            let currentPoints = tally[compWinner];
            if(currentPoints === undefined) {
                currentPoints = 0;
            }
            tally[compWinner] = currentPoints + Math.abs(result);
        }
    }
    return tally;
}

/* Return the winner of a single competition, or `null` if it is a tie.
 */
function findCompWinner(competition, result) {
    let homeTeam = competition[0];
    let awayTeam = competition[1];

    if (result > 0) {
        return homeTeam;
    }
    else if (result < 0) {
        return awayTeam;
    }
    else {
        return null;
    }
}


console.log(tournamentWinner(competitions1, results1));

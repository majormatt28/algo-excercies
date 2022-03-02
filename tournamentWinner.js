 let competitions1 =  [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

let results1 = [0, 1, 2]

const homeTeamWins = 1;

function tournamentWinner(competitions, results) {
    let currWinningTeam = '';
    // let talliedScores = {[currWinningTeam]: 0};
  
    for (let i = 0; i < competitions.length; i++) {
        let result = results[i];
        // console.log("these are the competitions", competitions);
        for (let j = 0; j < result.length; j++) {
            let numWins = result[j];
            const isTallied = talliedScores(numWins);
        }
        // console.log("is this my console log: ",result);
    }
}

function talliedScores(scores) {
    return scores * 3;
}

function updateScores() {
    
}

console.log(tournamentWinner(competitions1, results1));
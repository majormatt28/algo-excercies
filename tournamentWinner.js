 let competitions1 =  [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

let results1 = [0, 0, 1]

const homeTeamWins = 1;

function tournamentWinner(competitions, results) {
    let currWinningTeam = '';
    let talliedScores = {[currWinningTeam]: 0};

    for (let i = 0; i < competitions.length; i++) {
        let result = results[i];
        console.log("is this my console log: ",result);
    }
}

console.log(tournamentWinner(competitions1, results1));
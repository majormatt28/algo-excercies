let myQueries = [3,2,1,2,6]
// sample output: 17

function minimumWaitingTime(queries) {
    let totalWaitTime = 0;

    for (let i = 0; i < queries.length; i++) {
        // console.log(queries[i]);
        let durations = queries[i];
        let queriesRemaining = queries.length - (i + 1);
        console.log("This is the amount of queries remaining: ",queriesRemaining);
        totalWaitTime += durations * queriesRemaining;
        console.log("This is the total wait time: ",totalWaitTime)
    }
    return totalWaitTime;
}

console.log("Final Results: ",minimumWaitingTime(myQueries));
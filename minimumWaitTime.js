let myQueries = [2,3,1,2,6]
// sample output: 17

function minimumWaitingTime(queries) {
    let totalWaitTime = 0;
    queries.sort();
    for (let i = 0; i < queries.length; i++) {
        // console.log(queries[i]);
        let durations = queries[i];
        let queriesRemaining = queries.length - (i + 1);
        console.log("This is the amount of queries remaining: ",queriesRemaining);
        totalWaitTime += durations * queriesRemaining;
        console.log("This is how much this task will cost: ",totalWaitTime)
    }
    return totalWaitTime;
}

console.log("Final Results: ",minimumWaitingTime(myQueries));
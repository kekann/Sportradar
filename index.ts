import events from './JSON/BE_data.json';
console.log(events);
/*const myEvents = events["Events"];

function findMostLikelyResults(eventList, numberOfResultsToReturn: number) {
    if(numberOfResultsToReturn<=0) return "You should pick at least one result"
    eventList.sort(function compareFn(a, b) {
        const aHigh = Math.max(a.probability_away_team_winner, a.probability_draw, a.probability_home_team_winner);
        const bHigh = Math.max(b.probability_away_team_winner, b.probability_draw, b.probability_home_team_winner);
        if (aHigh > bHigh) return -1;
        if (bHigh > aHigh) return 1;
    });
    
    return eventList.slice(0,numberOfResultsToReturn);
}
console.log(findMostLikelyResults(myEvents, 1));*/


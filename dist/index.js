"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortSet = exports.getUniqueCompetitors = exports.findMostLikelyResults = exports.myEvents = void 0;
const events = require("../src/BE_data.json");
exports.myEvents = events["Events"];
function getResultIndicatorString(highestProbResult) {
    switch (highestProbResult) {
        case 'probability_home_team_winner':
            return 'HOME_TEAM_WIN';
        case 'probability_away_team_winner':
            return 'AWAY_TEAM_WIN';
        case 'probability_draw':
            return 'DRAW';
        default:
            return 'Invalid variable name';
    }
}
function formatResultsToDisplay(arrayOfEvents, numberOfResultsToFormat) {
    let formatedResults = '';
    for (let i = 0; i < numberOfResultsToFormat; i++) {
        let startDate = new Date(arrayOfEvents[i].start_date);
        let competitorA = arrayOfEvents[i].competitors[0].name + " (" + arrayOfEvents[i].competitors[0].country + ") vs. ";
        let competitorB = arrayOfEvents[i].competitors[1].name + " (" + arrayOfEvents[i].competitors[1].country + ")\n";
        let stadion = "Venue: " + arrayOfEvents[i].venue.name + "\n";
        let highestProbability = Math.max(arrayOfEvents[i].probability_away_team_winner, arrayOfEvents[i].probability_draw, arrayOfEvents[i].probability_home_team_winner);
        let highestProbResult = Object.entries(arrayOfEvents[i]).find(([key, value]) => value === highestProbability)[0];
        formatedResults += "Start date:" + startDate.toLocaleString() + '\n' + competitorA + competitorB + stadion + "Highest probable result : " + getResultIndicatorString(highestProbResult) + " (" + highestProbability + ")\n";
    }
    ;
    return formatedResults;
}
function findMostLikelyResults(eventList, numberOfResultsToReturn) {
    if (numberOfResultsToReturn <= 0)
        return "You should pick at least one result";
    if (numberOfResultsToReturn >= eventList.length)
        numberOfResultsToReturn = eventList.length;
    eventList.sort(function compareFn(a, b) {
        const aHigh = Math.max(a.probability_away_team_winner, a.probability_draw, a.probability_home_team_winner);
        const bHigh = Math.max(b.probability_away_team_winner, b.probability_draw, b.probability_home_team_winner);
        if (aHigh > bHigh)
            return -1;
        if (bHigh > aHigh)
            return 1;
    });
    const slicedEvents = eventList.slice(0, numberOfResultsToReturn);
    const tempFormated = formatResultsToDisplay(slicedEvents, numberOfResultsToReturn);
    return tempFormated;
}
exports.findMostLikelyResults = findMostLikelyResults;
console.log(findMostLikelyResults(exports.myEvents, 10));
function getUniqueCompetitors(events) {
    let competitors = new Set();
    for (let i = 0; i < events.length; i++) {
        for (let j = 0; j < events[i].competitors.length; j++) {
            competitors.add(events[i].competitors[j].name);
        }
    }
    return competitors;
}
exports.getUniqueCompetitors = getUniqueCompetitors;
const uniqueCompetitorsSet = getUniqueCompetitors(exports.myEvents);
function sortSet(set) {
    let sortedArray = Array.from(set).sort();
    return new Set(sortedArray);
}
exports.sortSet = sortSet;
console.log(sortSet(uniqueCompetitorsSet));
//# sourceMappingURL=index.js.map
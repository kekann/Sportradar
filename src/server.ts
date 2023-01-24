import {findMostLikelyResults, getUniqueCompetitors, sortSet, myEvents} from '../dist/index'; 
import express from "express";
const app = express()

app.get('/mostlikelyresults/:numberOfResultsToReturn', (req, res) => {
    const numberOfResultsToReturn = req.params.numberOfResultsToReturn;
    const result = findMostLikelyResults(myEvents, numberOfResultsToReturn);
    res.status(200).json(result);
});

app.get('/uniquecompetitors', (req, res) => {
    const uniqueCompetitorsSet = getUniqueCompetitors(myEvents);
    const sortedUniqueCompetitorsSet = sortSet(uniqueCompetitorsSet)
    res.status(200).json(sortedUniqueCompetitorsSet);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
});
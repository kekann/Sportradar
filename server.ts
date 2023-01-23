import {findMostLikelyResults, getUniqueCompetitors, sortSet, myEvents} from './index.js';
import express from "express";
const app = express()

app.get('/mostLikelyResults/:numberOfResultsToReturn', (req, res) => {
    const numberOfResultsToReturn = req.params.numberOfResultsToReturn;
    res.send(findMostLikelyResults(myEvents, numberOfResultsToReturn))
})

app.get('/uniqueCompetitors', (req, res) => {
    const uniqueCompetitorsSet = getUniqueCompetitors(myEvents);
    const sortedUniqueCompetitorsSet = sortSet(uniqueCompetitorsSet)
    res.send(sortedUniqueCompetitorsSet)
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})

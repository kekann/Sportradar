import {findMostLikelyResults, getUniqueCompetitors, sortSet, myEvents} from './index'; 
import express from "express";
const app = express()

app.get('/mostlikelyresults/:numberOfResultsToReturn', (req, res) => {
    const numberOfResultsToReturn = req.params.numberOfResultsToReturn;
    if(!isNaN(numberOfResultsToReturn)){
    const result = findMostLikelyResults(myEvents, numberOfResultsToReturn);

    res.status(200).json(result);
} else{        
    res.status(502).json({error: 'Bad Gateway', message: 'Invalid input, numberOfResultsToReturn should be a number'})
}
});

app.get('/uniquecompetitors', (req, res) => {
    const uniqueCompetitorsSet = getUniqueCompetitors(myEvents);
    const sortedUniqueCompetitorsSet = sortSet(uniqueCompetitorsSet)
    res.status(200).send(sortedUniqueCompetitorsSet);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
});
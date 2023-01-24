"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../dist/index");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/mostlikelyresults/:numberOfResultsToReturn', (req, res) => {
    const numberOfResultsToReturn = req.params.numberOfResultsToReturn;
    const result = (0, index_1.findMostLikelyResults)(index_1.myEvents, numberOfResultsToReturn);
    res.status(200).json(result);
});
app.get('/uniquecompetitors', (req, res) => {
    const uniqueCompetitorsSet = (0, index_1.getUniqueCompetitors)(index_1.myEvents);
    const sortedUniqueCompetitorsSet = (0, index_1.sortSet)(uniqueCompetitorsSet);
    res.status(200).json(sortedUniqueCompetitorsSet);
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
//# sourceMappingURL=server.js.map
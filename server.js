"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./index.js");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/mostLikelyResults/:numberOfResultsToReturn', (req, res) => {
    const numberOfResultsToReturn = req.params.numberOfResultsToReturn;
    res.send((0, index_js_1.findMostLikelyResults)(index_js_1.myEvents, numberOfResultsToReturn));
});
app.get('/uniqueCompetitors', (req, res) => {
    const uniqueCompetitorsSet = (0, index_js_1.getUniqueCompetitors)(index_js_1.myEvents);
    const sortedUniqueCompetitorsSet = (0, index_js_1.sortSet)(uniqueCompetitorsSet);
    res.send(sortedUniqueCompetitorsSet);
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
//# sourceMappingURL=server.js.map
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()

const printingWeeks = require('./utils/printingWeeks');
const isValidDate = require('./utils/isValidDate');
const countingNumbersBetweenTwoDates = require('./utils/countingNumbersBetweenTwoDates');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50kb' }));

app.post('/TrainingPlanGenerationProblem', (req, res) => {
    
    if (!req.body.startDate) {
        res.statusCode = 400;
        res.send({ error: "Please enter a start date" });
    }
    if (!req.body.raceDate) {
        res.statusCode = 400;
        res.send({ error: "Please enter a race date" });
    }
    if (!isValidDate(req.body.startDate)) {
        res.statusCode = 400;
        res.send({ error: "Please enter a valid start date in this format yyyy-mm-dd" });
    }
    if (!isValidDate(req.body.raceDate)) {
        res.statusCode = 400;
        res.send({ error: "Please enter a valid race date in this format yyyy-mm-dd" });
    }

    const numberOfWeeksBetweenStartDateAndRaceDate = countingNumbersBetweenTwoDates(req.body.startDate, req.body.raceDate) / 7;

    if(!Number.isInteger(numberOfWeeksBetweenStartDateAndRaceDate)){
        res.send({ error: "Diffrence between start date and race date must be multiple of 7 days" });
    }

    if(numberOfWeeksBetweenStartDateAndRaceDate<8){
        res.statusCode = 400;
        res.send({ error: "weeks between startDate and raceDate should be bigger than 8 weeks" });
    }
    
    const numberOfExtraWeeks = numberOfWeeksBetweenStartDateAndRaceDate % 4;
    var result = printingWeeks(numberOfWeeksBetweenStartDateAndRaceDate, numberOfExtraWeeks, req.body.startDate)
    res.send({ result: result });
})

app.listen(port, () => {
    console.log('Server is up on port --> ' + port )
})


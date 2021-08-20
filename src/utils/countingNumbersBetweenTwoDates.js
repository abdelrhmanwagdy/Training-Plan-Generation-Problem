const datesBetween = require('dates-between');

function countingNumbersBetweenTwoDates(planStartDate, raceDate){
    if(planStartDate==raceDate){
        return 0;
    }
    var numberOfDaysBetweenTwoDats = 0;
    for (const date of datesBetween(new Date(planStartDate), new Date(raceDate))) {
        numberOfDaysBetweenTwoDats+=1;
    }
    return numberOfDaysBetweenTwoDats;
}

module.exports = countingNumbersBetweenTwoDates
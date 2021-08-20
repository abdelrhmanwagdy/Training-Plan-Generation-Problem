
const printing = require('./printing');

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function printingWeeks(numberOfWeeksBetweenStartDateAndRaceDate, numberOfExtraWeeks, startDateString) {
    var firstWeekDateFormat = new Date(startDateString)
    var currentDate = firstWeekDateFormat
    var result = []
    switch (numberOfExtraWeeks) {
        case 0:

            result.push(printing(currentDate, "Test", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
            result.push(printing(currentDate, "Test", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)

            for (let i = 2; i < numberOfWeeksBetweenStartDateAndRaceDate - 2; i++) {
                switch ((i - 2) % 4) {
                    case 0:
                        result.push(printing(currentDate, "Recovery ", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 1:
                        result.push(printing(currentDate, "Build 1 ", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 2:
                        result.push(printing(currentDate, "Build 2 ", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 3:
                        result.push(printing(currentDate, "Key ", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                }
            }

            result.push(printing(currentDate, "Taper", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
            result.push(printing(currentDate, "Race", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)

            break;
        case 1:

            result.push(printing(currentDate, "Test", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
            result.push(printing(currentDate, "Test", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
            result.push(printing(currentDate, "Filler", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)

            for (let i = 3; i < numberOfWeeksBetweenStartDateAndRaceDate - 2; i++) {
                switch ((i - 3) % 4) {
                    case 0:
                        result.push(printing(currentDate, "Recovery", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 1:
                        result.push(printing(currentDate, "Build 1", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 2:
                        result.push(printing(currentDate, "Build 2", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 3:
                        result.push(printing(currentDate, "Key", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                }
            }

            result.push(printing(currentDate, "Taper", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
            result.push(printing(currentDate, "Race", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)

            break;
        case 2:
            result.push(printing(currentDate, "Test", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
            result.push(printing(currentDate, "Test", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
            
            for (let i = 2; i < numberOfWeeksBetweenStartDateAndRaceDate - 2; i++) {
                switch ((i ) % 4) {
                    case 0:
                        result.push(printing(currentDate, "Recovery", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 1:
                        result.push(printing(currentDate, "Build 1", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 2:
                        result.push(printing(currentDate, "Build 2", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 3:
                        result.push(printing(currentDate, "Key", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                }
            }

            result.push(printing(currentDate, "Taper", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
            result.push(printing(currentDate, "Race", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)

            break;
        case 3:

            result.push(printing(currentDate, "Test", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
            result.push(printing(currentDate, "Test", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)

            for (let i = 2; i < numberOfWeeksBetweenStartDateAndRaceDate - 2; i++) {
                switch ((i - 1) % 4) {
                    case 0:
                        result.push(printing(currentDate, "Recovery", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 1:
                        result.push(printing(currentDate, "Build 1", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 2:
                        result.push(printing(currentDate, "Build 2", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                    case 3:
                        result.push(printing(currentDate, "Key", firstWeekDateFormat))
                        currentDate = addDays(currentDate, 7)
                        break;
                }
            }
            
            result.push(printing(currentDate, "Taper", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
            result.push(printing(currentDate, "Race", firstWeekDateFormat))
            currentDate = addDays(currentDate, 7)
    }
    return result

}
module.exports = printingWeeks
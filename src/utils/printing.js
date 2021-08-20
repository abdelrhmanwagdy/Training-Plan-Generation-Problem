function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}


function printing (currentWeek, weekName, firstWeek){
    var one_week=1000*60*60*24*7;
    var weekNumber = Math.abs(currentWeek-firstWeek)/one_week
    return "Week #"+ (weekNumber+1)+" - "+weekName+" - from "+currentWeek.toISOString().slice(0, 10)+" to "+addDays(currentWeek,6).toISOString().slice(0, 10);
}
module.exports = printing
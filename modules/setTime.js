function printTime(timeInSeconds) {
    var hours = Math.floor(timeInSeconds/3600);
    timeInSeconds = timeInSeconds - (hours * 3600);
    var minutes = Math.floor(timeInSeconds/60);
    var seconds = Math.floor(timeInSeconds - minutes * 60);
    
    var text = minutes + ' min ' + seconds + ' s';
    
    if (hours === 0) {
        return text;
    }
    
    return hours + ' h ' + text;
}

exports.printTime = printTime;
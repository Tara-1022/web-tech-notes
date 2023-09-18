// timer function operated by browser
// rapidly displaying sequence of images or frames on web page
// setTimeout(func, time (ms)) - execute after time
// setInterval(func, time (ms)) - schedule for every time interval
//  - create timer
// returns timer object

// clearTimeout()
// clearInterval()
//  - stop the clock; cancel timerobject

function sendAlert(){
    alert("Hi");
}

function pauseAlert(){
    clearInterval(alertTimer);
}
function startAlert(){
    alertTimer = setInterval(sendAlert, 2 * 1000);
}

function flash(){
    let flasher = document.getElementById("flasher");
    switch(flasher.style.backgroundColor){
        case "violet":
            flasher.style.backgroundColor = "indigo"
            break
        case "indigo":
            flasher.style.backgroundColor = "blue"
            break
        case "blue":
            flasher.style.backgroundColor = "green"
            break
        case "green":
            flasher.style.backgroundColor = "yellow"
            break
        case "yellow":
            flasher.style.backgroundColor = "orange"
            break
        case "orange":
            flasher.style.backgroundColor = "red"
            break
        default:
            flasher.style.backgroundColor = "violet"
            break
    }
}

function startFlashing(){
    flash();
    flashTimer = setTimeout(startFlashing, document.getElementById("time").value)
    // recursive timing
}

function stopFlashing(){
    clearTimeout(flashTimer);
}

var alertTimer;
//  = setInterval(sendAlert, 2 * 1000);
// line by line interpreted. if clear is placed in global it may stop the execution before timer is sent

var flashTimer = null;

var frog = null;
var frogTimer = null;

function init(){
    frog = document.getElementById("frog");
    frog.style.position = "relative";
    frog.style.left = "2px";
    frog.style.bottom = "2px";
}

function move(){
    hop()
    frogTimer = setTimeout(move, 200);
}
function hop(){
    frog.style.left = (parseInt(frog.style.left) + 2) + "px"
    frog.style.bottom = (parseInt(frog.style.bottom) + 5) + "px"
    setTimeout(land, 300)
}
function land(){
    frog.style.bottom = (parseInt(frog.style.bottom) - 5) + "px"
}
function stop(){
    clearTimeout(frogTimer);
}
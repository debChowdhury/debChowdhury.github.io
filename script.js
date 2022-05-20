let intervalId = null;
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let secTd = document.getElementById("secTd");
let minTd = document.getElementById("minTd");
let hrTd = document.getElementById("hrTd");
let sec = 0;
let min = 0;
let hr = 0;
let runningStatus = false;
function setViews(hr, min, sec){
    // concatenating 0 with the value if value is less than 10 to show it always in double digits
    if(hr/10 < 1){
        hrTd.innerText = "0"+hr;
    }
    else{
        hrTd.innerText = hr;
    }
    if(min/10 < 1){
        minTd.innerText = "0"+min;
    }
    else{
        minTd.innerText = min;
    }
    if(sec/10 < 1){
        secTd.innerText = "0"+sec;
    }
    else{
        secTd.innerText = sec;
    }
    
}
//not using addEventListener for click events for educational purposes
startBtn.onclick = function(){
    if(runningStatus){
        //if already running, return from the function
        return;
    }
    runningStatus = true;
    sec++;
    setViews(hr, min, sec);
    //will increment secs counter after every 1 sec
    intervalId = setInterval(function(){
        sec++;
        if(sec == 60){
            //if sec == 60, reset sec and increment min.
            sec = 0;
            min++;
            if(min == 60){
                //if min == 60, reset min and increment hr
                min = 0;
                hr++;
                if(hr == 24){
                    //if hr == 24, reset hr
                    hr = 0;
                }
            }
        }
        setViews(hr, min, sec);
    }, 1000);
}
//using addEventListener for click events for educational purposes
stopBtn.addEventListener("click", function(){
    if(!runningStatus){
        //if already in stopped status, return from the function
        return;
    }
    // stopping the interval function execution
    clearInterval(intervalId);
    intervalId = null;
    runningStatus = false;
});
resetBtn.addEventListener("click", function(){
    if(runningStatus){
        runningStatus = false;
        clearInterval(intervalId);
        intervalId = null;
    }
    hr = 0;
    min = 0;
    sec = 0;
    setViews(hr, min, sec);
});
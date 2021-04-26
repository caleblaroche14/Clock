const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function settime(){
    let time = new Date();
    seconds.innerText = format(time.getSeconds());
    minutes.innerText = format(time.getMinutes());

    if (time.getHours() < 12){
        hours.innerText = format(time.getHours());
    }else{
        hours.innerText = format((time.getHours() - 12));
    }

    if (time.getHours() < 12){
        ampm.innerText = "AM";
    }else{
        ampm.innerText = "PM";
    }
}

function format(d){
    if (d >= 10){
        return d;
    }else{
        return '0'+d;
    }
}

setInterval(settime,1000);
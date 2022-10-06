const daysEl = document.getElementById('days') 
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const eventDay = '20 Nov 2022' // World Cup 2022

function countdown () {
    const eventDate = new Date(eventDay);
    const currentDate = new Date(); 

    const totalSeconds = (eventDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    // console.log(days, hours, minutes, seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


//Chamada inicial - Initial call

countdown();

setInterval(countdown, 1000);



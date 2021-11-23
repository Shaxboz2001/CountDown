// Selectors
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const days = document.getElementById("days");

const container = document.getElementById("container");
const currentYear = new Date().getFullYear();

const timeMyBirthday = new Date(`january  1 ${currentYear + 1 } 00:00:00`);
console.log(timeMyBirthday);
// Functions

function updateContainer() {
    const timeNow = new Date();
    const result = timeMyBirthday-timeNow;

    const s = Math.floor(result/1000)%60;
    const m = Math.floor(result/1000/60)%60;
    const h = Math.floor(result/1000/60/60)%24;
    const d = Math.floor(result/1000/60/60/24);
    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;
    days.innerHTML = d;
}
setInterval(updateContainer);
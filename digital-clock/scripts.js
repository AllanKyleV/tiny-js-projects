// -----------------------
//      Digital Clock
//       09:45:18 AM
// -----------------------

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const meridiem = document.querySelector("#meridiem");
const clock = document.querySelector("#clock")

// We'll use the built-in functions for time/date which are; now.getHours(), now.getMinutes, now.getSeconds();
const now = new Date();

hour.textContent = now.getHours();
minute.textContent = now.getMinutes();
second.textContent = now.getSeconds();

// Determine meridiem.
function getMeridiem(hours) {
    return hours < 12 ? "AM" : "PM";
}

// Background color according to current meridiem.
function changeBackground(meridiem) {
    return meridiem === "AM" ? [{text : "black", backgroundColor : "white"}] : [{text : "white", backgroundColor : "black"}];
}

const colors = changeBackground(meridiem)

meridiem.textContent = getMeridiem(now.getHours());
clock.style.color = colors.text;
clock.style.backgroundColor = colors.backgroundColor;
// -----------------------
//      Digital Clock
//       09:45:18 AM
// -----------------------

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const meridiem = document.querySelector("#meridiem");
const clock = document.querySelector("#clock");

// Determine meridiem.
function getMeridiem(hours) {
    return hours < 12 ? "AM" : "PM";
}

// We'll use the built-in functions for time/date which are; now.getHours(), now.getMinutes, now.getSeconds();
function updateClock() {
    const now = new Date();

    const currentMeridiem = getMeridiem(now.getHours());

    meridiem.textContent = currentMeridiem;

    hour.textContent = now.getHours();
    minute.textContent = now.getMinutes();
    second.textContent = now.getSeconds();

    // Background color according to current meridiem.
    if (currentMeridiem === "AM") {
        clock.style.color = "black";
        clock.style.backgroundColor = "white";
    } else {
        clock.style.color = "white";
        clock.style.backgroundColor = "black";
    }
}

setInterval(updateClock, 1000);
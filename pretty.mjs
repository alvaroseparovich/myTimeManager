const now = Date.now()

function getEpochTime(date) {
  return date.getTime();
  // Math.floor(currentDate.getTime() / 1000)
}

console.log('index.mjs', now)

// Get current date
var currentDate = new Date();

// Set time to beginning of the day (midnight)
currentDate.setHours(0, 0, 0, 0);

// Get start time of the day
var startTime = currentDate.getTime();

// Set time to end of the day (23:59:59.999)
currentDate.setHours(23, 59, 59, 999);

// Get end time of the day
var endTime = currentDate.getTime();

console.log("- ", (new Date(startTime)));
console.log("- ", (new Date(endTime)));
console.log("- ", getEpochTime(new Date(startTime)));
console.log("- ", getEpochTime(new Date(endTime)));

const dayOfWeekToday = document.querySelector('.day-of-week-4')
const nowPointer = document.createElement("span");
nowPointer.classList.add("current-time");
console.log(dayOfWeekToday);
dayOfWeekToday.appendChild(nowPointer);

const windowDay = endTime - startTime;
console.log(getEpochTime(new Date(windowDay)));


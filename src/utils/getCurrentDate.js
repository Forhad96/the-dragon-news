// A function that shows the current day, month, date, and year
export function showCurrentDate() {
  // Create a new Date object
  let today = new Date();
  // Get the day of the week as a number (0-6)
  let day = today.getDay();
  // Get the month as a number (0-11)
  let month = today.getMonth();
  // Get the date as a number (1-31)
  let date = today.getDate();
  // Get the year as a number (YYYY)
  let year = today.getFullYear();
  // Create an array of weekday names
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Create an array of month names
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Get the weekday name from the array using the day index
  let weekday = weekdays[day];
  // Get the month name from the array using the month index
  let monthName = months[month];
  // Display the current date in the console
  return ` ${weekday}, ${monthName} ${date}, ${year}.`;
}

// Call the function
// showCurrentDate();

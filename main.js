let time = document.querySelector("#time");
let date = document.querySelector("#date");
setInterval(() => {
    today();
}, 1000);

function today() {
    let today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let hours = today.getHours();
    let am_pm = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM
    hours = hours % 12 || 12; // Convert to 12-hour format

    let currentTime = `${hours <= 9 ? '0' + hours : hours} : ${today.getMinutes() <= 9 ? '0' + today.getMinutes() : today.getMinutes()} : ${today.getSeconds() <= 9 ? '0' + today.getSeconds() : today.getSeconds()} ${am_pm}`;
    let currentDate = `${dayNames[today.getDay()]}, ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()} `;
    time.innerHTML = currentTime;
    date.innerHTML = currentDate;
}

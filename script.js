const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
        toggle.classList.toggle("show-icon");
    });
};

showMenu("nav_toggle", "nav_menu");

function getTimeAndDate(city, timeId, dateIdOrClass, timeZone) {
    // console.log("dateIdOrClass:", dateIdOrClass); //adding for debugging
    let cityDate = new Date().toLocaleString("en-US", {timeZone: timeZone});
    let cityTime = new Date(cityDate).toLocaleTimeString("en-US", {hour12: false}).trim();
    let cityDateStr = new Date(cityDate).toLocaleDateString("en-US");
    document.getElementById(timeId).textContent = cityTime;
    let dateElement = document.getElementById(dateIdOrClass);
    if (dateElement !== null) {
        dateElement.textContent = cityDateStr;
    } else {
        document.querySelector("." + dateIdOrClass).textContent = cityDateStr;
    }
}

function updateAllCitiesDateTime() {
    getTimeAndDate("New York", "time-new-york", "date-new-york", "America/New_York");

    getTimeAndDate("London", "time-london", "date-london", "Europe/London");

    getTimeAndDate("Tokyo", "time-tokyo", "date-tokyo", "Asia/Tokyo");

    getTimeAndDate("Sydney", "time-sydney", "date-sydney", "Australia/Sydney");

    getTimeAndDate("Paris", "time-paris", "date-paris", "Europe/Paris");

    getTimeAndDate("Mumbai", "time-mumbai", "date-mumbai", "Asia/Kolkata");
    getTimeAndDate("Karachi", "time-karachi", "date-karachi", "Asia/Karachi");

    getTimeAndDate("Berlin", "time-berlin", "date-berlin", "Europe/Berlin");

    getTimeAndDate("Beijing", "time-beijing", "date-beijing", "Asia/Shanghai");

    getTimeAndDate("Kabul", "time-kabul", "date-kabul", "Asia/Kabul");

    getTimeAndDate("Istanbul", "time-istanbul", "date-istanbul", "Europe/Istanbul");

    getTimeAndDate("Madrid", "time-madrid", "date-madrid", "Europe/Madrid");

    getTimeAndDate("Los Angeles", "time-los-angeles", "date-los-angeles", "America/Los_Angeles");

    getTimeAndDate("Prague", "time-prague", "date-prague", "Europe/Prague");

    getTimeAndDate("Bucharest", "time-bucharest", "date-bucharest", "Europe/Bucharest");
}

updateAllCitiesDateTime();
setInterval(updateAllCitiesDateTime, 1000);

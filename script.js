
// IST CLOCK
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false
    });

    document.getElementById("clock").textContent = "IST " + time;
}

setInterval(updateClock, 1000);
updateClock();


// EVENT COUNTDOWN
const eventDate = new Date("December 15, 2026 10:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((distance / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").textContent =
        Math.floor((distance / (1000 * 60)) % 60);

    document.getElementById("seconds").textContent =
        Math.floor((distance / 1000) % 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();


// DARK MODE
document.getElementById("themeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});


// REGISTRATION FORM
document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("registerMessage").textContent =
        "Registration submitted successfully!";

    this.reset();
});


// FEEDBACK FORM
document.getElementById("feedbackForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("feedbackMessage").textContent =
        "Thank you for your feedback!";

    this.reset();
});

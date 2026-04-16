const weddingDate = new Date("May 18, 2026 00:22:00").getTime();

setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerHTML =
        days + " days to go";

}, 1000);

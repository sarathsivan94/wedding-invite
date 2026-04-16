const weddingDate = new Date("May 18, 2026 00:22:00").getTime();

setInterval(function () {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("mins").innerText = "00";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("mins").innerText = mins;

}, 1000);    display: inline-block;
    padding: 10px;
    margin: 15px 0;
    border-radius: 10px;
}

.date-box .big {
    font-size: 28px;
    color: #2f4f2f;
}

.time, .venue {
    font-size: 14px;
    margin: 5px 0;
}

.countdown {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 15px 0;
}

.countdown div {
    border: 1px solid #ddd;
    padding: 8px;
    border-radius: 8px;
}

.party {
    margin: 15px 0;
    font-weight: bold;
}

.buttons button {
    padding: 10px 15px;
    margin: 5px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

.yes {
    background: #4CAF50;
    color: white;
}

.no {
    background: #e74c3c;
    color: white;
}

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
}

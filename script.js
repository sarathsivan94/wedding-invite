body {
    margin: 0;
    font-family: 'Playfair Display', serif;
    background: linear-gradient(to bottom, #fff, #f8f5f0);
    text-align: center;
}

/* OPEN SCREEN */
#opening {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #111;
    color: gold;
    display: flex;
    justify-content: center;
    align-items: center;
}

.open-box h1 {
    font-family: 'Great Vibes', cursive;
}

/* MAIN CARD */
.container {
    max-width: 380px;
    margin: 30px auto;
    padding: 25px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    animation: fadeUp 1.5s ease;
}

/* TEXT */
.top-text {
    font-size: 12px;
    color: #888;
}

.names {
    font-family: 'Great Vibes', cursive;
    color: #8B0000;
    font-size: 36px;
}

.heart {
    color: gold;
}

.invite {
    font-size: 14px;
}

/* DATE BOX */
.date-box {
    border: 1px solid gold;
    padding: 10px;
    margin: 15px;
    border-radius: 10px;
}

/* COUNTDOWN */
.countdown {
    display: flex;
    justify-content: space-around;
}

.countdown div {
    background: #fff;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 10px;
}

/* BUTTONS */
button {
    padding: 10px 15px;
    margin: 5px;
    border-radius: 20px;
    border: none;
}

.yes { background: #4CAF50; color: white; }
.no { background: #e74c3c; color: white; }
.whatsapp { background: #25D366; color: white; width: 80%; }

@keyframes fadeUp {
    from {opacity: 0; transform: translateY(20px);}
    to {opacity: 1; transform: translateY(0);}
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

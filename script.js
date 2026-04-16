body {
    margin: 0;
    font-family: 'Playfair Display', serif;
    background: linear-gradient(#fff, #f9f3f0);
    text-align: center;
}

.container {
    padding: 30px 20px;
    animation: fadeIn 2s ease;
}

.top-text {
    font-size: 12px;
    color: #777;
}

.names {
    font-family: 'Great Vibes', cursive;
    color: #8B0000;
    font-size: 34px;
    margin: 5px 0;
}

.heart {
    font-size: 20px;
    color: #8B0000;
}

.invite {
    margin: 10px 0;
    font-size: 14px;
}

.date-box {
    border: 1px solid #ddd;
    display: inline-block;
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

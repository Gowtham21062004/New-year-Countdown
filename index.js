
let dayBox = document.getElementsByClassName('day')[0]
let hrBox = document.getElementsByClassName('hr')[0]
let minBox = document.getElementsByClassName('min')[0]
let secBox = document.getElementsByClassName('sec')[0]
let endDate = new Date(2025, 0, 1);
console.log(endDate)
let endTime = endDate.getTime();

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endDate - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;
    let addZeroes = (num) => (num < 10 ? `0${num}`: num);
    
    if (endTime < todayTime) {
        clearInterval(i);
        document.querySelector(".time").innerHTML = `<h1>Countdown Has Expired</h1>`;
    } else{
        let daysLeft = Math.floor(Math.abs(remainingTime / oneDay));
        let hrsLeft = Math.floor(Math.abs((remainingTime % oneDay) / oneHr));
        let minsLeft = Math.floor(Math.abs((remainingTime % oneHr) / oneMin));
        let secsLeft = Math.floor(Math.abs((remainingTime % oneMin) / 1000));
        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();
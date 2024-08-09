// index.js

// HOME
let homeScore = document.getElementById("homeScore");
let homeCount = 0;

function homePlusOne() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function homePlusTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function homePlusThree() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

// GUEST
let guestScore = document.getElementById("guestScore");
let guestCount = 0;

function guestPlusOne() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function guestPlusTwo() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function guestPlusThree() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

/* WINNING SECTION using conditional (ternary) operator [condition ? expressionIfTrue : expressionIfFalse;]
*/
let whoIsLeading = document.getElementById("whoIsLeading");

function leading() {
    const homeResults = homeCount - guestCount;
    const awayResults = guestCount - homeCount;

    if (homeCount > guestCount) {
        whoIsLeading.textContent = `Home is leading by ${homeResults} ${homeResults === 1 ? "point" : "points"}!`;
    } else if (guestCount > homeCount) {
        whoIsLeading.textContent = `Away is leading by ${awayResults} ${awayResults === 1 ? "point" : "points"}!`;
    } else {
        whoIsLeading.textContent = "Draw!";
    }
}

/* WINNING SECTION
let whoIsLeading = document.getElementById("whoIsLeading");

function leading() {
    if (homeCount > guestCount) {
        let homeResults = homeCount - guestCount;
            if (homeResults === 1) {
                whoIsLeading.textContent = "Home is leading by " + homeResults + " point!";
            } else if (homeResults > 1) {
                whoIsLeading.textContent = "Home is leading by " + homeResults + " points!";
            }
    } else if (homeCount < guestCount) {
        let awayResults = guestCount - homeCount;
            if (awayResults === 1) {
                whoIsLeading.textContent = "Away is leading by " + awayResults + " point!";
            } else if (awayResults > 1) {
                whoIsLeading.textContent = "Away is leading by " + awayResults + " points!";
            }
    } else {
        whoIsLeading.textContent = "Draw!"
    }
} */
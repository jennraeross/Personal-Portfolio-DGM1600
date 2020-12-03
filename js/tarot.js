// Selects the div where cards will be shown
const cards         = document.querySelector("#cards");
const allButton     = document.querySelector("#allButton");
const threeButton   = document.querySelector("#threeButton");
const sevenButton   = document.querySelector("#sevenButton");

// Arrays that will be filled with card objects.
let deck = [];
let hand = [];

// Clears cards div
function clearCards() {
    cards.innerHTML = "";
}

// Takes an array of card objects and displays them.
function displayCards(cardsArray) {
    clearCards();
    cardsArray.forEach((info) => {
        cards.innerHTML +=`
            <div class="card">
                <div class="content">
                    <div class="front"><img src="${info.image}"/></div>
                    <div class="back" ><h3>${info.name}</h3><p>${info.summary}</p></div>
                </div>
            </div>
            `;
    });
}

function spreadCards(cardsArray) {
    clearCards();
    cardsArray.forEach((info) => {
        switch(Math.floor(Math.random() * 2)) {
            case 0:
                cards.innerHTML+=`
                <div class="card">
                    <div class="content">
                        <div class="front"><img src="${info.image}"/></div>
                        <div class="back" >
                            <h3>${info.name}</h3>
                            <p>Meaning: ${info.upright}</p>
                            <p>Summary: ${info.summary}</p>
                        </div>
                    </div>
                </div>
                `;
                break;
            case 1:
                cards.innerHTML+=`
                <div class="card">
                    <div class="content">
                        <div class="front"><img class="upside-down" src="${info.image}"/></div>
                        <div class="back" >
                            <h3>${info.name}</h3>
                            <h4>Reversed</h4>
                            <p>Meaning: ${info.reversed}</p>
                            <p>Summary: ${info.summary}</p>
                        </div>
                    </div>
                </div>
                `;
        }
    });
}

function drawCards(hand, deck, number) {
    for (var i = 0; i < number; i++) {
        hand.push(deck[Math.floor(Math.random() * deck.length)]);
    }
    spreadCards(hand);
    hand = [];
}

//* Retrieves card data from API
async function fetchCards() {
    //* Original API went down after I got it working,
    //* so I switched to use a copy of the JSON data it gave.
    ////const response = await fetch('https://tarot.howlcode.com/api/v1/cards');
    const response = await fetch('./js/tarot-cards.json');
    // watches for errors
    if (!response.ok) {
        const message = `An error has occured: '${response.status}'. Please try again later.`;
        throw new Error(message);
    }
    //creates new object when response is recieved, and returns it.
    const cardsJSON = await response.json();
    return cardsJSON;
}

// Alerts the user if there is an error.
fetchCards().catch(error => {
    alert(error.message);
});

// Uses fetchCards() to get card information, 
// converts the response to an array of objects,
// and inserts said information into the page.
fetchCards().then(cardsJSON => {
    // Converts to array of objects
    deck = Object.values(cardsJSON);
    console.log(deck)
    // Inserts cards into page.
    displayCards(deck);
    threeButton.addEventListener("click", function() {
        drawCards(hand, deck, 3);
        hand = [];
    });
    sevenButton.addEventListener("click", function() {
        drawCards(hand, deck, 7);
        hand = [];
    });
    allButton.addEventListener("click", function() {
        displayCards(deck);
    })
});


const cards = document.querySelector("#cards");

fetch('https://tarot.howlcode.com/api/v1/cards')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(info => {
            cards.innerHTML +=`
            <div class="card">
                <div class="content">
                    <div class="front"><img src="${info.image}" /></div>
                    <div class="back" ><h3>${info.name}</h3><p>${info.summary}</p></div>
                </div>
            </div>
            `
        });
    })
    .catch((err) => {
        alert('Could not retrieve tarot cards');
    })
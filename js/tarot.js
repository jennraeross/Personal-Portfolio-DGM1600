const cards = document.querySelector("#cards")
//let url = 'https://tarot.howlcode.com/api/v1/cards';
//let response = await fetch(url);
//let cards = await response.json(); // read response body and parse as JSON
//alert(commits[0].author.login);
fetch('https://tarot.howlcode.com/api/v1/cards')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        //console.log(data)
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
        // Do something for an error here
    })
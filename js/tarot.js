let url = 'https://tarot.howlcode.com/api/v1/cards';
let response = await fetch(url);

let cards = await response.json(); // read response body and parse as JSON

console.log(cards);
//alert(commits[0].author.login);
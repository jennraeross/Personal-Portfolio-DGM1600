import {planets} from "../swapi/planets.js";
const docBody = document.querySelector("#main");

function createPlanets () {
	var number;
	planets.forEach(function (entry) {
		if (entry.diameter !== "0" && entry.diameter !== "unknown") {
			let diameter = ((entry.diameter)/118000)*100;
			console.log('yes');
			number = entry.url.match(/[0-9]+/g);
			docBody.innerHTML += `
			<img src="/img/planets/${number}.jpg" onerror="this.style.display='none'" width="${diameter}%" alt="${entry.name}" title="${entry.name}" />
			`
		} else {
			console.log('no');
		}
	});
}

createPlanets();
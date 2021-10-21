import {films}     from "../swapi/films.js";
import {people}    from "../swapi/people.js";
import {planets}   from "../swapi/planets.js";
import {species}   from "../swapi/species.js";
import {starships} from "../swapi/starships.js";
import {vehicles}  from "../swapi/vehicles.js";

const wiki_films        = document.querySelector("#wiki-films");
const wiki_people       = document.querySelector("#wiki-people");
const wiki_planets      = document.querySelector("#wiki-planets");
const wiki_species      = document.querySelector("#wiki-species");
const wiki_starships    = document.querySelector("#wiki-starships");
const wiki_vehicles     = document.querySelector("#wiki-vehicles");
const films_button      = document.querySelector("#films-button");
const people_button     = document.querySelector("#people-button");
const planets_button    = document.querySelector("#planets-button");
const species_button    = document.querySelector("#species-button");
const starships_button  = document.querySelector("#starships-button");
const vehicles_button   = document.querySelector("#vehicles-button");

function createCards(wiki, data) {
    var number;
    switch (data) {
        case films:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="episode-${entry.episode_id}">
                        <div class="tile-section"><h3>${entry.title}</h3></div>
                        <div class="tile-section"><img src="/img/films/${number}.jpg" onerror="this.style.display='none'" /></div>
                        <div class="tile-section">
                            <ul>
                                <li>Episode:        ${entry.episode_id}</li>
                                <li>Director:       ${entry.director}</li>
                                <li>Producers:      ${entry.producer}</li>
                                <li>Release Date:   ${entry.release_date}</li>
                            </ul>
                        </div>
                    </div>`;
                });
            break;
        case people:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="person-${entry.name.replace(/\s/g, "")}">
                        <div class="tile-section"><h3>${entry.name}</h3></div>
                        <div class="tile-section"><img src="/img/characters/${number}.jpg" onerror="this.style.display='none'" /></div>
                        <div class="tile-section">
                            <ul>
                                <li>Height:     ${entry.height}</li>
                                <li>Birth Year: ${entry.birth_year}</li>
                                <li>Gender:     ${entry.gender}</li>
                            </ul>
                        </div>
                    </div>`;
            });
            break;
        case planets:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="person-${entry.name.replace(/\s/g, "")}">
                        <div class="tile-section"><h3>${entry.name}</h3></div>
                        <div class="tile-section"><img src="/img/planets/${number}.jpg" onerror="this.style.display='none'" /></div>
                        <div class="tile-section">
                            <ul>
                                <li>Diameter:   ${entry.diameter}</li>
                                <li>Terrain:    ${entry.terrain}</li>
                                <li>Population: ${entry.population}</li>
                            </ul>
                        </div>
                    </div>`;
            });
            break;
        case species:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="person-${entry.name.replace(/\s/g, "")}">
                        <div class="tile-section"><h3>${entry.name}</h3></div>
                        <div class="tile-section"><img src="/img/species/${number}.jpg" onerror="this.style.display='none'" /></div>
                        <div class="tile-section">
                            <ul>
                                <li>Classification:     ${entry.classification}</li>
                                <li>Designation:        ${entry.designation}</li>
                                <li>Skin Colors:        ${entry.skin_colors}</li>
                                <li>Average Height:     ${entry.average_height}</li>
                                <li>Average Lifespan:   ${entry.average_lifespan}</li>
                            </ul>
                        </div>
                    </div>`;
            });
            break;
        case starships:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="person-${entry.name.replace(/\s/g, "")}">
                        <div class="tile-section"><h3>${entry.name}</h3></div>
                        <div class="tile-section"><img src="/img/starships/${number}.jpg" onerror="this.style.display='none'" /></div>
                        <div class="tile-section">
                            <ul>
                                <li>Manufacturer:       ${entry.manufacturer}</li>
                                <li>Cost in Credits:    ${entry.cost_in_credits}</li>
                                <li>Length:             ${entry.length}</li>
                                <li>Crew:               ${entry.crew}</li>
                                <li>Passengers:         ${entry.passengers}</li>
                                <li>Hyperdrive Rating:  ${entry.hyperdrive_rating}</li>
                                <li>Starship Class:     ${entry.starship_class}</li>
                            </ul>
                        </div>
                    </div>`;
            });
            break;
        case vehicles:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="person-${entry.name.replace(/\s/g, "")}">
                        <div class="tile-section"><h3>${entry.name}</h3></div>
                        <div class="tile-section"><img src="/img/vehicles/${number}.jpg" onerror="this.style.display='none'"/></div>
                        <div class="tile-section">
                            <ul>
                                <li>Manufacturer:       ${entry.manufacturer}</li>
                                <li>Cost in Credits:    ${entry.cost_in_credits}</li>
                                <li>Length:             ${entry.length}</li>
                                <li>Crew:               ${entry.crew}</li>
                                <li>Passengers:         ${entry.passengers}</li>
                                <li>Max Speed:          ${entry.max_atmosphering_speed}</li>
                                <li>Vehicle Class:      ${entry.vehicle_class}</li>
                            </ul>
                        </div>
                    </div>`;
            });
            break;
    }
    return;
}

function changeWiki (new_button, new_wiki) {
    wiki_films.classList.add("hidden");
    wiki_people.classList.add("hidden");
    wiki_planets.classList.add("hidden");
    wiki_species.classList.add("hidden");
    wiki_starships.classList.add("hidden");
    wiki_vehicles.classList.add("hidden");
    new_wiki.classList.remove("hidden");

    films_button.classList.remove("active");
    people_button.classList.remove("active");
    planets_button.classList.remove("active");
    species_button.classList.remove("active");
    starships_button.classList.remove("active");
    vehicles_button.classList.remove("active");
    new_button.classList.add("active");
}

createCards(wiki_films,      films);
createCards(wiki_people,     people);
createCards(wiki_planets,    planets);
createCards(wiki_species,    species);
createCards(wiki_starships,  starships);
createCards(wiki_vehicles,   vehicles);

films_button.addEventListener("click", function () {
    changeWiki(films_button, wiki_films);
});
people_button.addEventListener("click", function () {
    changeWiki(people_button, wiki_people);
});
planets_button.addEventListener("click", function () {
    changeWiki(planets_button, wiki_planets);
});
species_button.addEventListener("click", function () {
    changeWiki(species_button, wiki_species);
});
starships_button.addEventListener("click", function () {
    changeWiki(starships_button, wiki_starships);
});
vehicles_button.addEventListener("click", function () {
    changeWiki(vehicles_button, wiki_vehicles);
});

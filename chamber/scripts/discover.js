import { destinations } from '../data/discover-chatt.mjs'

// console.log(destinations);

const allPlaces = document.querySelector("#allplaces");

function showPlaces(places) {
    places.forEach((place) => {
        let name = place.name;
        let address = place.address;
        let description = place.description;
        let url = place.photourl;
        let fullUrl = `./images/${url}`;

        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const fig = document.createElement("figure");
        const add = document.createElement("address");
        const p = document.createElement("p");
        const button = document.createElement("button");
        const img = document.createElement("img");
        img.src = fullUrl;
        img.alt = `${description}`;
        img.classList.add("hover");
        button.type = "button";
        button.textContent = "Learn More";


        h2.textContent = name;
        add.textContent = address;
        p.textContent = description;

        fig.appendChild(img);

        div.appendChild(h2);
        div.appendChild(fig);
        div.appendChild(add);
        div.appendChild(p);
        div.appendChild(button);

        allPlaces.appendChild(div);

    });
}

showPlaces(destinations);
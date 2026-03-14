const gridbutton = document.querySelector("#grid-view");
const listbutton = document.querySelector("#list-view");
const display = document.querySelector("article")

async function getData() {
        const response = await fetch('./data/members.json');
        const data = await response.json(); // parse the JSON data
        console.log(data);
        showMembers(data.companies);
}

function showMembers(members) {
    members.forEach((member) => {
        let name = member.name;
        let address = member.address;
        let phone = member.phone;
        let url = member.url;
        let memberlevel = member.memberlevel;

        const newsection = document.createElement("section");

        const newname = document.createElement("h2");
        const newaddress = document.createElement("p");
        const newphone = document.createElement("p");
        const newurl = document.createElement("p");
        const newlogo = document.createElement("img");
        newlogo.src = member.img;
        newlogo.alt = `${member.name} logo`;
        newlogo.height = 150;

        newname.textContent = name;
        newaddress.textContent = address;
        newphone.textContent = phone;
        newurl.textContent = url;
        
        newsection.appendChild(newlogo);
        newsection.appendChild(newname);
        newsection.appendChild(newaddress);
        newsection.appendChild(newphone);
        newsection.appendChild(newurl);

        if (memberlevel === 1) {
            newsection.classList.add("level-one");
        }
        else if (memberlevel === 2) {
            newsection.classList.add("level-two");
        }
        else {
            newsection.classList.add("level-three");
        }

        display.appendChild(newsection);
    });
}

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

getData();

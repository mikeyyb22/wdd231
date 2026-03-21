const display = document.querySelector("article")

async function getData() {
        const response = await fetch('./data/members.json');
        const data = await response.json(); // parse the JSON data
        console.log(data);
        showMembers(data.companies);
}

function showMembers(members) {
    const premiumMembers = members.filter((member) => member.memberlevel > 1);
    console.log(premiumMembers);

    randomOne = Math.floor(Math.random() * premiumMembers.length);
    console.log(randomOne);
    if (randomOne === premiumMembers.length - 1) {
        randomTwo = randomOne - 1;
    }
    else {
        randomTwo = randomOne + 1;
    }
    console.log(randomTwo);

    let nameOne = premiumMembers[randomOne].name;
    let addressOne = premiumMembers[randomOne].address;
    let phoneOne = premiumMembers[randomOne].phone;
    let urlOne = premiumMembers[randomOne].url;
    let memberlevelOne = premiumMembers[randomOne].memberlevel;

    let nameTwo = premiumMembers[randomTwo].name;
    let addressTwo = premiumMembers[randomTwo].address;
    let phoneTwo = premiumMembers[randomTwo].phone;
    let urlTwo = premiumMembers[randomTwo].url;
    let memberlevelTwo = premiumMembers[randomTwo].memberlevel;

    const newsectionOne = document.createElement("section");
    const newsectionTwo = document.createElement("section");

    const newnameOne = document.createElement("h2");
    const newaddressOne = document.createElement("p");
    const newphoneOne = document.createElement("p");
    const newurlOne = document.createElement("p");
    const newlogoOne = document.createElement("img");
    const newlevelOne = document.createElement("p");
    newlogoOne.src = premiumMembers[randomOne].img;
    newlogoOne.alt = `${premiumMembers[randomOne].name} logo`;
    newlogoOne.height = 150;

    const newnameTwo = document.createElement("h2");
    const newaddressTwo = document.createElement("p");
    const newphoneTwo = document.createElement("p");
    const newurlTwo = document.createElement("p");
    const newlogoTwo = document.createElement("img");
    const newlevelTwo = document.createElement("p");
    newlogoTwo.src = premiumMembers[randomTwo].img;
    newlogoTwo.alt = `${premiumMembers[randomTwo].name} logo`;
    newlogoTwo.height = 150;

    newnameOne.textContent = nameOne;
    newaddressOne.textContent = addressOne;
    newphoneOne.textContent = phoneOne;
    newurlOne.textContent = urlOne;
    newlevelOne.textContent = `Member level: ${memberlevelOne}`

    newnameTwo.textContent = nameTwo;
    newaddressTwo.textContent = addressTwo;
    newphoneTwo.textContent = phoneTwo;
    newurlTwo.textContent = urlTwo;
    newlevelTwo.textContent = `Member level: ${memberlevelTwo}`
    
    newsectionOne.appendChild(newlogoOne);
    newsectionOne.appendChild(newnameOne);
    newsectionOne.appendChild(newaddressOne);
    newsectionOne.appendChild(newphoneOne);
    newsectionOne.appendChild(newurlOne);
    newsectionOne.appendChild(newlevelOne);

    newsectionTwo.appendChild(newlogoTwo);
    newsectionTwo.appendChild(newnameTwo);
    newsectionTwo.appendChild(newaddressTwo);
    newsectionTwo.appendChild(newphoneTwo);
    newsectionTwo.appendChild(newurlTwo);
    newsectionTwo.appendChild(newlevelTwo);

    display.appendChild(newsectionOne);
    display.appendChild(newsectionTwo);

}

getData();
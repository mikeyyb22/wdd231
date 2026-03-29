const LAST_VISITED = 'lastVisit';
const lastVisit = localStorage.getItem(LAST_VISITED);
console.log(lastVisit);
const visitedTitle = document.querySelector("#lastvisited");
let visitedText = ``;

if (lastVisit) {
    const pastDate = new Date(lastVisit);
    const currentDate = new Date();
    // Calc difference in milliseconds
    const diffInMs = currentDate - pastDate;
    // Convert to days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 *24));

    if (diffInDays < 1)
    {
        visitedText = `Back so soon! Awesome!`;
        visitedTitle.textContent = visitedText;
    } else {
        if (diffInDays === 1)
        {
            visitedText = `Your last visit was ${diffInDays} day ago.`;
            visitedTitle.textContent = visitedText;
        } else {
            visitedText = `Your last visit was ${diffInDays} days ago.`;
            visitedTitle.textContent = visitedText;
        }
        
    }    
} else {
    visitedText = 'Welcome! Let us know if you have any questions.';
    visitedTitle.textContent = visitedText;
}

const currentTime = new Date().toLocaleString();
console.log(currentTime);
localStorage.setItem('lastVisit', currentTime);
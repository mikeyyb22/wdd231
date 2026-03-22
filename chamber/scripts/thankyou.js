const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `<p>Thank you for your application!</p>
    <p>Application details:</p>    
    <p>Name: ${myInfo.get('fname')} ${myInfo.get('lname')}</p>
    <p>Email: ${myInfo.get('email')}</p>
    <p>Phone: ${myInfo.get('phone')}</p>
    <p>Business/Org: ${myInfo.get('business')}</p>
    <p>Date submitted: ${myInfo.get('timestamp')}</p>`;
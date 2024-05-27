/* eslint-disable no-unused-vars */
let user = JSON.parse(localStorage.getItem("user"));

if (user.isModerator == true) {
    document.querySelector(".admin-header").setAttribute('style', 'display:block');
}
else {
    document.querySelector(".user-header").setAttribute('style', 'display:block');
}

fetch(`http://127.0.0.1:5000/article/` + localStorage.getItem('article'), {
    method: "GET",
    headers: {
        'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
    }
}).then((response) => response.json())
    .then((data) => {
        document.getElementsByTagName('h2')[0].textContent = data.name;
        document.getElementsByTagName('p')[0].textContent = data.text;
        document.getElementsByClassName('date')[0].textContent = data.publishDate.replace('T', ' ');
        document.getElementsByClassName('date')[1].textContent = data.lastModificationDate.replace('T', ' ');
    })


function logout() {
    localStorage.removeItem("user");
}
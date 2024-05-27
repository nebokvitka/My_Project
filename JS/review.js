/* eslint-disable no-unused-vars */
let user = JSON.parse(localStorage.getItem("user"));

fetch(`http://127.0.0.1:5000/versions/` + localStorage.getItem('article'), {
    method: "GET",
    headers: {
        'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
    }
}).then((response) => response.json())
    .then((data) => {
        document.getElementsByTagName('h2')[0].textContent = data.name;
        document.getElementsByTagName('p')[0].textContent = data.text;
    })

function accept() {
    fetch(`http://127.0.0.1:5000/versions/` + localStorage.getItem('article'), {
        method: "PUT",
        headers: {
            'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
        }
    }).then((response) => {
        if (response.ok) {
            alert('Version accepted');
        }
        else {
            alert('You have no rights to accept');
        }
    })
}

function decline() {
    fetch(`http://127.0.0.1:5000/versions/` + localStorage.getItem('article'), {
        method: "DELETE",
        headers: {
            'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
        }
    }).then((response) => {
        if (response.ok) {
            alert('Version declined');
        }
        else {
            alert('You have no rights to decline');
        }
    })
}

function logout() {
    localStorage.removeItem("user");
}
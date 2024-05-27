/* eslint-disable no-unused-vars */
let user = JSON.parse(localStorage.getItem("user"));
let username, firstname, lastname, email, phone;

fetch(`http://127.0.0.1:5000/user/profile`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
    },
}).then((response) => response.json());

if (user.isModerator == true) {
    document.querySelector(".admin-header").setAttribute('style', 'display:block');
}
else {
    document.querySelector(".user-header").setAttribute('style', 'display:block');
}

username = document.querySelector('#username');
username.innerHTML = user.username;

firstname = document.querySelector('#firstname');
firstname.innerHTML = user.firstName;

lastname = document.querySelector('#lastname');
lastname.innerHTML = user.lastName;

email = document.querySelector('#email');
email.innerHTML = user.email;

phone = document.querySelector('#phone');
phone.innerHTML = user.phone;

function logout() {
    localStorage.removeItem("user");
}

function delete_user() {
    fetch(`http://127.0.0.1:5000/user/delete`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
        },
    })
    localStorage.removeItem("user");
}
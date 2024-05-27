/* eslint-disable no-unused-vars */
let user = JSON.parse(localStorage.getItem("user"));

document.querySelector('#username').value = user.username;

document.querySelector('#firstname').value = user.firstName;

document.querySelector('#lastname').value = user.lastName;

document.querySelector('#email').value = user.email;

document.querySelector('#phone').value = user.phone;


if (user.isModerator == true) {
    document.querySelector(".admin-header").setAttribute('style', 'display:block');
}
else {
    document.querySelector(".user-header").setAttribute('style', 'display:block');
}

function logout() {
    localStorage.removeItem("user");
}

const form = document.getElementsByTagName('form')[0];
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        fetch(`http://127.0.0.1:5000/user/edit_profile`, {
            method: "PUT",
            body: JSON.stringify({
                username: username,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone
            }),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
            },

        }).then((response) => {
            if (response.ok) {
                alert('Succesfully edited');
                location.replace("user_profile.html");
            }
            else {
                alert('Username or email already taken');
            }
            return response.json();
        })
            .then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
            })
            .catch(() => {
                document.getElementsByTagName("P")[0].style.visibility = "visible";
            })
    })
}
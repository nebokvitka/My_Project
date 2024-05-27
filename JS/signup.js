/* eslint-disable no-unused-vars */
const form = document.getElementsByTagName('form')[0];
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let phone = document.getElementById("phone").value;
        let isModerator;

        const radioButtons = document.querySelectorAll(
            'input[name="moderator"]'
        );
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                isModerator = radioButton.value;
                break;
            }
        }
        if (isModerator == "Yes") {
            isModerator = 1;
        } else {
            isModerator = 0;
        }
        fetch(`http://127.0.0.1:5000/user`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                password: password,
                isModerator: isModerator,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json())
            .then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
                window.open("articles.html", "_self");
            }
            )
            .catch(() => {
                document.getElementsByTagName("P")[0].style.visibility = "visible";
            })
    })
}
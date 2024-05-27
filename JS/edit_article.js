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
        document.getElementsByClassName('title')[0].value = data.name;
        document.getElementsByTagName('textarea')[0].innerHTML = data.text;
    })

function edit_article() {
    let name = document.getElementsByClassName('title')[0].value;
    let text = document.getElementsByTagName('textarea')[0].innerHTML;
    fetch(`http://127.0.0.1:5000/versions`, {
        method: "POST",
        body: JSON.stringify({
            editorUserId: user.id,
            articleId: localStorage.getItem('article'),
            name: name,
            text: text
        }),
        headers: {
            'Authorization': 'Basic ' + btoa(user.username + ':' + user.password),
            "Content-Type": "application/json"
        }
    });
    window.alert('Thanks for your editing!\nYour version will be reviewed soon.');
    window.open("article.html", "_self");
}

function logout() {
    localStorage.removeItem("user");
}
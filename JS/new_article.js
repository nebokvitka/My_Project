/* eslint-disable no-unused-vars */
let user = JSON.parse(localStorage.getItem("user"));

if (user.isModerator == true) {
    document.querySelector(".admin-header").setAttribute('style', 'display:block');
}
else {
    document.querySelector(".user-header").setAttribute('style', 'display:block');
}

function new_article() {
    let title = document.getElementsByClassName('title')[0].value;
    let text = document.getElementsByTagName('textarea')[0].value;
    if (title.trim().length == 0 || text.trim().length == 0) {
        window.alert('You cannot leave fields empty.');
        return;
    }
    fetch(`http://127.0.0.1:5000/versions`, {
        method: "POST",
        body: JSON.stringify({
            editorUserId: user.id,
            articleId: 0,
            name: title,
            text: text
        }),
        headers: {
            'Authorization': 'Basic ' + btoa(user.username + ':' + user.password),
            "Content-Type": "application/json"
        }
    });
    window.alert('Thanks for your article!\nYour version will be reviewed soon.');
    window.open("articles.html", "_self");
}

function logout() {
    localStorage.removeItem("user");
}
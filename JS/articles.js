/* eslint-disable no-unused-vars */
let user = JSON.parse(localStorage.getItem("user"));

if (user.isModerator == true) {
    document.querySelector(".admin-header").setAttribute('style', 'display:block');
}
else {
    document.querySelector(".user-header").setAttribute('style', 'display:block');
}

fetch(`http://127.0.0.1:5000/article`, {
    method: "GET",
    headers: {
        'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
    }
}).then((response) => response.json())
    .then((data) => {
        const func = [];
        for (let i = 0; i < data.length; i++) {
            var div = document.createElement('div');
            div.className = 'article';
            var a = document.createElement('a');
            var text = document.createTextNode(data[i].name);
            a.appendChild(text);
            var req = data[i].id;
            a.id = 'l' + req;
            div.appendChild(a);
            document.getElementsByClassName('container')[0].appendChild(div);
            func[i] = document.querySelector('#' + 'l' + req);
            func[i].addEventListener("click", () => {
                req = func[i].id;
                localStorage.setItem('article', req.slice(1));
            });
            a.href = 'article.html';
        }
    })

function logout() {
    localStorage.removeItem("user");
}

import React from 'react';
import './edit_article.css';
import { useState } from 'react';

const EditArticle = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const article = JSON.parse(localStorage.getItem("article"))

    const [title, setTitle] = useState(article.name);
    const [text, setText] = useState(article.text);

    const onChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    };

    const onChangeText = (e) => {
        const text = e.target.value;
        setText(text);
    };

    const editArticle = () => {
        fetch(`http://127.0.0.1:5000/versions`, {
            method: "POST",
            body: JSON.stringify({
                editorUserId: user.id,
                articleId: article.id,
                name: title,
                text: text
            }),
            headers: {
                'Authorization': 'Basic ' + btoa(user.username + ':' + user.password),
                "Content-Type": "application/json"
            }
        });
        window.open("/articles", "_self");
    }

    function logout() {
        localStorage.removeItem("user");
    }

    return (<>
        <header className='head'>
            <h1 className='articles'>Articles</h1>
            <nav className='nav'>
                <a className='headerlink' href="/articles">Home</a>
                {user.isModerator ? (
                    <a className='headerlink' href="/reviews">Review</a>
                ) : (<></>)}
                <a className='headerlink' href="/new_article">Add Article</a>
                <a className='headerlink' href="/user">User</a>
                <a className='headerlink' href="/" onClick={logout}>Log out</a>
            </nav>
        </header>
        <div className="contain">
            <div className="name-edit">
                <input
                    type="text"
                    className="title-edit"
                    value={title}
                    onChange={onChangeTitle}
                />
            </div>
            <div className="content-edit">
                <textarea rows="auto" cols="140" name="description" onChange={onChangeText}>
                    {text}
                </textarea>
            </div>
        </div>
        <button onClick={editArticle}>Submit</button>
    </>
    )
}

export default EditArticle
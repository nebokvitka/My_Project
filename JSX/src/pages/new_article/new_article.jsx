import React from 'react';
import './new_article.css';
import { useState } from 'react';

const NewArticle = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [title, setTitle] = useState();
    const [text, setText] = useState();
    const onChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    };

    const onChangeText = (e) => {
        const text = e.target.value;
        setText(text);
    };
    const postArticle = () => {
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
            <div className="name-new">
                <input type="text" className="title-new" placeholder="Title of your article" onChange={onChangeTitle} />
            </div>
            <div className="content">
                <textarea
                    rows="25"
                    cols="140"
                    placeholder="Content for your article"
                    onChange={onChangeText}
                ></textarea>
            </div>
        </div>
        <button onClick={postArticle}>Submit</button>
    </>
    )
}

export default NewArticle
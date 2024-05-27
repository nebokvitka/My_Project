import React from 'react';
import './article.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Moment from 'moment';

const Article = () => {
    Moment.locale('en');
    const user = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();
    const article_id = location.state.id;
    const getArticle = () => {
        fetch(`http://127.0.0.1:5000/article/` + article_id, {
            method: "GET",
            headers: {
                'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
            }
        }).then((response) => response.json())
            .then((data) => {
                setdata(data);
                localStorage.setItem("article", JSON.stringify(data));
            })
    }
    useEffect(() => {
        getArticle();
    }, []);
    const [info, setdata] = useState([]);
    function logout() {
        localStorage.removeItem("user");
    }
    return (
        <>
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
                <div className="name-article">
                    <h2>{info.name}</h2>
                </div>
                <div className="content-article">
                    <p className='text-article'>{info.text}</p>
                </div>
                <div className="dates">
                    <div className="row1">
                        <p>Published on </p>
                        <p className="date">{Moment(info.publishDate).format('MMMM Do, YYYY H:mma')}</p>
                    </div>
                    <div className="row2">
                        <p>Last modication on </p>
                        <p className="date">{Moment(info.lastModificationDate).format('MMMM Do, YYYY H:mma')}</p>
                    </div>
                </div>
            </div>
            <div className="links-user">
                <a className='edit-article' href="/edit_article">Edit</a>
            </div>
        </>
    )
}

export default Article
import React from 'react';
import './articles.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const getReviews = () => {
        fetch(`http://127.0.0.1:5000/versions`, {
            method: "GET",
            headers: {
                'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
            }
        }).then((response) => response.json())
            .then((data) => {
                setdata(data);
            })
    }
    useEffect(() => {
        getReviews();
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
                    <a className='headerlink' href="/reviews">Review</a>
                    <a className='headerlink' href="/new_article">Add Article</a>
                    <a className='headerlink' href="/user">User</a>
                    <a className='headerlink' href="/" onClick={logout}>Log out</a>
                </nav>
            </header>
            <div className='container-articles'>
                {info.slice(0, info.length).map((article, index) => {
                    return (
                        <div className='article' key={index}>
                            <Link
                                to='/review'
                                state={{
                                    id: article.id,
                                }}
                                className='article-link'
                            >
                                {article.name}
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        </>
    )

}

export default Reviews
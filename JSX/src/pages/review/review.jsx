import React from 'react';
import './review.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Review = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();
    const article_id = location.state.id;

    const getReview = () => {
        fetch(`http://127.0.0.1:5000/versions/` + article_id, {
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
        getReview();
    }, []);
    const [info, setdata] = useState([]);

    function logout() {
        localStorage.removeItem("user");
    }

    const accept = () => {
        fetch(`http://127.0.0.1:5000/versions/` + article_id, {
            method: "PUT",
            headers: {
                'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
            }
        }).then((response) => {
            if (response.ok) {
                alert('Version accepted');
                window.open("/reviews", "_self");

            }
            else {
                alert('You have no rights to accept');
            }
        })

    }

    const decline = () => {
        fetch(`http://127.0.0.1:5000/versions/` + article_id, {
            method: "DELETE",
            headers: {
                'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
            }
        }).then((response) => {
            if (response.ok) {
                alert('Version declined');
                window.open("/reviews", "_self");
            }
            else {
                alert('You have no rights to decline');
            }
        })
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
            <div className="contain">
                <div className="name-review">
                    <h2>{info.name}</h2>
                </div>
                <div className="content-review">
                    <p className='text-review'>
                        {info.text}
                    </p>
                </div>
            </div>
            <div className="btn">
                <button className='click' onClick={accept}>Accept</button>
                <button className='click' onClick={decline}>Decline</button>
            </div>
        </>
    )
}

export default Review

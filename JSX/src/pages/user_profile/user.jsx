import React from 'react';

import './user_profile.css';
import { useState, useEffect } from 'react';

const User = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const getUserData = () => {
        fetch(`http://127.0.0.1:5000/user/profile`, {
            method: "GET",
            headers: {
                'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
            },
        }).then((response) => response.json())
            .then((data) => {
                setdata(data);
            })
    }

    useEffect(() => {
        getUserData();
    }, []);
    const [info, setdata] = useState({});
    function logout() {
        localStorage.removeItem("user");
    }

    const HandleDelete = () => {

        fetch(`http://127.0.0.1:5000/user/delete`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
            },
        })
        localStorage.removeItem("user");
    }

    return (
        <>
            <header className='head'>
                <h1 className='articles'>Articles</h1>
                <nav className='nav'>
                    <a className='headerlink' href="/articles">Home</a>
                    {info.isModerator ? (
                        <a className='headerlink' href="/reviews">Review</a>
                    ) : (<></>)}
                    <a className='headerlink' href="/new_article">Add Article</a>
                    <a className='headerlink' href="/user">User</a>
                    <a className='headerlink' href="/" onClick={logout}>Log out</a>
                </nav>
            </header>
            <div className="user">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <p className="field">Username</p>
                        </div>
                        <div className="info" id="username">{info.username}</div>
                    </div>
                    <hr className='line' />
                    <div className="row">
                        <div className="col">
                            <p className="field">First Name</p>
                        </div>
                        <div className="info" id="firstname">{info.firstName}</div>
                    </div>
                    <hr className='line' />
                    <div className="row">
                        <div className="col">
                            <p className="field">Last Name</p>
                        </div>
                        <div className="info" id="lastname">{info.lastName}</div>
                    </div>
                    <hr className='line' />
                    <div className="row">
                        <div className="col">
                            <p className="field">Email</p>
                        </div>
                        <div className="info" id="email">{info.email}</div>
                    </div>
                    <hr className='line' />
                    <div className="row">
                        <div className="col">
                            <p className="field">Phone</p>
                        </div>
                        <div className="info" id="phone">{info.phone}</div>
                    </div>
                </div>
                <div className="linksu">
                    <a className='but' href="/edit_user">Edit</a>
                    <a className='but' href="/" onClick={HandleDelete}>Delete</a>
                </div>
            </div>
        </>
    )
}


export default User;
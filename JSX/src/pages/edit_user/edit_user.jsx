import React from 'react';
import './edit_profile.css';
import { useState } from 'react';

const Edit = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [username, setUsername] = useState(user.username);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeFirst = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
    };

    const onChangeLast = (e) => {
        const lastName = e.target.value;
        setLastName(lastName);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePhone = (e) => {
        const phone = e.target.value;
        setPhone(phone);
    };
    const editUser = (e) => {
        e.preventDefault();
        fetch(`http://127.0.0.1:5000/user/edit_profile`, {
            method: "PUT",
            body: JSON.stringify({
                username: username,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone
            }),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
            },

        }).then((response) => {
            if (response.ok) {
                alert('Succesfully edited');
                window.open("/user", "_self");
            }
            else {
                alert('Username or email already taken');
            }
            return response.json();
        })
            .then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
            })
            .catch(() => {
                document.getElementsByTagName("P")[0].style.visibility = "visible";
            })
    }

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
            <div className="card">
                <h2>User information</h2>
                <form onSubmit={editUser}>
                    <div className="info">
                        <div className="form-group">
                            <p className='error'>Username or email taken</p>
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                id="username"
                                value={username}
                                onChange={onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                id="firstname"
                                value={firstName}
                                onChange={onChangeFirst}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                id="lastname"
                                value={lastName}
                                onChange={onChangeLast}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Phone"
                                id="phone"
                                value={phone}
                                onChange={onChangePhone}
                            />
                        </div>
                        <input className="subedit" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    )

}

export default Edit;
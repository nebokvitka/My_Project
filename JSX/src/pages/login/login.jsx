
import React from 'react';
import './login.css';

const Login = () => {
    const HandleLogin = (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        fetch(`http://127.0.0.1:5000/user/login`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
                window.open("/articles", "_self");
            })
            .catch(() => {
                document.getElementsByTagName("P")[0].style.visibility = "visible";
            })
    }
    return (
        <div className="center">
            <h1 className='login'>Login</h1>
            <form className='log' method="post" onSubmit={HandleLogin}>
                <p className='error'>Invalid username or password:</p>
                <div className="text-field">
                    <input className='inp' type="text" id="username" required />
                    <span className='sp'></span>
                    <label className='lab'>Username</label>
                </div>
                <div className="text-field">
                    <input className='inp' type="password" id="password" required />
                    <span className='sp'></span>
                    <label className='lab'>Password</label>
                </div>
                <input className='inp' type="submit" value="Login" />
                <div className="sign">
                    Do not have an account? <a className='linkl' href="/signup">Sign up</a>
                </div>
            </form>
        </div>
    )
}

export default Login;
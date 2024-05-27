import React from 'react';
import './signup.css';

const SignUp = () => {
    const HandleSignUp = (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const phone = document.getElementById("phone").value;

        fetch(`http://127.0.0.1:5000/user`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                password: password,
                isModerator: 0,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json())
            .then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
                window.open("/articles", "_self");
            }
            )
            .catch(() => {
                document.getElementsByTagName("P")[0].style.visibility = "visible";
            })
    }
    return (
        <div className="center">
            <h1 className="signup">Sign Up</h1>
            <form className='for' onSubmit={HandleSignUp}>
                <p id="error">User already exists</p>
                <div className="text-field">
                    <input type="text" id="username" required />
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="text-field">
                    <input type="text" id="firstname" required />
                    <span></span>
                    <label>First Name</label>
                </div>
                <div className="text-field">
                    <input type="text" id="lastname" required />
                    <span></span>
                    <label>Last Name</label>
                </div>
                <div className="text-field">
                    <input type="email" id="email" required />
                    <span></span>
                    <label>Email</label>
                </div>
                <div className="text-field">
                    <input type="number" id="phone" required />
                    <span></span>
                    <label>Phone</label>
                </div>
                <div className="text-field">
                    <input type="password" id="password" required />
                    <span></span>
                    <label>Password</label>
                </div>
                <input className="signsub" type="submit" value="Sign Up" />
                <div className="loginb">
                    Already have an account? <a className='linklog' href="/login">Log in</a>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
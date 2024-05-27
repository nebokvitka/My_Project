import React from 'react';
import './main.css';

const Main = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <img className="first-image" src={require("../../Images/left-image.png")} alt="article" />
          <h1 className="title">
            Write <br />
            articles <br />
            easily
          </h1>
          <img
            className="second-image"
            src={require("../../Images/image_2022-03-25_17-16-59.png")}
            alt="article"
          />
        </div>

        <div className="links">
          <a className='link' href="/login">Login</a>
          <a className='link' href="/signup">Sign Up</a>
        </div>
      </header>

      <section className="about">
        <div className="container-width">
          <h2 className="about-heading">About</h2>
          <p className="information">
            We have created a fictional band website. Do you want to read some
            news, science fiction or funny stories? Maybe, you're a writer and
            you'd like to publish some of your works? In any case, this website is
            what you are looking for. Here are already gathered more than 1000
            works from different authors. So why are you still hesitating? Sign up
            and have fun with us! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae sunt temporibus tenetur quaerat, ipsum
            cupiditate quos! Iure, asperiores nesciunt? Consequatur at laudantium
            commodi tempore, quos nostrum eveniet perferendis odit ratione? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Eum quia eos
            eligendi facere laborum doloremque rerum quisquam numquam possimus
            nulla. Inventore saepe libero sequi eos! Alias iste id vitae aut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, esse
            pariatur, cum et commodi natus eius architecto sapiente eaque
            asperiores sint, tenetur eveniet eum odio? Magnam nam nesciunt odio
            maiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Inventore veniam, a earum, aliquid tempore quae deserunt quidem natus
            veritatis laborum atque dignissimos quos vero. Illum eos adipisci ex
            rerum laborum.
          </p>
        </div>
      </section>
    </>
  )
}

export default Main;
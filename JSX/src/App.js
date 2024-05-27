import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login'
import Main from './pages/main/main'
import SignUp from './pages/signup/signup'
import User from './pages/user_profile/user'
import Edit from './pages/edit_user/edit_user'
import Articles from './pages/articles/articles';
import Article from './pages/article/article';
import EditArticle from './pages/edit_article/edit_article';
import NewArticle from './pages/new_article/new_article';
import Reviews from './pages/reviews/reviews';
import Review from './pages/review/review';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/user' element={<User />} />
        <Route exact path='/edit_user' element={<Edit />} />
        <Route exact path='/articles' element={<Articles />} />
        <Route exact path='/article' element={<Article />} />
        <Route exact path='/edit_article' element={<EditArticle />} />
        <Route exact path='/new_article' element={<NewArticle />} />
        <Route exact path='/reviews' element={<Reviews />} />
        <Route exact path='/review' element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;

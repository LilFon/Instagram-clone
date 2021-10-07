import React, { useContext} from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

import { Router, Redirect } from '@reach/router';
import { Context } from './Context';



export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/branch/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <Login path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        {isAuth && <Redirect from='/register' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
        <NotRegisteredUser path='/register' />
      </Router>

      <NavBar />
      </div>
  )
}
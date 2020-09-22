import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import GoogleAnalytics from './components/analytics';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <div className='App'>
              <NavBar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route
                    exact
                    path='/about'
                    component={GoogleAnalytics(About)}
                  />
                  <Route
                    exact
                    path='/register'
                    component={GoogleAnalytics(Register)}
                  />
                  <Route
                    exact
                    path='/login'
                    component={GoogleAnalytics(Login)}
                  />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;

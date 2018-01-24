import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import MediaQuery from 'react-responsive';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect
} from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = { token: null };
  }

  componentDidMount() {
    const token = localStorage.getItem('mood_app_token');
    console.log('the token exists?', token)
    if (token) this.setState({ token });
  }

  setToken = (token) => this.setState({ token });

  logout = () => {
    localStorage.removeItem('mood_app_token');
    this.setState({ token: null });
  }

  render() {
    const renderLogin = () => (
      this.state.token
       ? <Redirect to="/dashboard" />
       : <Login setToken={this.setToken} />
   );

   const renderDashboard = () => (
     this.state.token
      ? <Dashboard logout={this.logout} />
      : <Redirect to="/" />
   );

    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={renderLogin} />
          <Route path="/dashboard" render={renderDashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

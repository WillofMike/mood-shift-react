import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Data from './pages/data'
import Single from './pages/single'
import Journal from './pages/journal'
import MediaQuery from 'react-responsive';
import {
  Switch,
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
    : <Redirect to="/dashboard" />
   );

   const renderJournal = () => (
     this.state.token
      ? <Journal logout={this.logout} />
      : <Redirect to="/" />
   );

   const renderData = () => (
     this.state.token
      ? <Data logout={this.logout} />
      : <Redirect to="/" />
   );

   const renderSingle = () => (
     this.state.token
      ? <Single logout={this.logout} />
      : <Redirect to="/single" />
   );

    return (
      <BrowserRouter>
        <Switch>
        <div>
          <Route exact path="/" render={renderLogin} />
          <Route path="/dashboard" render={renderDashboard} />
          <Route path="/journal" render={renderJournal} />
          <Route path="/data" render={renderData} />
          <Route path="/single" render={renderSingle} />
        </div>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

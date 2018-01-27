import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Data from './pages/data'
import Single from './pages/single'
import Journal from './pages/journal'
import MediaQuery from 'react-responsive';
import fakeData from './utility/fakeData'
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
    const renderLogin = (props) => (
      this.state.token
       ? <Redirect to="/dashboard" />
       : <Login {...props} setToken={this.setToken} />
   );

   const renderDashboard = (props) => (
     this.state.token
      ? <Dashboard {...props} logout={this.logout} />
    : <Redirect to="/" />
   );

   const renderJournal = (props) => (
     this.state.token
      ? <Journal {...props} days={fakeData} logout={this.logout} />
      : <Redirect to="/" />
   );

   const renderData = (props) => (
     this.state.token
      ? <Data {...props} logout={this.logout} />
      : <Redirect to="/" />
   );

   const renderSingle = (props) => (
     this.state.token
      ? <Single {...props} logout={this.logout} />
      : <Redirect to="/" />
   );

    return (
      <BrowserRouter>
        <Switch>
        <div>
          <Route exact path="/" render={renderLogin} />
          <Route path="/dashboard" render={renderDashboard} />
          <Route path="/journal" render={renderJournal} />
          <Route path="/data" render={renderData} />
          <Route path="/single/:id" render={renderSingle} />
        </div>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

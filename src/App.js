import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './pages/login'
import Dashboard from './pages/dashboard'
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
    this.state = {
      token: null,
      userId: null
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('mood_app_token');
    const userId = localStorage.getItem('user_id');
    console.log('APP MOUNTED', token, userId)
    if (token && userId) this.setState({ token, userId });
  }

  setToken = (token) => {
    this.setState({ token: token.token, userId: token.userId })
  }

  logout = () => {
    console.log('calling logout')
    localStorage.removeItem('mood_app_token');
    localStorage.removeItem('user_id');
    this.setState({ token: null, userId: null });
  }

  render() {
    const renderLogin = (props) => (
      this.state.token
       ? <Redirect to="/dashboard" />
       : <Login {...props} {...this.state} setToken={this.setToken} />
   );

   const renderDashboard = (props) => (
     this.state.token
      ? <Dashboard {...props} {...this.state} logout={this.logout} />
      : <Redirect to="/" />
   );

   const renderJournal = (props) => (
     this.state.token
      ? <Journal {...props} {...this.state} logout={this.logout} />
      : <Redirect to="/" />
   );

   const renderSingle = (props) => (
     this.state.token
      ? <Single {...props} {...this.state} logout={this.logout} />
      : <Redirect to="/" />
   );

    return (
      <BrowserRouter>
        <Switch>
        <div>
          <Route exact path="/" render={renderLogin} />
          <Route path="/dashboard" render={renderDashboard} />
          <Route path="/journal" render={renderJournal} />
          <Route path="/single/:id" render={renderSingle} />
        </div>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

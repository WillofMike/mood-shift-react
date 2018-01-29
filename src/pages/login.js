import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Form from '../components/loginForm'
import SignupForm from '../components/signupForm'
import loginbackground from '../images/loginbackground.png'
import { backFillDays } from '../utility/backfill'

const Image = styled.img`
  width: 100%;
  height: 30%;
  z-index: -1;
`

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      signupEmail: '',
      signupPassword: '',
      loginEmail: '',
      loginPassword: '',
    };
  }

  setSignupEmail = (evt) => this.setState({ signupEmail: evt.target.value })

  setSignupPassword = (evt) => this.setState({ signupPassword: evt.target.value })

  setLoginEmail = (evt) => this.setState({ loginEmail: evt.target.value })

  setLoginPassword = (evt) => this.setState({ loginPassword: evt.target.value })

  submitSignup = () => {
    const valid = this.state.signupEmail.length > 0
      && this.state.signupPassword.length > 0;

    const data = {
      email: this.state.signupEmail,
      password: this.state.signupPassword,
    };

    if (valid) {
      axios.post('https://mood-shift-api.herokuapp.com/auth/signup', data)
        .then((res) => {
          const tokenRecord = res.data.token;
          const token = tokenRecord.token;
          localStorage.setItem('mood_app_token', token);
          localStorage.setItem('user_id', tokenRecord.userId);
          this.props.setToken(tokenRecord);

          // create very first day for this user
          const dayData = {
            userId: tokenRecord.userId,
            morningMood: 'neutral',
            afternoonMood: 'neutral',
            nightMood: 'neutral',
          }
          return axios.post('https://mood-shift-api.herokuapp.com/day', dayData);
        })
        .then(res => {
          console.log('first day was created', res.data)
        })
        .catch((error) => console.log('Error', error));
    }
  }

  submitLogin = () => {
    const valid = this.state.loginEmail.length > 0
      && this.state.loginPassword.length > 0;

    const data = {
      email: this.state.loginEmail,
      password: this.state.loginPassword,
    };
    if (valid) {
      axios.post('https://mood-shift-api.herokuapp.com/auth/login', data)
        .then((res) => {
          const user = res.data.user;
          const token = res.data.token.token;
          localStorage.setItem('mood_app_token', token);
          localStorage.setItem('user_id', user._id);
          this.props.setToken(res.data.token);
          return axios.get(`https://mood-shift-api.herokuapp.com/day/user/${user._id}`)
        })
        .then(res => {
          const lastRecentDay = res.data[0];
          const daysToCreate = backFillDays(lastRecentDay);
          const postRequests = daysToCreate.map(day => {
            return axios.post('https://mood-shift-api.herokuapp.com/day', day)
          });
          return Promise.all(postRequests);
        })
        .catch((error) => console.log('Error', error));
    }
  }

  render() {
    return (
      <div>
        <Form
          {...this.state}
          title="Signup"
          setEmail={this.setSignupEmail}
          setPassword={this.setSignupPassword}
          submit={this.submitSignup}
        />
      <SignupForm
          {...this.state}
          title="Login"
          setEmail={this.setLoginEmail}
          setPassword={this.setLoginPassword}
          submit={this.submitLogin}
        />
      <Image src={loginbackground} />
    </div>
    )
  }

}

export default Login;

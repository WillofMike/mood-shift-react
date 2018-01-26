import React from 'react';
import styled from 'styled-components';
import angry from '../images/angry.png'
import happy from '../images/happy.png'
import sad from '../images/sad.png'
import anxious from '../images/anxious.png'
import { whatTimeOfDay } from '../utility/util';

const ChooseMood = (props) =>
  <div>
    <header><h1>Mood Shift</h1></header>
      <h3>How are you feeling?</h3>
      <form>
        <img onClick={() => props.setSelectedEmotion('happy')} src={happy}></img>
        <h5>Happy</h5>
        <img onClick={() => props.setSelectedEmotion('angry')} src={angry}></img>
        <h5>Angry</h5>
        <img onClick={() => props.setSelectedEmotion('sad')} src={sad}></img>
        <h5>Sad</h5>
        <img onClick={() => props.setSelectedEmotion('anxious')} src={anxious}></img>
        <h5>Anxious</h5>
          <input
            placeholder="Tell me how your feeling"
            type="text"
            value={props.selectedEmotion}
          />
          <button onClick={props.submitMood}>Submit</button>
      </form>
    <footer>Copyright Mood-Shift</footer>
  </div>

export default ChooseMood;

import React from 'react';
import { render } from "react-dom";
import styled from 'styled-components';
import Card from '../components/card'

const titles = [
  "One",
  "Two",
  "Three",
]

const Journal = () =>
  <div>
    <h1>Journal</h1>
    {
      titles.map((title, index) => <Card key={index} title={title} />)
    }
  </div>

export default Journal;

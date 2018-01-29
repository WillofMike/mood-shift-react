import React from 'react';
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { moodOfTheDay } from '../utility/transforms'

const CardTop = styled.div`
  background-color: #f5f5f5;
`

const CardBottom = styled.div`
  background-color: #FFB374;
`

const MyCard = (props) => (
  <Link to={{ pathname: `/single/${props.day._id}` }}>
    <Card>
    <CardTop>
      <CardHeader>
        {props.day.date}
      </CardHeader>
    </CardTop>
    <CardBottom>
      <CardBody>
        <p>{moodOfTheDay(props.day)}</p>
      </CardBody>
    </CardBottom>
    </Card>
  </Link>
);

export default MyCard;

import React from 'react';
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { moodOfTheDay } from '../utility/transforms'

const MyCard = (props) => (
  <Link to={{ pathname: `/single/${props.day._id}` }}>
    <Card>
      <CardHeader>
        {props.day.date}
      </CardHeader>
      <CardBody>
        <p>{moodOfTheDay(props.day)}</p>
      </CardBody>
    </Card>
  </Link>
);

export default MyCard;

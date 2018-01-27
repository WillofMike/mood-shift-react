import React from 'react';
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import styled from 'styled-components';
import { Link } from 'react-router-dom'



const MyCard = (props) => (
<Link to={{ pathname: `/single/${props.day._id}` }}>
  {console.log(props.day)}
  <Card>
    <CardHeader>
      {props.day.date}
    </CardHeader>
    <CardBody>
      <p>{props.day.morningMood}</p>
      <p>{props.day.afternoonMood}</p>
      <p>{props.day.nightMood}</p>
    </CardBody>
  </Card>
</Link>
);

export default MyCard;

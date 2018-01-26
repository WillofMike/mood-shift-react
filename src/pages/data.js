import React from 'react';
import styled from 'styled-components'
import DataDashboard from '../pages/data'
import graph from '../images/graph.png'
import BarChart from '../components/barChart'
import BarChartMonth from '../components/barChartMonth'
import Header from '../components/header'
import { render } from "react-dom";


const Data = (props) =>
<div>
    <Header />
    <button onClick={props.logout}>Logout</button>
    <h3>How you felt recently...</h3>
      <h2>Week to date</h2>
        <BarChart />
      <h2>Month to date</h2>
        <BarChartMonth />
</div>

export default Data;

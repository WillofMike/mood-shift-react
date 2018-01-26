import React from 'react';
import styled from 'styled-components'
import DataDashboard from '../pages/data'
import graph from '../images/graph.png'
import {Link} from 'react-router-dom'
import BarChart from '../components/barChart'


const Data = (props) =>
<div>
  <header>
      <Link to='/journal'><button onClick={props.journal}>Journal</button></Link>
      <button onClick={props.logout}>Logout</button>
  </header>
    <h3>How you felt recently...</h3>
      <h2>Week to date</h2>
        <BarChart />

      <h2>Month to date</h2>

</div>

export default Data;

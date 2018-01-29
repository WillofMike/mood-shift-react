import React from 'react';
import styled from 'styled-components';
import angry from '../images/angry.png'
import happy from '../images/happy.png'
import sad from '../images/sad.png'
import anxious from '../images/anxious.png'
import { whatTimeOfDay } from '../utility/util';
import Header from '../components/header'
import Footer from '../components/footer'

const Image = styled.img`
  ${'' /* display: flex;
  flex-direction: row; */}
  &:hover {
    background-color: #ccc;
    border-radius: 5px;

  }
`

const Button = styled.div`
  text-align:center;
`

const Wrapper = styled.div`
  display: grid;
   grid: repeat(2, 3fr) / auto-flow 2fr;
   grid-gap: 5px;
   text-align: center;
   font-family: 'Montserrat', sans-serif;
   margin: 20px
`
const Background = styled.div`
  background-color: #f5f5f5;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
`

const Title = styled.h1`
  text-align:center;
  font-size: 20px;
  color: #FF6300;
  font-family: 'Montserrat', sans-serif;
`


const ChooseMood = (props) =>
  <div>
    <Header logout={props.logout} />
    <form>
      <Title>How are you feeling?</Title>
      <Wrapper>

      <Background>
        <Image onClick={() => props.setSelectedEmotion('happy')} src={happy}></Image>
        <h5>Happy</h5>
    </Background>
      <Background>
        <Image onClick={() => props.setSelectedEmotion('angry')} src={angry}></Image>
        <h5>Mad</h5>
    </Background>
      <Background>
        <Image onClick={() => props.setSelectedEmotion('sad')} src={sad}></Image>
        <h5>Sad</h5>
    </Background>
      <Background>
        <Image onClick={() => props.setSelectedEmotion('anxious')} src={anxious}></Image>
        <h5>Anxious</h5>
    </Background>
          {/* <input
            placeholder="Tell me how your feeling"
            type="text"
            value={props.selectedEmotion}
          /> */}
        </Wrapper>
        <Button>
          <button onClick={props.skip} className="btn btn-primary">Skip Update</button>
        <button onClick={props.submitMood} className="btn btn-success">Submit Mood</button>
      </Button>
      </form>
    <Footer />
  </div>

export default ChooseMood;

import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animation';

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const Grid = styled.div`

margin: 0 50px;
margin-top: 20px;
padding: 50px 50px;



align-items: center;
border-radius: 10px;
box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
color: darkgrey;


h2 {
  font-family: Courier New;
  font-weight:lighter;
  color: black;
  text-align: center;
  
}

div { 

  text-align: center;
}


  






`


export const Image = styled.img`
${fadeIn()}
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  
`
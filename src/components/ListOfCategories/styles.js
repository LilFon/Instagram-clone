import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 15px;
  overflow-y: hidden; 
  background: #fefefe;
  
  ${props => props.fixed && css`
  {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 550px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -10px;
    transform: scale(.6);
    z-index: 1;
    overflow-x: hidden; 
  }
  `}
`

export const Item = styled.li`
  padding: 0 8px;
  
`
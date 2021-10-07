import styled from 'styled-components'

export const Form = styled.form`
  padding: 30px 0;
  
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-family: Courier New;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`

export const DIV = styled.div `
margin: 0 50px;
margin-top: 75px;
padding: 50px 50px;



align-items: center;
border-radius: 10px;
box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);


`

export const Img = styled.img`
 
  height: 100px;
  width: 100px;
  
  opacity: .6;
  object-fit: cover;
  
  
  
`

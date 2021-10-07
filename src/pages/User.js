import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton';
import styled ,{css} from 'styled-components';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

export const DIV = styled.div `
margin: 0 50px;
margin-top: 75px;
padding: 50px 50px;



align-items: center;
border-radius: 10px;
box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
color: darkgrey;
text-align:center;
h2 {
  font-family: Courier New;
  font-weight:lighter;
  color: black;
}
`

const SIZE = '64px';



export const User = () => {
  const { removeAuth } = useContext(Context)
  return <Fragment>
    <DIV>
    <MdPersonOutline size={SIZE} ></MdPersonOutline> <h2>User</h2>
    <SubmitButton onClick={removeAuth}>Sign Out</SubmitButton>

    </DIV>
    
    
  </Fragment>
}
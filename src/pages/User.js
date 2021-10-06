import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import styled ,{css} from 'styled-components';


const DIV = styled.div `
padding-left: 5px;


padding-bottom: 55px;
font-family: monospace;

border-bottom: 0.16em solid  darkgrey;
align-items: center;
border-radius: 5px;


`

export const User = () => {
  const { removeAuth } = useContext(Context)
  return <Fragment>
    <DIV>User</DIV>
    <SubmitButton onClick={removeAuth}>Sign Out</SubmitButton>
  </Fragment>
}
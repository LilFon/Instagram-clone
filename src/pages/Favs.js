import React, { Fragment } from 'react'
import { FavsWithQuery } from '../container/GetFavorites';
import styled ,{css} from 'styled-components';
import { MdFavoriteBorder } from 'react-icons/md'

const DIV = styled.div `
padding-left: 5px;


padding-bottom: 55px;
font-family: monospace;

border-bottom: 0.16em solid  darkgrey;
align-items: center;
border-radius: 5px;


`



const SIZE = '32px'


export const Favs = () => (
  <Fragment>
    
    <DIV><MdFavoriteBorder size={SIZE}/>Liked Pics</DIV>
    <FavsWithQuery />
  </Fragment>
)
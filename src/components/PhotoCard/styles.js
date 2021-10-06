import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 500px;
`

export const ImgWrapper = styled.div`
  border-radius: 5px;
  display: block;
  height: 400px;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%; 
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://www.dataraba.eus/img/loading.gif'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = 'Loading' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)

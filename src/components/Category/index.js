// 

import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://www.dataraba.eus/img/loading.gif';

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji  }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)

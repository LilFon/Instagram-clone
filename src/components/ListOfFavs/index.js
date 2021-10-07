import React,{Fragment} from 'react';
import { Grid, Image, Link } from './styles';

import { MdFavoriteBorder } from 'react-icons/md';

const SIZE = '64px';

export const ListOfFavs = ({ favs = [] }) => {
  return <Fragment>
     
    <Grid>
    <div> <MdFavoriteBorder size={SIZE}/> <h2>  Liked Pics </h2> </div>
    {
      favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}>
        <Image src={fav.src} />
      </Link>
      )
    }
  </Grid>
    </Fragment>
}
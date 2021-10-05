

//const DEFAULT_IMAGE = 'https://i.pinimg.com/originals/9e/97/73/9e9773a2c06836d0a087483811a2de6f.jpg';

import React, { Fragment } from 'react';
import { Article, ImgWrapper, Img } from './styles';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';

const DEFAULT_IMAGE = 'https://i.pinimg.com/originals/9e/97/73/9e9773a2c06836d0a087483811a2de6f.jpg';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: {
                    input: { id }
                  } })

                  setLiked(!liked)
                }

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  )
}
import React, { Fragment } from 'react'
import Slider from '../Slider/Slider'
import styled from 'styled-components'

const SiteLink = styled.a`
width: 100%;
`

const Description = styled.p`
width: 100%;
`



const Game = ({game, screenshots}) => {
  console.log(game)
  const {results: images} = screenshots
  return (
    <Fragment>
      <h1>{game.name}</h1>
      {images && <Slider images={images} />}
      {game.website && <SiteLink href={game.website}>Game Website link</SiteLink>}
      <Description dangerouslySetInnerHTML= {{__html: game.description}} />
    </Fragment>
   );
}
 
export default Game;
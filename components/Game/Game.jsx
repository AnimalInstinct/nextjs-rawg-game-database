import React, { Fragment } from 'react'
import Slider from '../Shared/Slider'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { device } from '../../helpers/device'

const Wrapper = styled.div`
 margin: auto;
  @media ${device.laptop} { 
    max-width: 800px;
  } 

  @media ${device.desktop} {
    max-width: 980x;
  }
`

const SiteLink = styled.a`
  width: 100%;
  color: ${(props) => props.theme.textColor};
`

const Description = styled.p`
  width: 100%;
  color: ${(props) => props.theme.textColor};
  font-size: 0.9em;
  text-align: justify;
`

const BackButton = styled.div`
cursor: pointer;
`

const Game = ({game, screenshots}) => {
  const {results: images} = screenshots
  const router = useRouter()
  return (
    <Wrapper>
      <h1>{game.name}</h1>
      <hr/>
      <BackButton onClick={() => router.back()}>&#8592; Back to the games list</BackButton>
      <hr/>
      {images && <Slider images={images} />}
      <hr/>
      {game.description && <Description dangerouslySetInnerHTML= {{__html: game.description}} />}
      <hr/>
      {game.website && <SiteLink href={game.website}>Game Website link</SiteLink>}
      <hr/>
    </Wrapper>
   );
}
 
export default Game;
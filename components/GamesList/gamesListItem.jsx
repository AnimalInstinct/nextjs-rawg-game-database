import styled from 'styled-components'
import Link from 'next/link'
import { device } from '../../helpers/device'

const GamesItem = ({ game }) => {
  const Wrapper = styled.div`
    flex-grow:1;
    border: 1px solid #2f2f2f;
    cursor:pointer;
    margin: 5px;
    overflow:hidden;
    &:hover {
      bottom: 10px;
    };
    @media ${device.mobileS} {
      flex-basis:90%;
      width: 90%;
    }
    @media ${device.tablet} {
      flex-basis:90%;
    }
    @media ${device.laptop} {
      flex-basis:30%;
    height: 280px;

    }
    @media ${device.desktop} {
      flex-basis:20%;
    height: 280px;

    }
  `

  const Image = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      right: 0; left: 0;
      width 100%;
      margin: auto
    }
    @media ${device.laptop} {
      img {
        position: absolute;
        right: 0; left: 0;
        width: auto;
        height 100%;
        margin: auto
      }
    }
    @media ${device.desktop} {
      img {
        position: absolute;
        right: 0; left: 0;
        width: auto;
        height 100%;
        margin: auto
      }
    }
  `

  const Header = styled.div`
    padding: 5px;
    font-size: 1em;
  `

  const Rating = styled.div`
    font-size: 0.7em;
    padding: 0 5px
  `
  
  const ReleaseDate = styled.div`
    font-size: 0.7em;
    padding: 0 5px
  `
  return (
    <Link href={`/games/${game.id}`}>
      <Wrapper>
        <Image key={game.id}><img src={game.background_image} /></Image>
        <Header>{game.name}</Header>
        <Rating>Rating: {game.rating}</Rating>
        <ReleaseDate>Release date: {game.released}</ReleaseDate>
      </Wrapper>
     </Link>
  )
}

export default GamesItem

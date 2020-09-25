import styled from 'styled-components'
import Link from 'next/link'
import { device } from '../../helpers/device'
import Date from '../../helpers/date'


const GamesItem = ({ game }) => {
  const Wrapper = styled.div`
    border: 1px solid lightgray;
    cursor:pointer;
    height: 300px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    &:hover {
      bottom: 10px;
    };
    @media ${device.mobileS} {
      flex-basis:90%;  
    }
    @media ${device.tablet} {
      flex-basis:40%;
    }
    @media ${device.laptop} {
      flex-basis:30%;
    }
    @media ${device.desktop} {
      flex-basis:20%;
    }
  `

  const Image = styled.div`
    width: 100%;
    height: 250px;
    img {
      width: 100%;
    }
  `

  const Header = styled.div`
    padding: 10px;
    font-size: 1em;
  `

  const Rating = styled.div`
    font-size: 0.7em;
    padding: 0 10px
  `
  
  const ReleaseDate = styled.div`
    font-size: 0.7em;
    padding: 0 10px 10px;
  `
  return (
    <Link href={`/games/${game.id}`}>
      <Wrapper>
        <Image key={game.id}><img src={game.background_image} /></Image>
          
          <Header>{game.name}</Header>
          <Rating>Rating: {game.rating}</Rating>
          <ReleaseDate>Release date: <Date dateString={game.released} /></ReleaseDate>
      </Wrapper>
     </Link>
  )
}

export default GamesItem

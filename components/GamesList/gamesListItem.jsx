import styled from 'styled-components'
import Link from 'next/link'
import { device } from '../../helpers/device'

const GamesItem = ({ game }) => {
  console.log(game)
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
    background-image: url(${game.background_image});
    background-size: cover;
    width: 100%;
    height: 250px;
  `

  const Info = styled.div`

  `

  const Header = styled.div`
    padding: 1em;
    font-size: 1em;
  `
  return (
    <Link href={`/games/${game.id}`}>
      <Wrapper>
        <Image></Image>
        <Info>
          <Header>{game.name}</Header>
        </Info>
      </Wrapper>
     </Link>
  )
}

export default GamesItem

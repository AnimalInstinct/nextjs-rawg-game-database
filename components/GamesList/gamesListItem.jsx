import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  padding: 2em;
  border: 1px solid lightgray;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  cursor:pointer;
`

const GamesItem = ({ game }) => {
  return (
    <Wrapper>
      <Link href={`/games/${game.id}`}>
        <h1>{game.name}</h1>
      </Link>
    </Wrapper>
  )
}

export default GamesItem

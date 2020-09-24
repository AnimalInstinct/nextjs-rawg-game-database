import GamesItem from './gamesListItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2em;
  border: 1px solid lightgray;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`

const GamesList = ({ games }) => {
  return (
    <Wrapper>
      {games.results
        ? games.results.map((game) => <GamesItem key={game.id} game={game} />)
        : 'LOADING...'}
    </Wrapper>
  )
}

export default GamesList

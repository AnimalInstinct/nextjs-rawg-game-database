import React from 'react';
import GamesItem from './GamesListItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  flex-wrap: wrap;
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

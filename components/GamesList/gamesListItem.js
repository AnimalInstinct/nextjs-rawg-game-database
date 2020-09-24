import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2em;
  border: 1px solid lightgray;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`

const GamesItem = ({ game }) => {
  return (
    <Wrapper>
      <div>{}</div>
      <h1>{game.name}</h1>
    </Wrapper>
  )
}

export default GamesItem

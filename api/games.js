import { buildQuery } from '../helpers/query'

const baseUrl = 'https://api.rawg.io/api'

export const fetchGames = async (filter) => {
  const { query } = filter
  const queryGenerated = buildQuery(query)
  const res = await fetch(`${baseUrl}/games${queryGenerated}`)
  const games = await res.json()
  return games
}

export const fetchPlatforms = async () => {
  const res = await fetch(`${baseUrl}/platforms`)
  const platforms = await res.json()
  console.log(platforms)
  return platforms
}

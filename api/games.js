import { buildQuery } from "../helpers/query";

const baseUrl = "https://api.rawg.io/api";

export const fetchGames = async (filter) => {
  let query = "";
  if (filter) {
    query = buildQuery(filter.query);
  }
  const res = await fetch(`${baseUrl}/games${query}`);
  const games = await res.json();
  return games;
};

export const fetchGame = async (filter) => {
  const res = await fetch(`${baseUrl}/games/${filter.query.id}`);
  const game = await res.json();
  return game;
};

export const fetchGameScreenshots = async (filter) => {
  const res = await fetch(`${baseUrl}/games/${filter.query.id}/screenshots`);
  const screenshots = await res.json();
  return screenshots;
};

export const fetchPlatforms = async () => {
  const res = await fetch(`${baseUrl}/platforms`);
  const platforms = await res.json();
  return platforms;
};

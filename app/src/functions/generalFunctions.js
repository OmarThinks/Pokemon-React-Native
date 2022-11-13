import { URL, URLSearchParams } from "react-native-url-polyfill";

const getPokemonIdFromURL = (url) => {
  const url = new URL(url);
  console.log(url.pathname.split("/"));
  url.pop();
  return url.pop();
};

export { getPokemonIdFromURL };

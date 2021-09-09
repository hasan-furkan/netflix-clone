const API_KEY = "8830c70f69884cd02570d0f278a1bb95";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}`,
};

export default requests;

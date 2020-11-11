const API_KEY ="f2498ad04781ea57eef51b9c47ed7871"

const requests = {//backdrop -true/false
	Trending: [`/discover/movie?api_key=${API_KEY}&with_original_language=ta&primary_release_year=2020`,true],
	// fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123&with_original_language=ta`,
	// fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&with_original_language=ta`,
	// TopRated: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_original_language=ta`,
	ComedyMovies: [`/discover/movie?api_key=${API_KEY}&with_genres=35&with_original_language=ta`,false],
	ActionMovies: [`/discover/movie?api_key=${API_KEY}&with_genres=28&with_original_language=ta`,false],
	HorrorMovies: [`/discover/movie?api_key=${API_KEY}&with_genres=27&with_original_language=ta`,true],
	RomanceMovies: [`/discover/movie?api_key=${API_KEY}&with_genres=10749&with_original_language=ta`,false],
	Documentaries: [`/discover/movie?api_key=${API_KEY}&with_genres=99&with_original_language=ta`,true]
};

export default requests
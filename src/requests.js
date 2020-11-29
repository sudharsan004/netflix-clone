const API_KEY = "f2498ad04781ea57eef51b9c47ed7871"

const requests = {
	//Category:['url' , showBackdrop ]
	"Netflix Originals": [`/discover/movie?api_key=${API_KEY}&with_network=123`, false],
	"Trending": [`/discover/movie?api_key=${API_KEY}&primary_release_year=2020`, true],
	"Top Rated": [`/movie/top_rated?api_key=${API_KEY}`, true],
	"Comedy Movies": [`/discover/movie?api_key=${API_KEY}&with_genres=35`, true],
	"Action Movies": [`/discover/movie?api_key=${API_KEY}&with_genres=28`, true],
	"Horror Movies": [`/discover/movie?api_key=${API_KEY}&with_genres=27`, true],
	"Romance Movies": [`/discover/movie?api_key=${API_KEY}&with_genres=10749`, true],
	"Documentaries": [`/discover/movie?api_key=${API_KEY}&with_genres=99`, true],
};

export default requests
import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import Intro from '../Intro/Intro';
import Card from '../Card/Card';
import axios from 'axios';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [savedMovies, setSavedMovies] = useState ([]);

  const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=9da47bf47ee9861788dbed1a0c1413e8&query=${query}&language=pt-BR`;
  
  useEffect(() => {
    axios
      .get(apiURL)
      .then((res) => {
        setMovieData(res.data.results);
      })
      .catch((err) => console.error(err));
  }, [apiURL]);

  const saveMovie = (movie) => {
    setSavedMovies((prevMovies) => [...prevMovies, movie])
    setQuery('');
  }

  const isMovieSaved = (movie) => {
    return savedMovies.some((savedMovie) => savedMovie.id === movie.id);
  };

  const removeMovie = (movieId) => {
    setSavedMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
  };

  const formatDate = (dateString) => { // Função para formatar a data
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };

  return (
    <div className='flex flex-col justify-center w-[1200px] mt-16 mb-5'>
      <Intro />
      <Search query={query} setQuery={setQuery} />
      <div className='grid grid-cols-4 gap-y-8 gap-x-7'>
      {movieData.map((movie) => (
          <Card
            key={movie.id}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            title={movie.title}
            date={formatDate(movie.release_date)}
            vote={Number(movie.vote_average.toFixed(1))}
            onSave={() => saveMovie(movie)} 
            isSaved={isMovieSaved(movie)}
            onRemove={() => removeMovie(movie.id)}
          />
        ))}
      </div>

      <p className='text-gray-200 font-karla font-normal text-xl tracking-wide mb-4'>Meus Filmes</p>

      <div className='grid grid-cols-4 gap-y-8 gap-x-7'>
        {savedMovies.map((movie) => (
          <Card
            key={movie.id}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            title={movie.title}
            date={formatDate(movie.release_date)}
            vote={Number(movie.vote_average.toFixed(1))}
            isSaved={true}
            onRemove={() => removeMovie(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

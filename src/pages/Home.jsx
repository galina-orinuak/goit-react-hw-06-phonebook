import { getPopularMovies } from 'service/Api';
import { MoviesLayout } from 'components/MoviesLayout/MoviesLayout';
import { Title } from 'components/Title/Title';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';

// const params = 'trending/movie/day';

const Home = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getPopularMovies().then(data => {
      setArrayOfMovies(data.results);
    }).finally(()=> {setShowLoader(false)});
  }, []);

  return (
    <>
      {!showLoader &&  <Loader/>}
      {!arrayOfMovies && <p>NO RESULTS</p>}
      {arrayOfMovies && <Title text="Trending today" />}
      {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies} />}
    </>
  );
};

export default Home;

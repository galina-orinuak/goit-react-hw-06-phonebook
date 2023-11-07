import { NavLink, useLocation } from 'react-router-dom';
import styles from './MoviesLayout.module.css';


export const MoviesLayout = ({ arrayOfMovies }) => {
  
  const location = useLocation();

  return (
    <ul className={styles.galleryMovies}>
      {arrayOfMovies.map(movie => {
        let nameOfMovie = null;
        if (movie.title) {
          nameOfMovie = movie.title;
        } else {
          nameOfMovie = movie.name;
        }

        return (
          <li key={movie.id}>
            <div className={styles.moviesItem}>
              <NavLink className={styles.moviesName} to={`/movies/${movie.id}`} state={{from: location}}>  
                <img
                  className={styles.moviesImg}
                  srcSet={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
                <p>{nameOfMovie}</p>
              </NavLink>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

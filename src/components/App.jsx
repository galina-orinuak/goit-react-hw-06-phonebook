import {  Route, Routes } from 'react-router-dom';

// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails';
// import { SharedLayout } from './SharedLayout/SharedLayout';
// import {Reviews} from './Reviews/Reviews';
// import {Cast} from './Cast/Cast'

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(( )=> import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/>} >
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element ={<MovieDetails/>}>
        <Route path="cast" element ={<Cast/>}/>
        <Route path="reviews" element ={<Reviews/>}/>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  )
};

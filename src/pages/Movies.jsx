import { SearchingForm } from "components/SearchingForm/SearchingForm";
import { Title } from "components/Title/Title";
import { useState, useEffect } from "react";
import { findMovie } from "service/Api";
import { MoviesLayout } from "components/MoviesLayout/MoviesLayout";
import { Loader } from "components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
// import { toast } from 'react-toastify';


const Movies =()=>{

// const [query, setQuery]= useState('');
const [arrayOfMovies, setArrayOfMovies]= useState(null);
const [showLoader, setShowLoader] = useState(false);
const [searchParams, setSearcParams] = useSearchParams();
const query = searchParams.get('query')


useEffect(() =>{

 if (query){
    setShowLoader(true);
    findMovie(query).then(data =>{
        setArrayOfMovies(data.results)
    }).finally(()=> {setShowLoader(false)})
 }


}, [query])


const onSubmitForm = res => {
setSearcParams({query: res});

setShowLoader(true);
findMovie(res).then(data =>{
    setArrayOfMovies(data.results)
}).finally(()=> {setShowLoader(false)})
      };


//     useEffect(() =>{
//         if (query === '') return;
//         setQuery(query);
//         const params = 'search/movie';
//     const queryParams = `query=${query}`;

//     async function fetch() {
//         try {
//           const { data } = await getMovies(params, queryParams);
//           setListOfMovies(data.results);
  
//           if (data.results.length === 0) {
//             toast('Sorry, but nothing found'); 
//             return;
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       }
//       fetch();
//     }, [query]);

//     const onSubmitForm = event => {
//         event.preventDefault();
//         const searchQuery = event.target.elements.movies.value;
//         setQuery({ query: searchQuery });
//       };






    return (<div>
        {!showLoader &&  <Loader/>}
        <Title text="search movie"/>
        <SearchingForm onSubmit={onSubmitForm}/>
        {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies}/>}
        </div>);
}

export default Movies;
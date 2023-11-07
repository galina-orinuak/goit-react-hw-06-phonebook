import { getMovieReviews } from 'service/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from "components/Loader/Loader";

 const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getMovieReviews(movieId).then(data => {
      console.log(data);
      if (data.results.lenght === 0) {
        return;
      }
      setReviews(data.results);
    }).finally(()=> {setShowLoader(false)});
  }, [movieId]);

  return (
    <div>
       {!showLoader &&  <Loader/>}
      {!reviews && <p>there is no reviews</p>}
      {reviews && <ul>{reviews.map(review => {
            return (
              <li key={review.id}>
                <h5>{review.author}</h5>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};
export default Reviews;
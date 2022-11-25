import React, { useState } from 'react';
import Header from './Components/Header';
import ReviewBodys from './Components/ReviewBody';
import data from './Components/data';
import ReviewStats from './Components/ReviewStats';

function App() {
  const [reviews, setReviews] = useState(data);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      const newReviews = reviews.filter((review) => review.id !== id);
      setReviews(newReviews);
    }
  };
  return (
    <>
      <Header />
      <ReviewStats data={reviews} />
      <ReviewBodys data={reviews} handleDelete={handleDelete} />
    </>
  );
}

export default App;

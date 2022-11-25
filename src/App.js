import React, { useState } from 'react';
import Header from './Components/Header';
import ReviewBodys from './Components/ReviewBody';
import data from './Components/data';
import ReviewStats from './Components/ReviewStats';
import ReviewForm from './Components/ReviewForm';
import styled from 'styled-components';

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
      <Review>
        <Header />
        <ReviewForm />
        <ReviewStats data={reviews} />
        <ReviewBodys data={reviews} handleDelete={handleDelete} />
      </Review>
    </>
  );
}

export default App;

const Review = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

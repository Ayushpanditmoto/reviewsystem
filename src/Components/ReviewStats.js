import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReviewContext } from '../Context/ReviewContext';

function ReviewStats() {
  const { reviews } = useContext(ReviewContext);

  const totalReviews = reviews.length;
  const totalRating = reviews.reduce((acc, curr) => {
    if (curr.rating) {
      return acc + curr.rating;
    } else {
      return acc;
    }
  }, 0);

  let averageRating = totalRating / totalReviews;
  averageRating = averageRating.toFixed(1).replace('.0', '');

  return (
    <>
      <StatsContainer>
        <h1>Total Reviews: {reviews.length}</h1>
        <h1>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h1>
      </StatsContainer>
    </>
  );
}

export default ReviewStats;

const StatsContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #007bd3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 10px;
  font-weight: 600;
`;

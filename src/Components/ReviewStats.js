import React from 'react';
import styled from 'styled-components';

function ReviewStats({ data }) {
  const totalReviews = data.length;
  const totalRating = data.reduce((acc, curr) => {
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
        <h1>Total Reviews: {data.length}</h1>
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

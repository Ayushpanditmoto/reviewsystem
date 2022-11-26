import React, { useContext } from 'react';
import { ReviewContext } from '../Context/ReviewContext';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';
import Card from './card';

function ReviewBody() {
  const { reviews } = useContext(ReviewContext);

  if (!reviews || reviews.length === 0) {
    return (
      <>
        <ReviewBodys>
          <Card>
            <h1>No Reviews Found</h1>
          </Card>
        </ReviewBodys>
      </>
    );
  }

  return (
    <>
      <ReviewBodys>
        <div>
          {reviews.map((review) => {
            return <ReviewCard key={review.id} data={review} />;
          })}
        </div>
      </ReviewBodys>
    </>
  );
}

export default ReviewBody;

const ReviewBodys = styled.div`
  height: auto;
  background-color: #007bd3;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

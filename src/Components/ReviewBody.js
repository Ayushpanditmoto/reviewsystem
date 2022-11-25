import React from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';
import Card from './card';

function ReviewBody({ data, handleDelete }) {
  if (!data || data.length === 0) {
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
          {data.map((review) => {
            return (
              <ReviewCard
                key={review.id}
                data={review}
                handleDelete={handleDelete}
              />
            );
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

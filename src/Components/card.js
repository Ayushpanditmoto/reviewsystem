import React from 'react';
import styled from 'styled-components';

function Card({ children }) {
  return (
    <>
      <EmptyCard>
        <h1>{children}</h1>
      </EmptyCard>
    </>
  );
}

export default Card;

const EmptyCard = styled.div`
  height: 200px;
  width: 700px;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 10px;
  position: relative;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 20px;
    text-align: center;
    color: inherit;
  }
`;

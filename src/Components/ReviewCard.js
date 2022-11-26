import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { ReviewContext } from '../Context/ReviewContext';

function ReviewCard({ data }) {
  const { editReview, handleDelete } = useContext(ReviewContext);
  return (
    <>
      <Card>
        {data.rating && <Circle>{data.rating}</Circle>}
        <h1>{data.review}</h1>
        <EditButton
          onClick={() => {
            editReview(data);
          }}
        >
          <FaEdit size={20} />
        </EditButton>
        <CloseButton
          onClick={() => {
            handleDelete(data.id);
          }}
        >
          <FaTimes size={20} />
        </CloseButton>
      </Card>
    </>
  );
}

export default ReviewCard;

const Card = styled.div`
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

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  outline: none;
`;

const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  outline: none;
`;

const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #00d370;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
  position: absolute;
  top: -20px;
  left: -20px;
`;

import React, { useState } from 'react';
import Card from './card';
import styled from 'styled-components';
import BUTTON from './button';
import RatingSelect from './RatingSelect';

function ReviewForm({ handleAdd }) {
  const [text, setText] = useState('');
  let [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Review must be at least 10 characters long');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    rating = Number(rating);
    const newRating = {
      id: new Date().getTime().toString(),
      rating,
      review: text,
    };
    handleAdd(newRating);
    setText('');
    setBtnDisabled(true);
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h3>How would you like to Review us?</h3>
          <RatingSelect select={(rating) => setRating(rating)} />
          <InputGroup>
            <input
              onChange={handleChange}
              value={text}
              type='text'
              placeholder='Write a Review'
            />
            <BUTTON type='submit' version='primary' isDisabled={btnDisabled}>
              Submit
            </BUTTON>
          </InputGroup>
          {message && <p>{message}</p>}
        </form>
      </Card>
    </>
  );
}

export default ReviewForm;

const InputGroup = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  input {
    width: 500px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #007bd3;
    /* outline: 1px solid #050505; */
    padding: 10px;
    font-size: 20px;
    margin: 10px;
  }
  button {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #007bd3;
    color: white;
    font-size: 20px;
    margin: 10px;
    cursor: pointer;
  }
`;

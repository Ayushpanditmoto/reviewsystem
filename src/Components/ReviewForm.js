import React, { useState } from 'react';
import Card from './card';
import styled from 'styled-components';

function ReviewForm() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <>
      <Card>
        <form>
          <h2>How would you like to Review us?</h2>
          {/* {rating system} */}

          <InputGroup>
            <input
              onChange={handleChange}
              value={text}
              type='text'
              placeholder='Write a Review'
            />
            <button type='submit'>Submit</button>
          </InputGroup>
        </form>
      </Card>
    </>
  );
}

export default ReviewForm;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
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

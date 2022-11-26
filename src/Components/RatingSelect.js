import React, { useState } from 'react';
import styled from 'styled-components';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
    select(e.target.value);
  };

  return (
    <>
      <RatingSelects>
        <label>
          <input
            type='radio'
            name='rating'
            value='10'
            checked={selected === '10'}
            onChange={handleChange}
          />
          10
        </label>
        <label>
          <input
            type='radio'
            name='rating'
            value='9'
            checked={selected === '9'}
            onChange={handleChange}
          />
          9
        </label>
        <label>
          <input
            type='radio'
            name='rating'
            value='8'
            checked={selected === '8'}
            onChange={handleChange}
          />
          8
        </label>
        <label>
          <input
            type='radio'
            name='rating'
            value='7'
            checked={selected === '7'}
            onChange={handleChange}
          />
          7
        </label>
        <label>
          <input
            type='radio'
            name='rating'
            value='6'
            checked={selected === '6'}
            onChange={handleChange}
          />
          6
        </label>
        <label>
          <input
            type='radio'
            name='rating'
            value='5'
            checked={selected === '5'}
            onChange={handleChange}
          />
          5
        </label>
        <label>
          <input
            type='radio'
            name='rating'
            value='4'
            checked={selected === '4'}
            onChange={handleChange}
          />
          4
        </label>
        <label>
          <input
            type='radio'
            name='rating'
            value='3'
            checked={selected === '3'}
            onChange={handleChange}
          />
          3
        </label>
        <label>
          <input
            type='radio'
            name='rating'
            value='2'
            checked={selected === '2'}
            onChange={handleChange}
          />
          2
        </label>
        <label>
          <input
            type='radio'
            name='rating'
            value='1'
            checked={selected === '1'}
            onChange={handleChange}
          />
          1
        </label>
      </RatingSelects>
    </>
  );
}

export default RatingSelect;

const RatingSelects = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  label {
    display: flex;

    input {
      margin-right: 5px;
    }
  }
`;

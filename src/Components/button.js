import React from 'react';
import styled from 'styled-components';

function BUTTON({ children, version, type, isDisabled }) {
  return (
    <>
      <Button type={type} version={version} disabled={isDisabled}>
        {children}
      </Button>
    </>
  );
}

export default BUTTON;

const Button = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 10px;
  border: none;
  background-color: #007bd3;
  color: white;
  font-size: 20px;
  margin: 10px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #00d370;
  }
  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;

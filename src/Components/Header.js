import React from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiFillHome } from 'react-icons/ai';
import { FaQuestionCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <Container bgColor='#00b3d3'>
        <Spacer>
          <NavLink to='/'>
            <AiFillHome size={30} style={{ color: 'white' }} />
          </NavLink>
          <NavLink to='/about'>
            <FaQuestionCircle size={30} style={{ color: 'white' }} />
          </NavLink>
        </Spacer>
        <HeaderLeft>
          <h1>Review System</h1>
        </HeaderLeft>
        <HeaderRight>
          <div className='github'>
            <a
              href='https://google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillGithub size={50} />
            </a>
          </div>
        </HeaderRight>
      </Container>
    </>
  );
}

export default Header;

const Spacer = styled.div`
  height: 80px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  .active {
    color: #00b3d3;
  }
`;

const Container = styled.div`
  height: 80px;
  width: 100vw;
  background-color: ${(props) => props.bgColor || '#3c00d3'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderLeft = styled.div`
  flex: 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .github {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: white;
    }
  }
`;

import React from 'react';
import Header from './Components/Header';
import ReviewBodys from './Components/ReviewBody';
// import data from './Components/data';
import ReviewStats from './Components/ReviewStats';
import ReviewForm from './Components/ReviewForm';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import { ReviewProvider } from './Context/ReviewContext';

function App() {
  return (
    <>
      <ReviewProvider>
        <Review>
          <Header />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <ReviewForm />
                  <ReviewStats />
                  <ReviewBodys />
                </>
              }
            ></Route>
            <Route exact path='/about' element={<About />} />
          </Routes>
        </Review>
      </ReviewProvider>
    </>
  );
}

export default App;

const Review = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

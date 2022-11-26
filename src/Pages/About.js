import React from 'react';
import Card from '../Components/card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Card>
        <h1>About this Project</h1>
        <p>This is a React to leave a review for a feedback or services</p>
        <p>Version : 1.0.0</p>
        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </Card>
    </>
  );
}

export default About;

import React from 'react';
import about from '../assets/about.jpg';

function About() {
  return (
    <div className='about-container'>
      <div className='who'>
        <div className='who-image'>
          <img src={about} alt='SmileUp! volunteers' />
        </div>
        <div className='who-text'>
          <h1>Who We Are</h1>
          <p>
            Smile Up Charitable Foundation is a youth, volunteer-powered charity committed to getting young people
            involved in volunteerism and community service so they can discover their purpose and develop in many life
            skills, including leadership, empathy, and compassion. We are also committed to supporting other charities and
            organizations who focus on benefiting the lives of children through advocacy, awareness and action.<br /><br /> 
          </p>
          <h1>What We Envision</h1>
          <p>
            We envision a world where children are leading the charge in volunteerism.  
          </p>
        </div>
      </div>
      <div className='about-text mission'>
        <h1>Our Mission</h1>
        <p>
          Our mission is to be a conduit through which to bring joy, restore hope, and provide a sense of purpose to
          every child we encounter, in hopes to fulfill our organization's motto: "Sometimes your joy is the source of your
          SMILE, but sometimes your SMILE can be the source of your joy!"
        </p>
      </div>
      <div className='about-text believe'>
        <h1>We Believe</h1>
        <p>
          ▪ Every child has an innate desire to help others<br />
          ▪ Every child should be shown respect and treated with dignity<br />
          ▪ Every child has a voice that should be heard<br />
          ▪ Every child has a purpose and has something to offer to the world<br />
          ▪ Every child should have something to smile about<br />
        </p>
      </div>
    </div>
  )
}

export default About;

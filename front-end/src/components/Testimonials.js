import React from 'react';
import group from '../assets/group.jpg';

function Testimonials() {
  return (
    <div>
      <div className='group-pic-container'>
        <img className='group-pic' src={group} alt='Group' />
      </div>
      <div className='testimonial-text-container'>
        <div className='dark'>
          <div className='text-block home-text'>
            <div className='testimonial'>
              “Thank you to the SmileUp! Charitable Foundation and its volunteers for 
              beautifully decorating our facility for Christmas! What a wonderful surprise for our staff and what a 
              sweet gift you've given to our [foster] families!”
            </div>
            <div className='testimonial-citation'>~ The Children’s Haven Staff ~</div>
          </div>
        </div>
        <div>
          <div className='text-block home-text'>
            <div className='testimonial'>
              “Thank you ALL so much! Great job SmileUp!”
            </div>
            <div className='testimonial-citation'>~ Kristina V., Chili Cookoff Coordinator ~</div>
          </div>
        </div>
        <div className='dark'>
          <div className='text-block home-text'>
            <div className='testimonial'>
              "Thank you for doing this! It was so much fun!"
            </div>
            <div className='testimonial-citation'>~ Jill R., SmileUp! Volunteer ~</div>
          </div>
        </div>
        <div>
          <div className='text-block home-text'>
            <div className='testimonial'>
              “I had a blast today.  Thanks for asking me to be part of your event.”
            </div>
            <div className='testimonial-citation'>~ John H., professional photographer ~ </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;

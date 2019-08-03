import React from 'react';
import logoDonate from '../assets/logo-donate.jpg';
import amazon from '../assets/amazon.jpg';

function Donate() {
  return (
    <div>
      <div className='donate-container'>
        <div className='donate-image smileup-logo-donate'>
          <img src={logoDonate} alt='SmileUp! logo' />
        </div>
        <div className='donate-text-container'>
          <div className='donate-text'>
            <h1><a href='https://www.paypal.com/us/fundraiser/charity/1851712' className='donate-link' target='_blank' rel="noopener noreferrer">DONATE</a> through<br />Paypal Giving Fund</h1>
            <p>
              <a href='https://www.paypal.com/us/fundraiser/charity/1851712' className='donate-link' target='_blank' rel="noopener noreferrer">CLICK HERE TO DONATE!!</a><br />
              Just $68 provides the financial support we need to give ONE YOUNG PERSON the opportunity to serve 4 hours a
              month for an entire year!<br />
              Your tax deductible donation will be put to good use, providing opportunities for our youth volunteers to develop
              in many valuable skills while also helping children in need through our partner charities and organizations. 
            </p>
          </div>
        </div>
      </div>
      <div className='donate-container amazon'>
        <div className='donate-image'>
          <img src={amazon} alt='Amazon logo' />
        </div>
        <div className='donate-text-container'>
          <div className='donate-text'>
            <h1><a href='https://smile.amazon.com/ch/58-2396294' className='donate-link' target='_blank' rel="noopener noreferrer">DONATE</a> through<br />AmazonSmile</h1>
            <h2>You shop. Amazon gives.</h2>
            <p>
              Amazon donates 0.5% of the price of your eligible AmazonSmile purchases to the charitable organization of your choice.<br />
              AmazonSmile is the same Amazon you know. Same products, same prices, same service.<br />
              Support us by starting your shopping at <a href='https://smile.amazon.com/ch/58-2396294' className='donate-link' target='_blank' rel="noopener noreferrer">smile.amazon.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate;

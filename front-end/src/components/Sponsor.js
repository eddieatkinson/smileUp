import React from 'react';

function Sponsor() {
  return (
    <div className='text-block sponsor-container'>
      <div className='sponsor-first'>
        <h1>Sponsorship Opportunities per Event</h1>
        <p>
          Your sponsorship affords us the opportunity to not only volunteer with other organizations but to create
          our own events & programs, developed with the temperaments and personalities of children in mind.
        </p>
      </div>
      <div className='sponsorship-levels'>
        <table id='sponsor-table'>
          <tbody>
            <tr>
              <th>LEVEL</th>
              <th>AMOUNT</th>
            </tr>
            <tr>
              <td>HERO</td>
              <td>$100,000+</td>
            </tr>
            <tr>
              <td>CHAMPION</td>
              <td>$5,000</td>
            </tr>
            <tr>
              <td>ADVOCATE</td>
              <td>$2,500</td>
            </tr>
            <tr>
              <td>STAR</td>
              <td>$1,000</td>
            </tr>
            <tr>
              <td>SUPPORTER</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>FRIEND</td>
              <td>$250</td>
            </tr>
            <tr>
              <td colSpan='2'>IN-KIND</td>
            </tr>
            <tr>
              <td id='in-kind-text' colSpan='2'>
                Sponsorship benefits for in-kind donations will be based upon a 2-to-1 ratio compared with 
                the standard cash sponsorship fees. For example, an in-kind donation valued at $5,000 would 
                receive the sponsorship benefit offered to a $2,500 cash sponsor.<br /><br />
                <span>** Any sponsorship outside of an event will receive benefits at next event closest to date of donation.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='sponsorship-level-descriptions'>
        <div>
          <div className='sponsorship-heading'>HERO SPONSOR - $10,000</div>
          <div className='sponsorship-text'>Recognition as a <span className='sponsor-type'>HERO SPONSOR</span> promoted throughout the event</div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>Name and Logo Recognition as Follows:</div>
            <ul>
              <li>Logo with direct link to company’s website featured on our webpage+</li>
              <li>Recognition on all event-related promotional collateral including invitations, flyers and email</li>
              <li>Posters displayed at company and community-related locations</li>
            </ul>
          </div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>On/Off Site Exposure:</div>
            <ul>
              <li>Opportunity to have two Sponsor banners displayed at the event*</li>
              <li>Recognition as a Sponsor on event “Thank You” signage</li>
              <li>On-stage recognition as Sponsor during event via two PA announcements</li>
              <li>Opportunity for an informational table presence</li>
              <li>Opportunity for large check presentation*</li>
              <li>Certificate of Sponsorship Acknowledgment</li>
            </ul>
          </div>
        </div>
        <div>
          <div className='sponsorship-heading'>CHAMPION SPONSOR — $5,000</div>
          <div className='sponsorship-text'>Recognition as a <span className='sponsor-type'>CHAMPION SPONSOR</span> promoted throughout the event</div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>Name and Logo Recognition as Follows:</div>
            <ul>
              <li>Logo with direct link to company’s website featured on our webpage</li>
              <li>Posters displayed at company and community-related locations</li>
            </ul>
          </div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>On/Off Site Exposure:</div>
            <ul>
              <li>Opportunity to have two Sponsor banners displayed at the event*</li>
              <li>Recognition as a Sponsor on event “Thank You” signage</li>
              <li>On-stage recognition as Sponsor during event via two PA announcements</li>
              <li>Certificate of Sponsorship Acknowledgment</li>
            </ul>
          </div>
        </div>
        <div>
          <div className='sponsorship-heading'>ADVOCATE SPONSOR — $2,500</div>
          <div className='sponsorship-text'>Recognition as a <span className='sponsor-type'>ADVOCATE SPONSOR</span> promoted throughout the event</div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>Name and Logo Recognition as Follows:</div>
            <ul>
              <li>Company logo and name featured on our webpage+</li>
              <li>Posters displayed at company and community-related locations</li>
            </ul>
          </div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>On/Off Site Exposure:</div>
            <ul>
              <li>Recognition as a Sponsor on event “Thank You” signage</li>
              <li>On-stage recognition as Sponsor during event via two PA announcements</li>
              <li>Certificate of Sponsorship Acknowledgment</li>
            </ul>
          </div>
        </div>
        <div>
          <div className='sponsorship-heading'>STAR SPONSOR — $1,000</div>
          <div className='sponsorship-text'>Recognition as a <span className='sponsor-type'>STAR SPONSOR</span> promoted throughout the event</div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>Name and Logo Recognition as Follows:</div>
            <ul>
              <li>Company logo and name featured on our social media event page+</li>
            </ul>
          </div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>On/Off Site Exposure:</div>
            <ul>
              <li>Recognition as a Sponsor on event “Thank You” signage</li>
              <li>Certificate of Sponsorship Acknowledgment</li>
            </ul>
          </div>
        </div>
        <div>
          <div className='sponsorship-heading'>SUPPORTER SPONSOR — $500</div>
          <div className='sponsorship-text'>Recognition as a <span className='sponsor-type'>SUPPORTER SPONSOR</span> promoted throughout the event</div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>Name and Logo Recognition as Follows:</div>
            <ul>
              <li>Company logo and name featured on our social media event page+</li>
            </ul>
          </div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>On/Off Site Exposure:</div>
            <ul>
              <li>Recognition as a Sponsor on event “Thank You” signage</li>
              <li>Certificate of Sponsorship Acknowledgment</li>
            </ul>
          </div>
        </div>
        <div>
          <div className='sponsorship-heading'>FRIEND SPONSOR — $250</div>
          <div className='sponsorship-text'>Recognition as a <span className='sponsor-type'>FRIEND SPONSOR</span> promoted throughout the event</div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>Name and Logo Recognition as Follows:</div>
            <ul>
              <li>Company name displayed on our social media event page+</li>
            </ul>
          </div>
          <div className='sponsor-line-items'>
            <div className='line-item-head'>On/Off Site Exposure:</div>
            <ul>
              <li>Certificate of Sponsorship Acknowledgment</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='sponsor-notes'>
        (+) Logo recognition on the website is not delineated by sponsor level.<br />
        (*) These benefits will be delivered to the sponsor at their own expense.<br /><br />
      </div>
      <div className='sponsor-disclosure'>
        Recognition and benefits outlined above is at the discretion of the local Volunteer Event Organizer to implement to the extent of their 
        local resources and capabilities. Any sponsorship outside of an event will receive the above benefits at next event closest to date of 
        donation.
      </div>
    </div>
  )
}

export default Sponsor;

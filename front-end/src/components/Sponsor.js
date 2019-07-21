import React from 'react';

function Sponsor() {
  return (
    <div className='text-block'>
      <div className='sponsor-first'>
        <h1>Sponsorship Opportunities per Event</h1>
        <p>
          Your sponsorship affords us the opportunity to not only volunteer with other organizations but to create
          our own events & programs, developed with the temperaments and personalities of children in mind.
        </p>
      </div>
      <div className='sponsorship-levels'>
        <table id='sponsor-table'>
          <tr>
            <th>Level</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Hero</td>
            <td>$100,000+</td>
          </tr>
          <tr>
            <td>Champion</td>
            <td>$5,000</td>
          </tr>
          <tr>
            <td>Advocate</td>
            <td>$2,500</td>
          </tr>
          <tr>
            <td>Star</td>
            <td>$1,000</td>
          </tr>
          <tr>
            <td>Friend</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>Friend</td>
            <td>$250</td>
          </tr>
          <tr>
            <td>In-Kind</td>
            <td>$5,000</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Sponsor;

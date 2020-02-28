import React from "react";

function IndVolunteerInfo(props) {
  const { volunteerInfo } = props.location.state;
  console.log(props);
  return (
    <form className="volunteerTable">
      <label>
        First Name:
        <input type="text" placeholder={volunteerInfo.firstName} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" placeholder={volunteerInfo.lastName} />
      </label>
      <br />
      <label>
        Birthday:
        <input type="text" placeholder={volunteerInfo.birthday} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" placeholder={volunteerInfo.email} />
      </label>
      <br />
      <label>
        Phone:
        <input type="text" placeholder={volunteerInfo.phone} />
      </label>
      <br />
      <label>
        Zipe Code:
        <input type="text" placeholder={volunteerInfo.zip} />
      </label>
      <br />
      <label>
        School:
        <input type="text" placeholder={volunteerInfo.school} />
      </label>
      <br />
      <label>
        Hours:
        <input type="text" placeholder={volunteerInfo.hours} />
      </label>
    </form>
  );
}

export default IndVolunteerInfo;

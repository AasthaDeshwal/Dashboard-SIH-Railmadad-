import React from 'react';
import './UserProfile.css';

function UserProfile() {
  return (
    <div className="user-profile-page">
      <div className="profile-container">
        <div className="profile-photo">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>Aastha</h2>
          <p><strong>Age:</strong> 25</p>
          <p><strong>Designation:</strong> Senior Engineer</p>
          <p><strong>Department:</strong> Train Services</p>
          <p><strong>Email:</strong> aastha@railways.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 1234 Railway St., City, Country</p>
          <p><strong>Joining Date:</strong> January 15, 2020</p>
          <p><strong>Emergency Contact:</strong> +91 98765 43211</p>
          <button className="edit-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

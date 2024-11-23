"use client";
import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    tof: '',
    profile_photo: null,
    bio: '',
    languages: '',
    current_role: '',
    user_experience: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile_photo') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0]
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    
    // Append the form data for the backend
    form.append('tof', formData.tof);
    form.append('profile_photo', formData.profile_photo);
    form.append('bio', formData.bio);
    form.append('languages', formData.languages);
    form.append('current_role', formData.current_role);
    form.append('user_experience', formData.user_experience);

    try {
      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User added:', data);
        alert('User added successfully!');
      } else {
        console.error('Error adding user:', response.status);
        alert('Error adding user');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('An error occurred');
    }
  };

  return (
    <div className="App">
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tof (Comma separated):</label>
          <input
            type="text"
            name="tof"
            value={formData.tof}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Profile Photo:</label>
          <input
            type="file"
            name="profile_photo"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Languages (Comma separated):</label>
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Current Role:</label>
          <input
            type="text"
            name="current_role"
            value={formData.current_role}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>User Experience:</label>
          <input
            type="number"
            name="user_experience"
            value={formData.user_experience}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

// CreateCustomer.js

import React, { useState } from 'react';
import axios from 'axios';
import "../styling/getDev.css";
import b1 from "../Images/home-back1.mp4";

const CreateCustomer = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    Services: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    postalCode: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend API to create a new customer
      const response = await axios.post('https://dev-digital-backend.onrender.com/api/get', formData);
      console.log(response.data); // Log the response from the backend
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNo: '',
        Services: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        postalCode: ''
      });
      alert('Customer created successfully.');
    } catch (error) {
      console.error('Error creating customer:', error);
      alert('Failed to create customer. Please try again.');
    }
  };

  return (
    <div class="getdev-page">
    <div className='main-container'>

   
    
      <div className="getdevdigital-container">
        <h1>GET DEV DIGITAL</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="phoneNo">Phone Number:</label>
            <input type="text" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="Services">Services:</label>
            <select id="Services" name="Services" value={formData.Services} onChange={handleInputChange}>
              <option value="">Select Service</option>
              <option value="Internet">Internet</option>
              <option value="Cable TV">Cable TV</option>
            </select>
          </div>
          <div>
            <label htmlFor="addressLine1">Address Line :</label>
            <input type="text" id="addressLine1" name="addressLine1" value={formData.addressLine1} onChange={handleInputChange} />
          </div>
         
          <div>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="postalCode">Postal Code:</label>
            <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    
    </div>
  );
};

export default CreateCustomer;

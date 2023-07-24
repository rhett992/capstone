import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="5"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <br></br>
        <h3>Customer Service</h3>
        <br></br>
        <p>customerservice@pitx.com.ph</p>
        <p>8396-3817 to 18</p>
        <br></br>
        <h3>Leasing</h3>
        <br></br>
        <p> leasing@pitx.com.ph</p>
        <br></br>
        <h3>Office Towers</h3>
        <p>leasing@pitx.com.ph</p>
        <p><></>+63-917-8197401</p>
        <br></br>
        <h3>Corporate Affairs and Government Relations</h3>
        <p>corpaffairs@pitx.com.ph</p>
        <br></br>
        <h3>Human Resources</h3>
        <p>hr@pitx.com.ph</p>
        <br></br>
        <h3>Property Management</h3>
        <p>facilities@pitx.com.ph</p>
        <br></br>
        <h3>Advertising</h3>
        <p>leasing@pitx.com.ph</p>  
        <br></br>       
      <iframe title='gmap' src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d3862.5553372323275!2d120.98889426483915!3d14.510197339860117!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d14.5102599!2d120.9912458!4m5!1s0x3397cf11c7bbd645%3A0x4a466429af6812af!2sPara%C3%B1aque%20Integrated%20Terminal%20Exchange%20(PITx)%20Tambo%2C%20Para%C3%B1aque%20Metro%20Manila!3m2!1d14.5100626!2d120.99125649999999!5e0!3m2!1sen!2sph!4v1690219421076!5m2!1sen!2sph" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

  );
};

export default ContactUs;

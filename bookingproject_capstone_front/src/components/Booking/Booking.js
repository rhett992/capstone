import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css'


function Booking() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [preferredDate, setPreferredDate] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [seatNumber, setSeatNumber] = useState(''); 
    const [returnDate, setReturnDate] = useState('');
    const navigate = useNavigate();
  
    const origins = ['Baguio', 'Batangas City', 'Lipa','Cubao'];
    const destinations = ['Baguio', 'Batangas City', 'Lipa', 'Cubao'];
    const timeOptions = ['1-2pm', '3-4pm', '5-6pm', '7-8pm', '9-10', '11-12', '4-6am', '6-7am', '7-8am', '8-9am', '9 - 10pm', '11-12pm'];

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/booking', {
            state: {
                origin,
                destination,
                preferredDate,
                preferredTime,
                seatNumber, 
                returnDate,
            },
        });
    };

    return (
        <div className="home-container">
          <img src="images/bus.avif" alt="bg" />
          <div className="content-container">
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="origin">Origin</label>
                <select
                  id="origin"
                  name="origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                >
                  <optgroup label="Routes">
                    {origins.map((originOption) => (
                      <option key={originOption} value={originOption}>
                        {originOption}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="destination">Destination</label>
                <select
                  id="destination"
                  name="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value="">Select destination:</option>
                  {destinations.map((destinationOption) => (
                    <option key={destinationOption} value={destinationOption}>
                      {destinationOption}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  onChange={(e) => setPreferredDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                >
                  <option value="">Select preferred time</option>
                  {timeOptions.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>
                      {timeOption}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="seatNumber">Seat Number</label>
                <input
                  type="text"
                  id="seatNumber"
                  name="seatNumber"
                  placeholder=" #s 1-32 only"
                  onChange={(e) => setSeatNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="returnDate">Return Date (Optional)</label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
              <button type="submit">Book Now</button>
            </form>
          </div>
        </div>
      );
    }

export default Booking;
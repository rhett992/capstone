import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css'


function Booking() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [preferredDate, setPreferredDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/booking', {
            state: {
                origin,
                destination,
                preferredDate,
                returnDate,
            },
        });
    };

    return (
        <div className='home-container'>
            <img src='images/bus.avif' alt='bg'/>
            <div className='content-container'>
                <form className='form-container' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='origin'>Origin</label>
                        <input
                            type='text'
                            id='origin'
                            name='origin'
                            placeholder='Enter origin'
                            onChange={(e) => setOrigin(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='destination'>Destination</label>
                        <input
                            type='text'
                            id='destination'
                            name='destination'
                            placeholder='Enter destination'
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='preferredDate'>Preferred Date</label>
                        <input
                            type='date'
                            id='preferredDate'
                            name='preferredDate'
                            onChange={(e) => setPreferredDate(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='returnDate'>Return Date (Optional)</label>
                        <input
                            type='date'
                            id='returnDate'
                            name='returnDate'
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Book Now</button>
                </form>
            </div>
        </div>
    );
}

export default Booking;
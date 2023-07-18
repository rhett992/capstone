import React, { useState } from 'react';
import '../Style/Booking.css';
import { Form, InputGroup, Button, Card, ButtonGroup, FormControl, Row, Col } from 'react-bootstrap';
import { Box, TextField, MenuItem, Stack } from '@mui/material';
import { DatePicker } from '@mui/lab';

function Booking(props) {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (button) => {
        setActiveButton(button);
    };

    const originDestination = [
        {
            value: 'Bulacan',
            label: 'Bulacan'
        },

        {
            value: 'Cavite',
            label: 'Cavite'
        },

        {
            value: 'Legazpi',
            label: 'Legazpi'
        },

        {
            value: 'Naga',
            label: 'Naga'
        },

        {
            value: 'PITX',
            label: 'PITX'
        },

        {
            value: 'Tarlac',
            label: 'Tarlac'
        },
    ];

    const destinations = [

        {
            value: 'Baguio',
            label: 'Baguio',
        },

        {
            value: 'Bulacan',
            label: 'Bulacan',
        },

        {
            value: 'Caramoan',
            label: 'Caramoan'
        },

        {
            value: 'Cavite',
            label: 'Cavite',
        },

        {
            value: 'Legazpi',
            label: 'Legazpi',
        },

        {
            value: 'Naga',
            label: 'Naga',
        },

        {
            value: 'Sorsogon',
            label: 'Sorsogon'
        },

        {
            value: 'Tarlac',
            label: 'Tarlac',
        },

    ];

    return (
        <div>
            <div className="bg-pic justify-content-center align-items-center d-flex">
                <div className="d-block div-content">
                    <div>
                        <ButtonGroup variant="light">
                            <Button
                                variant="light"
                                className={`btn-type ${activeButton === 'ordinary' ? 'active' : ''}`}
                                onClick={() => handleClick('ordinary')}
                            >
                                Ordinary
                            </Button>
                            <Button
                                variant="light"
                                className={`btn-type ${activeButton === 'cr' ? 'active' : ''}`}
                                onClick={() => handleClick('cr')}
                            >
                                With CR
                            </Button>
                            <Button
                                variant="light"
                                className={`btn-type ${activeButton === 'sleeper' ? 'active' : ''}`}
                                onClick={() => handleClick('sleeper')}
                            >
                                Sleeper
                            </Button>
                        </ButtonGroup>
                    </div>
                    <br />

                    <div className="d-flex">
                        <Box>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Select"
                                defaultValue="PITX"
                                helperText="Please select origin"
                                variant="filled"
                            >
                                {originDestination.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        <Box>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Select"
                                defaultValue="Naga"
                                helperText="Select destination"
                                variant="filled"
                            >
                                {destinations.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        <Box>
                            <TextField
                                id="filled-select-currency"
                                helperText="Select Date"
                                variant="filled"
                                type='date'
                            >
                            </TextField>
                        </Box>

                    </div>
                    <br />

                    <div>
                        <Button variant="primary" size="md">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;

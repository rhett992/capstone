import React from 'react';
import './Booking.css';

import { Card, Button, Col, Row, Form } from 'react-bootstrap'


function Booking() {

    return (
        <div>
            
            <section className="booking-bg d-flex justify-content-center align-items-center">
                <div className='bg-content container'>
                    <h1 className="blue-col welcome-h1 ">WELCOME TO PITX, FRIENDS!</h1>
                    <h5>Experience safe, convenient, and comfortable commute here at PITX, the country’s first landport.</h5>
                </div>
            </section>
            <section className="gray-bg sec-2">
                <Row className="justify-content-center">
                    <Col lg={8} md={9} sm={10} xs={12}>
                        <Card className='card-booking'>
                            <Card.Body>
                                <Card.Title>Booking Content</Card.Title>
                                <Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <Form.Select aria-label="Destination" className="slct-field">
                                            <option value="def" disabled>Please select your destination</option>
                                            <option value="1">Batangas</option>
                                            <option value="2">Benguet</option>
                                            <option value="3">Bicol</option>
                                            <option value="4">Cavite</option>
                                        </Form.Select>
                                    </div>
                                </Card.Text>
                                <Button variant="primary">Search for Booking</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className="gray-bg d-block">
                <div className='sec-3-container container'>
                    <div>
                        <h6>THINGS TO DO</h6>
                    </div>
                    <div>
                        <h5>Shop and dine while you wait</h5>
                    </div>
                    <div>
                        <p>PITX offers a wide range of dining and shopping options for a convenient commuting experience.</p>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Booking;

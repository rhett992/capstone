import React from 'react';
import {CardText, Row, Card, Col, Button} from "reactstrap";
import {CardTitle} from "reactstrap";
import './Home.css';
import {Link} from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <div className="image-bg-container img-fluid d-flex justify-content-center align-items-center">
                <Row>
                    <Col sm="12">
                        <Card body className="card-container">
                            <CardTitle className="text-center title-card">
                                <h1 className="font-weight-bold">WELCOME TO PITX, FRIENDS</h1>
                            </CardTitle>
                            <CardText className="text-center h5 text-card">
                                Experience safe, convenient, and comfortable commute here at PITX, the country’s first landport.
                            </CardText>
                            <Link className="text-center book-now-link" as={Link} to="/booking">
                                <Button className="book-now-btn">
                                    BOOK NOW
                                </Button>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;
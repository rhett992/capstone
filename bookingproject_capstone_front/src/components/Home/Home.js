import React from 'react';
import './Home.css';
import {Card, Button, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"
function Home(props) {
    return (
        <div>
            <div className="img-fluid img-container d-flex justify-content-center align-items-center">
                <Row>
                    <Col sm="12">
                        <Card className={"card-container"}>
                            <Card.Body>
                                <Card.Title>
                                    <h1 className="text-center text-color welcome-txt">Welcome to PITX, friends!</h1>
                                </Card.Title>
                                <br/>
                                <Card.Text>
                                    <h6 className="text-center text-color">Experience safe, convenient, and comfortable commute here at PITX, the country’s first landport.</h6>
                                </Card.Text>
                                <Card.Text className="text-center card-ftr">
                                    <Link as={Link} to="/booking">
                                        <Button className="book-now-btn">
                                            BOOK NOW
                                        </Button>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div >

            </div>
        </div>
    );
}

export default Home;
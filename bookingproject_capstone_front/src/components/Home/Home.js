import React from 'react';
import '../Welcome Banner/WelcomeBanner'
import WelcomeBanner from "../Welcome Banner/WelcomeBanner";
import './Home.css'
import {CardGroup, Card} from 'react-bootstrap'

function Home(props) {
    return (
        <div>
            <WelcomeBanner/>
            <section className="first-section container">
                <div className="container d-block text-center">
                    <h1 className="txt-bolder">TRANSPORTATION</h1>
                    <h6 className="">PITX provides multimodal transport options to get you to your destination.</h6>
                    <img className="img-fluid terminal-img"
                         src="https://www.pitx.ph/wp-content/uploads/image-choose-ride@2x.jpg" alt="bus terminal"/>
                </div>
                <div className="container vehicles">
                    <h1 className="fw-bold choose-ride text-center">CHOOSE YOUR RIDE</h1>
                    <div className="container d-flex justify-content-between vehicles">
                        <div>
                            <img src="https://www.pitx.ph/wp-content/uploads/icon-bus.svg"/>
                            <br/> <br/>
                            <h6 className="text-center">BUS</h6>
                        </div>
                        <div>
                            <img src="https://www.pitx.ph/wp-content/uploads/icon-puj.svg"/>
                            <br/> <br/>
                            <h6 className="text-center">PUJ</h6>
                        </div>
                        <div>
                            <img src="https://www.pitx.ph/wp-content/uploads/icon-taxi.svg"/>
                            <br/> <br/>
                            <h6 className="text-center">TAXI</h6>
                        </div>
                        <div>
                            <img src="https://www.pitx.ph/wp-content/uploads/icon-lrt.svg"/>
                            <br/> <br/>
                            <h6 className="text-center">FUTURE</h6>
                            <h6 className="text-center">LRT</h6>
                            <h6 className="text-center">LINK</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="second-section">
                <div className="container">
                    <h1 className="text-center txt-bolder">SHOP AND DINE WHILE YOU WAIT</h1>
                    <h6 className="text-center">PITX offers a wide range of dining and shopping options for a convenient
                        commuting experience.</h6>
                </div>
                <div className="shops-content">
                    <CardGroup>
                        <Card className={"card-1 cards"}>
                            <Card.Img className="img-1" variant="top" src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/69661623_2713834685308035_1123797370027376640_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFTOzxgAjUYRc7xFaF12fkD2osZ3sOQkvjaixnew5CS-GBuSgLmxhXp0r2vl5WS0xsdMZ26fXfzvYy80faThzZk&_nc_ohc=WtUR_1DYMGoAX8kmSj4&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBTeQXHvV3zQU1w6z6QQogqReJJLf1R4KkqlvLfZiBF-g&oe=64EB5FF2"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"card-2 cards"}>
                            <Card.Img className="img-2" variant="top" src="https://www.pitx.ph/wp-content/uploads/retail-lease-image@2x.jpg"/>
                            <Card.Body >
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"card-3 cards"}>
                            <Card.Img className="img-3" variant="top" src="https://img.philkotse.com/2022/02/24/WFFKkBCT/pitx-lto-center-opening-d7db_wm.jpg"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </section>
        </div>
    );
}

export default Home;
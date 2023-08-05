import React from 'react';
import '../Welcome Banner/WelcomeBanner'
import WelcomeBanner from "../Welcome Banner/WelcomeBanner";
import './Home.css'
import {CardGroup, Card} from 'react-bootstrap'


function Home(props) {

    return (
        
        <div>
            <WelcomeBanner/>
            <section className="first-section">
                <div className="container d-block text-center">
                    <h1 className="txt-bolder">TRANSPORTATION</h1>
                    <h6 className="">PITX provides multimodal transport options to get you to your destination.</h6>
                    <img className="img-fluid terminal-img"
                        src="https://www.pitx.ph/wp-content/uploads/image-choose-ride@2x.jpg" alt="bus terminal"/>
                </div>
                <div className="container vehicles">
                    <h1 className="fw-bold choose-ride text-center">CHOOSE YOUR RIDE</h1>
                    <br/>
                    <div className="container d-flex justify-content-between vehicles">
                        <div>
                            <img src="https://www.pitx.ph/wp-content/uploads/icon-bus.svg"alt=""/>
                            <br/> <br/>
                            <h6 className="text-center">BUS</h6>
                        </div>
                        <div>
                            <img src="https://www.pitx.ph/wp-content/uploads/icon-puj.svg"alt=""/>
                            <br/> <br/>
                            <h6 className="text-center">PUJ</h6>
                        </div>
                        <div>
                            <img src="https://www.pitx.ph/wp-content/uploads/icon-taxi.svg"alt=""/>
                            <br/> <br/>
                            <h6 className="text-center">TAXI</h6>
                        </div>
                        <div>
                            <img src="https://www.pitx.ph/wp-content/uploads/icon-lrt.svg"alt=""/>
                            <br/> <br/>
                            <h6 className="text-center">LRT</h6>
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
                <div className="shops-content container d-flex">
                    <CardGroup>
                        <Card className="cards card-1" style={{backgroundColor:"transparent", border:"none"}}>
                            <Card.Body className="card-body">
                                <Card.Img style={{borderRadius:"0", padding:"2%"}} src="https://www.pitx.ph/wp-content/uploads/retail-carousel-2@2x.jpg"></Card.Img>
                                <Card.Text className="text-center"><h3 className="fw-bold">Places to Dine</h3></Card.Text>
                                <Card.Text className="text-center" style={{padding:"0 13%"}}>Grab a quick bite or dine in at one of our restaurants so you can get your fill before commuting.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="cards card-2" style={{backgroundColor:"transparent", border:"none"}}>
                            <Card.Body className="card-body">
                                <Card.Img style={{borderRadius:"0", padding:"2%"}} src="https://www.pitx.ph/wp-content/uploads/retail-lease-image@2x.jpg"></Card.Img>
                                <Card.Text className="text-center"><h3 className="fw-bold">Places to Shop</h3></Card.Text>
                                <Card.Text className="text-center" style={{padding:"0 13%"}}>Shop from your favorite brands while stocking up on those last-minute travel essentials.
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
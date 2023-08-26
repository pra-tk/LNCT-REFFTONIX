import React from "react";
import { Container, Row, Col} from 'reactstrap';
import HeroImage from '../../assests/about-us.png'
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                        <h2 className="hero__title">
                            Welcome  <br /> to a new <br /> Era of Learning
                        </h2>
                        <p className="mb-5 hero__text">
                        Build a Solid Foundation With us in Robotics,Drone Devlopment and A.I <br /> Over 7K+ Learners have already  <br /> joined what are you waiting For.
                        </p>
                        </div>
                        <form className="search">
                            <input type="text" placeholder="Keyworlds of your course" />
                            <button className="search-btn">Search Course</button>
                        </form>
                    </Col>

                    <Col lg='6' md='6'>
                        <img src={HeroImage} className='w-100 hero__image' alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection;
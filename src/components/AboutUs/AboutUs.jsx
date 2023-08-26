import React from "react";
import { Container, Row, Col} from 'reactstrap';
import CountUp from "react-countup";
import AboutImage from '../../assests/hero section.png'

import './aboutUs.css'

const AboutUs = () => {
    return (
          <section>
            <Container>
                <Row>
                <Col lg='6' md='6'>
                 <div className="about__img">
                     <img src={AboutImage} className='w-100' alt="" />
                 </div>
              </Col>
                    
                <Col lg='6' md='6'>
                    <div className="about__content">
                        <h3><strong>"Empowering Excellence in Robotics: Unparalleled Qualifications, Enhanced Skills"</strong></h3>
                        <p>
                            Elevate your understanding of robotics through our exceptional classes and services. Our commitment to transparent processes incentivizes efficient learning and empowers you with cross-platform, leveraged skills. Join us on the journey of innovation and mastery, where every class is a step toward unlocking your robotic potential."
                        </p>

                        <div className="about__counter">
                            <div className="d-flex gap-5 align-items-center">

                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={35} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                        Completed Projects
                                    </p>
                                </div>

                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={16} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                        Patient Around World
                                    </p>
                                </div>

                            </div>

                            <div className="d-flex gap-5 align-items-center">
                            <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={98} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                       Ideas Raised Funds
                                    </p>
                                </div>

                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={7} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                       Categories Served
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>    

                </Row>
            </Container>
          </section>
    )
}

export default AboutUs;
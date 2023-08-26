import React from "react";
import './course.css'; 
import  {Container, Row, Col} from 'reactstrap';
import courseImg1 from '../../assests/web-design.jpg';
import courseImg2 from '../../assests/photography.jpg';
import courseImg3 from '../../assests/pre drone.jpg';
import courseImg4 from '../../assests/donoe ren.jpg';
import courseImg5 from '../../assests/maintainance.jpg';
import courseImg6 from '../../assests/consultation.jpg';

import CourseCard from "./CourseCard";

const coursesData = [
    {
      id: "01",
      title: "DGPA Piloting training",
      lesson: 12,
      students: 12,
      rating: 5,
      imgUrl: courseImg1,
    },
  
    {
      id: "02",
      title: "Drone Devlopment Course",
      lesson: 12,
      students: 12,
      rating: 3,
      imgUrl: courseImg2,
    },
  
    {
      id: "03",
      title: "Pre-Drone Piloting Training",
      lesson: 12,
      students: 12,
      rating: 5,
      imgUrl: courseImg3,
    },
    {
      id: "03",
      title: "Drone Rental Services",
      lesson: 12,
      students: 12,
      rating: 5,
      imgUrl: courseImg4,
    },
    {
      id: "03",
      title: "Maintainance And Services",
      lesson: 12,
      students: 12,
      rating: 5,
      imgUrl: courseImg5,
    },
    {
      id: "03",
      title: "Consultation Services",
      lesson: 12,
      students: 12,
      rating: 5,
      imgUrl: courseImg6,
    },
  ];

const Course = () => {
    return (
          <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                        <div className="course__top__left w-100">
                            <h2>Top Featured Courses And Services</h2>
                            <p>Best Solutions For Life</p>
                        </div>
                        </div>
                    </Col>

                    {coursesData.map((item) => (
                        <Col lg='4' md='6' sm='6'>
                            <CourseCard key={item.id} item={item} />
                        </Col>
                    ))}

                </Row>
            </Container>
          </section>
    )
}

export default Course;
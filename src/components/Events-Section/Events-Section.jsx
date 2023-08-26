import React from "react"; 
import './Event.css';
import { Container, Row, Col} from 'reactstrap';
import eventsImg01 from '../../assests/event1.jpg'
import eventsImg02 from '../../assests/event2.jpg'
import eventsImg03 from '../../assests/event3.jpg'
import eventsImg04 from '../../assests/event4.jpg'
import eventsImg05 from '../../assests/event5.jpg'
import eventsImg06 from '../../assests/event6.jpg'
import eventsImg07 from '../../assests/event7.jpg'
import EventCard from "./EventCard";

const eventsData = [
    {
      id: "01",
      title: "Survey and Mapping",
      imgUrl: eventsImg01
    }, 
    {
      id: "02",
      title: "Image and VideoGraphy",
      imgUrl: eventsImg02
    },
    {
      id: "03",
      title: "Surveylance and Maintainance",
      imgUrl: eventsImg03
    }, 
    {
      id: "04",
      title: "Asset Inspection",
      imgUrl: eventsImg04
    },
    {
      id: "05",
      title: "Custom Construct",
      imgUrl: eventsImg05
    },
    {
      id: "06",
      title: "Agriculture Drones",
      imgUrl: eventsImg06
    },
    {
      id: "07",
      title: "Coming soon",
      imgUrl: eventsImg07
    },
    {
      id: "08",
      title: "Coming soon",
      imgUrl: eventsImg07
    }
  ];

const EventSection = () => {
    return (
          <section className="events-section">
            <Container>
                <Row>
                    <Col lg='12' className="text-center mb-5">
                        <h2 className="fw-bold event-title">We Provide Wide Variety of <br /> Services & Events</h2>
                    </Col>

                {eventsData.map((item) => (
                    <Col lg='3' md='4' className="mb-4" key={item.id}>
                        <EventCard item={item} />
                    </Col>
                ))}
                </Row>
            </Container>
          </section>
    )
}

export default EventSection;
import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faUsers } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import moment from 'moment'
import './cardevent.css'

const CardEvent = () => {
  const [showData, setEventData] = useState([]);

  function getEvents() {
    axios
      .get('http://localhost:4321/event')
      .then((res) => {
        setEventData(res.data.result.events)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <React.Fragment>
      <Container fluid>
        <Row>

          {showData.map((item, index) => (
            <Col lg="4" md="6" sm="12" className="mt-3" key={index}>
              <Card>
                <CardImg top width="100%" src={item.picture} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h3">{item.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted"><FontAwesomeIcon icon={faThumbtack} /> {item.location}</CardSubtitle>
                  <div className="date-info">{moment(item.date).format("DD MMMM yyyy")}</div>
                  <div className="participant-info mt-2">
                    <FontAwesomeIcon icon={faUsers} />  {item.participant}
                  </div>
                  <CardText className="notes">Note: <br></br>{item.note}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}

        </Row>
      </Container>
    </React.Fragment>
  )
}

export default CardEvent
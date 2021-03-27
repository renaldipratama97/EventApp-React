import React from 'react'
import { Col, Container, Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import eventPicture from "../../assets/event.jpg";

const CardEvent = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col lg="4">
            <Card>
              <CardImg top width="100%" src={eventPicture} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card>
              <CardImg top width="100%" src={eventPicture} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card>
              <CardImg top width="100%" src={eventPicture} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default CardEvent
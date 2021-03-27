import React, { useState, useEffect } from 'react'
import { Container, Table, Input, Row, Col } from "reactstrap";
import axios from 'axios';
import moment from 'moment';

const Dashboard = () => {
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
    console.log('render')
    getEvents();
  }, []);

  return (
    <Container>
      <Row>
        <Col lg="12">
          <Input
            className="form-control w-25 mb-3"
            placeholder="Search"
            name="searchkey"
          />
          <Table bordered>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Location</th>
                <th>Date</th>
                <th>Participant</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {showData.map((item) => (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td width="200">{item.title}</td>
                  <td width="200">{item.location}</td>
                  <td width="200">{moment(item.date).format("DD MMMM yyyy")}</td>
                  <td width="200">{item.participant}</td>
                  <td>{item.note}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <div className="pagination d-inline-flex">
        <Button onClick={() => prevPage()}>prev</Button>
        {datapages.map((item, index) => (
          <div key={index}>
            <Button className="ml-2" onClick={() => changePage(item.id)}>
              {item.id}
            </Button>
          </div>
        ))}
        <Button className="ml-2" onClick={() => nextPage()}>
          next
        </Button>
      </div> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard

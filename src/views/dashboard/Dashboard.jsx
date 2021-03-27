import React, { useState, useEffect } from 'react'
import { Container, Table, Input, Row, Col, Button } from "reactstrap";
import axios from 'axios';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  const [showData, setEventData] = useState([]);
  const [searchTitle, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  function getEvents() {
    axios
      .get(`http://localhost:4321/event?title=${searchTitle}&page=${currentPage}&limit=3`)
      .then((res) => {
        setEventData(res.data.result.events)
        setPages(res.data.result.pagination)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleSearch(event) {
    if (event.key === "Enter") {
      setSearch(event.target.value);
      getEvents();
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getEvents();
    } else {
      setCurrentPage(1);
      getEvents();
    }
  }

  function nextPage() {
    if (currentPage < pages.totalPages) {
      setCurrentPage(currentPage + 1);
      getEvents();
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Container>
      <Row>
        <Col lg="12">
          <Input
            className="form-control w-25 mb-3"
            placeholder="Search"
            name="search"
            onKeyUp={handleSearch}
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
              {showData.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td width="200">{item.title}</td>
                  <td width="200">{item.location}</td>
                  <td width="200">{moment(item.date).format("DD MMMM yyyy")}</td>
                  <td width="200">{item.participant}</td>
                  <td>{item.note}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="pagination d-inline-flex">
            <Button onClick={() => prevPage()}><FontAwesomeIcon icon={faBackward} /></Button>
            <Button disabled className="ml-2">
              {pages.currentPage}
            </Button>
            <Button className="ml-2" onClick={() => nextPage()}>
              <FontAwesomeIcon icon={faForward} />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard

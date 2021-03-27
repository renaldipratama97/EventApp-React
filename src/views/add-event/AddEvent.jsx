import React, { useState } from 'react'
import { Button, Form, Input, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import eventPicture from "../../assets/event.jpg";
import './addevent.css'
import axios from 'axios';
import Swal from 'sweetalert2';


const AddEvent = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [participant, setParticipant] = useState('')
  const [date, setDate] = useState('')
  const [note, setNote] = useState('')
  const [picture, setPicture] = useState('')

  let history = useHistory();

  function addEvent() {
    const data = new FormData();
    data.append("title", title);
    data.append("participant", participant);
    data.append("location", location);
    data.append("date", date);
    data.append("note", note);
    data.append("picture", picture.selectedFile);
    if (title === '' || participant === '' || location === '' || date === '' || note === '') {
      Swal.fire({
        icon: 'error',
        title: 'All forms must be filled',
        showConfirmButton: false,
        timer: 2000
      })
    }
    axios.post(`http://localhost:4321/event/addevent`, data)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Add Event Succesfully',
          showConfirmButton: false,
          timer: 2000
        })
        setTitle('')
        setLocation('')
        setParticipant('')
        setDate('')
        setNote('')
        setPicture('')
        history.push("/cardevent");
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          showConfirmButton: false,
          timer: 2000
        })
        setTitle('')
        setLocation('')
        setParticipant('')
        setDate('')
        setNote('')
        setPicture('')
        history.push("/addevent");
      })
  }
  return (
    <>
      <div className="container">
        <Row>
          <Col md="12" lg="6" className="addevent-col">
            <div className="px-4 py-4">
              <h4> + Add Event</h4>
              <br />

              <Form>
                <div className="d-flex justify-content-between">
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                  <Input
                    className="ml-3"
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <Input
                    type="text"
                    name="participant"
                    id="participant"
                    placeholder="Participant"
                    onChange={(e) => setParticipant(e.target.value)}
                    required
                  />
                  <Input
                    className="ml-3"
                    type="date"
                    name="date"
                    id="date"
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <Input
                    type="textarea"
                    rows="4"
                    name="note"
                    id="note"
                    placeholder="Note"
                    onChange={(e) => setNote(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <Input
                    color="primary"
                    type="file"
                    name="file"
                    id="upload_file"
                    onChange={(e) => setPicture({
                      selectedFile: e.target.files[0],
                    })}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <Button
                    type="submit"
                    color="primary"
                    onClick={() => addEvent()}
                  >
                    Add Event
                    </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col lg="6">
            <div className="image-event">
              <img src={eventPicture} alt="vectorevent" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default AddEvent

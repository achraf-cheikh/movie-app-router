import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddingMovie = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ----------------------------------------------------------------------

  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rate, setRate] = useState("");
  const [trailer, setTarailer] = useState("");
  const [desc, setDesc] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const newobj = {
      id: Math.random(),
      img: photo,
      title: name,
      text: text,
      rating: rate,
      trailer: trailer,
      desc: desc,
    };

    if (photo && name && text && rate && trailer && desc) {
      add(newobj);
      handleClose();
    } else {
      alert("please enter full information about movie");
    }
    setPhoto("");
    setName("");
    setText("");
    setRate("");
    setTarailer("");
    setDesc("");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "170px", color: "red" }}>
            Movie-Show
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie-Cover</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL-img"
                autoFocus
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie-trailer</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL-vid"
                autoFocus
                value={trailer}
                onChange={(e) => setTarailer(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="movie-title"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>more Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="movie-rating"
                autoFocus
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Movie
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddingMovie;

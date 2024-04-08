import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/contactImg.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './contact.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <div id="contact">
  <section className="contact" id="connect">
    <Container>
      <Row className="w-full flex align-items-center">
        <Col size={6} md={6}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className="w-full sm:w-auto">
                <img
                  width={isVisible ? '100%' : '85%'}
                  className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                  src={contactImg}
                  alt="Contact Us"
                />
              </div>
            )}
          </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
  <div className="ml-24">
    <h2>Get In Touch</h2>
    <form onSubmit={handleSubmit}>
      <Row>
      <Col size={12} sm={6} className="px-2">
  <div className="flex flex-col sm:flex-row gap-2 mb-3">
    <input
      type="text"
      value={formDetails.firstName}
      placeholder="First Name"
      onChange={(e) => onFormUpdate('firstName', e.target.value)}
      className="w-full sm:w-auto ml-0 sm:ml-2"
    />
    <input
      type="text"
      value={formDetails.lastName}
      placeholder="Last Name"
      onChange={(e) => onFormUpdate('lastName', e.target.value)}
      className="w-full sm:w-auto ml-0 sm:ml-2"
    />
  </div>
</Col>

<Col size={12} sm={6} className="px-2">
  <div className="flex flex-col sm:flex-row gap-2 mb-3">
    <input
      type="email"
      value={formDetails.email}
      placeholder="Email Address"
      onChange={(e) => onFormUpdate('email', e.target.value)}
      className="w-full sm:w-auto ml-0 sm:ml-2"
    />

    <input
      type="tel"
      value={formDetails.phone}
      placeholder="Phone No."
      onChange={(e) => onFormUpdate('phone', e.target.value)}
      className="w-full sm:w-auto ml-0 sm:ml-2"
    />
  </div>
</Col>

<Col gap={5} size={12} sm={6} className="px-2 w-full">
  <div>
    <textarea
      width="50%"
      rows="5"
      value={formDetails.message}
      placeholder="Message"
      onChange={(e) => onFormUpdate('message', e.target.value)}
      className="w-full ml-0 sm:ml-2"
    ></textarea>
  </div>
  <button type="submit" className="w-full rounded-xl">
    {buttonText}
  </button>
</Col>
        
      </Row>
    </form>
  </div>
</Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}
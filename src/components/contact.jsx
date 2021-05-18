import React, { useState } from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  color_dark,
  color_subtle,
  CardContainer,
  FlexFunc,
} from "../styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const templateParams = {
    from_name: name + " (" + email + ")",
    message: message,
  };

  const notifySuccess = () => {
    toast.success("Your message has been sent.", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("Your message was not sent. Please try again later.", {
      position: toast.POSITION.TOP_CENTER,
      autoclose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      transition: Bounce,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8ioyvlw",
        "template_6ndcp0f",
        templateParams,
        "user_Jl5Lg3CXwKI7kYMfFZBHz"
      )
      .then(
        (res) => {
          notifySuccess();
          console.log("SUCCESS!", res.status, res.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          notifyError();
          console.log("ERROR", err.status, err.text);
        }
      );
  };

  return (
    <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
      <ContactContainer>
        <h2>CONTACT ME</h2>

        <StyledForm>
          <FieldContainer>
            <div className="label">NAME</div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <div className="label">EMAIL</div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <div className="label">MESSAGE</div>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FieldContainer>
          <FormButton type="button" onClick={submitHandler}>
            Submit
          </FormButton>
        </StyledForm>
        <ToastContainer />
      </ContactContainer>
    </Tween>
  );
};

export default Contact;

const ContactContainer = styled(CardContainer)`
  background-color: ${color_subtle};
  color: ${color_dark};
  ${FlexFunc("column", "space-evenly", "center")}
`;

const StyledForm = styled.form`
  width: 400px;
`;

const FieldContainer = styled.div`
  width: 100%;
  padding: 1rem 0;

  .label {
    letter-spacing: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  textarea {
    width: 100%;
    height: 8rem;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

const FormButton = styled.button`
  background-color: ${color_dark};
  color: ${color_subtle};
  border: 2px solid ${color_dark};
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    color: ${color_dark};
    background-color: ${color_subtle};
  }
`;

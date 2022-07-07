import React, { useState } from "react";
import styled from "styled-components";
import {
  color_dark,
  color_subtle,
  color_accent,
  Section,
  HalfSection,
  SectionTitle,
  PinkSpan,
  flex,
} from "../styles";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState("");

  // for netlify form handling
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onFormElementChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  const onFormSubmit = (e) => {
    // for netlify form handling
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => setFormSubmitted("Your message has been sent."))
      .catch((error) => {
        setFormSubmitted(
          "Your message could not be sent. Please try again later."
        );
        console.log(error);
      });
    e.preventDefault();
  };
  return (
    <ContactContainer>
      <ContactHalf>
        <SectionTitle>
          CONTACT ME<PinkSpan>.</PinkSpan>
        </SectionTitle>
      </ContactHalf>
      <ContactHalf>
        <ContactForm onSubmit={onFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={name}
            onChange={onFormElementChange}
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={email}
            onChange={onFormElementChange}
          />
          <textarea
            name="message"
            placeholder="MESSAGE..."
            value={message}
            onChange={onFormElementChange}
          ></textarea>
          <button type="submit">SEND</button>
        </ContactForm>
      </ContactHalf>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled(Section)`
  background-color: ${color_dark};
`;

const ContactHalf = styled(HalfSection)`
  background-color: ${color_dark};
  color: ${color_subtle};
  ${flex("column")};
`;

const ContactForm = styled.form`
  ${flex("column")};
  width: 80%;
  height: 80%;

  input,
  textarea {
    width: 80%;
    background-color: ${color_dark};
    color: ${color_subtle};
    border: none;
    border-bottom: 2px solid ${color_accent};
    margin: 1rem;
    padding: 0.5rem;
    letter-spacing: 0.2rem;
    line-height: 1.5rem;
    transition: border-color 0.3s ease-in;
    &:focus {
      outline: none;
      border-bottom-color: ${color_subtle};
    }
  }

  textarea {
    height: 5rem;
  }

  button {
    background-color: ${color_dark};
    color: ${color_accent};
    border: 2px solid ${color_accent};
    letter-spacing: 0.2rem;
    line-height: 1.5rem;
    padding: 0.5rem 3rem;
    margin: 1rem;
    transition: background-color 0.2s ease-in;
    transition: color 0.2s ease-in;

    &:hover {
      cursor: pointer;
    }

    &:focus,
    &:active {
      outline: none;
    }

    &:active {
      background-color: ${color_accent};
      color: ${color_dark};
    }
  }
`;

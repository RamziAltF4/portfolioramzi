import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.info("Sending...");

    emailjs
      .sendForm(
        "service_jj47dmr",
        "template_i16onxr",
        form.current,
        "0NEu5nKS8v-BjlbSr"
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <Wrapper>
      <form ref={form} onSubmit={sendEmail}>

        <input type="text" name="user_name" placeholder="Your Name" required />

        <input type="email" name="user_email" placeholder="Your Email" required />

        <textarea name="message" placeholder="Your Message" required />

        <button type="submit">Send Message</button>

      </form>

      <ToastContainer position="top-center" />
    </Wrapper>
  );
  
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  background: #f9fafb;
  transition: 0.0s;

  form {
    width: 100%;
    max-width: 400px;
    background: #ffffff;
    backdrop-filter: blur(10px);
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input, textarea {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #111827;
    transition: 0.3s;
  }

  input::placeholder,
  textarea::placeholder {
    color: #6b7280;
  }

  button {
    padding: 14px;
    border-radius: 10px;
    border: none;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    cursor: pointer;
  }

  /* 🌙 DARK MODE - Perbaikan selektor */
  body.dark-mode & {
    background: transparent;
  }

  body.dark-mode & form {
    background: transparent;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  }

  body.dark-mode & input,
  body.dark-mode & textarea {
    background: transparent;
    border: 1px solid #374151;
    color: white;
  }

  body.dark-mode & input::placeholder,
  body.dark-mode & textarea::placeholder {
    color: #9ca3af;
  }
`;

export default ContactForm;
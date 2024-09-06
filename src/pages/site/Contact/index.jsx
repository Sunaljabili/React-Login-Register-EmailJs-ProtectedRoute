import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import "./index.css";

const Contact = () => {
  const form = useRef();
  const [value, setValue] = React.useState(2);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g67iv7p", "template_u57nqln", form.current, {
        publicKey: "rbUZ45hOyEw1Jymib",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <h1>Contact Form</h1>
      <form ref={form} className="form_contact" onSubmit={sendEmail}>
        <input type="text" placeholder="Full name" name="user_name" required />
        <input type="enail" placeholder="Email" name="user_email" required />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea
          cols={50}
          rows={10}
          name="message"
          id=""
          placeholder="Message"
        ></textarea>

        <Button type="submit" variant="contained">Submit</Button>
      </form>
      <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
     
    </Box>
    </>
  );
};

export default Contact;

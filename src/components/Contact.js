import React from "react";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <form
          className="contact-form"
          action={`${process.env.REACT_APP_ENDPOINT}`}
          autoComplete="on"
          method="post"
          target="blank"
        >
          <p>Send me a message</p>
          <label htmlFor="name">Your name:</label>
          <input type="text" name="name" />
          <label htmlFor="name">Email address:</label>
          <input type="text" name="email" />
          <label htmlFor="company">Company:</label>
          <input type="text" name="company" />
          <label htmlFor="message">Please leave me message here</label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;

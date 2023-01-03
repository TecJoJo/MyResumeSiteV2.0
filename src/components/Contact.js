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
          <label htmlFor="name">Your name please?</label>
          <input type="text" name="name" />
          <label htmlFor="company">Your company please?</label>
          <input type="text" name="company" />
          <label htmlFor="message"></label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;

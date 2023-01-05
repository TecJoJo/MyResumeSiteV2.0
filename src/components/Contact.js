import React, { useState, useRef } from "react";

function Contact() {
  const [showConfirmDialogue, setShowConfirmDialogue] = useState(false);
  const form = useRef(null);
  const submit = () => {
    form.current.submit();
  };
  const hideDialogue = () => {
    setShowConfirmDialogue(false);
  };

  return (
    <>
      <div className="contact-container">
        <form
          className="contact-form"
          action={`${process.env.REACT_APP_ENDPOINT}`}
          method="post"
          target="blank"
          ref={form}
        >
          <p>Send me a message</p>
          <input type="text" name="name" placeholder="Full name" />
          <input type="text" name="email" placeholder="Your email" />
          <input
            type="text"
            name="company"
            placeholder="Phone(not necessary)"
          />
          <textarea
            className="form-textarea"
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Your message goes here"
          ></textarea>
          <button
            className="form-submit"
            type="button"
            onClick={() => {
              setShowConfirmDialogue(true);
              const timeout = setTimeout(() => {
                setShowConfirmDialogue(false);
              }, 5000);
            }}
          >
            submit
          </button>
          {showConfirmDialogue && (
            <div className="form-dialogue">
              <p>Are you sure you want submit?</p>
              <button type="button" onClick={submit}>
                Yes
              </button>
              <button type="button" onClick={hideDialogue}>
                No
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Contact;

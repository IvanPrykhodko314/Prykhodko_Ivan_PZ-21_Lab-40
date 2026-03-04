import React, { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    console.log(`Name: ${name}, Email: ${email}, Password: ${pass}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="pass" ref={passRef} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;

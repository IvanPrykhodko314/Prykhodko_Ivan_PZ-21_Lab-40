import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ім'я: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Ім'я:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input
            type="pass"
            value={pass}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Відправити</button>
    </form>
  );
}

export default ControlledForm;
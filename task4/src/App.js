import React, { useState } from "react";

function FormWithValidation() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError("Please fill in all fields");
      return;
    } if (!email.includes("@")) {
      setError("Incorrect email");
      return;
    }

    setError("");
    alert("Form was sent successfully");

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <div>
            Name:
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <button type="submit">Відправити</button>
    </form>
  );
}

export default FormWithValidation;

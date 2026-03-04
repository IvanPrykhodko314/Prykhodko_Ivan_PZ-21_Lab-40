import React, { useState } from "react";

function FormWithValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Некоректний email!");
    } else {
      setError("");
      alert("Форма успішно відправлена!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <button type="submit">Відправити</button>
    </form>
  );
}

export default FormWithValidation;

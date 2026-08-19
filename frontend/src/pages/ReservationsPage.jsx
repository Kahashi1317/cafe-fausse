// src/pages/ReservationsPage.jsx
import React, { useState } from "react";

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    timeSlot: "",
    guests: 1,
    name: "",
    email: "",
    phone: ""
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        setMessage(`Reservation confirmed! Your table number: ${data.tableNumber}`);
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  }

  return (
    <div className="page reservations-page">
      <h1>Make a Reservation</h1>

      <form onSubmit={handleSubmit} className="reservation-form">
        <label>
          Time Slot:
          <input
            type="datetime-local"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone (optional):
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Reserve Table</button>
      </form>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

"use client"
import React, { useState } from 'react';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Reservation Confirmed!\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-green-800 text-white p-8 rounded-lg shadow-lg w-11/12 max-w-md text-center">
        <h2 className="text-2xl mb-6">Reserve Your Table</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-left">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 mb-4 rounded text-black"
            required
          />

          <label htmlFor="phone" className="mb-2 text-left">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 mb-4 rounded text-black"
            required
          />

          <label htmlFor="date" className="mb-2 text-left">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 mb-4 rounded text-black"
            required
          />

          <label htmlFor="time" className="mb-2 text-left">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 mb-6 rounded text-black"
            required
          />

          <button type="submit" className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;



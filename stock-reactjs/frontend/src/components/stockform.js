import React, { useState } from 'react';
import axios from 'axios';

function StockForm({ setResult }) {
  const [form, setForm] = useState({
    open: '',
    high: '',
    low: '',
    volume: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/predict', form);
      setResult(res.data.prediction);
    } catch (err) {
      alert('Prediction failed: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="open" type="number" placeholder="Open Price" onChange={handleChange} required />
      <input name="high" type="number" placeholder="High Price" onChange={handleChange} required />
      <input name="low" type="number" placeholder="Low Price" onChange={handleChange} required />
      <input name="volume" type="number" placeholder="Volume" onChange={handleChange} required />
      <button type="submit">Predict</button>
    </form>
  );
}

export default StockForm;

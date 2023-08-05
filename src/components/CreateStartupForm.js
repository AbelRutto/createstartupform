import React, { useState } from 'react';
import './CreateStartupForm.css';

const CreateStartupForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [industry, setIndustry] = useState('');
  const [stage, setStage] = useState('');
  const [founders, setFounders] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., sending data to a backend server
  };

  return (
    <div className="create-startup-form">
      <h1>Create Startup Form</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Name:</label>
        <input className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label className="form-label">Description:</label>
        <input className="form-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label className="form-label">Industry:</label>
        <input className="form-input" type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />

        <label className="form-label">Stage:</label>
        <input className="form-input" type="text" value={stage} onChange={(e) => setStage(e.target.value)} />

        <label className="form-label">Founders:</label>
        <input className="form-input" type="number" value={founders} onChange={(e) => setFounders(e.target.value)} />

        <label className="form-label">Email:</label>
        <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button className="submit-button" type="submit">Create Startup</button>
      </form>
    </div>
  );
};

export default CreateStartupForm;

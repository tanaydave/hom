// src/pages/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PriceTable from '../components/PriceTable';
import ContactForm from '../components/ContactForm';
import SearchBar from '../components/SearchBar';
import Modal from '../components/Modal';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const results = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredUsers(results); // Update the state directly
    } else {
      setFilteredUsers([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <Hero />
      <ServiceCard />
      <PriceTable selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <div className="my-8">
        <SearchBar onSearch={handleSearch} />
        <ul>
          {filteredUsers.map(user => (
            <li key={user.id} className="py-2">
                 <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Company: {user.company.name}</p>
              </div>
            </li> // Accessing the 'name' property
          ))}
        </ul>
      </div>
      <ContactForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { Button } from './Button';

interface UserFormProps {
  onUserAdded: () => void;
}

export const UserForm: React.FC<UserFormProps> = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', address: '', email: '', phone: '' });
        onUserAdded();
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-black rounded-md py-2 px-3 focus:outline-none focus:ring-0 focus:border-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-black rounded-md py-2 px-3 focus:outline-none focus:ring-0 focus:border-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-black rounded-md py-2 px-3 focus:outline-none focus:ring-0 focus:border-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-black rounded-md py-2 px-3 focus:outline-none focus:ring-0 focus:border-black"
            required
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};
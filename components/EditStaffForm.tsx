"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import TextInput from './TextInput';

interface StaffMember {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  email: string;
  phone: string;
  alternateNumber?: string;
  password?: string; // Include password in the interface
  confirmPassword?: string; // Include confirm password in the interface
}

const EditStaffForm: React.FC = () => {
  const searchParams = useSearchParams();
  const staffId = searchParams.get('id');
  
  const [staffMember, setStaffMember] = useState<StaffMember | null>(null);

  useEffect(() => {
    const fetchStaffMember = async (id: string) => {
      const response = await fetch(`/api/staff/${id}`);
      if (!response.ok) {
        console.error('Error fetching staff member:', response.statusText);
        return;
      }
      const data = await response.json();
      setStaffMember(data);
    };

    if (staffId) {
      fetchStaffMember(staffId);
    }
  }, [staffId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (staffMember) {
      setStaffMember({
        ...staffMember,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!staffMember) return;

    const response = await fetch(`/api/staff/${staffId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(staffMember),
    });

    if (response.ok) {
      console.log('Staff member updated successfully!');
    } else {
      console.error('Error updating staff member:', response.statusText);
    }
  };

  if (!staffMember) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput 
        label="First Name" 
        placeholder="Enter first name" 
        value={staffMember.firstName} 
        onChange={handleChange} 
        name="firstName" 
      />
      <TextInput 
        label="Last Name" 
        placeholder="Enter last name" 
        value={staffMember.lastName} 
        onChange={handleChange} 
        name="lastName" 
      />
      <TextInput 
        label="Gender" 
        placeholder="Select gender" 
        isSelect 
        options={['Male', 'Female']} 
        value={staffMember.gender} 
        onChange={handleChange} 
        name="gender" 
      />
      <TextInput 
        label="Date of Birth" 
        placeholder="Enter date of birth" 
        type="date" 
        value={staffMember.dateOfBirth} 
        onChange={handleChange} 
        name="dateOfBirth" 
      />
      <TextInput 
        label="Address" 
        placeholder="Enter address" 
        value={staffMember.address} 
        onChange={handleChange} 
        name="address" 
      />
      <TextInput 
        label="City" 
        placeholder="Enter city" 
        value={staffMember.city} 
        onChange={handleChange} 
        name="city" 
      />
      <TextInput 
        label="State" 
        placeholder="Enter state" 
        value={staffMember.state} 
        onChange={handleChange} 
        name="state" 
      />
      <TextInput 
        label="Country" 
        placeholder="Enter country" 
        value={staffMember.country} 
        onChange={handleChange} 
        name="country" 
      />
      <TextInput 
        label="Postal Code" 
        placeholder="Enter postal code" 
        value={staffMember.postalCode} 
        onChange={handleChange} 
        name="postalCode" 
      />
      <TextInput 
        label="Email Address" 
        placeholder="Enter email address" 
        type="email" 
        value={staffMember.email} 
        onChange={handleChange} 
        name="email" 
      />
      <TextInput 
        label="Phone Number" 
        placeholder="Enter phone number" 
        type="tel" 
        value={staffMember.phone} 
        onChange={handleChange} 
        name="phone" 
      />
      <TextInput 
        label="Alternate Phone Number" 
        placeholder="Enter alternate phone number" 
        value={staffMember.alternateNumber} 
        onChange={handleChange} 
        name="alternateNumber" 
      />
      <TextInput 
        label="Password" 
        placeholder="Enter password" 
        type="password" 
        value={staffMember.password || ''} // Default to empty string if undefined
        onChange={handleChange} 
        name="password" 
      />
      <TextInput 
        label="Confirm Password" 
        placeholder="Confirm password" 
        type="password" 
        value={staffMember.confirmPassword || ''} // Default to empty string if undefined
        onChange={handleChange} 
        name="confirmPassword" 
      />
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default EditStaffForm;

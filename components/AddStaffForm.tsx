"use client";

import { useState } from 'react';
import UploadPhoto from './UploadPhoto';
import TextInput from './TextInput';
import LoadingIndicator from '@/components/ui/LoadingIndicator';
import { FormEvent } from 'react'; // Import FormEvent from React

const AddStaffForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate a network request (e.g., form submission)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    // Handle your form submission logic here
  };

  if (isLoading) return <LoadingIndicator />; // Use the existing LoadingIndicator component

  return (
    <div className="w-full h-auto bg-white rounded-[20px] border border-[#d0d0d0] p-6">
      {/* Title at the top */}
      <h2 className="text-left text-2xl font-bold mb-6">Add Staff</h2>

      {/* Main container with flexbox */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6">
        {/* Left side: Photo Upload and Documents */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="mb-4">
            <UploadPhoto />
          </div>
          
          {/* Documents Collected below photo upload */}
          <div className="w-72 mt-4">
            <label className="block mb-1 font-medium text-gray-700">Documents Collected</label>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center">
                <input type="checkbox" id="degreeCertificate" className="mr-2" />
                <label htmlFor="degreeCertificate">Degree Certificate</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="aadhaar" className="mr-2" />
                <label htmlFor="aadhaar">Aadhaar</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="experienceCertificate" className="mr-2" />
                <label htmlFor="experienceCertificate">Experience Certificate</label>
              </div>
            </div>
          </div>

          {/* Add Staff Button below document upload */}
          <div className="w-72 mt-6">
            <button type="submit" className="w-full h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg text-white text-sm font-normal leading-normal flex justify-center items-center hover:bg-blue-700 transition duration-300">
              Add Staff
            </button>
          </div>
        </div>

        {/* Right side: Text Input Fields */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput label="First Name" placeholder="Enter first name" />
          <TextInput label="Last Name" placeholder="Enter last name" />
          <TextInput label="Gender" placeholder="Select gender" isSelect options={['Male', 'Female', 'Other']} />
          <TextInput label="Date of Birth" type="date" placeholder="Select date of birth" />
          <TextInput label="Address" placeholder="Enter address" />
          <TextInput label="City" placeholder="Enter city" />
          <TextInput label="State" placeholder="Enter state" />
          <TextInput label="Country" placeholder="Enter country" />
          <TextInput label="Postal Code" placeholder="Enter postal code" />
          <TextInput label="Email Address" placeholder="Enter email address" type="email" />
          <TextInput label="Phone Number" placeholder="Enter phone number" type="tel" />
          <TextInput label="Alternate Phone Number" placeholder="Enter alternate phone number" />
          <TextInput label="Password" placeholder="Enter password" type="password" />
          <TextInput label="Confirm Password" placeholder="Confirm password" type="password" />
        </div>
      </form>
    </div>
  );
};

export default AddStaffForm;

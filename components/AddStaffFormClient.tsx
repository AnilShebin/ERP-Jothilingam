"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addStaffSchema } from "../lib/utils"; // Import the schema
import TextInput from "./TextInput";
import UploadPhoto from './UploadPhoto'; // Import UploadPhoto component

const AddStaffFormClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addStaffSchema), // Use the imported schema
  });

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <div className="relative w-full h-auto bg-white rounded-[20px] border border-[#d0d0d0] p-6">
      {/* Title at the top */}
      <h2 className="text-left text-2xl font-bold mb-6">Add Staff</h2>

      {/* Main container with flexbox */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mb-6">
        {/* Left side: Photo Upload and Documents */}
        <div className="flex flex-col items-center w-full">
          <div className="mb-4">
            <UploadPhoto />
          </div>

          {/* Documents Collected below photo upload */}
          <div className="w-full mt-4">
            <label className="block mb-1 font-medium text-gray-700">Documents Collected</label>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center">
                <input type="checkbox" id="degreeCertificate" className="mr-2" {...register("documents.degreeCertificate")} />
                <label htmlFor="degreeCertificate">Degree Certificate</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="aadhaar" className="mr-2" {...register("documents.aadhaar")} />
                <label htmlFor="aadhaar">Aadhaar</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="experienceCertificate" className="mr-2" {...register("documents.experienceCertificate")} />
                <label htmlFor="experienceCertificate">Experience Certificate</label>
              </div>
            </div>
          </div>
        </div>

        {/* Add Staff Button */}
        <div className="flex justify-center items-center w-full md:hidden">
          <button
            type="submit"
            className="w-full h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg text-white text-sm font-normal leading-normal flex justify-center items-center hover:bg-blue-700 transition duration-300"
            onClick={handleSubmit(onSubmit)}
          >
            Add Staff
          </button>
        </div>

        {/* Right side: Text Input Fields */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="First Name"
            placeholder="Enter first name"
            error={errors.firstName?.message as string | undefined}
            {...register("firstName")}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter last name"
            error={errors.lastName?.message as string | undefined}
            {...register("lastName")}
          />
          <TextInput
            label="Gender"
            placeholder="Select gender"
            isSelect
            options={["Male", "Female", "Other"]}
            error={errors.gender?.message as string | undefined}
            {...register("gender")}
          />
          <TextInput
            label="Date of Birth"
            type="date"
            placeholder="Select date of birth"
            error={errors.dateOfBirth?.message as string | undefined}
            {...register("dateOfBirth")}
          />
          <TextInput
            label="Address"
            placeholder="Enter address"
            error={errors.address?.message as string | undefined}
            {...register("address")}
          />
          <TextInput
            label="City"
            placeholder="Enter city"
            error={errors.city?.message as string | undefined}
            {...register("city")}
          />
          <TextInput
            label="State"
            placeholder="Enter state"
            error={errors.state?.message as string | undefined}
            {...register("state")}
          />
          <TextInput
            label="Country"
            placeholder="Enter country"
            error={errors.country?.message as string | undefined}
            {...register("country")}
          />
          <TextInput
            label="Postal Code"
            placeholder="Enter postal code"
            error={errors.postalCode?.message as string | undefined}
            {...register("postalCode")}
          />
          <TextInput
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            error={errors.email?.message as string | undefined}
            {...register("email")}
          />
          <TextInput
            label="Phone Number"
            type="tel"
            placeholder="Enter phone number"
            error={errors.phoneNumber?.message as string | undefined}
            {...register("phoneNumber")}
          />
          <TextInput
            label="Alternate Phone Number"
            type="tel"
            placeholder="Enter alternate phone number"
            error={errors.alternatePhoneNumber?.message as string | undefined}
            {...register("alternatePhoneNumber")}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter password"
            error={errors.password?.message as string | undefined}
            {...register("password")}
          />
          <TextInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            error={errors.confirmPassword?.message as string | undefined}
            {...register("confirmPassword")}
          />
        </div>
      </form>

      {/* Add Staff Button for larger screens */}
      <div className="hidden md:flex justify-center items-center">
        <button
          type="submit"
          className="w-full h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg text-white text-sm font-normal leading-normal flex justify-center items-center hover:bg-blue-700 transition duration-300"
          onClick={handleSubmit(onSubmit)}
        >
          Add Staff
        </button>
      </div>
    </div>
  );
};

export default AddStaffFormClient;

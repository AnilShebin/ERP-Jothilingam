import React from "react";

// Define AvatarProps to specify the types for the Avatar component
interface AvatarProps {
  imageUrl: string;
  className?: string; // Optional className prop
}

// Avatar Component with type definition
const Avatar: React.FC<AvatarProps> = ({ imageUrl, className }) => (
  <div
    className={`rounded-full bg-cover bg-center ${className}`} // Use the className prop here
    style={{ backgroundImage: `url(${imageUrl})` }}
  />
);

const AttendanceOverview: React.FC = () => {
  // Sample data for demonstration, including avatar URLs
  const attendanceData = [
    {
      employeeName: "John Doe",
      designation: "Software Engineer",
      type: "Full-time",
      checkInTime: "9:00 AM",
      status: "On Time",
      avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=John%20Doe",
    },
    {
      employeeName: "Jane Smith",
      designation: "Product Manager",
      type: "Part-time",
      checkInTime: "10:00 AM",
      status: "Late",
      avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Jane%20Smith",
    },
    // More data here...
  ];

  return (
    <section className="attendance-overview flex flex-col items-start p-4 gap-2 w-full bg-white border shadow-lg rounded-lg">
      {/* Title */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[24px] font-bold text-[#101828]">
          Attendance Overview
        </h2>
        {/* View All Button */}
        <button className="flex justify-end items-center px-4 py-2 border border-gray-300 rounded-lg gap-2 text-gray-500 text-sm">
          View All
        </button>
      </div>

      {/* Table Header */}
      <div className="table-header hidden md:flex flex-row w-full px-4 py-2 border-b border-gray-200">
        <div className="w-1/5 text-sm font-semibold text-[#101828] text-center">
          Employee Name
        </div>
        <div className="w-1/5 text-sm font-semibold text-[#101828] text-center">
          Designation
        </div>
        <div className="w-1/5 text-sm font-semibold text-[#101828] text-center">
          Type
        </div>
        <div className="w-1/5 text-sm font-semibold text-[#101828] text-center">
          Check In Time
        </div>
        <div className="w-1/5 text-sm font-semibold text-[#101828] text-center">
          Status
        </div>
      </div>

      {/* Table Body */}
      {attendanceData.map((data, index) => (
        <div key={index} className="table-body w-full border-b border-gray-200">
          {/* Mobile View (md:hidden) */}
          <div className="md:hidden flex flex-col bg-gray-100 px-4 py-2">
            <div className="flex justify-between items-center py-1">
              <span className="font-semibold">Employee Name:</span>
              <div className="flex items-center gap-2">
                {/* Pass smaller Avatar for mobile */}
                <Avatar imageUrl={data.avatar} className="w-8 h-8" />
                <span className="text-gray-600 text-sm">
                  {data.employeeName}
                </span>
              </div>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Designation:</span>
              <span className="text-gray-600 text-sm">{data.designation}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Type:</span>
              <span className="text-gray-600 text-sm">{data.type}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Check In Time:</span>
              <span className="text-gray-600 text-sm">{data.checkInTime}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Status:</span>
              <span
                className={`${
                  data.status === "On Time"
                    ? "bg-[#E5F9F1] text-[#3FC28A]"
                    : data.status === "Late"
                    ? "bg-[#FEE4E2] text-[#F45B69]"
                    : "bg-[rgba(244,91,105,0.1)] text-gray-600"
                } rounded px-2 py-1 text-sm`}
              >
                {data.status}
              </span>
            </div>
          </div>

          {/* Desktop View (hidden on mobile, visible on larger screens) */}
          <div className="hidden md:flex flex-row items-center w-full py-2">
            {/* Employee Name */}
            <div className="flex w-1/5 items-center justify-center gap-2">
              <Avatar imageUrl={data.avatar} />
              <span className="text-sm text-gray-600">{data.employeeName}</span>
            </div>

            {/* Designation */}
            <div className="w-1/5 text-sm text-gray-600 text-center">
              {data.designation}
            </div>

            {/* Type */}
            <div className="w-1/5 text-sm text-gray-600 text-center">
              {data.type}
            </div>

            {/* Check In Time */}
            <div className="w-1/5 text-sm text-gray-600 text-center">
              {data.checkInTime}
            </div>

            {/* Status */}
            <div className="w-1/5 flex items-center justify-center">
              <span
                className={`flex flex-row justify-center items-center px-2 py-1 gap-2 ${
                  data.status === "On Time"
                    ? "bg-[#E5F9F1] rounded text-[#3FC28A] text-[12px] font-lexend font-light"
                    : data.status === "Late"
                    ? "bg-[#FEE4E2] rounded text-[#F45B69] text-[12px] font-lexend font-light"
                    : "bg-[rgba(244,91,105,0.1)] rounded text-gray-600 text-[12px]"
                }`}
                style={{
                  width: "70px",
                  height: "24px",
                }}
              >
                {data.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AttendanceOverview;

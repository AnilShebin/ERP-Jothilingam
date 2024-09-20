import React from "react";

const AttendanceOverview = () => {
  return (
    <section className="attendance-overview flex flex-col items-start px-8 py-0 gap-2 w-full max-w-[1144px] h-[522px] bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h2 className="text-[24px] font-bold text-[#101828]">Attendance Overview</h2>

      {/* Summary and Data Container */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-6 mt-4">
        {/* Left Side - Attendance Data */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="text-md text-[#667085] mb-2">Total Staff Present Today</div>
          <div className="text-[48px] font-extrabold text-[#101828]">18</div>
        </div>

        {/* Right Side - Detailed Stats */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-between items-center">
            <span className="text-[#667085] text-md">Total Staff</span>
            <span className="text-[#101828] text-lg font-bold">30</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-[#667085] text-md">On Leave</span>
            <span className="text-[#F04438] text-lg font-bold">4</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-[#667085] text-md">Sick Leave</span>
            <span className="text-[#F79009] text-lg font-bold">2</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceOverview;

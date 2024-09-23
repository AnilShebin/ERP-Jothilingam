"use client"; // Mark this as a Client Component

import React from "react";
import { usePathname, useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import { DataTable } from "./DataTable"; // ShadCN DataTable component
import { columns } from "./Columns"; // Your column definitions

const AttendanceOverview: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Sample data for demonstration
  const attendanceData = [
    { employeeName: "John Doe", designation: "Software Engineer", type: "Full-time", checkInTime: "9:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=John%20Doe" },
    { employeeName: "Jane Smith", designation: "Product Manager", type: "Part-time", checkInTime: "10:00 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Jane%20Smith" },
    { employeeName: "John Doe", designation: "Software Engineer", type: "Full-time", checkInTime: "9:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=John%20Doe" },
    { employeeName: "Jane Smith", designation: "Product Manager", type: "Part-time", checkInTime: "10:00 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Jane%20Smith" },
    { employeeName: "Alice Johnson", designation: "Designer", type: "Full-time", checkInTime: "8:30 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Alice%20Johnson" },
    { employeeName: "Bob Brown", designation: "Developer", type: "Full-time", checkInTime: "9:15 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Bob%20Brown" },
    { employeeName: "Charlie Black", designation: "Tester", type: "Part-time", checkInTime: "10:05 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Charlie%20Black" },
    { employeeName: "David White", designation: "Manager", type: "Full-time", checkInTime: "9:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=David%20White" },
    { employeeName: "Eva Green", designation: "HR", type: "Part-time", checkInTime: "10:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Eva%20Green" },
    { employeeName: "Frank Blue", designation: "Intern", type: "Intern", checkInTime: "9:30 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Frank%20Blue" },
    { employeeName: "Grace Purple", designation: "Marketing", type: "Full-time", checkInTime: "9:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Grace%20Purple" },
    { employeeName: "Hank Yellow", designation: "Finance", type: "Part-time", checkInTime: "10:00 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Hank%20Yellow" },
    { employeeName: "Ivy Pink", designation: "Sales", type: "Full-time", checkInTime: "9:45 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Ivy%20Pink" },
    { employeeName: "Jack Gray", designation: "Consultant", type: "Part-time", checkInTime: "10:15 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Jack%20Gray" },
    { employeeName: "Kate Silver", designation: "Legal", type: "Full-time", checkInTime: "9:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Kate%20Silver" },
    { employeeName: "Leo Gold", designation: "Support", type: "Part-time", checkInTime: "10:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Leo%20Gold" },
    { employeeName: "Mia Orange", designation: "Researcher", type: "Full-time", checkInTime: "9:30 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Mia%20Orange" },
    { employeeName: "John Doe", designation: "Software Engineer", type: "Full-time", checkInTime: "9:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=John%20Doe" },
    { employeeName: "Jane Smith", designation: "Product Manager", type: "Part-time", checkInTime: "10:00 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Jane%20Smith" },
    { employeeName: "Alice Johnson", designation: "Designer", type: "Full-time", checkInTime: "8:30 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Alice%20Johnson" },
    { employeeName: "Bob Brown", designation: "Developer", type: "Full-time", checkInTime: "9:15 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Bob%20Brown" },
    { employeeName: "Charlie Black", designation: "Tester", type: "Part-time", checkInTime: "10:05 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Charlie%20Black" },
    { employeeName: "David White", designation: "Manager", type: "Full-time", checkInTime: "9:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=David%20White" },
    { employeeName: "Eva Green", designation: "HR", type: "Part-time", checkInTime: "10:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Eva%20Green" },
    { employeeName: "Frank Blue", designation: "Intern", type: "Intern", checkInTime: "9:30 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Frank%20Blue" },
    { employeeName: "Grace Purple", designation: "Marketing", type: "Full-time", checkInTime: "9:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Grace%20Purple" },
    { employeeName: "Hank Yellow", designation: "Finance", type: "Part-time", checkInTime: "10:00 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Hank%20Yellow" },
    { employeeName: "Ivy Pink", designation: "Sales", type: "Full-time", checkInTime: "9:45 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Ivy%20Pink" },
    { employeeName: "Jack Gray", designation: "Consultant", type: "Part-time", checkInTime: "10:15 AM", status: "Late", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Jack%20Gray" },
    { employeeName: "Kate Silver", designation: "Legal", type: "Full-time", checkInTime: "9:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Kate%20Silver" },
    { employeeName: "Leo Gold", designation: "Support", type: "Part-time", checkInTime: "10:00 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Leo%20Gold" },
    { employeeName: "Mia Orange", designation: "Researcher", type: "Full-time", checkInTime: "9:30 AM", status: "On Time", avatar: "https://api.dicebear.com/6.x/identicon/svg?seed=Mia%20Orange" },
    // ... (your sample data here)
  ];

  const displayedAttendanceData = isHomePage ? attendanceData.slice(0, 8) : attendanceData;

  const handleViewAllClick = () => {
    router.push("/attendance"); // Navigate to the attendance page
  };

  return (
    <section className="attendance-overview flex flex-col items-start p-6 gap-4 w-full h-full border shadow-lg rounded-lg">
      {/* Title */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[24px] font-bold text-[#101828]">Attendance Overview</h2>

        {isHomePage && (
          <button
            className="flex justify-end items-center px-4 py-2 border border-gray-300 rounded-lg gap-2 text-gray-500 text-sm"
            onClick={handleViewAllClick}
          >
            View All
          </button>
        )}
      </div>

      {/* DataTable with ShadCN */}
      <div className="w-full flex-grow overflow-hidden">
        <div className={`overflow-y-auto ${isHomePage ? 'h-[440px]' : 'h-[740px]'}`}> {/* Increased height for attendance page */}
          <DataTable columns={columns} data={displayedAttendanceData} />
        </div>
      </div>
    </section>
  );
};

export default AttendanceOverview;

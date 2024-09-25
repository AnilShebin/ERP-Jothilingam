"use client";

import Image from "next/image";
import Profile from "./Profile";
import NotificationIcon from "/public/icons/notification-header.svg";
import ProfileIcon from "/public/icons/profile.svg"; // Import profile icon
import SettingsIcon from "/public/icons/settings.svg"; // Import settings icon
import Dropdown from "./Dropdown"; // Import the Dropdown component

interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  // Define the menu items for the dropdown with icons
  const menuItems = [
    { label: "Profile", icon: ProfileIcon, action: () => console.log("Profile clicked") },
    { label: "Settings", icon: SettingsIcon, action: () => console.log("Settings clicked") },
  ];

  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between w-full bg-white">
      {/* Left Side: Title/Greeting */}
      <div className="flex-1 mb-4 sm:mb-0">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          {title}
          {type === "greeting" && (
            <span className="text-bankgradient">&nbsp;{user}</span>
          )}
        </h1>
        <p className="text-sm sm:text-base text-gray-500">{subtext}</p>
      </div>

      {/* Right Side: Notification, Profile, Dropdown */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Notification Icon */}
        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2 w-10 h-10 sm:w-12 sm:h-12">
          <Image
            src={NotificationIcon}
            alt="Notification Icon"
            width={24}
            height={24}
            className="rounded"
          />
        </div>

        {/* Dropdown for Profile Actions */}
        <Dropdown
          label={<Profile user={user} />}  // Pass the Profile component as the label
          menuItems={menuItems}  // Pass the defined menu items
        />
      </div>
    </div>
  );
};

export default HeaderBox;

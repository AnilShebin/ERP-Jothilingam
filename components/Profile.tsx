import React from 'react';
import Image from 'next/image';
import ArrowIcon from '/public/icons/arrow-header.svg';
import ProfileImage from '/public/icons/logo.svg'; // Replace with the actual path to the user's profile image

interface ProfileProps {
  user?: string;
  profileImage?: string; // Optionally pass the profile image URL
  jobTitle?: string; // New prop to display job title
}

const Profile: React.FC<ProfileProps> = ({ user, profileImage, jobTitle }) => {
  return (
    <div className="w-[184px] h-[50px] relative font-inter">
      {/* Logo Wrapper */}
      <div className="w-10 h-10 absolute left-[5px] top-[5px] rounded-lg overflow-hidden">
        <Image
          src={profileImage ? profileImage : "https://via.placeholder.com/40x40"} // Fallback to placeholder image
          alt="Profile"
          width={40}
          height={40}
          style={{ objectFit: 'cover' }} // Ensures the image fills the space while maintaining aspect ratio
        />
      </div>

      {/* Border */}
      <div className="w-[184px] h-[50px] absolute top-0 left-0 rounded-lg border border-[#a2a1a8]/20"></div>

      {/* Profile Text */}
      <div className="absolute left-[50px] top-[5px] flex-col justify-start items-start inline-flex">
        <div className="text-[#16141b] text-base font-semibold font-lexend leading-normal">
          {user ? user : 'My Profile'}
        </div>
        <div className="text-[#a1a0a7] text-xs font-light font-lexend leading-[18px]">
          {jobTitle ? jobTitle : 'Designition'}
        </div>
      </div>

      {/* Dropdown Arrow Icon */}
      <div className="w-5 h-5 absolute left-[159px] top-[15px] justify-center items-center inline-flex cursor-pointer">
        <Image src={ArrowIcon} alt="Dropdown Arrow" width={20} height={20} />
      </div>
    </div>
  );
};

export default Profile;

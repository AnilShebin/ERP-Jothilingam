import React from "react";
import Image from "next/image";
import ArrowIcon from "/public/icons/arrow-header.svg";

interface ProfileProps {
  user?: string;
  profileImage?: string;
  jobTitle?: string;
}

const Profile: React.FC<ProfileProps> = ({ user, profileImage, jobTitle }) => {
  return (
    <div className="w-[184px] h-[50px] relative font-inter">
      <div className="w-[40px] h-[40px] absolute left-[5px] top-[5px] rounded-full overflow-hidden">
        <Image
          src={"/icons/logo.jpg"}
          alt="Profile"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-[184px] h-[50px] absolute top-0 left-0 rounded-lg border border-[#a2a1a8]/20"></div>
      <div className="absolute left-[50px] top-[5px] flex-col justify-start items-start inline-flex">
        <div className="text-[#16141b] text-base font-semibold font-lexend leading-normal">
          {user ? user : "My Profile"}
        </div>
        <div className="text-[#a1a0a7] text-xs font-light font-lexend leading-[18px]">
          {jobTitle ? jobTitle : "Designation"}
        </div>
      </div>
      <div className="w-5 h-5 absolute left-[159px] top-[15px] justify-center items-center inline-flex cursor-pointer">
        <Image src={ArrowIcon} alt="Dropdown Arrow" width={20} height={20} />
      </div>
    </div>
  );
};

export default Profile;

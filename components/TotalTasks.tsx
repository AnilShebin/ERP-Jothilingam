import Image from "next/image";
import React from "react";

const TotalTasks = ({ totalTasks }: TotalTasksProps) => {
  return (
    <section className="total-staff">
      <div className="total-staffs-home">
        <h2 className="header-2">Total Tasks</h2>
        <Image
          src="/icons/task-outline.svg"
          width={24}
          height={24}
          alt="User Octagon Icon"
          className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
        />
      </div>

      <p className="total-staff-count">{totalTasks}</p>
    </section>
  );
};

export default TotalTasks;

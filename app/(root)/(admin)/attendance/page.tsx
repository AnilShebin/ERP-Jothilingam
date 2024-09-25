import Attendance from "@/components/Attendance";
import HeaderBox from "@/components/HeaderBox";

const AttendancePage = () => {

  return (
    <section className="home">
      <div className="attendance-home">
        {/* Header with greeting */}
        <HeaderBox
          type="greeting"
          title="Attendance"
          subtext="All Staff Attendance"
        />
        <Attendance />
      </div>
    </section>
  );
};

export default AttendancePage;

import HeaderBox from "@/components/HeaderBox";
import TodayAttendance from "@/components/TodayAttendance";
import TotalStaff from "@/components/TotalStaff";
import TotalTasks from "@/components/TotalTasks";

const AdminDashBoard = () => {
  const loggedIn = { firstName: "Jothilingam" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={loggedIn?.firstName || "Guest"}
            subtext="Let's elevate your efficiency and precision together."
          />
          <div className="flex flex-col md:flex-row gap-4">
            <TotalStaff totalStaffs={30} />
            <TodayAttendance todayAttendance={18} />
            <TotalTasks totalTasks={5} />
          </div>
          {/* <Attendance /> */}
        </header>
      </div>
    </section>
  );
};

export default AdminDashBoard;

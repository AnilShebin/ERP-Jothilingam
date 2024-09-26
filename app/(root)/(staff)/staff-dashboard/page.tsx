import StaffDashboard from "@/components/staff/StaffDashboard";
import HeaderBox from "@/components/HeaderBox";

const StaffDashBoard = () => {
  const loggedIn = { firstName: "Anil Shebin" };

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
          <div>
            <StaffDashboard />
          </div>
        </header>
      </div>
    </section>
  );
};

export default StaffDashBoard;

import AddStaffTable  from '@/components/AddStaffTable';  
import HeaderBox from "@/components/HeaderBox";

const StaffPage = () => {
  return (
    <section className="home">
      <div className="attendance-home">
        {/* Header with greeting */}
        <HeaderBox
          type="greeting"
          title="All Staff"
          subtext="View, search for and add new staff"
        />

        {/* Staff Table */}
        <div className="w-full max-w-7xl mx-auto">
          {" "}
          {/* Adjust width here */}
          <AddStaffTable />
        </div>
      </div>
    </section>
  );
};

export default StaffPage;

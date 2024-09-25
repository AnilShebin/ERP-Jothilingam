import AddStaffForm from "@/components/AddStaffForm";
import HeaderBox from "@/components/HeaderBox";

const AddStaffPage = () => {
  const loggedIn = { firstName: "Jothilingam" };
  return (
    <section className="home">
      <div className="attendance-home">
        {/* Header with greeting */}
        <HeaderBox
          type="greeting"
          title="New Staff"
          subtext="Create account for a new staff"
        />
        <AddStaffForm />
      </div>
    </section>
  );
};

export default AddStaffPage;

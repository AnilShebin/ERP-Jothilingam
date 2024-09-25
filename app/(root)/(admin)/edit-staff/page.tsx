import AddStaffForm from "@/components/AddStaffForm";
import EditStaffForm from "@/components/EditStaffForm";
import HeaderBox from "@/components/HeaderBox";

const AddStaffPage = () => {

  return (
    <section className="home">
      <div className="attendance-home">
        {/* Header with greeting */}
        <HeaderBox
          type="greeting"
          title="Edit Staff Account"
          subtext="Edit the account for a staff member."          
        />
        <EditStaffForm />
      </div>
    </section>
  );
};

export default AddStaffPage;

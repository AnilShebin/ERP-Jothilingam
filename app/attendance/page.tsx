import AttendanceOverview from "@/components/AttendanceOverview";
import { Sidebar } from "lucide-react";

const AttendancePage = () => {
  return (
    <section className="attendance p-6 bg-[#F9FAFB] min-h-screen">
      <AttendanceOverview />
    </section>
  );
};

export default AttendancePage;

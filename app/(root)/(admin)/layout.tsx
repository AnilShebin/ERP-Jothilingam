import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Ensure the role is explicitly typed as "admin"
  const loggedIn: { firstName: string; lastName: string; role: "admin" | "staff" } = {
    firstName: "Admin",
    lastName: "User",
    role: "admin",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} role={loggedIn.role} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
        </div>
        {children}
      </div>
    </main>
  );
}

"use client"

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { adminLinks, staffLinks } from "@/constants";

interface DashboardProps {
  userType : string
}

const Dashboard = ({ userType } : DashboardProps) => {
  const sidebarLinks = userType === "admin" ? adminLinks : staffLinks;
  return (
    <div>
         <section className="sidebar">
         <nav className="flex flex-col gap-4">
         <Link href="/" className="mb-6 cursor-pointor flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Jothilingam logo"
            className="size-[34px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Jothilingam</h1>
        </Link>
      {sidebarLinks.map((item) => {
        const pathname = usePathname();
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
        return (
          <Link
            href={item.route}
            key={item.label}
            className={cn("sidebar-link", { "bg-bank-gradient": isActive })}>
            <div className="relative size-6">
              <Image
                src={item.imgURL}
                alt={item.label}
                fill
                className={cn({
                  "brightness-[3] invert-0": isActive,
                })}
              />
            </div>
            <p className={cn("sidebar-label", { "!text-white": isActive })}>
              {item.label}
            </p>
          </Link>
        );
      })}
      </nav>
      </section>
    </div>
  );
};

export default Dashboard;
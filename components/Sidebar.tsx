"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { adminSidebarLinks, staffSidebarLinks } from "@/constants"; // Import link sets

type SidebarProps = {
  user: { firstName: string; lastName: string };
  role: "admin" | "staff"; // Prop for role
};

const Sidebar = ({ user, role }: SidebarProps) => {
  const pathname = usePathname();

  // Determine which links to use based on the role
  const sidebarLinks = role === "admin" ? adminSidebarLinks : staffSidebarLinks;

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-6 cursor-pointer flex items-center gap-2">
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
          // Logic to check if the current route is active or a subroute is active
          const isActive =
            pathname === item.route ||
            (item.subRoutes && item.subRoutes.some((subRoute) => pathname.startsWith(subRoute)));

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
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
  );
};

export default Sidebar;

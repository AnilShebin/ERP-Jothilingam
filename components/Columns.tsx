"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// Define the column structure for the table
export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "avatar",
    header: "Employee Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Image
          src={row.original.avatar}
          alt={row.original.employeeName}
          className="rounded-full"
          width={32} // Replacing w-8 (8 * 4 = 32px)
          height={32} // Replacing h-8 (8 * 4 = 32px)
        />
        <span>{row.original.employeeName}</span>
      </div>
    ),
  },
  {
    accessorKey: "designation",
    header: "Designation",
    cell: ({ row }) => <span>{row.original.designation}</span>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <span>{row.original.type}</span>,
  },
  {
    accessorKey: "checkInTime",
    header: "Check In Time",
    cell: ({ row }) => <span>{row.original.checkInTime}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`${
          row.original.status === "On Time"
            ? "bg-[#E5F9F1] text-[#3FC28A]"
            : row.original.status === "Late"
            ? "bg-[#FEE4E2] text-[#F45B69]"
            : "bg-[rgba(244,91,105,0.1)] text-gray-600"
        } rounded px-2 py-1 text-sm`}
      >
        {row.original.status}
      </span>
    ),
  },
];

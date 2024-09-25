"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_SortingState,
  MRT_Row,
  MRT_RowVirtualizer,
} from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { makeData, type Person } from "./makeData"; // Ensure your data structure matches the fields used
import { useRouter } from "next/navigation"; // Updated import for Next.js navigation
import Image from "next/image"; // Import the Image component
import AddStaffIcon from "/public/icons/add-staff.svg"; // Import your SVG

const Attendance = () => {
  const router = useRouter(); // Initialize the router

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "staffId", // Field: Staff ID
        header: "Staff ID",
        size: 100,
      },
      {
        accessorKey: "name", // Merged Field: Name
        header: "Name",
        size: 240,
        Cell: ({ row }: { row: MRT_Row<Person> }) => (
          <>
            {row.original.firstName} {row.original.lastName}
          </>
        ),
      },
      {
        accessorKey: "designation", // Field: Designation
        header: "Designation",
        size: 300,
      },
      {
        accessorKey: "role", // Field: Role
        header: "Role",
      },
      {
        accessorKey: "status", // Field: Status
        header: "Status",
        Cell: ({ row }: { row: MRT_Row<Person> }) => (
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
    ],
    []
  );

  // For CSV export configuration
  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });

  const handleExportRows = (rows: MRT_Row<Person>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data); // Ensure 'data' is the source for the CSV
    download(csvConfig)(csv);
  };

  const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setData(makeData(10_000)); // Simulating data generation
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Scroll to the top of the table when the sorting changes
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
    } catch (error) {
      console.error(error);
    }
  }, [sorting]);

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enablePagination: true,
    muiTableContainerProps: { sx: { maxHeight: "50vh" } },
    onSortingChange: setSorting,
    state: { isLoading, sorting },
    rowVirtualizerInstanceRef,
    rowVirtualizerOptions: { overscan: 5 },
    columnVirtualizerOptions: { overscan: 2 },
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{ display: "flex", gap: "16px", padding: "8px", flexWrap: "wrap" }}
      >
        <Button
          className="export-button"
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />}
        >
          Export All Data
        </Button>
        <Button
          className="export-button"
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button>
        <Button
          className="export-button"
          disabled={table.getRowModel().rows.length === 0}
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          className="export-button"
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
    initialState: {
      columnVisibility: {
        // Adjust column visibility as needed
      },
    },
  });

  return (
    <section>
      {/* Header with Title and Add Staff Button */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
      </header>

      {/* Table */}
      <div>
        <MaterialReactTable table={table} />
      </div>
    </section>
  );
};

export default Attendance;

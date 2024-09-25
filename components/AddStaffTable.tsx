"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_SortingState,
  type MRT_RowVirtualizer,
  MRT_Row,
} from "material-react-table";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { makeData, type Person } from "./makeData";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AddStaffIcon from "/public/icons/add-staff.svg";

const AddStaffTable = () => {
  const router = useRouter();
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  
  const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setData(makeData(10_000)); // Simulate data generation
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
    } catch (error) {
      console.error(error);
    }
  }, [sorting]);

  const handleEditRow = useCallback((row: MRT_Row<Person>) => {
    // Redirect to the edit page with the staff ID as a query parameter
    router.push(`/edit-staff?id=${row.original.staffId}`); // Adjusted the parameter name to match the EditStaffForm
  }, [router]);

  const handleDeleteRow = (row: MRT_Row<Person>) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${row.original.firstName} ${row.original.lastName}?`);
    if (confirmed) {
      setData((prevData) => prevData.filter(item => item.staffId !== row.original.staffId));
    }
  };

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
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  const columns = useMemo<MRT_ColumnDef<Person>[]>(() => [
    {
      id: 'actions',
      header: 'Actions',
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: '0.5rem' }} >
          <Tooltip title="Edit">
            <IconButton
              color="primary"
              onClick={() => handleEditRow(row)}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              color="error"
              onClick={() => handleDeleteRow(row)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
      size: 120, // Adjust size for actions column
    },
    {
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      id: "name",
      header: "Name",
      size: 250,
      Cell: ({ renderedCellValue, row }) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Image
            alt="avatar"
            height={30}
            width={30}
            src={row.original.avatar}
            loading="lazy"
            style={{ borderRadius: "50%" }}
          />
          <span>{renderedCellValue}</span>
        </Box>
      ),
    },
    {
      accessorKey: "staffId",
      header: "Staff ID",
      size: 100,
    },
    {
      accessorKey: "email",
      header: "Email Address",
      size: 200,
    },
    {
      accessorKey: "phone",
      header: "Phone Number",
      size: 120,
    },
    {
      accessorKey: "gender",
      header: "Gender",
      size: 100,
    },
    {
      accessorKey: "alternateNumber",
      header: "Alternate Number",
      size: 120,
    },
    {
      accessorKey: "role",
      header: "Role",
      size: 100,
    },
    {
      accessorKey: "designation",
      header: "Designation",
      size: 150,
    },
  ], [handleEditRow]);

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
      <Box sx={{ display: "flex", gap: "16px", padding: "8px", flexWrap: "wrap" }}>
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
          onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)}
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
          disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
    initialState: {
      columnVisibility: {
        email: false,
        alternateNumber: false,
        gender: false,
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
        <div
          className="h-[40px] p-3 bg-blue-600 rounded-[8px] flex justify-center items-center gap-2 cursor-pointer"
          onClick={() => router.push("/add-staffs")}
        >
          <Image
            src={AddStaffIcon}
            alt="Add Staff Icon"
            width={18}
            height={18}
          />
          <div className="text-white text-sm leading-tight">
            Add New Staff
          </div>
        </div>
      </header>

      {/* Table */}
      <div>
        <MaterialReactTable table={table} />
      </div>
    </section>
  );
};

export default AddStaffTable;

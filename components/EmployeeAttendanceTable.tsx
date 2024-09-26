"use client";

import React, { useState } from 'react'
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Employee {
  id: number
  name: string
  avatar: string
  role: string
  employmentType: 'Full-Time' | 'Part-Time'
  status: 'Present' | 'Absent' | 'Late'
  checkIn: string
  checkOut: string
  overTime: string
}

const employees: Employee[] = [
  { id: 1, name: 'Aisha Doe', avatar: '/avatars/aisha.png', role: 'HR Manager', employmentType: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '05:00 PM', overTime: '0h' },
  { id: 2, name: 'Chukwuemeka', avatar: '/avatars/chukwuemeka.png', role: 'Software Engineer', employmentType: 'Part-Time', status: 'Absent', checkIn: '-', checkOut: '-', overTime: '0h' },
  { id: 3, name: 'Suleiman', avatar: '/avatars/suleiman.png', role: 'Marketing Executive', employmentType: 'Full-Time', status: 'Late', checkIn: '10:15 AM', checkOut: '05:00 PM', overTime: '0h' },
  { id: 4, name: 'Olamide', avatar: '/avatars/olamide.png', role: 'Financial Analyst', employmentType: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overTime: '1h' },
  { id: 5, name: 'Jide', avatar: '/avatars/jide.png', role: 'Project Manager', employmentType: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '05:00 PM', overTime: '0h' },
  { id: 6, name: 'Femi', avatar: '/avatars/femi.png', role: 'Sales Manager', employmentType: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '07:00 PM', overTime: '2h' },
]

export default function EmployeeAttendanceTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments')
  const [selectedDate, setSelectedDate] = useState('2024-01-13')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredEmployees = employees.filter(employee => 
    (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     employee.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedDepartment === 'All Departments' || employee.role.includes(selectedDepartment))
  )

  const pageCount = Math.ceil(filteredEmployees.length / itemsPerPage)
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleExportCSV = () => {
    // Implement CSV export logic here
    console.log('Exporting CSV...')
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="flex items-center w-full sm:w-auto">
          <Input
            placeholder="Search by name, role, department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64"
          />
          <Button variant="outline" className="ml-2">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Departments">All Departments</SelectItem>
              <SelectItem value="HR">HR</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Sales">Sales</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full sm:w-auto"
          />
          <Button variant="outline" onClick={handleExportCSV}>
            Export CSV
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Employee</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Employment Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Check In</TableHead>
              <TableHead>Check Out</TableHead>
              <TableHead>Over Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">{selectedDate.split('-').reverse().join('/')}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={employee.avatar} alt={employee.name} />
                      <AvatarFallback>{employee.name[0]}</AvatarFallback>
                    </Avatar>
                    {employee.name}
                  </div>
                </TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{employee.employmentType}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${employee.status === 'Present' ? 'bg-green-100 text-green-800' :
                      employee.status === 'Absent' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'}`}>
                    {employee.status}
                  </span>
                </TableCell>
                <TableCell>{employee.checkIn}</TableCell>
                <TableCell>{employee.checkOut}</TableCell>
                <TableCell>{employee.overTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredEmployees.length)} of {filteredEmployees.length} employees
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(page => Math.min(pageCount, page + 1))}
            disabled={currentPage === pageCount}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
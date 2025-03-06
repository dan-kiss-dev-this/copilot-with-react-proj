import React, { useState } from 'react';
import Pagination from './Pagination.tsx'

interface Employee {
    id: number;
    firstname: string;
    lastname: string;
}

export const employees: Employee[] = [
    { id: 1, firstname: "John", lastname: "Smith" },
    { id: 2, firstname: "Maria", lastname: "Garcia" },
    { id: 3, firstname: "James", lastname: "Johnson" },
    { id: 4, firstname: "Linda", lastname: "Williams" },
    { id: 5, firstname: "Robert", lastname: "Brown" },
    { id: 6, firstname: "Patricia", lastname: "Jones" },
    { id: 7, firstname: "Michael", lastname: "Miller" },
    { id: 8, firstname: "Jennifer", lastname: "Davis" },
    { id: 9, firstname: "William", lastname: "Wilson" },
    { id: 10, firstname: "Elizabeth", lastname: "Taylor" },
    { id: 11, firstname: "David", lastname: "Anderson" },
    { id: 12, firstname: "Sarah", lastname: "Thomas" },
    { id: 13, firstname: "Richard", lastname: "Jackson" },
    { id: 14, firstname: "Jessica", lastname: "White" },
    { id: 15, firstname: "Joseph", lastname: "Harris" },
    { id: 16, firstname: "Susan", lastname: "Martin" },
    { id: 17, firstname: "Thomas", lastname: "Thompson" },
    { id: 18, firstname: "Margaret", lastname: "Garcia" },
    { id: 19, firstname: "Charles", lastname: "Martinez" },
    { id: 20, firstname: "Karen", lastname: "Robinson" },
    { id: 21, firstname: "Christopher", lastname: "Clark" },
    { id: 22, firstname: "Nancy", lastname: "Rodriguez" },
    { id: 23, firstname: "Daniel", lastname: "Lewis" },
    { id: 24, firstname: "Lisa", lastname: "Lee" },
    { id: 25, firstname: "Matthew", lastname: "Walker" },
    { id: 26, firstname: "Betty", lastname: "Hall" },
    { id: 27, firstname: "Anthony", lastname: "Allen" },
    { id: 28, firstname: "Dorothy", lastname: "Young" },
    { id: 29, firstname: "Mark", lastname: "Hernandez" },
    { id: 30, firstname: "Sandra", lastname: "King" }
];

export default function Employees() {
    const [currentPage, setCurrentPage] = useState(1);
    const employeesPerPage = 6;

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h2>Employees</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination totalPages={Math.ceil(employees.length / employeesPerPage)} onPageChange={handlePageChange} />
        </div>
    );
}
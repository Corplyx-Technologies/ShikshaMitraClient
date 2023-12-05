import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";


function DataTable({data , handleDelete}) {
  const navigate = useNavigate();

    const columns = [
      { field: "id", headerName: "S. No." , width:50 },
      { field: "fullName", headerName: "Full Name" ,flex:1 },
      { field: "employeeId", headerName: "Employee ID", flex:1 },
      { field: "email", headerName: "Email", flex:1 },
      { field: "contact", headerName: "Contact", flex:1 },
      { field: "actions", headerName: "Actions", flex:1,
      renderCell: (params) => (
        <Link to={`/admin/allteachers/salaryStatus/${params.row.email}`}>
          <IconButton>
            <p className="bg-pink-500 py-3  text-white p-2">Salary status</p>
          </IconButton>
        </Link>
      ),
    },
      ];

  const dataWithIds = Array.isArray(data) ? data.map((item, index) => ({ id: index + 1, ...item})) : [];
  return (
   
    // <div className="h-[350px]  mx-auto  bg-white mt-2 rounded-md">
    <div className="h-[450px] dark:text-white dark:bg-secondary-dark-bg mx-auto bg-white mt-2 rounded-md overflow-scroll w-full">
    <div className=" min-w-[1000px]  w-full">
      <DataGrid
        rows={dataWithIds}
        columns={columns}
        
      />
    </div>
    </div>
  );
}

export default DataTable;
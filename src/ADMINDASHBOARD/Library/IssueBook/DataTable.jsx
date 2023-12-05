import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import { useStateContext } from "../../../contexts/ContextProvider";
import { Link } from "react-router-dom";
import Issue from "./Issue";

function DynamicDataTable({ data, handleDelete }) {

  const { currentColor } = useStateContext();
  const [openModals, setOpenModals] = useState({}); 

  const handleOpenModal = (rowId) => {

    setOpenModals((prevModals) => ({
      ...prevModals,
      [rowId]: true,
    }));

  };

  const handleCloseModal = (rowId) => {

    setOpenModals((prevModals) => ({
      ...prevModals,
      [rowId]: false,
    }));
    
  };

  const columns = [
      { field: "id", headerName: "S. No." , width:50 },
      { field: "bookName", headerName: "Book Name",flex:1 },
      { field: "quantity", headerName: "Quantity" ,flex:1},
      { field: "category", headerName: "Category",flex:1 },
      { field: "className", headerName: "Class Name" ,flex:1},
      { field: "subject", headerName: "Subject" ,flex:1},
      {
        field: "actions",
        headerName: "Actions"
        ,width:200,
        renderCell: (params) => (
        <div>        
          <IconButton
         
              onClick={() => handleOpenModal(params.row._id)}
              className="bg-blue-600 text-white "
          >
            
          <p  style={{ backgroundColor: currentColor }} className= " text-white p-2 rounded-md">  Issue </p>
         
          </IconButton>
          <Issue
            isOpen={openModals[params.row._id] || false}
            onClose={() => handleCloseModal(params.row._id)}
            bookId={params.row._id} 
          />

          <Link to={`/admin/books/return-book/${params.row._id}`}>
          <IconButton >
        
       
                <p    style={{ backgroundColor: currentColor }} className=" text-white p-2 rounded-md"> Book Issued List</p>

          </IconButton>
          </Link>
         
        </div>
      ),
      width:500 ,innerHeight:200
    },
  ];

  const dataWithIds = Array.isArray(data)
    ? data.map((item, index) => ({ id: index + 1, ...item }))
    : [];

  return (
    
    <div className="h-[450px] mx-auto bg-white dark:text-white dark:bg-secondary-dark-bg mt-2 rounded-md overflow-scroll w-full">
    
    <div className=" min-w-[1000px]  w-full">
      <DataGrid rows={dataWithIds} columns={columns} />

    </div>
    </div>
  );
}

export default DynamicDataTable;
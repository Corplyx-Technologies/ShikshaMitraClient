import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import "../../../Dynamic/Form/FormStyle.css";
import DynamicDataTable from "./DataTable";
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');

function ReturnBook() {

  const { _id } = useParams();
  const [loading, setLoading] = useState(false);

  const [submittedData, setSubmittedData] = useState([]);
  const [shouldFetchData, setShouldFetchData] = useState(false);

  useEffect(() => {
    axios
      .get(`https://real-ruby-dolphin-fez.cyclic.app/api/v1/adminRoute/getAllIssuedBookStudent?bookId=${_id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data.allStudent)) {
          setSubmittedData(response.data.allStudent);
          console.log(response.data.message);
        } else {
          console.error("Data format is not as expected:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, [shouldFetchData]);

  const handleReturnButtonClick = () => {
    setShouldFetchData(!shouldFetchData);
  };

  return (
    <div className=" mt-12 md:mt-1  mx-auto p-3 ">
    <h1 className="text-4xl font-bold mb-4 uppercase text-center  hover-text ">Return Books</h1>
     

      <DynamicDataTable data={submittedData} updateFetchData={handleReturnButtonClick}  />
    </div>
  );
}

export default ReturnBook;

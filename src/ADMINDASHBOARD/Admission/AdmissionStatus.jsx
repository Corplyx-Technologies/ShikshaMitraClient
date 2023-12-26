import React, { useState, useEffect } from "react";
import InputForm from "../../Dynamic/Form/InputForm";
import { toast } from "react-toastify";
import DataTable from "../Admission/DataTable";
import Modal from "react-modal";
import axios from "axios";
import { useStateContext } from "../../contexts/ContextProvider";
import Cookies from "js-cookie";
const authToken = Cookies.get("token");

function AdmissionStatus({ data }) {
  const [submittedData, setSubmittedData] = useState([]);
  const [shouldFetchData, setShouldFetchData] = useState(false);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios
      .get(
        "https://dull-rose-salamander-fez.cyclic.app/api/v1/adminRoute/getLastYearStudents",
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          }, // Set withCredentials to true
        }
      )
      .then((response) => {
        if (Array.isArray(response.data.allStudent)) {
          // Update the state with the array
          setSubmittedData(response.data.allStudent);
          console.log(response.data.allStudent);
        } else {
          console.error("Data format is not as expected:", response.allStudent);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error gracefully, e.g., show an error message to the user
      });
  }, [shouldFetchData]);
  return (
    <div className=" mt-12  w-[900px] mx-auto p-3">
      <h1 className="text-2xl font-bold mb-4 uppercase text-center text-cyan-700">
        {" "}
        Admission Status{" "}
      </h1>
      <DataTable data={submittedData} />
    </div>
  );
}

export default AdmissionStatus;

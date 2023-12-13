import React, { useState, useEffect } from "react";

import axios from "axios";
import StockTable from "./StockDataTable";
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');

function CreateSell() {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    price: "",


  });
  const [submittedData, setSubmittedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldFetchData, setShouldFetchData] = useState(false);


  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const updateDependency = () => {
    setShouldFetchData(!shouldFetchData);
  }


  useEffect(() => {

    axios.get('https://grumpy-plum-dalmatian.cyclic.app/api/v1/adminRoute/getAllItems', {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      }, // Set withCredentials to true
    })
      .then((response) => {
        setSubmittedData(response.data.listOfAllItems);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [shouldFetchData]);

  return (
    <div className=" mt-12  w-[900px] mx-auto p-3">
      <h1 className="text-2xl font-bold mb-4 uppercase text-center text-cyan-700">Products Sell</h1>
    
      <StockTable data={submittedData} updateDependency={updateDependency}
      //  handleDelete={handleDelete}
      />
    </div>
  );
}

export default CreateSell;

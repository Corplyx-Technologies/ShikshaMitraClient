import React, { useState, useEffect } from 'react';

import axios from 'axios';
import DynamicDataTable from './DataTable';
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');


const AdmitCard = () => {
  const [students, setStudents] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    axios.get("https://precious-pink-nightgown.cyclic.app/api/v1/adminRoute/getAllStudents", {

      withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        const allStudent = response.data.allStudent;
        // console.log("Students---->", allStudent);
        setSubmittedData(response.data.allStudent);
        setStudents(allStudent);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-4 mt-10">
<h1 className='text-center text-2xl font-bold text-cyan-700 uppercase'>admit card</h1>

      <DynamicDataTable data={submittedData} />


    </div>
  );
};

export default AdmitCard;
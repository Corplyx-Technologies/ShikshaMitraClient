import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');

const Api_GetAll = "https://dull-rose-salamander-fez.cyclic.app/api/v1/adminRoute/getAllClass";

const CreateCurriculum = () => {
  console.log('MRs. CHAYA')
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedAcademicYear, setSelectedAcademicYear] = useState("2023-2024");
  // const [uploadedPDF, setUploadedPDF] = useState(null);
  const [data, setData] = useState([]);
  

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value);
  };

  const handleAcademicYearChange = (e) => {
    setSelectedAcademicYear(e.target.value);
  };

  // const handlePDFUpload = (e) => {
  //   const file = e.target.files[0];
  //   setUploadedPDF(file);
  // };


 


  useEffect(() => {
    axios.get("https://dull-rose-salamander-fez.cyclic.app/api/v1/adminRoute/getAllClass", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        const { classList } = response.data;
        console.log("GetALLCLASS--->", classList)
        setData(classList);
      })
      .catch((error) => {
        console.error('Error fetching class data:', error);
      });
  }, []);
 

  return (
    <div
      className="
      dark:text-gray-200 dark:bg-secondary-dark-bg min-h-screen p-8 flex flex-col items-center justify-center"
    >
      <div className=" bg-white  dark:text-gray-200 dark:bg-black rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-cyan-700 text-center mb-4 dark:text-white">
          School Curriculum
        </h1>

        <div className="w-full flex gap-2">
          <div className="mb-4">
            <label className="text-xl font-semibold mb-2">Class</label>
            <select
              value={selectedGrade}
              onChange={handleGradeChange}
              className="text-gray-600 bg-gray-100 p-2 rounded-md w-full"
            >
              {console.log("bacha", data)}



              {data
                .slice()
                .sort((a, b) => parseInt(a.className, 10) - parseInt(b.className, 10))
                .map((item) => (
                  <option key={item.className} value={item.className}>
                    {item.className}
                  </option>
                ))}



            </select>
          </div>

          <div className="mb-4">
            <label className="text-xl font-semibold mb-2 ">Academic Year:</label>
            <select
              value={selectedAcademicYear}
              onChange={handleAcademicYearChange}
              className="text-gray-600 bg-gray-100 p-2 rounded-md w-full"
            >
              <option value="2023-2024">2023-2024</option>
              <option value="2024-2025">2024-2025</option>
              {/* Add more academic year options here */}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-cyan-700">Courses</h2>
          {/* <ul className="text-gray-600 ">
            <li>Mathematics</li>
            <li>Science</li>
            <li>English</li>
            <li>History</li>
            <li>Physical Education</li>
          </ul> */}
<ul className="text-gray-600 ">
{selectedGrade &&
      data
        .find((item) => item.className === selectedGrade)
        .subject.map((item, index) => (
          // <option key={index} value={item}>
          //   {item}
          // </option>
          <li  key={index}>{item}</li>
        ))}
  </ul>



        </div>

        {/* <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-cyan-700">Upcoming Events</h2>
          <ul className="text-gray-600">
            <li>Parent-Teacher Meeting: October 15, 2023</li>
            <li>School Play: November 5, 2023</li>
          </ul>
        </div> */}

        {/* <div className="mb-4">
          <label className="text-xl font-semibold mb-2">
            Upload Curriculum PDF:
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handlePDFUpload}
            className="text-gray-600 bg-gray-100 p-2 rounded-md w-full"
          />
        </div> */}
{/* 
        {uploadedPDF && (
          <div className="mb-4">
            <label className="text-xl font-semibold mb-2">Uploaded PDF:</label>
            <a
              href={URL.createObjectURL(uploadedPDF)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {uploadedPDF.name}
            </a>
          </div>
        )} */}

        {/* Additional information sections, like courses and events, can be added as needed */}
      </div>
    </div>
  );
};

export default CreateCurriculum;

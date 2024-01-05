import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
const authToken = Cookies.get("token");

const monthData = {
  January: "January",
  February: "February",
  March: "March",
  April: "April",
  May: "May",
  June: "June",
  August: "August",
  September: "September",
  Octomber: "Octomber",
  November: "November",
  December: "December",
};

const ParentFees = () => {
  const [studentData, setStudentData] = useState({});
  const [feeData, setFeeData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [loading, setLoading] = useState(true);
  const [admindata, setAdminData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://precious-pink-nightgown.cyclic.app/api/v1/adminRoute/myKids`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.data[0];
        setStudentData(data);

        // setLoading(false); // Set loading to false once data is received
      })
      .catch((error) => {
        console.error("Error fetching Student data:", error);
        // setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  console.log("studentData of Parents--->", studentData);

  useEffect(() => {
    axios
      .get(
        `https://precious-pink-nightgown.cyclic.app/api/v1/adminRoute/getAdminInfo`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        // console.log("Data student ", response.data.admin.schoolName);
        setAdminData(response.data.admin);
        setLoading(false); // Set loading to false once data is received
      })
      .catch((error) => {
        console.error("Error fetching  data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  // useEffect(() => {
  //   axios.get("https://precious-pink-nightgown.cyclic.app/api/v1/fees/getFeeStatus", {
  //     withCredentials: true,
  //     headers: {
  //       Authorization: `Bearer ${authToken}`,
  //     },
  //   })
  //     .then((response) => {
  //       console.log("Student Fess Status--->", response.data.data);

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  console.log("FInding Id", studentData._id);

  useEffect(() => {
    axios
      .get(
        `https://precious-pink-nightgown.cyclic.app/api/v1/fees/getFeeStatus?studentId=${studentData._id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        console.log("Student Fess Status--->", response.data.data);
        const data = response.data.data[0].feeHistory; // Assuming data is an array
        setFeeData(data);
        console.log("ParentDashBoardFeeStatus--->", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [studentData]);

  console.log("fee data Y1", feeData);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const filteredFeeData = selectedMonth
    ? feeData.filter((item) => item.month === selectedMonth)
    : feeData;

  console.log("filteredFeeData", filteredFeeData);

  return (
    <div>
      <div className="mt-12">
        <div className="mt-2 md:mt-10">
          <select
            className="p-2 mb-2 border rounded-md w-full md:w-1/4"
            onChange={handleMonthChange}
            value={selectedMonth}
          >
            <option value="">Select Month</option>
            {Object.keys(monthData).map((key) => (
              <option key={key} value={key} className="p-2">
                {monthData[key]}
              </option>
            ))}
          </select>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 p-2 mb-2 rounded mt-2">
            Download Receipt
          </button>
        </div>

        <div className="p-4 border border-gray-300 rounded-lg max-w-xl mx-auto bg-white shadow-md">
          <div className="flex flex-wrap"></div>
          <div className="text-center mb-4">
            <h1 className="text-3xl font-semibold mt-2">
              {/* Corplyx Public School */}
              {admindata.schoolName}
            </h1>
            <p className="text-sm text-gray-600"> {admindata.schoolName} </p>
          </div>
          <div className="flex justify-between">
            <div></div>
            <div></div>
          </div>
          <div className="mt-1 text-center">
            <p className="text-lg font-semibold">Fee Receipt</p>
            <p className="text-md">Academic Year: 2023-2024</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Student Fee Details</h2>
            <p className="text-sm">Name: {studentData.fullName}</p>
            <p className="text-sm">
              Class: {studentData.class}-{studentData.section}
            </p>
            <p className="text-sm">Roll Number: {studentData.rollNo}</p>
          </div>
          <div className="mt-6">
            {selectedMonth &&
              filteredFeeData.map((item) => (
                <div key={item._id}>
                  <p className="text-sm">Month: {item.month}</p>
                  <p className="text-sm">
                    Fees Amount: {"\u20B9"}
                    {item.paidAmount}
                  </p>
                  <p className="text-sm">Status: {item.status}</p>
                </div>
              ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <div>
                {/* <p className="font-semibold">Date:</p> */}
                {selectedMonth &&
                  filteredFeeData.map((item) => (
                    <div key={item._id}>
                      <p className="font-semibold">
                        Date:{item.date ? item.date.split("T")[0] : "N/A"}
                      </p>
                    </div>
                  ))}
              </div>
              <div>
                <p className="font-semibold">Principal's Signature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentFees;

// import React from 'react';

// const ParentFees = () => {
//   const feesData = [
//     { type: 'Registration Fee', amount: 50 },
//     { type: 'Exam Fee', amount: 30 },
//     { type: 'Transportation Fee', amount: 80 },
//     { type: 'Miscellaneous', amount: 20 },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 h-screen">
//       <div className="text-3xl font-bold text-white mb-8">Parent Fees</div>
//       <div className="bg-white rounded-lg overflow-hidden shadow-md w-full max-w-xl">
//         {feesData.map((fee, index) => (
//           <div
//             key={index}
//             className={`flex items-center justify-between px-6 py-4 ${
//               index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
//             }`}
//           >
//             <span className="text-lg font-semibold text-gray-800">
//               {fee.type}
//             </span>
//             <span className="text-lg font-semibold text-green-500">
//               ${fee.amount}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ParentFees;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useStateContext } from "../../contexts/ContextProvider";
const authToken = Cookies.get('token');
const AllExams = () => {
  const { currentColor } = useStateContext();
  const modalStyle = {
    content: {
      width: "80%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1000,
      background:currentColor
    },
  };
  
  const [examData, setExamData] = useState([]);

  useEffect(() => {
    console.log("use effect");

    axios
      .get(`https://handsome-bear-beret.cyclic.app/api/v1/exam/getAllExams`, {
        withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      })
      .then((response) => {
        console.log("Data ExamData response---->", response.data);
        setExamData(response.data.examData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleDelete = async (index) => {
    try {
      const examId = examData[index]._id;

      const response = await axios.delete(
        `https://handsome-bear-beret.cyclic.app/api/v1/exam/deleteExam/${examId}`,
        {
          withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
        }
      );

      // console.log("message", response);

      // Update the state to remove the deleted exam
      const updatedExamData = [...examData];
      updatedExamData.splice(index, 1);
      setExamData(updatedExamData);
    } catch (error) {
      console.log("error", error.message);     
    }
  };

  return (
    <div>
 <div className=" mt-12 md:mt-1  mx-auto p-3">
      <h1 className="text-4xl font-bold mb-4 uppercase text-center  hover-text "
      style={{color:currentColor}}
      >Exam</h1>
  <div className="overflow-x-auto bg-gray-100 rounded-lg p-4">
    <table className="w-full border-collapse table-auto">
      <thead>
        <tr className="text-center bg-cyan-700 text-white">
          <th className="border   p-2">Class</th>
          {/* <th className="border text-left px-4 py-2">Section</th> */}
          <th className="border   p-2">Exam Name</th>
          <th className="border px-4 py-2"></th>
         
          
        </tr>
      </thead>
      <tbody>
        {/* {console.log("first", examData)} */}
        { examData.map((data, index) => (
          <tr key={index} className="text-center">
            <td className="border  p-2">{data.className}-{data.section}</td>
          
            <td className="border p-2">{data.examName}</td>
            <div className="border p-2">
             <tr className=" bg-cyan-600 border-2 text-white border-gray-500 w-full flex justify-around">
             <th className="w-[100px]">Subject</th>
             <th className="w-[100px]">Date</th>
             <th className="w-[100px]">Timimg</th>
             <th className="w-[100px]">Total Marks</th>
             </tr>
              {data.examInfo.map((subject, i) => (
                  <>
              
                <div key={i}>
               
             
                  <tr className="  border-2 border-gray-500 w-full flex justify-around">

                   <td  className="w-[100px] text-center">{subject.subjectName}</td> 
                   <td  className="w-[100px] text-center">{subject.examDate ? subject.examDate.split("T")[0] : ""}</td>
               <td  className="w-[100px] text-center">{subject.startTime} - {subject.endTime}</td>
                   <td  className="w-[100px] text-center">{subject.subjectTotalMarks}</td>
                
                  
                  </tr>
                 
                </div>
                  </>
              ))}
            </div>
           
           
          
          </tr>
        ))}
        
      </tbody>
    </table>
  </div>
</div>
</div>
    // <div>
    //   <div className="mt-8">
    //     <h2 className="text-2xl font-semibold mb-4 uppercase text-center text-cyan-700">Exam Data</h2>
    //     <div className="overflow-x-auto bg-gray-100 rounded-lg p-4">
    //       <table className="w-full border-collapse table-auto">
    //         <thead>
    //           <tr className="bg-gray-200">
    //             <th className="border text-left px-4 py-2">Class</th>
    //             <th className="border text-left px-4 py-2">Section</th>
    //             <th className="border text-left px-4 py-2">Exam Name</th>
    //             <th className="border text-left px-4 py-2">Subjects</th>
    //             <th className="border text-left px-4 py-2">Action</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {console.log("first", examData)}
    //           {examData.map((data, index) => (
    //             <tr key={index}>
    //               <td className="border px-4 py-2">{data.className}</td>
    //               <td className="border px-4 py-2">{data.section}</td>
    //               <td className="border px-4 py-2">{data.examName}</td>
    //               <td className="border px-4 py-2">
    //                 {data.examInfo.map((subject, i) => (
    //                   <div key={i}>
    //                     {subject.subjectName} - Date:{" "}
    //                     {subject.examDate
    //                       ? subject.examDate.split("T")[0]
    //                       : ""}, Time: {subject.startTime} -{" "}
    //                     {subject.endTime}, Total Marks:{" "}
    //                     {subject.subjectTotalMarks}
    //                     {/* data.studentDateOfBirth ? data.studentDateOfBirth.split('T')[0] : '' */}
    //                   </div>
    //                 ))}
    //               </td>

    //               <button
    //                 className="bg-red-500 p-3 ml-1 mt-1 rounded"
    //                 onClick={() => handleDelete(index)}
    //               >
    //                 Delete
    //               </button>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllExams;

  


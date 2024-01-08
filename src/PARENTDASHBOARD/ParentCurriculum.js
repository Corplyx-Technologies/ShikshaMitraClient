import React, { useState, useEffect } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');

const ParentCurriculum = () => {
  const [curriculumData, setCurriculumData] = useState([]);

  const [studentData, setStudentData] = useState({});

  const handleDeleteCurriculum = (id)=>{

  }
 

  useEffect(() => {
    axios
      .get(
       ` https://handsome-bear-beret.cyclic.app/api/v1/adminRoute/myKids`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        console.log("My KIds ", response.data);
        const data = response.data.data[0];
        setStudentData(data);
        console.log("ParentDashBoard--->", data);
        // setLoading(false); // Set loading to false once data is received
      })
      .catch((error) => {
        console.error("Error fetching Student data:", error);
        // setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  console.log("mykIDKidkid--->", studentData);

  // useEffect(() => {
  //   axios
  //     .get("https://handsome-bear-beret.cyclic.app/api/v1/adminRoute/getAllCurriculum", {
  //       withCredentials: true,
      // headers: {
      //   Authorization: `Bearer ${authToken}`,
      // },
  //     })
  //     .then((response) => {
  //       console.log("CurriculumDATA-->", response.data);
  //       const { allCurriculum } = response.data;
  //       console.log("GetALLCLASS--->", allCurriculum);
  //       setCurriculumData(allCurriculum);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching class data:", error);
  //     });
  // }, []);

  useEffect(() => {
    if (studentData.class) {
      axios
        .get(
         ` https://handsome-bear-beret.cyclic.app/api/v1/adminRoute/getAllCurriculum?className=${studentData.class}`,
          {
            withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          }
        )
        .then((response) => {
          console.log("CurriculumDATA-->", response.data);
        const { allCurriculum } = response.data;
        console.log("GetALLCLASS--->", allCurriculum);
        setCurriculumData(allCurriculum);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [studentData.class]);

  console.log("CurriculumData--->", curriculumData)

  return (
    <div className="min-h-screen p-8 flex flex-col">
      {/* <div className="mt-4">
        <h2 className="text-lg font-semibold text-indigo-600">Curriculum</h2>
        <div className="w-full grid grid-cols-3 gap-4">
          {curriculumData.map((item, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-4">
              <p className="text-gray-600">
                Academic Year: {item.academicYear}
              </p>
              <p className="text-gray-600">Class: {item.className}</p>
              <p className="text-gray-600">Course: {item.course}</p>
              {item.file && (
                <div className="mt-2">
                  <label className="text-lg mb-2">View PDF:</label>
                  <a
                    href={item.file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Image
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div> */}
        <div className="mt-4 w-full">
        <h2 className="text-2xl font-semibold text-cyan-700 uppercase text-center">
          Created Curriculum
        </h2>
      
        <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-500">
    <thead>
      <tr className="bg-cyan-600 text-white">
        <th className="w-1/4 p-2 border border-gray-500 whitespace-nowrap">Academic Year</th>
        <th className="w-1/4 p-2 border border-gray-500">Class</th>
        {/* <th className="w-[100px] border">Course</th> */}
        <th className="w-1/4 p-2 border border-gray-500">Files</th>

        {/*<th className="w-1/4 p-2 border border-gray-500">Action</th>*/}
      </tr>
    </thead>
    <tbody>
      {curriculumData.map((item, index) => (
        <tr key={index} className="border border-gray-500 text-center">
          <td className="p-2 border border-gray-500 whitespace-nowrap">{item.academicYear}</td>
          <td className="p-2 border border-gray-500">{item.className}</td>
          {/* <td className="w-[100px] text-center  border">
            {item.course}
          </td> */}
          <td className="p-2 border border-gray-500">
            {item.file && (
              <a
                href={item.file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View
              </a>
            )}
          </td>
          {/* <td className="p-2 border border-gray-500">
            <IconButton
              onClick={() => handleDeleteCurriculum(index)}
              className="bg-red-500 border px-3 py-2 mt-2 w-full hover:bg-red-600"
            >
              <DeleteIcon className="text-red-600" />
            </IconButton>
          </td> */}
        </tr>
      ))}
    </tbody>
  </table>
  </div>


        {/* <tbody>
          <table>
            <tr>
              <tr  className=" bg-cyan-600 border-2 border-gray-500 ">
                <th className="w-[100px] border">AcademicYear</th>
                <th className="w-[100px] border">Class</th>
               
                <th className="w-[100px] border">Files</th>
                <th className="w-[100px] border">Action</th>
              </tr>

              {curriculumData.map((item, index) => (
                
                 
                    <tr key={index} className="  border-2 border-gray-500 ">
                      <td className="w-[100px] text-center border">
                        {item.academicYear}
                      </td>
                      <td className="w-[100px] text-center border">
                        {item.className}
                      </td>
                    
                      <td className="w-[100px] text-center border">
                        {item.file && (
                         
                           
                            <a
                              href={item.file.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              View
                            </a>
                         
                        )}
                      </td>
                      <td>
                        <IconButton
                          onClick={() => handleDeleteCurriculum(index)}
                          className="bg-red-500 border  px-3 py-2 mt-2 w-[100px] hover:bg-red-600"
                        >
                          <DeleteIcon className="text-red-600" />
                        </IconButton>
                      </td>
                    </tr>
                 
                
              ))}
              
            </tr>
          </table>
        </tbody> */}
       
      </div>
    </div>
  );
};

export default ParentCurriculum;
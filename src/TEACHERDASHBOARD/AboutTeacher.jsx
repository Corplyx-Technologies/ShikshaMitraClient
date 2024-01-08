import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcLeft } from "react-icons/fc";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import generatePDF, { usePDF, Resolution, Margin } from "react-to-pdf";
import { download } from "@syncfusion/ej2/filemanager";

const authToken = Cookies.get("token");

const AboutTeacher = () => {
  const [teacherDetails, setTeacherDetails] = useState([]);
  const email = localStorage.getItem("email");
  console.log("email", email);

  const [generatingPDF, setGeneratingPDF] = useState(false);
  const options = {
    // default is `save`
    method: "open",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.HIGH,
    page: {
      format: "a4", // Set the format to A4
      // You can also adjust other properties like margin and orientation if needed
      margin: Margin.SMALL,
      orientation: "portrait", // or 'landscape' as per your requirement
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/png",
      qualityRatio: 1,
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true,
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true,
      },
    },
  };
  const { toPDF, targetRef } = usePDF({
    filename: "About Teacher",
    options: options,
  });

  // const handlePDFGeneration = () => {
  //   setGeneratingPDF(true); // Set state to true when PDF generation starts
  //   setTimeout(() => {
  //     toPDF();
  //   }, 100);
  //   // toPDF(); // Generate the PDF
  // };

  useEffect(() => {
    axios
      .get(
        `https://handsome-bear-beret.cyclic.app/api/v1/adminRoute/getTeachers?email=${email}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((res) => {
        if (Array.isArray(res.data.data)) {
          // console.log("teacher",res.data.data)
          setTeacherDetails(res.data.data[0]);
          // console.log("teacherDet",res.data.data[0])
        } else {
          console.error("Data formate is not as expected : ", res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetch teacher count: ", error);
      });
  }, []);

  const handlePDFGeneration = () => {
    setGeneratingPDF(true); // Set state to true when PDF generation starts
    setTimeout(() => {
      toPDF();
      setGeneratingPDF(false); // Set state to true when PDF generation starts
    }, 100);
    // toPDF(); // Generate the PDF
  };

  const downloadButton = (
    <button
      onClick={handlePDFGeneration}
      className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <svg
        class="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span className="">Download</span>
    </button>
  );

  function formattedDate(val) {
    const inputDate = new Date(val);
    const day = String(inputDate.getUTCDate()).padStart(2, "0");
    const month = String(inputDate.getUTCMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based (January is 0)
    const year = String(inputDate.getUTCFullYear()).slice(2);

    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate); // Output: "02/01/24"
    return formattedDate;
  }

  // console.log("detail",teacherDetails)
  return (
    <div className=" w-full  flex items-center justify-center pt-10">
      {/* <div className=" bg-white w-[50px] h-[50px] rounded-full  shadow-2xl">
              <Link to="/teacher" className=" text-blue-500 text-3xl">
                <FcLeft />
              </Link>
            </div> */}
      <div
        ref={targetRef}
        className="bg-white  gap-2 sm:p-4 md:p-4 lg:p-4 p-2 pt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 shadow-[rgba(0,0,_0,_0.25)_0px_25px_50px-12px]   overflow-y-auto"
      >
        <div className="w-[330px]  rounded-md border-[#01a9ac] bg-cyan-700  p-5   hover:shadow-[rgba(6,24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <div className=" flex justify-center mt-4">
            {teacherDetails.image && teacherDetails.image.url ? (
              <img
                className="w-[150px] h-[150px] rounded-full"
                src={teacherDetails.image.url}
                alt="Image"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
          <div className="p-8">
            <h2 className="text-center text-lg text-white font-bold  ">
              {" "}
              {teacherDetails.fullName}
            </h2>
            {/* <h2 className="text-center text-lg text-white font-bold">
                {" Status: "}
                {teacherDetails.status}
              </h2> */}
            <h2 className="text-center text-white font-bold">
              {"  "}
              +91{teacherDetails.contact}
            </h2>
            <hr />
            <div className="h-14 ">
              <p className=" p-2 text-white text-center font-bold">{`Address : ${teacherDetails.address}`}</p>
            </div>
            <div className="flex justify-center mt-3 ">
              {!generatingPDF && downloadButton}
            </div>
          </div>
        </div>
        <div className="w-[330px] border-1 rounded-md border-[#01a9ac] p-5   hover:shadow-[rgba(6,24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
          <h1 className="text-center mb-3 font-extrabold">
            {" "}
            {teacherDetails.fullName}'s Details
          </h1>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] ">Employee ID:</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {teacherDetails.employeeId}
            </span>
          </div>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] ">Email :</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {teacherDetails.email}
            </span>
          </div>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] ">Gender :</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {teacherDetails.gender}
            </span>
          </div>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] ">Qualification :</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {teacherDetails.qualification}
            </span>
          </div>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] "> Salary :</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {teacherDetails.salary} / month
            </span>
          </div>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] ">Subject :</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {teacherDetails.subject}
            </span>
          </div>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] ">ClassTeacher :</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {teacherDetails.classTeacher}
            </span>
          </div>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] ">Section :</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {teacherDetails.section}
            </span>
          </div>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] ">DOB :</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {formattedDate(teacherDetails.dateOfBirth)}
            </span>
          </div>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] ">Joining Date :</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {formattedDate(teacherDetails.joiningDate)}
            </span>
          </div>
          <div className="flex gap-2 border-b-1  border-green-300 p-1 ">
            <h2 className="w-[100px]  text-[14px] ">Experience :</h2>
            <span className="w-[200px]font-semibold text-[#01a9ac]  text-[12px]">
              {" "}
              {teacherDetails.experience} yrs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeacher;

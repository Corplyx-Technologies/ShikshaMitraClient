import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
// import { DashboardHome, Employees } from "./pages";
import "../App.css";
import { useStateContext } from "../contexts/ContextProvider";

// import ViewTeacher from "./components/Teacher/ViewTeacher";
// import FeeStatus from "./components/Parents/FeeStatus";
// import Allstudent from "./components/Student/Allstudent";
// // import AllTeachers from "./components/Teacher/AllTeachers";
// import Promotion from "./components/Student/Promotion";
// import Create_Payment from "./components/Teacher/Payment";
// import Allparents from "./components/Parents/Allparents";
// import Income from "./components/Account/Income";
// import Expenditure from "./components/Account/Expenditure";
// import Stocks from "./components/Inventory/Stocks";
// import Sales from "./components/Inventory/Sales";
// import AllBooks from "./components/Library/AllBooks";
// // import IssuedBooks from "./components/Library/IssuedBooks";
// import RegistrationForm from "./components/Admission/RegistrationForm";
// import AdmissionStatus from "./components/Admission/AdmissionStatus";
// import AllSubjects from "./components/Subjects/AllSubjects";
// import AllClasses from "./components/Subjects/AllClasses";
// import Primary from "./components/Classes/Primary";
// import Secondary from "./components/Classes/Secondary";

// import Fee_Status from "./components/Parents/FeeStatus";
// import EditTeacher from "./components/Teacher/EditTeacher";
// import EditStudent from "./components/Student/EditStudent";
// import ViewStudent from "./components/Student/ViewStudent";
// import ViewPrimary from "./components/Classes/Primary/ViewPrimary";
// import EditPrimary from "./components/Classes/Primary/EditPrimary";

// // import EditSecondary from "./components/Classes/Secondary/EditSecondary";
// // import ViewSecondary from "./components/Fees/ClassWise/ViewSecondary";
// import Staff from "./components/Employees/Staff";
// import Wages from "./components/Employees/Wages";
// import EditStaff from "./components/Employees/Staff/EditStaff";
// import ViewStaff from "./components/Employees/Staff/ViewStaff";
// import Edit_Stocks from "./components/Inventory/Edit_Stocks";
// import Edit_Classwise_Fees from "./components/Fees/ClassWise/EditClassWise";
// import EditAdditional from "./components/Fees/Additional/EditAdditional";
// import ViewBooks from "./components/Library/ViewBooks";
// import EditBook from "./components/Library/EditBook";
// import Create_ClassWise from "./components/Fees/ClassWise/Create_ClassWise";
// import Create_Additional from "./components/Fees/Additional/Create_Additional";
// import AllTeachers from "./components/Teacher/AllTeachers";

const  AdminDashboard = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    isLoggedIn,
    setisLoggedIn
  } = useStateContext();

  const [singleLog,setSingleLog] = useState(sessionStorage.getItem('userRole'));

  if( singleLog ){
    setisLoggedIn(isLoggedIn)
  }
  // console.log(isLoggedIn)

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      {/* (isLoggedIn  ) && */}
      
      { (( isLoggedIn == 'admin' || (singleLog=='admin'))  ) && (
        <>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: "50%" }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
            style={{background:currentColor}}
              className={
                activeMenu
                  ? (`dark:bg-main-dark-bg  min-h-screen md:ml-72 w-full overflow-x-hidden  `)
                  : (`dark:bg-main-dark-bg  w-full min-h-screen flex-2 overflow-x-hidden `)
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
                {themeSettings && <ThemeSettings />}
              </div>
              <Outlet/>
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;

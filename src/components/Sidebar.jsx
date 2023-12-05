import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiExplosiveMaterials } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import {Studentlinks} from '../data/dummy'
import {Teacherslinks} from '../data/dummy'
import {Parentslinks} from '../data/dummy'
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {

  
  const { currentColor, activeMenu, setActiveMenu, screenSize, isLoggedIn } = useStateContext();
  const [selectedId, setSelectedId] = useState(0);

  

  let mainLink = null;
  if (isLoggedIn === 'student') {
    mainLink = Studentlinks;
  } else if (isLoggedIn === 'teacher') {
    mainLink = Teacherslinks;
  }

  const handleCloseSideBar = (id) => {
    if (selectedId === id) {
      setSelectedId(0);
    } else {
      setSelectedId(id);
    }

    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const newhandleCloseSideBar = (id) => {
    if (selectedId === id) {
      setSelectedId(0);
    } else {
      setSelectedId(id);
    }
  }

  const activeLink ="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 duration-1000";
  // const activeLink ="flex items-center gap-5 pl-3 py-2 rounded-lg  text-white  text-sm m-1 duration-1500";
  const normalLink ="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 duration-700";
  // const normalLink ="flex items-center gap-5 pl-3 p-2  rounded-lg text-sm text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 duration-700";


    const navbarLink = "flex items-center pl-3  py-2 rounded-lg  text-white  text-sm m-1 cursor-pointer ";



    {
      if (isLoggedIn === 'student') {
        return (
          <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-blend-overlay">
            {activeMenu && (
              <>
                <div className="flex justify-between items-center ">
                  <Link
                    to="/student"
                    onClick={handleCloseSideBar}
                    className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                  >
                    <div className="flex items-center space-x-2">
                      <GiExplosiveMaterials className="text-red-500 text-2xl" />
                      <span className="text-blue-900 text-xl">Student</span>
                    </div>
                  </Link>
                  <TooltipComponent content="Menu" position="BottomCenter">
                    <button
                      type="button"
                      onClick={() => setActiveMenu(!activeMenu)}
                      style={{ color: currentColor }}
                      className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                    >
                      <MdOutlineCancel />
                    </button>
                  </TooltipComponent>
                </div>
                <div className="mt-10 ">
                  {Studentlinks.map((item) => (
                    <div key={item.title}>
                      <Link to="/student" className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                        {item.title}
                      </Link>
                      {item.links.map((link) => (
                        <NavLink
                        to={`/${link.route}`}
                          key={link.name}
                          onClick={handleCloseSideBar}
                          style={({ isActive }) => ({
                            backgroundColor: isActive ? currentColor : '',
                          })}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          {link.icon}
                          <span className="capitalize cursor-pointer ">
                            {link.name}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      }
      else if (isLoggedIn === 'teacher') {
        return (
          <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-blend-overlay">
            {activeMenu && (
              <>
                <div className="flex justify-between items-center ">
                  <Link
                    to="/teacher"
                    onClick={handleCloseSideBar}
                    className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                  >
                    <div className="flex items-center space-x-2">
                      <GiExplosiveMaterials className="text-red-500 text-2xl" />
                      <span className="text-blue-900 text-xl">Teacher</span>
                    </div>
                  </Link>
                  <TooltipComponent content="Menu" position="BottomCenter">
                    <button
                      type="button"
                      onClick={() => setActiveMenu(!activeMenu)}
                      style={{ color: currentColor }}
                      className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                    >
                      <MdOutlineCancel />
                    </button>
                  </TooltipComponent>
                </div>
                <div className="mt-10 ">
                  {Teacherslinks.map((item) => (
                    <div key={item.title}>
                      <Link to="/teacher" className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                        {item.title}
                      </Link>
                      {item.links.map((link) => (
                        <NavLink
                          to={`/${link.route}`}
                          key={link.name}
                          onClick={handleCloseSideBar}
                          style={({ isActive }) => ({
                            backgroundColor: isActive ? currentColor : '',
                          })}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          {link.icon}
                          <span className="capitalize cursor-pointer ">
                            {link.name}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      }
      else if (isLoggedIn === 'parent') {
        return (
          <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-blend-overlay">
            {activeMenu && (
              <>
                <div className="flex justify-between items-center ">
                  <Link
                    to="/parent"
                    onClick={handleCloseSideBar}
                    className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                  >
                    <div className="flex items-center space-x-2">
                      <GiExplosiveMaterials className="text-red-500 text-2xl" />
                      <span className="text-blue-900 text-xl">Parent</span>
                    </div>
                  </Link>
                  <TooltipComponent content="Menu" position="BottomCenter">
                    <button
                      type="button"
                      onClick={() => setActiveMenu(!activeMenu)}
                      style={{ color: currentColor }}
                      className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                    >
                      <MdOutlineCancel />
                    </button>
                  </TooltipComponent>
                </div>
                <div className="mt-10 ">
                  {Parentslinks.map((item) => (
                    <div key={item.title}>
                      <Link to="/parent" className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                        {item.title}
                      </Link>
                      {item.links.map((link) => (
                        <NavLink
                        to={`/${link.route}`}
                          key={link.name}
                          onClick={handleCloseSideBar}
                          style={({ isActive }) => ({
                            backgroundColor: isActive ? currentColor : '',
                          })}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          {link.icon}
                          <span className="capitalize cursor-pointer ">
                            {link.name}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      }
      
      else {
        return (
          // <div className="ml-4 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-blend-overlay ">
          <div className="ml-4 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10  ">
            {activeMenu && (
              <>
                <div className="flex justify-between items-center ">
                  <Link
                    to="/admin"
                    onClick={handleCloseSideBar}
                    className="items-center gap-3 ml-4 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                  >
                    <div className="flex items-center space-x-2">
                      <GiExplosiveMaterials className="text-red-500 text-3xl" />
                      <span className="text-cyan-700 text-md">ShikshaMitra</span>
                    </div>
                  </Link>
                  <TooltipComponent content="Menu" position="BottomCenter">
                    <button
                      type="button"
                      onClick={() => setActiveMenu(!activeMenu)}
                      style={{ color: currentColor }}
                      className="text-xl rounded-full p-3 hover-bg-light-gray mt-4 block md:hidden"
                    >
                      <MdOutlineCancel />
                    </button>
                  </TooltipComponent>
                </div>
                <div className="mt-5 ">
                  {links.map((item) => (
                    <div key={item.title}>
                      <Link to="/admin" className="text-gray-400 dark:text-gray-400 m-3 uppercase">
                        {item.title}
                      </Link>
                      {item.links.map((link) => (
                        <>
                          <div>
                            <div
                              key={link.name}
                              onClick={() => newhandleCloseSideBar(link?.id)}
                              style={{
                                backgroundColor:
                                  selectedId === link?.id ? currentColor : '',
                              }}
                              className={
                                selectedId === link?.id ? activeLink : normalLink
                              }
                            >
                              {link.icon}
                              <span className="uppercase cursor-pointer ">
                                {link.name}
                              </span>
                            </div>
                          </div>
                          {selectedId === link?.id && (
                            <div>
                              <div
                                style={{
                                  backgroundColor:
                                    selectedId === link?.id ? currentColor : '',
                                }}
                                className={
                                  selectedId === link?.id ? navbarLink : normalLink
                                }
                              >
                                <NavLink
                                  className="w-full "
                                  onClick={handleCloseSideBar}
                                  to={`/${link.route?.[0]}`}
                                >
                                  {link.items?.[0]}
                                </NavLink>
                              </div>
                              <div
                                style={{
                                  backgroundColor:
                                    selectedId === link?.id ? currentColor : '',
                                }}
                                className={
                                  selectedId === link?.id ? navbarLink : normalLink
                                }
                              >
                                <NavLink
                                  className="w-full "
                                  onClick={handleCloseSideBar}
                                  to={`/${link.route?.[1]}`}
                                >
                                  {link.items?.[1]}
                                </NavLink>
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      }
    }
    
};

export default Sidebar;

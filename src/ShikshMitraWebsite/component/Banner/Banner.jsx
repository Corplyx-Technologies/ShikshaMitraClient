import React, { useState } from "react";
import Modal from "react-modal";
import gif from "../../assets/sms.gif";
import teachimg from "../../assets/images/teachimg.jpeg";
import parentimg from "../../assets/images/parentimg.jpg";
import studentAnimation from "../../assets/images/studentAnimation.gif";
import adminimg from "../../assets/images/adminimg.jpg";
import { Link } from "react-router-dom";

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
  },
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(500px)", // Adjust the blur intensity as needed
    zIndex: 1001, // Make sure it has a higher value than modalStyle zIndex
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "80%",
    margin: "0 auto",
    padding: 0,
    border: "none",
    background: "none",
    overflow: "visible",
  },
};

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Data for the cards
  const cardsData = [
    {
      title: "Admin",
      imageSrc: adminimg,
      path: "/login",
    },

    {
      title: "Parent",
      imageSrc: parentimg,
      path: "/login",
    },
    {
      title: "Teacher",
      imageSrc: teachimg,
      path: "/login",
    },
    {
      title: "Student",
      imageSrc: studentAnimation,
      path: "/login",
    },
  ];
  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="relative ${modalIsOpen ? 'blur-bg' : ''}">
        <img src={gif} alt="" className="object-cover w-full h-screen pt-0" />
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="grid-cols-1 mr-5">
            <h1 className="text-cyan-700 text-5xl font-bold pl-10">
              Empowering Education
            </h1>
            <h1 className="text-[32px] font-bold text-center text-black sm:pl-5">
              Simplifying Administration.
            </h1>
            <div className="flex pl-[40px]">
              {/* <button
                onClick={openModal}
                className="relative top-5 left-16 inline-flex items-center justify-center p-0.5 mb-2 mr-2 
            overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
            bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500
             hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200
              dark:focus:ring-cyan-800"
              >
                <span
                  className="relative px-5 py-2.5 transition-all ease-in 
              duration-75 bg-[cyan-500] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sm font-bold text-white"
                >
                  Get Started
                </span>
              </button> */}
              <Link to="/demo">
              <button
                onClick={openModal}
                className="relative top-5 left-16 inline-flex items-center justify-center p-0.5 mb-2 mr-2 
            overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
            bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500
             hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200
              dark:focus:ring-cyan-800"
              >
                <span
                  className="relative px-5 py-2.5 transition-all ease-in 
              duration-75 bg-[cyan-500] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sm font-bold text-white"
                >
                  Get Started
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyle}
        overlayClassName="overlay"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 py-2">
          {cardsData.map((item, index) => (
            <Link to={item.path} key={index}>
              <div className="text-center shadow-lg rounded h-full">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="hover:scale-125 duration-1000 h-full"
                  />
                </div>
                <h3 className="py-2 text-xl font-bold ">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="py-2 px-2 mt-3 border-2 bg-sky-400  shadow-lg overflow-hidden text-sm font-medium text-white rounded-lg group 
            bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500
            hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200
            dark:focus:ring-cyan-800"
            onClick={closeModal}
          >
            Return To Home
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";
import '../../Dynamic/Form/FormStyle.css'
import InputForm from "../../Dynamic/Form/InputForm";
import DynamicDataTable from "./DataTable";
import { useStateContext } from "../../contexts/ContextProvider";
import Cookies from 'js-cookie';
const authToken = Cookies.get('token');

const modalStyle = {
  content: {
    width: "80%",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
  },
};

const toastifyTiming = {
  autoClose: 1000
};

const initialState = {
  fullName: "",
  employeeId: "",
  email: "",
  password: "",
  dateOfBirth: "",
  qualification: "",
  salary: "",
  subject: "",
  gender: "",
  joiningDate: "",
  address: "",
  contact: "",
  experience: "",
  section: "",
  classTeacher: "",
  image: null,
};

function CreateTeacher() {
  const { currentColor} = useStateContext();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [submittedData, setSubmittedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://tiny-tan-wombat-shoe.cyclic.app/api/v1/adminRoute/getTeachers', {
        withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      });
      setSubmittedData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });
    }
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "image") {
        formDataToSend.append(key, String(value));
      }
    });
    formDataToSend.append("image", formData.image);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://tiny-tan-wombat-shoe.cyclic.app/api/v1/adminRoute/createTeacher",
        formDataToSend,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFormData(initialState);
      setLoading(false);
      toast.success("Form submitted successfully!");
      closeModal();
      fetchData(); // Fetch updated data after successful submission
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);

      if (error.response && error.response.status === 400) {
        toast.error("Email already exists.", toastifyTiming);
        return;
      }
      toast.error("An error occurred while submitting the form.", toastifyTiming);
    }
  };

  const handleDelete = (email) => {
    axios.put(`https://tiny-tan-wombat-shoe.cyclic.app/api/v1/adminRoute/deactivateTeacher`, { email }, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then(() => {
        const updatedData = submittedData.filter((item) => item.email !== email);
        setSubmittedData(updatedData);
        toast.success("Teacher data deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting teacher data:", error);
        toast.error("An error occurred while deleting the teacher data.");
      });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData(initialState);
  };

  const formFields = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      value: formData.fullName,
      required: true,
    },
    {
      label: "Employee ID",
      name: "employeeId",
      type: "text",
      value: formData.employeeId,
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      value: formData.email,
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: formData.password,
      required: true,
    },
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      type: "date",
      value: formData.dateOfBirth,
      required: true,
    },
    {
      label: "Qualification",
      name: "qualification",
      type: "text",
      value: formData.qualification,
      required: true,
    },
    {
      label: "Salary",
      name: "salary",
      type: "number",
      value: formData.salary,
      required: true,
    },
    {
      label: "Subject",
      name: "subject",
      type: "text",
      value: formData.subject,
      required: true,
    },
    {
      label: "Joining Date",
      name: "joiningDate",
      type: "date",
      value: formData.joiningDate,
      required: true,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      value: formData.address,
      required: true,
    },
    {
      label: "Contact",
      name: "contact",
      type: "tel",
      value: formData.contact,
      required: true,
    },
    {
      label: "Experience",
      name: "experience",
      type: "select",
      value: formData.experience,
      required: true,
      selectOptions: ["Experience", "0", "1", "2", "3", "4", "5"],
    },
    {
      label: "Gender",
      name: "gender",
      type: "select",
      value: formData.gender,
      required: true,
      selectOptions: ["Gender", "Male", "Female", "Other"],
    },
    {
      label: "Section",
      name: "section",
      type: "select",
      value: formData.section,
      required: true,
      selectOptions: ["Section", "A", "B", "C"],
    },
    {
      label: "Class",
      name: "classTeacher",
      type: "select",
      value: formData.classTeacher,
      required: true,
      selectOptions: ["Class", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    {
      label: "Profile Pic",
      name: "image",
      type: "file",
      accept: "image/*",
      required: true,
    },
  ];
  
  return (
    <div className="mt-12 mx-auto p-3">
      <h1 className="text-2xl font-bold mb-4 uppercase text-center text-cyan-700">All Teacher </h1>
      <button
        onClick={openModal}
        style={{ backgroundColor: currentColor }}
        className="  text-white py-2 px-4 rounded "
      >
        Add Teacher
      </button>
      {isModalOpen && <div className="modal-blur"></div>}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Create Form"
        style={modalStyle}
        overlayClassName="overlay"
      >
        <h1 style={{ fontSize: 30, fontWeight: 800, textAlign: "center" }}>
          Create Teacher
        </h1>
        <InputForm
          fields={formFields}
          handleChange={handleFieldChange}
          handleImageChange={handleImageChange}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? (
              <span>Loading...</span>
            ) : (
              <span>Submit</span>
            )}
          </button>
          <button onClick={closeModal} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </Modal>
      <DynamicDataTable data={submittedData} handleDelete={handleDelete} />
    </div>
  );
}

export default CreateTeacher;

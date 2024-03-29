import "./About.css";

// import Shikha from '../../../assets/image/Shikha.png';
import gaurav from '../../../assets/images/Gaurav.jpeg';
import chhaya from '../../../assets/images/Chhaya.jpeg';
import aman from '../../../assets/images/amanimg.jpeg';
import annad from '../../../assets/images/annadimg.jpg';
import praveen from '../../../assets/images/praveenimg.jpeg';
import quoteIcon from '../../../assets/images/quoteIcon.png';
import ajay from '../../../assets/images/ajayimage.jpeg'
import badal from '../../../assets/images/Badal.jpeg'
import logo from '../../../assets/SHIKSHAMITRA_logo.png'




const About = () => {

  return (
      <div className= "about-container md:mt-10 mt-5">
      <div className="mt-20 text-center">
        <h1 className="inline-block text-xl sm:text-2xl md:text-3xl font-medium text-center">About us<br></br>
         <span className="text-center text-l sm:text-sm">eShikshaMitra : E-Learning management system for academic institutions.</span> 
        </h1>
      </div>
      <div className="  w-full grid md:grid-cols-2 grid-cols-1 py-10 mt-5">
<div className=" flex justify-center items-center">
{/* <div className="w-[100px] h-[100px] ">
<img src={Shikha} alt="" className="w-full h-full object-contain" />
</div> */}
      <div className="w-[250px]">
        <img src={logo} alt="" />
      </div>
</div>
<div className=" flex justify-center items-center">
<p className="text-sm">
          eShikshaMitra is a comprehensive school management system designed to streamline educational processes and enhance communication between administrators, teachers, students, and parents. Our platform offers
          a range of features and dashboards that empower educational institutions to manage
          their operations efficiently.
        </p>
</div>
      </div>
      {/* <div class="profile-image m-0">
        <img src={Shikha} alt="" />
      </div> */}

      <div className="description">
        {/* <p className="text-sm">
          eShikshaMitra is a comprehensive school management system designed to streamline educational processes and enhance communication between administrators, teachers, students, and parents. Our platform offers
          a range of features and dashboards that empower educational institutions to manage
          their operations efficiently.
        </p> */}
        <p><h1 className="text-3xl text-center  text-green-500 my-2">Key Features </h1></p>
        <p className="text-sm">
          <h1 className="text-xl mt-5">Admin Dashboard: </h1>
          The Admin dashboard provides school administrators with a central hub for
          managing and overseeing various aspects of the institution. From user management to
          data analysis, administrators can access the tools they need to make informed decisions.



        </p>
        <p className="text-sm">
          <h1 className="text-xl mt-5">Teacher Dashboard:</h1> Teachers can utilize the dedicated dashboard to streamline classroom management,
          track student performance, and communicate with both students and parents. Our intuitive interface
          ensures that educators have the necessary tools to excel in their roles.
        </p>
        <p className="text-sm">
          <h1 className="text-xl mt-5">Student Dashboard: </h1>The Student dashboard is designed to empower students by
          providing them with easy access to essential information. From timetables and
          assignments to grades and communication tools, students can stay informed and
          engaged with their education.
        </p>
        <p className="text-sm">
          <h1 className="text-xl mt-5">Parent Dashboard:</h1> We understand the importance of involving parents in the educational journey.
          The Parent dashboard offers parents insights into their child's progress, attendance, and
          communication with teachers. Keeping parents informed and engaged is a cornerstone of our system.
        </p>
        <p className="text-sm">
          <h1 className="text-xl mt-5">Our Mission:</h1>

          At eShikshaMitra, our mission is to simplify school management and create a more transparent and collaborative educational environment. We believe that effective communication and efficient processes are essential for the success of both educational institutions and
          students. By offering a user-friendly platform that caters to the needs of all stakeholders, we aim to transform the way schools operate and support student development.</p>
      </div>

      {/* <div class="projects-container">
        {/* Rest of your code */}
      {/* </div> */}

      <h2 className="our-team-heading">Our Team</h2>



      <div className="w-full px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 m-auto" >

          <div className="text-center shadow-lg rounded">
            <div className="overflow-hidden relative w-full h-full">
              <img src={gaurav} alt="Team Member 1" className="h-full hover:scale-125 duration-1000" />
              <div className="designation absolute bottom-6 bg-white p-3 rounded-r-2xl shadow-md text-sm">
                <strong>Gaurav</strong> (Project/Team Leader & Fullstack Developer)
              </div>
            </div>
          </div>
          <div className="text-center shadow-lg rounded">
            <div className="overflow-hidden relative w-full h-full">
              <img src={aman} alt="Team Member 1" className="h-full hover:scale-125 duration-1000" />
              <div className="designation absolute bottom-6 bg-white p-3 rounded-r-2xl shadow-md text-sm">
                <strong>Aman Sharma</strong> (Fullstack Developer)
              </div>
            </div>
          </div>
          <div className="text-center shadow-lg rounded">
            <div className="overflow-hidden relative w-full h-full">
              <img src={chhaya} alt="Team Member 1" className="h-full hover:scale-125 duration-1000" />
              <div className="designation absolute bottom-6 bg-white p-3 rounded-r-2xl shadow-md text-sm">
                <strong>Chhaya Sengar</strong> (Fullstack Developer)
              </div>
            </div>
          </div>


          <div className="text-center shadow-lg rounded ">
            <div className="overflow-hidden relative  w-full h-full">
              <img src={annad} alt="Team Member 1" className=" h-full hover:scale-125 duration-1000" />
              <div className="designation absolute bottom-6 bg-white p-3 rounded-r-2xl shadow-md text-sm">
                <strong>Anand Jaiswal</strong> (Fullstack Developer)
              </div>
            </div>

          </div>
          <div className="text-center shadow-lg rounded">
            <div className="overflow-hidden relative  w-full h-full">
              <img src={ajay} alt="Team Member 1" className=" h-full hover:scale-125 duration-1000" />
              <div className="designation absolute bottom-6 bg-white p-3 rounded-r-2xl shadow-md text-sm">
                <strong>Ajay Raj</strong> (Fullstack Developer)
              </div>
            </div>

          </div>



          <div className="text-center shadow-lg rounded">
            <div className="overflow-hidden relative  w-full h-full">
              <img src={praveen} alt="Team Member 1" className=" h-full hover:scale-125 duration-1000" />
              <div className="designation absolute bottom-6 bg-white p-3 rounded-r-2xl shadow-md text-sm">
                <strong>Praveen Pal</strong> (Fullstack Developer)
              </div>
            </div>

          </div>
          <div className="text-center shadow-lg rounded">
            <div className="overflow-hidden relative  w-full h-full">
              <img src={badal} alt="Team Member 1" className=" h-full hover:scale-125 duration-1000" />
              <div className="designation absolute bottom-6 bg-white p-3 rounded-r-2xl shadow-md text-sm">
                <strong>Badal Kumar</strong> (Fullstack Developer)
              </div>
            </div>

          </div>
        </div></div>


      <div className="our-mission m-8">
        <img className="quote-icon" src={quoteIcon} alt="" />
        <p>Our mission is to provide the best services to our clients.</p>
      </div>
    </div>
  );
}

export default About;


// import "./About.css";
// import Shikha from '../../../assets/image/Shikha.png';
// import amanimg from '../../../assets/images/amanimg.jpeg';
// import aman from '../../../assets/images/aman.jpg';
// import annadimg from '../../../assets/images/annadimg.jpg';
// import praveenimg from '../../../assets/images/praveenimg.jpeg';
// import quoteIcon from '../../../assets/images/quoteIcon.png';
// import ajayimage from '../../../assets/images/ajayimage.jpeg'



// // import teachimg from "../../../assets/images/teachimg.jpeg"
// // import parentimg from "../../../assets/images/parentimg.jpg"
// // import studentAnimation from "../../../assets/images/studentAnimation.gif"
// // import adminimg from "../../../assets/images/adminimg.jpg"

// const About = () => {
//   // const cardsData = [
//   //   {
//   //     title: "Aman",
//   //     imageSrc: amanimg,
//   //   },

//   //   {
//   //     title: "Annad",
//   //     imageSrc: annadimg ,
//   //   },
//   //   {
//   //     title: "Ajay",
//   //     imageSrc: ajayimage,
//   //   },
//   //   {
//   //     title: "Praveen",
//   //     imageSrc: praveenimg,
//   //   },
//   // ];
//   return (
//     <div class="about-container">
//       <div class="profile-image">
//         <img src={Shikha} alt="" /> {/* Updated image path */}
//       </div>

//       <div class="description">
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque a
//           quam nulla ipsa natus quisquam!
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex
//           odit tenetur alias expedita impedit in veritatis mollitia ipsam quae
//           et quia, deleniti facere praesentium sunt assumenda earum saepe
//           aperiam ullam sit. Tempora animi maxime a velit soluta laboriosam quo!
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempora!
//         </p>
//       </div>

//       <div class="projects-container">
//         {/* Rest of your code */}
//       </div>

//       <h2 class="our-team-heading">Our Team</h2>

//       {/* <div class="our-team">
//         <div class="team-member">
//           <img src={amanimg} alt="" />
//           <div class="designation">
//             <strong>Aman</strong> (Project Manager)
//           </div>
//         </div>

//         <div class="team-member">
//           <img src={annadimg} alt="" />
//           <div class="designation">
//             <strong>Anand</strong> (Lead Designer)
//           </div>
//         </div>

//         <div class="team-member">
//           <img src={ajayimage} alt="" className="w-[100rem]" />
//           <div class="designation">
//             <strong>Ajay</strong> (Lead Programmer)
//           </div>
//         </div>

//         <div class="team-member">
//           <img src={praveenimg} alt="" />
//           <div class="designation">
//             <strong>Praveen</strong> (Backend Developer)
//           </div>
//         </div>
//       </div> */}

//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1" >
//         {cardsData.map((card, index) => (
//           <div key={index} >
//             <div className="text-center shadow-lg rounded">
//               <div className="overflow-hidden">
//                 <img src={card.imageSrc} alt={card.title} className="hover:scale-125 duration-1000" />
//               </div>
//               <h3 className="py-2 text-xl">{card.title}</h3>
//             </div>

//           </div>

//         ))}

//   </div> */}

//       {/* CARDS ---- OUR TEAM */}
//       {/* <div className="grid grid-cols-1  lg:grid-cols-4 gap-4  sm:grid-cols-4 "> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:px-20" >
//         <div className="text-center shadow-lg rounded">
//           <div className="overflow-hidden relative w-full h-full">
//             <img src={amanimg} alt="Team Member 1" className="h-full hover:scale-125 duration-1000" />
//             <div class="designation absolute bottom-6 bg-white p-3 rounded-r-2xl shadow-md text-sm">
//               <strong>Aman</strong> (Project Manager)
//             </div>
//           </div>
//         </div>


//         <div className="text-center shadow-lg rounded ">
//           <div className="overflow-hidden relative  w-full h-full">
//             <img src={annadimg} alt="Team Member 1" className=" h-full hover:scale-125 duration-1000" />
//             <div class="designation absolute bottom-6 bg-white p-3 rounded-r-2xl shadow-md text-sm">
//               <strong>Anand</strong> (Lead Designer)
//             </div>
//           </div>

//         </div>
//         <div className="text-center shadow-lg rounded">
//           <div className="overflow-hidden relative  w-full h-full">
//             <img src={ajayimage} alt="Team Member 1" className=" h-full hover:scale-125 duration-1000" />
//             <div class="designation absolute bottom-6 bg-white p-3 rounded-r-2xl shadow-md text-sm">
//               <strong>Ajay</strong> (Lead Programmer)
//             </div>
//           </div>

//         </div>
//         <div className="text-center shadow-lg rounded">
//           <div className="overflow-hidden relative  w-full h-full">
//             <img src={praveenimg} alt="Team Member 1" className=" h-full hover:scale-125 duration-1000" />
//             <div class="designation absolute bottom-6 bg-white p-1 rounded-r-2xl shadow-md text-sm">
//               <strong>Praveen</strong> (Lead Programmer)
//             </div>
//           </div>

//         </div>
//       </div>


//       <div class="our-mission">
//         <img class="quote-icon" src={quoteIcon} alt="" /> {/* You may want to update this path too */}
//         <p>Our mission is to provide the best services to our clients.</p>
//       </div>
//     </div>
//   );
// }

// export default About;

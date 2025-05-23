import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

export const HERO_CONTENT = `I am a passionate Computer Science and Engineering graduate with a strong academic background and a zest for innovation. Join me as I share my projects and experiences, showcasing my dedication to creating impactful solutions and pushing the boundaries of what's possible in the tech world. `;

export const ABOUT_TEXT = `Hello! I'm a passionate Computer Science and Engineering graduate from SRM University AP in Guntur, Andhra Pradesh. My journey into programming started in class 10 when I learned C++. This sparked my curiosity about how software works and led me to pursue engineering.

I have a strong foundation in programming languages C/C++, Java, JavaScript, and PHP. I enjoy web development using frameworks like React. I also have experience with frontend development using HTML/CSS. Additionally, I work with databases like SQL and Firebase.

I enjoy solving coding challenges on platforms like LeetCode and HackerRank, where I have solved over 250 problems. I'm always eager to learn and explore new areas in software development.

I also participate in extracurricular activities and hold certifications like AWS Cloud Practitioner Essentials.`;

export const EDUCATION = [
  {
    degree: "Bachelors of Technology in Computer Science and Engineering",
    institution: "SRM University AP",
    duration: "OCT 2022 - MAY 2026",
    description:
      "Learning with a  understanding of core computer science fundamentals. Explored a wide range of topics including coding, app development, web development.. Lived away from home in a hostel, where I made lasting friendships and created wonderful memories",
  },
  {
    degree: "Higher Secondary Education (Science Stream)",
    institution: "KIST College, NEB",
    duration: "July 2019 - JUNE 2021",
    description:
      "Studied Physics, Chemistry, Mathematics, and Computer Science with a focus on C++. Developed a growing interest in programming, enjoyed memorable trips with friends, and cherished the final moments of school life.",
  },
  {
    degree: "Primary School (10th)",
    institution: "Kamal Netra Chhuna Muna Secondary School, NEB",
    duration: "April 2008 - May 2019",
    description:
      "Gained a solid foundation across all subjects while growing from a curious child into a motivated young adult. Embraced a wide range of activities, including quizzes, Mountain Cycling, and other extracurriculars, which enriched my learning experience and personal development.",
  },
]; 

export const PROJECTS = [
  {
    title: "EV Charging Station App",
    image: project1,
    description:
      "Designed and developed a comprehensive EV Charging Management System to streamline the booking process and enhance user experience. Integrated real-time slot booking and route optimization for efficient navigation to charging stations. Implemented secure JWT authentication to ensure user data privacy and security. Adopted Agile methodology to achieve a scalable, secure, and user-friendly application, catering to the growing demand for electric vehicle infrastructure.",
    technologies: [],
    github : "https://github.com/dpakdas10/EV-Charging_Station_Finding_Web_App",
    live : "https://ev-charging-station-finding-web-app.vercel.app" ,
  },
  {
    title:"Pharmacy Management System",
    image: project2,
    description:
    "Developed a Pharmacy Management System for managing patient records, drug availability, and billing. Built a secure admin login and automated invoice generation system. Implemented efficient medicine management and inventory tracking.",
    technologies:[],
    github:"https://github.com/dpakdas10/Pharmacy_Management_system",
    live:"#"
  },
  
  {
    title: "Brain Tumor Detection",
    image: project3,
    description:
      "Developed a CNN-Transformer model that achieved 99.46% accuracy on a medical dataset. Trained on over 10,000 MRI scans using TensorFlow/Keras with data augmentation techniques. Built a prediction pipeline with confidence analysis to enhance decision reliability.",
    technologies: [],
    github : "https://github.com/dpakdas10/Brain-Tumor-Detection-Using-CNN-Transformer-Block",
    live : "#" ,
  }
];

export const CONTACT = {
  address: "Guntur, Andhra Pradesh, India",
  phoneNo: "+91 7321093703",
  email: "deepakdastatwa@gmail.com",
};
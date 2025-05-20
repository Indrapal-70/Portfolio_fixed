export const myProjects = [
  {
    id: 1,
    title: "Autonomous Quadcopter",
    image: "/assets/drone.png",
    description:
      "Autonomous drone system designed for indoor navigation without GPS, developed for e-Yantra challenge by IIT Bombay.",
    subDescription: [
      "Built computer vision software for obstacle detection using onboard and overhead cameras.",
      "Designed feedback control loops for localization and path planning in GPS-denied environments.",
      "Implemented A* algorithm for efficient route planning in warehouse scenarios.",
      "Selected in top 50 out of 850+ teams and qualified for the hardware round with a drone kit.",
    ],
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.webp" },
      { id: 2, name: "Computer Vision", path: "/assets/logos/opencv.webp" }
    ],
  },
  {
  id: 2,
  title: "Bangalore Traffic Hackathon",
  image: "/assets/logos/banglore.png",
  description:
    "Traffic prediction system developed during a hackathon using machine learning and real-time vehicle counts.",
  subDescription: [
    "Used OpenCV and TensorFlow to process vehicle footage for accurate counts.",
    "Applied predictive modeling to forecast traffic density in urban areas.",
    "Visualized traffic trends to identify and highlight high congestion zones.",
  ],
  tags: [
    { id: 1, name: "OpenCV", path: "/assets/logos/opencv.webp" },
    { id: 2, name: "TensorFlow", path: "/assets/logos/tf.webp" },
    { id: 3, name: "numpy", path: "/assets/logos/numpy.webp" },
  ],
}
,
  {
    id: 3,
    title: "Movie Recommendation System",
    image: "/assets/logos/rec_system.webp",
    description:
      "A system that suggests movies to users based on ratings and preferences using collaborative and content-based filtering.",
    subDescription: [
      "Implemented recommendation engine using KNN and matrix factorization techniques.",
      "Analyzed user ratings and metadata for generating personalized suggestions.",
      "Built a real-time recommendation interface with user interactivity.",
    ],
    href: "https://github.com/Indrapal-70/Mini-Projects/tree/main/Movie_recommendation_system",
    tags: [
      { id: 1, name: "Scikit Learn", path: "/assets/logos/scikit_learn.webp" },
      { id: 2, name: "Python", path: "/assets/logos/python.webp" },
    ],
  },
  {
    id: 4,
    title: "Comment Sentiment Analysis",
    image: "/assets/logos/sentiment.webp",
    
    description:
      "Text classification app that identifies sentiment from user reviews using LSTM neural networks.",
    subDescription: [
      "Built an NLP pipeline with tokenization, embedding layers, and LSTM architecture.",
      "Deployed a real-time Streamlit web app to classify sentiments of user inputs.",
      "Extended usage for spam detection, emotion detection, and language categorization.",
    ],
    href: "https://github.com/Indrapal-70/Sentiment-Analysis",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.webp" },
      { id: 2, name: "TensorFlow", path: "/assets/logos/tf.webp" },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Indrapal-70",
    icon: "/assets/socials/git.webp",
  },
  {
    name: "Email",
    href: "mailto:indrapalkhalsa3@gmail.com",
    icon: "/assets/socials/email.webp",
  },
];

export const experiences = [
  {
    title: "Electronics & Robotics Society Member",
    job: "PDPM IIITDM Jabalpur",
    date: "2023-Present",
    contents: [
      "Worked on robotics and computer vision projects as a core member.",
      "Mentored teams and organized college-level events such as RoboRush and Robo Wrestling.",
      "Applied skills in machine learning and data science to practical robotics challenges.",
    ],
  },
];

export const reviews = []; 

export const skills = [
  "Python",
  "C++",
  "HTML",
  "CSS",
  "Machine Learning",
  "Deep Learning",
  "Data Preprocessing",
  "Data Cleaning",
  "TensorFlow",
  "Data Science",
];

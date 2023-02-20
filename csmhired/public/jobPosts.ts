export interface jobData {
  [property: string]: string;
}

interface jobsData {
  [id: string]: jobData;
}

const jobPost1: jobData = {
  id: "j1",
  company: "ABC Solutions",
  title: "Full Stack Developer",
  description: `We are seeking a full stack developer to help us build and maintain our web applications. The ideal candidate will have experience with Node.js and React. We are seeking a full stack developer to help us build and maintain our web applications. The ideal candidate will have experience with Node.js and React. We are seeking a full stack developer to help us build and maintain our web applications. The ideal candidate will have experience with Node.js and React.
    
    
    We are seeking a full stack developer to help us build and maintain our web applications. The ideal candidate will have experience with Node.js and React.`,
  salary: "105000",
  currency: "USD",
  location: "New York, NY",
  remote: "onsite",
  datePosted: "2023-02-01T14:30:00",
};

const jobPost2: jobData = {
  id: "j2",
  company: "XYZ Analytics",
  title: "Data Analyst",
  description:
    "We are seeking a data analyst to help us analyze and interpret data for our clients. The ideal candidate will have experience with SQL and Python.",
  salary: "85000",
  currency: "USD",
  location: "Los Angeles, CA",
  remote: "remote",
  datePosted: "2023-01-01T14:30:00",
};

const jobPost3: jobData = {
  id: "j3",
  company: "Def Tech",
  title: "DevOps Engineer",
  description:
    "We are seeking a DevOps engineer to help us automate and optimize our infrastructure. The ideal candidate will have experience with AWS and Jenkins.",
  salary: "120000",
  currency: "USD",
  location: "San Francisco, CA",
  remote: "onsite",
  datePosted: "2023-01-01T14:30:00",
};

const jobPost4: jobData = {
  id: "j4",
  company: "SDE Inc.",
  title: "Software Developer",
  description:
    "We are seeking a software developer to help us build and maintain our software applications. The ideal candidate will have experience with Java and Spring.",
  salary: "90000",
  currency: "USD",
  location: "Seattle, WA",
  remote: "hybrid",
  datePosted: "2023-01-01T14:30:00",
};

const jobPost5: jobData = {
  id: "j5",
  company: "The Hub",
  title: "Front-End Developer",
  description:
    "We are seeking a front-end developer to help us build and design our web applications. The ideal candidate will have experience with HTML, CSS, and JavaScript.",
  salary: "75000",
  currency: "USD",
  location: "Austin, TX",
  remote: "remote",
  datePosted: "2023-01-01T14:30:00",
};

const jobPost6: jobData = {
  id: "j6",
  company: "Guru Inc.",
  title: "Back-End Developer",
  description:
    "We are seeking a back-end developer to help us build and maintain our server-side applications. The ideal candidate will have experience with PHP and Laravel.",
  salary: "110000",
  currency: "USD",
  location: "Chicago, IL",
  remote: "onsite",
  datePosted: "2023-01-01T14:30:00",
};

const jobPost7: jobData = {
  id: "j7",
  company: "The Grid",
  title: "Full Stack Engineer",
  description:
    "We are seeking a full stack engineer to help us build and maintain our web applications. The ideal candidate will have experience with Ruby on Rails and React.",
  salary: "105000",
  currency: "USD",
  location: "Detroit, MI",
  remote: "hybrid",
  datePosted: "2023-01-01T14:30:00",
};

const jobPostsData: jobsData = {
  j1: jobPost1,
  j2: jobPost2,
  j3: jobPost3,
  j4: jobPost4,
  j5: jobPost5,
  j6: jobPost6,
  j7: jobPost7,
  j8: {
    id: "j8",
    company: "Avalon Tech",
    title: "Lead Data Scientist",
    description:
      "Avalon Tech is seeking a highly skilled lead data scientist to lead our data science team and drive innovation in our products. The ideal candidate will have experience with machine learning and big data technologies.",
    salary: "120000",
    currency: "USD",
    location: "San Francisco, CA",
    remote: "hybrid",
  },
  j9: {
    id: "j9",
    company: "Green Energy",
    title: "Sustainability Engineer",
    description:
      "Green Energy is looking for a sustainability engineer to join our team. The ideal candidate will have a background in environmental engineering and a passion for sustainability and renewable energy.",
    salary: "90000",
    currency: "USD",
    location: "Los Angeles, CA",
    remote: "onsite",
  },
  j10: {
    id: "j10",
    company: "CloudNine",
    title: "Cloud Solutions Architect",
    description:
      "CloudNine is seeking a cloud solutions architect to design and implement scalable cloud solutions for our clients. The ideal candidate will have experience with AWS and Azure.",
    salary: "110000",
    currency: "USD",
    location: "New York, NY",
    remote: "hybrid",
  },
  j11: {
    id: "j11",
    company: "DigiMind",
    title: "AI Engineer",
    description:
      "DigiMind is looking for an AI engineer to help us develop and implement cutting-edge AI solutions. The ideal candidate will have a strong background in machine learning and deep learning.",
    salary: "105200",
    currency: "USD",
    location: "Seattle, WA",
    remote: "hybrid",
  },
  j12: {
    id: "j12",
    company: "CodeForce",
    title: "Full-Stack Developer",
    description:
      "CodeForce is seeking a full-stack developer to join our team and help us build innovative web and mobile applications. The ideal candidate will have experience with React, Node.js, and MongoDB.",
    salary: "80000",
    currency: "CAD",
    location: "Montreal, QC",
    remote: "onsite",
  },
};

export { jobPostsData };

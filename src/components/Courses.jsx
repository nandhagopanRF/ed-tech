import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating'; // Import star rating component

const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    description: "A beginner-friendly introduction to React.js and component-based development.",
    image: "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    rating: 4.5
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master the deeper parts of JavaScript: closures, prototypes, async/await, and more.",
    image: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/12/Advanced-JavaScript-Tutorial-1.jpg",
    rating: 4.2
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    description: "Learn how to create beautiful and user-friendly web interfaces.",
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/330039181/original/f44c69e8ff922ea42e036705d8596ae58dd295ca/do-ui-ux-design-from-websites-mobile-apps-dsm-style-guides.png",
    rating: 4.0
  },
  {
    id: 4,
    title: "Fullstack Web Development",
    description: "Build complete web apps with React, Node.js, Express, and MongoDB.",
    image: "https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2022/09/12223818/image_750x_62fbc6c65f92e-1.jpg",
    rating: 4.7
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    description: "Understand the fundamentals of DSA for technical interviews and performance coding.",
    image: "https://www.synergisticit.com/wp-content/uploads/2020/09/Data-structures-and-algorithms-new.webp",
    rating: 4.3
  },
  {
    id: 6,
    title: "Python Programming",
    description: "Learn Python from scratch—ideal for beginners in programming.",
    image: "https://www.ku.edu.bh/wp-content/uploads/2023/06/Python-e1687965207655.gif",
    rating: 4.1
  },
  {
    id: 7,
    title: "Machine Learning Basics",
    description: "Explore ML concepts including supervised learning, models, and data preprocessing.",
    image: "https://360digitmg.com/uploads/blog/ad969eb3b3e73042e11ff9e0c0c35534.png",
    rating: 4.4
  },
  {
    id: 8,
    title: "DevOps & CI/CD",
    description: "Automate deployments and manage scalable cloud environments using DevOps tools.",
    image: "https://cdn.prod.website-files.com/659f535ed8f4066143717a44/65cc64ccf4d8c00e62037645_64d3cfa4ca7fe84ad2aa8f4b_blog-post1.jpeg",
    rating: 4.0
  },
  {
    id: 9,
    title: "Git & GitHub Essentials",
    description: "Master version control workflows with Git and GitHub collaboration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwD6TmEcjOFhhqqfcC8hUmKH9Y2JuAj1vxzQ&s",
    rating: 4.6
  },
  {
    id: 10,
    title: "TypeScript for React Developers",
    description: "Add strong typing to your React apps and improve code safety with TypeScript.",
    image: "https://devsarticles.com/wp-content/uploads/2024/02/react-with-typescript.png",
    rating: 4.3
  },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Available Courses</h1>

      <div style={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search Courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.grid}>
        {filteredCourses.map((course) => (
          <div key={course.id} style={styles.card}>
            <img src={course.image} alt={course.title} style={styles.image} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <StarRating rating={course.rating} /> {/* Show star rating here */}
            <Link to={`/course/${course.id}`}>
              <button style={styles.button}>View Course</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  searchWrapper: {
    position: 'relative',
    width: '300px',
    margin: '0 auto 30px',
  },
  searchInput: {
    width: '100%',
    padding: '10px 10px 10px 35px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    background: 'url(https://cdn.pixabay.com/photo/2021/07/02/04/48/search-6380865_1280.png) no-repeat left center',
    backgroundSize: '30px 30px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    width: '250px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Courses;

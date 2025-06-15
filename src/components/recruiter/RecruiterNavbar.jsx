import { Link } from "react-router-dom";
import '../../css/recruiters/RecruiterNavbar.css';
import { useNavigate } from "react-router-dom";

const RecruiterNavbar = ({ isOpen }) => {
     const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("sessionToken");
    localStorage.removeItem("userRole");
    navigate("/account"); // ✅ react-router navigation, no full reload
  };
    return (
        <nav className={`recruiter-navbar ${isOpen ? '' : 'collapsed'}`}>
            <h2 className="logo">Recruiter Panel</h2>
            <ul className="recruiter-nav-links">
                <li><Link to="/recruiter/jobs">Jobs</Link></li>
                <li><Link to="/recruiter/post-jobs">Post a Job</Link></li>
                <li><Link to="/recruiter/feed">feed</Link></li>
            </ul>
             <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
        </nav>
    );
};

export default RecruiterNavbar;

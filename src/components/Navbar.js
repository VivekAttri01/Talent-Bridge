// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebase"; 
// import logo12 from '../assets/images/logo.jpeg';
// import "./Navbar.css";
// import profileIcon from '../assets/images/profile-icon.png';
// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//         if (user) {
//           // Fetch additional user details like skills, interests, etc. if stored in the database
//           // For simplicity, using a static object
//           setUser({
//             ...user,
//             skills: ["React", "Firebase", "JavaScript"],
//             interests: ["Web Development", "UI/UX Design"],
//           });
//         } else {
//           setUser(null);
//         }
//       });
  
//       return () => unsubscribe();
//     }, []);

//   const handleLogout = () => {
//     auth.signOut().then(() => {
//       navigate('/'); 
//     }).catch((error) => {
//       console.error('Logout error:', error);
//     });
//   };

//   return (
//     <div className="navbar">
//         <div className="navbar-logo">
//           <img 
//             className='nav_logo'
//             src={logo12} alt="Logo"  
//           />
//         </div>
//       <nav className="navbar-main">
        
//         <ul className="navbar-main-links">
//           <li>
            
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/why-talentbridge">Why TalentBridge</Link>
//           </li>
//           <li>
//             <Link to="/explore">Explore</Link>
//           </li>
//           {!user ? (
//             <>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//               <li>
//                 <Link to="/signup">Sign Up</Link>
//               </li>
//             </>
//           ) : (
//             <>
//               <li className="navbar-welcome">
//                 Welcome, {user.email}
//               </li>
//               <li>
//                 <button onClick={handleLogout} className="logout-button">Logout</button>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>

//       <nav className="navbar-secondary">
//         <ul className="navbar-secondary-links">
//           <li>
//             <Link to="/find-work">Find Work</Link>
//           </li>
//           <li>
//             <Link to="/find-mentor">Find Mentor</Link>
//           </li>
//           <li>
//             <Link to="/find-peer">Find Peer</Link>
//           </li>
//           <li>
//             <Link to="/projects">Projects</Link>
//           </li>
//           <li>
//             <Link to="/pricing">Pricing & Plan</Link>
//           </li>
//           <li>
//             <Link to="/categories">Categories</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; 
import logo12 from '../assets/images/logo.jpeg';
import profileIcon from '../assets/images/profile-icon.png'; 
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/'); 
    }).catch((error) => {
      console.error('Logout error:', error);
    });
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen); 
  };

  return (
    <div className="navbar">
      <div className="navbar-main">
        <div className="navbar-logo">
          <img className='nav_logo' src={logo12} alt="Logo" />
        </div>
        <ul className="navbar-main-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/why-talentbridge">Why TalentBridge</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          {!user ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          ) : (
            <>
              <li className="navbar-welcome">Welcome, {user.displayName || user.email}</li>
              <li className="navbar-profile">
              <Link to="/profile">
                <img
                  src={profileIcon}  
                  alt="Profile"
                  className="profile-icon"
                  onClick={toggleProfile}  
                />
                </Link>
                {profileOpen && (
                  <div className="profile-dropdown">
                    <h3>{user.displayName || user.email}</h3>
                   
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                  </div>
                )}
              </li>
            </>
          )}
        </ul>
      </div>

      <nav className="navbar-secondary">
        <ul className="navbar-secondary-links">
          <li><Link to="/find-work">Find Work</Link></li>
          <li><Link to="/find-mentor">Find Mentor</Link></li>
          <li><Link to="/find-peer">Find Peer</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/pricing">Pricing & Plan</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

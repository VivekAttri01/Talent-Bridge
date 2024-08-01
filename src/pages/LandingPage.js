import React, { useEffect, useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
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

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TalentBridge</h1>
          {!user ? (
            <>
              <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
            </>
          ) : (
            <>
              <p>Welcome, {user.displayName || user.email}</p>
              <button className="cta-button" onClick={handleLogout}>Logout</button>
            </>
          )}
          <p >Connecting Talents, Building Futures</p>
        </div>
      </section>
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature" onClick={() => handleNavigate('/find-work')}>
            <h3>Find Work</h3>
            <p>Discover opportunities that match your skills.</p>
          </div>
          
          <div className="feature" onClick={() => handleNavigate('/find-peer')} >
         
            <h3>Find Peers</h3>
            <p>Collaborate with like-minded individuals on exciting projects.</p>
  
          </div>
          <div className="feature" onClick={() => handleNavigate('/projects')}>
            <h3>Projects</h3>
            <p>Join or create projects that make a difference.</p>
          </div>
        </div>
      </section>
      <section className="about">
        <h2>About TalentBridge</h2>
        <p>
          TalentBridge is dedicated to connecting talents with opportunities and peers. Our platform offers a space for creativity, collaboration, and growth, helping you to build a meaningful career and impactful projects.
        </p>
      </section>
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"TalentBridge helped me find amazing projects and collaborators."</p>
            <p>- Kasish</p>
          </div>
          <div className="testimonial">
            <p>"A fantastic platform for building a network and finding work."</p>
            <p>- Rajveer</p>
          </div>
        </div>
      </section>
      <section className="cta">
        
        {!user ? (
            <>
            <h2>Ready to Start?</h2>
              <button className="cta-button" onClick={handleGetStarted}>Join TalentBridge Now</button>
            </>
          ) : (
            <>
           
            </>
          )}
        
      </section>
    </div>
  );
};

export default LandingPage;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../firebase'; // Import Firebase auth
// import "./LandingPage.css";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleGetStarted = () => {
//     navigate('/login');
//   };

//   const handleLogout = () => {
//     auth.signOut().then(() => {
//       navigate('/');
//     }).catch((error) => {
//       console.error('Logout error:', error);
//     });
//   };

//   return (
//     <div className="landing-page">
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Welcome to TalentBridge</h1>
//           <p>Connecting Talents, Building Futures</p>
//           {!user ? (
//             <>
//               <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
//               <button className="cta-button" onClick={() => navigate('/signup')}>Sign Up</button>
//             </>
//           ) : (
//             <>
//               <p>Welcome, {user.displayName || user.email}</p>
//               <button className="cta-button" onClick={handleLogout}>Logout</button>
//             </>
//           )}
//         </div>
//       </section>
//       {/* Other sections remain the same */}
//     </div>
//   );
// };

// export default LandingPage;

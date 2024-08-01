// import React, { useState, useEffect } from 'react';
// import { auth, db } from '../firebase'; // Assuming you have Firebase setup for authentication and database
// import './UserProfile.css';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     age: '',
//     sex: '',
//     skills: '',
//     college: '',
//     interests: '',
//   });

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//         fetchUserData(user.uid);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const fetchUserData = async (uid) => {
//     try {
//       const userDoc = await db.collection('users').doc(uid).get();
//       if (userDoc.exists) {
//         setFormData(userDoc.data());
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await db.collection('users').doc(user.uid).set(formData, { merge: true });
//       setEditMode(false);
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   return (
//     <div className="user-profile">
//       <h1>User Profile</h1>
//       {user ? (
//         <>
//           {editMode ? (
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Age:
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                 />
//               </label>
//               <label>
//                 Sex:
//                 <input
//                   type="text"
//                   name="sex"
//                   value={formData.sex}
//                   onChange={handleChange}
//                 />
//               </label>
//               <label>
//                 Skills:
//                 <input
//                   type="text"
//                   name="skills"
//                   value={formData.skills}
//                   onChange={handleChange}
//                   placeholder="Comma-separated"
//                 />
//               </label>
//               <label>
//                 College:
//                 <input
//                   type="text"
//                   name="college"
//                   value={formData.college}
//                   onChange={handleChange}
//                 />
//               </label>
//               <label>
//                 Interests:
//                 <input
//                   type="text"
//                   name="interests"
//                   value={formData.interests}
//                   onChange={handleChange}
//                   placeholder="Comma-separated"
//                 />
//               </label>
//               <button type="submit">Save Changes</button>
//             </form>
//           ) : (
//             <div className="profile-details">
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Age:</strong> {formData.age}</p>
//               <p><strong>Sex:</strong> {formData.sex}</p>
//               <p><strong>Skills:</strong> {formData.skills}</p>
//               <p><strong>College:</strong> {formData.college}</p>
//               <p><strong>Interests:</strong> {formData.interests}</p>
//               <button onClick={() => setEditMode(true)}>Edit Profile</button>
//             </div>
//           )}
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default UserProfile;


import React, { useState, useEffect } from 'react';
import './UserProfile.css'; 

const UserProfile = () => {
  const [profile, setProfile] = useState({
    username: '',
    age: '',
    sex: '',
    skills: '',
    college: '',
    interests: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {

    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        {isEditing ? (
          <form className="profile-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={profile.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                id="age"
                name="age"
                value={profile.age}
                onChange={handleChange}
                placeholder="Enter your age"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sex">Sex</label>
              <input
                type="text"
                id="sex"
                name="sex"
                value={profile.sex}
                onChange={handleChange}
                placeholder="Enter your sex"
              />
            </div>
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                placeholder="Enter your skills"
              />
            </div>
            <div className="form-group">
              <label htmlFor="college">College</label>
              <input
                type="text"
                id="college"
                name="college"
                value={profile.college}
                onChange={handleChange}
                placeholder="Enter your college"
              />
            </div>
            <div className="form-group">
              <label htmlFor="interests">Interests</label>
              <input
                type="text"
                id="interests"
                name="interests"
                value={profile.interests}
                onChange={handleChange}
                placeholder="Enter your interests"
              />
            </div>
            <button className="save-button" onClick={handleSave}>Save</button>
          </form>
        ) : (
          <>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Age:</strong> {profile.age}</p>
            <p><strong>Sex:</strong> {profile.sex}</p>
            <p><strong>Skills:</strong> {profile.skills}</p>
            <p><strong>College:</strong> {profile.college}</p>
            <p><strong>Interests:</strong> {profile.interests}</p>
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

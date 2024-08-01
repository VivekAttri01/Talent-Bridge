

import React, { useState, useEffect } from 'react';
import { mentors } from '../data/mentors'; 

const FindMentor = () => {
  const [matchedMentors, setMatchedMentors] = useState([]);

  useEffect(() => {
    
    const filteredMentors = mentors.filter(mentor => mentor.skills.includes('React'));
    setMatchedMentors(filteredMentors);
  }, []);

  return (
    <div>
      <h2>Find Mentor</h2>
      <ul>
        {matchedMentors.map(mentor => (
          <li key={mentor.id}>
            <h3>{mentor.name}</h3>
            <p>Skills: {mentor.skills.join(', ')}</p>
            <p>Experience: {mentor.experience}</p>
            <p>Location: {mentor.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindMentor;

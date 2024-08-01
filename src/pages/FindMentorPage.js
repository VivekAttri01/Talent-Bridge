

import React, { useState } from "react";
import { mentors } from "../data/mentors"; 
import "./FindMentorPage.css"; 

const FindMentorPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMentors, setFilteredMentors] = useState(mentors);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const searchResults = mentors.filter(mentor =>
      mentor.skills.some(skill =>
        skill.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setFilteredMentors(searchResults);
  };

  return (
    <div className="find-mentor-page">
      <h1>Find a Mentor</h1>
      <input
        type="text"
        placeholder="Search by skills..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="mentor-list">
        {filteredMentors.length > 0 ? (
          filteredMentors.map(mentor => (
            <div key={mentor.id} className="mentor-card">
              <h2>{mentor.name}</h2>
              <p>Skills: {mentor.skills.join(", ")}</p>
              <p>Experience: {mentor.experience}</p>
              <p>Location: {mentor.location}</p>
              <button className="contact-button">Contact</button>
            </div>
          ))
        ) : (
          <p>No mentors found.</p>
        )}
      </div>
    </div>
  );
};

export default FindMentorPage;

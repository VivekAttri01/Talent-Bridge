

import React, { useState } from "react";
import { workOpportunities } from "../data/workOpportunities"; 
import "./FindWorkPage.css"; 

const FindWorkPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWork, setFilteredWork] = useState(workOpportunities);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const searchResults = workOpportunities.filter(work =>
      work.skills.some(skill =>
        skill.toLowerCase().includes(e.target.value.toLowerCase())
      ) || work.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredWork(searchResults);
  };

  return (
    <div className="find-work-page">
      <h1>Find Work</h1>
      <input
        type="text"
        placeholder="Search by skills or job title..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="work-list">
        {filteredWork.length > 0 ? (
          filteredWork.map(work => (
            <div key={work.id} className="work-card">
              <h2>{work.title}</h2>
              <p>Skills: {work.skills.join(", ")}</p>
              <p>Company: {work.company}</p>
              <p>Location: {work.location}</p>
              <button className="apply-button">Apply</button>
            </div>
          ))
        ) : (
          <p>No work opportunities found.</p>
        )}
      </div>
    </div>
  );
};

export default FindWorkPage;

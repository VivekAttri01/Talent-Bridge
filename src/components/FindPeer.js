
import React, { useState } from "react";
import { users } from "../data/users";
import "./FindPeer.css";

const FindPeer = ({ userId }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeers, setFilteredPeers] = useState([]);

  const handleSearch = () => {
    const currentUser = users.find(user => user.id === userId);

    if (!currentUser) {
      throw new Error("User not found");
    }

    const getCommonElementsCount = (arr1, arr2) => {
      return arr1.filter(element => arr2.includes(element)).length;
    };

    const peers = users
      .filter(user => user.id !== userId)
      .map(user => {
        const sharedSkills = getCommonElementsCount(currentUser.skills, user.skills);
        const sharedInterests = getCommonElementsCount(currentUser.interests, user.interests);
        const score = sharedSkills + sharedInterests;
        return { user, score };
      })
      .sort((a, b) => b.score - a.score);

    if (searchTerm) {
      setFilteredPeers(
        peers.filter(peer =>
          peer.user.skills.some(skill =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
    } else {
      setFilteredPeers(peers);
    }
  };

  const handleSendRequest = (peerId) => {
   
    console.log(`Request to join project sent to user ID: ${peerId}`);
    alert(`Request sent to join the project with user ID: ${peerId}`);
  };

  const handleSendMessage = (peerId) => {
    
    console.log(`Message sent to user ID: ${peerId}`);
    alert(`Message sent to user ID: ${peerId}`);
  };

  return (
    <div className="find-peer">
      <h2>Find Peers</h2>
      <input
        type="text"
        placeholder="Search by skills"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul className="peer-list">
        {filteredPeers.map((peer, index) => (
          <li key={index} className="peer-item">
            <h3>{peer.user.name}</h3>
            <p>Skills: {peer.user.skills.join(", ")}</p>
            <p>Interests: {peer.user.interests.join(", ")}</p>
            <p>Score: {peer.score}</p>
            <div className="peer-actions">
              <button onClick={() => handleSendRequest(peer.user.id)}>Request to Join Project</button>
              <button onClick={() => handleSendMessage(peer.user.id)}>Send Message</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindPeer;

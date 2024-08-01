
import React from 'react';
import './ExplorePage.css';

const items = [
  { title: 'Web Development Project', description: 'Join a team to build a web application.', link: '/project/web-development' },
  { title: 'Graphic Design Workshop', description: 'Learn the basics of graphic design.', link: '/workshop/graphic-design' },
  { title: 'Content Writing Opportunities', description: 'Find freelance content writing jobs.', link: '/jobs/content-writing' },
  { title: 'Digital Marketing Course', description: 'Enhance your skills in digital marketing.', link: '/course/digital-marketing' },
  { title: 'Music Production Collaboration', description: 'Collaborate on a music production project.', link: '/collaboration/music-production' },
];

const ExplorePage = () => {
  return (
    <div className="explore-container">
      <h1>Explore Opportunities</h1>
      <div className="explore-list">
        {items.map((item, index) => (
          <div key={index} className="explore-item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} className="explore-link">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;

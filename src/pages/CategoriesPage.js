
import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesPage.css';

const categories = [
  { name: 'Web Development', path: '/categories/web-development' },
  { name: 'Graphic Design', path: '/categories/graphic-design' },
  { name: 'Writing & Translation', path: '/categories/writing-translation' },
  { name: 'Digital Marketing', path: '/categories/digital-marketing' },
  { name: 'Music & Audio', path: '/categories/music-audio' },
  { name: 'Programming & Tech', path: '/categories/programming-tech' },
  { name: 'Business', path: '/categories/business' },
  { name: 'Lifestyle', path: '/categories/lifestyle' },
];

const CategoriesPage = () => {
  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="categories-list">
        {categories.map((category, index) => (
          <Link key={index} to={category.path} className="category-item">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;

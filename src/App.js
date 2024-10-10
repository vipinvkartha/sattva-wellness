import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import SmoothScroll from './components/SmoothScroll';
import './App.css';

function App() {
  const sections = [
    { id: 'home', title: 'Welcome to Sattva Wellness', content: 'Your journey to wellness begins here', image: 'yoga.jpeg' },
    { id: 'about', title: 'About Us', content: 'Sattva Wellness is a holistic wellness centre dedicated to nurturing your mind, body, and soul.', image: 'meditation.jpeg' },
    { id: 'services', title: 'Our Services', content: ['Yoga Classes', 'Meditation Sessions', 'Wellness Camps'], image: 'wellness.jpeg' },
    { id: 'store', title: 'Sattva Wellness Store', content: 'Discover our curated collection of wellness products to enhance your journey.', image: 'store.jpeg' },
    { id: 'contact', title: 'Contact Us', content: ['Email: info@sattvawellness.com', 'Phone: (123) 456-7890'], image: 'zen.jpeg' },
  ];

  return (
    <div className="App">
      <SmoothScroll />
      <Navbar />
      {sections.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </div>
  );
}

export default App;
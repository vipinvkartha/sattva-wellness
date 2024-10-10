import React from 'react';

function Section({ id, title, content, image }) {
  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${image})`,
  };

  return (
    <div id={id} className="section" style={sectionStyle}>
      <div className="content">
        <h2>{title}</h2>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Section;
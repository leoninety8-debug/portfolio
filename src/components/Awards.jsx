import React from 'react';
import { Award } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "Manager Award 2024",
      date: "Dec 2024",
      desc: "Appreciation Manager Award in recognition of stellar contribution for Sales Return Dashboard Project"
    },
    {
      title: "Kraft Heinz Indonesia Appreciation",
      date: "Jan 2023",
      desc: "Power Automate Class Trainer"
    }
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">Awards</h2>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            <Award className="award-icon" size={40} />
            <div className="award-content">
              <h3>{award.title} <span style={{fontSize: '0.9rem', color: 'var(--accent-teal)', marginLeft: '10px'}}>{award.date}</span></h3>
              <p>{award.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;

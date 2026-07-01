import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="section-container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 700, position: 'relative', margin: 0, paddingBottom: '15px' }}>
          Education
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', background: '#3b82f6', borderRadius: '2px' }}></div>
        </h2>
      </div>
      
      <div className="edu-card">
        <div className="edu-icon-container">
          <GraduationCap size={36} color="#3b82f6" />
        </div>
        <div className="edu-content">
          <div className="edu-header">
            <h3 className="edu-title">Computer Engineering (Diploma)</h3>
            <span className="edu-date">Jun 2016 - Aug 2019</span>
          </div>
          <div className="edu-subtitle">Institut Pertanian Bogor &bull; GPA: 3.14</div>
          <div className="edu-desc">
            <p><strong>Final Project:</strong> Design and Construction of a Smart Room Prototype with ESP8266 Based Website Control in the Foreign Research Permit Room.</p>
            <p style={{ marginTop: '10px' }}>Worked as a team to build an ROV (Remotely Operated Vehicle) that can dive underwater and provide visibility through a monitor.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

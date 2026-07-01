import React from 'react';
import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    { period: "Nov 2025 - Present", title: "Certificate of Participation", issuer: "Sentana Broker" },
    { period: "Jan 2025 - Present", title: "Project Management Simplified", issuer: "LinkedIn" },
    { period: "May 2022 - Present", title: "SQL Data Reporting and Analysis", issuer: "LinkedIn" },
    { period: "Mar 2022 - Feb 2026", title: "Microsoft Certified: Power Platform Functional Consultant", issuer: "Microsoft" },
    { period: "Jan 2022 - Present", title: "Communicating with Confidence", issuer: "LinkedIn" },
    { period: "Jan 2022 - Present", title: "Microsoft Power Automate: Beyond the Basics", issuer: "LinkedIn" },
    { period: "Nov 2020 - Present", title: "Negotiation Skills", issuer: "LinkedIn" }
  ];

  return (
    <section className="section-container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 700, position: 'relative', margin: 0, paddingBottom: '15px' }}>
          Certificates
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', background: '#3b82f6', borderRadius: '2px' }}></div>
        </h2>
      </div>
      
      <div className="cert-badge-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-badge">
            <div className="cert-icon">
              <Award size={20} />
            </div>
            <div className="cert-info">
              <h4 className="cert-title">{cert.title}</h4>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-period">{cert.period.split(' - ')[0]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

import React, { useState } from 'react';
import { X } from 'lucide-react';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      period: "Sep 2025 - Present",
      role: "Freelance IT Consultant",
      company: "FREELANCE WFH",
      shortDesc: "Provide strategic technology advice to clients. Design custom software solutions such as an automated invoice extractor to Excel data. Troubleshoot system and hardware issues...",
      details: [
        "Provide strategic technology advice to clients.",
        "Design custom software solutions such as an automated invoice extractor to Excel data.",
        "Troubleshoot system and hardware issues.",
        "Create custom virtual gifts for clients."
      ]
    },
    {
      period: "Jun 2022 - Feb 2025",
      role: "IT Application Commercial Analyst",
      company: "Kraft Heinz ABC Indonesia",
      shortDesc: "Help users to build data visualizations using SQL and Power BI for business KPIs that reduced manual reporting labor by 10 hours weekly. Built more than 13 approval automation...",
      details: [
        "Help users to build data visualizations using SQL and Power BI for business KPIs that reduced manual reporting labor by 10 hours weekly.",
        "Built more than 13 approval automation using Power Automate that trackable the progress in SharePoint.",
        "Create technical document to help developer build distributor dashboard using web-based app that connects various tools that are useful for distributor needs, from registration to termination approval.",
        "Create more than 30 business specification and technical specification for new or enchantment request.",
        "Create business travel approval using Power Automate from Microsoft for whole company in Indonesia with more than 1000 users so every business travel request will trackable, and the data automatically insert in Database."
      ]
    },
    {
      period: "Jan 2021 - Jun 2022",
      role: "IT SFA Support",
      company: "Kraft Heinz ABC Indonesia",
      shortDesc: "Provide full support for the Sales Force Automation (SFA) system with more than 33 site that enhances the effectiveness of the sales team. Manage troubleshooting...",
      details: [
        "Provide full support for the Sales Force Automation (SFA) system with more than 33 site that enhances the effectiveness of the sales team.",
        "Manage troubleshooting and resolution of issues related to business applications, delivering solutions that have a direct impact on productivity.",
        "Lead enchantments in SFA with create change request specification and explain the change to SFA implementer and sales team."
      ]
    },
    {
      period: "Jan 2020 - Dec 2020",
      role: "IT SFA Implementor",
      company: "Kraft Heinz ABC Indonesia",
      shortDesc: "Implement and provide support for the Sales Force Automation SFA system at 12 site that enhances the effectiveness of the sales team...",
      details: [
        "Implement and provide support for the Sales Force Automation (SFA) system at 12 site that enhances the effectiveness of the sales team.",
        "Manage troubleshooting and resolution of issues related to SFA applications."
      ]
    },
    {
      period: "Feb 2019 - Apr 2019",
      role: "Frontdesk Admin",
      company: "Ministry of Research Technology and Higher Education",
      shortDesc: "Managed visitor registration at the main reception desk. Directed incoming calls to the correct ministry departments. Organized administrative documents...",
      details: [
        "Managed visitor registration at the main reception desk.",
        "Directed incoming calls to the correct ministry departments.",
        "Organized administrative documents and daily correspondence.",
        "Maintained accurate guest logs and appointment schedules.",
        "Provided general service information to public visitors.",
        "Assisted in compiling the Research Permit Procedure manual planned for publication in 2019."
      ]
    }
  ];

  const closeModal = (e) => {
    if (e.target.className === 'modal-overlay') {
      setSelectedExp(null);
    }
  };

  return (
    <section className="section-container">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content" onClick={() => setSelectedExp(exp)}>
              <div className="timeline-date">{exp.period}</div>
              <h3 className="timeline-title">{exp.role}</h3>
              <div className="timeline-subtitle">{exp.company}</div>
              <p className="timeline-desc">{exp.shortDesc}</p>
              <span style={{color: 'var(--accent-teal)', fontSize: '0.85rem', marginTop: '10px', display: 'inline-block', fontWeight: '500'}}>Click to learn more →</span>
            </div>
          </div>
        ))}
      </div>

      {selectedExp && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" style={{ maxWidth: '800px' }}>
            <button className="modal-close" onClick={() => setSelectedExp(null)}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <h3 className="modal-title" style={{ marginBottom: '5px', color: '#fff', fontSize: '2rem' }}>{selectedExp.company}</h3>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                {selectedExp.role} | {selectedExp.period}
              </div>
            </div>
            <div className="modal-body">
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {selectedExp.details.map((detail, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '15px', 
                    color: '#e2e8f0', 
                    fontSize: '1rem', 
                    lineHeight: '1.6',
                    position: 'relative',
                    paddingLeft: '20px'
                  }}>
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      top: '8px', 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      background: 'var(--accent-teal)' 
                    }}></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;

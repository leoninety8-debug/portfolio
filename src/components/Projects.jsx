import React, { useState } from 'react';
import { X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "Sales Return Dashboard",
      tags: ["Power BI", "SQL", "Data Analytics"],
      image: `${import.meta.env.BASE_URL}sales_dash.png`,
      tech: "Power BI, SQL Server, Data Visualization.",
      impact: "Reduced manual reporting labor by 10 hours weekly and earned the Manager Award in 2024.",
      coreSkill: "Data Visualization & Analytics."
    },
    { 
      title: "Distributor Lifecycle Management",
      tags: ["Power Apps", "Power Automate"],
      image: `${import.meta.env.BASE_URL}distributor.jpg`,
      tech: "Microsoft Power Apps, Power Automate, SharePoint.",
      impact: "Streamlined the distributor onboarding and lifecycle tracking with trackable progress.",
      coreSkill: "Application System Management."
    },
    { 
      title: "Multi-Site SFA Optimization",
      tags: ["SFA Support", "Change Management"],
      image: `${import.meta.env.BASE_URL}sfa_optim.png`,
      tech: "SFA Application Support, Change Request Management.",
      impact: "Led system enhancements and troubleshooting across 33+ operational sites, directly improving the efficiency of field sales teams through iterative technical updates.",
      coreSkill: "IT Operations Support & Change Management."
    },
    { 
      title: "Business Travel and Cash Advance Approval System",
      tags: ["Power Automate", "Workflow"],
      image: `${import.meta.env.BASE_URL}travel_apprv.png`,
      tech: "Microsoft Power Automate, SharePoint.",
      impact: "Automated business travel approvals for the whole company in Indonesia serving more than 1000 users.",
      coreSkill: "Process Automation."
    },
    { 
      title: "PDF Invoice Recognition to Excel Data",
      tags: ["AI Systems", "Automation"],
      image: `${import.meta.env.BASE_URL}invoice_ai.png`,
      tech: "Custom Software Solution, AI/OCR.",
      impact: "Eliminated manual data entry by automatically extracting invoice data into Excel, saving significant processing time.",
      coreSkill: "Custom Software Solutions."
    },
    { 
      title: "Virtual Gift",
      tags: ["Custom Dev", "Client Services"],
      image: `${import.meta.env.BASE_URL}abstract_bg.png`,
      tech: "Custom Web Application, Graphics.",
      impact: "Delivered customized virtual gift experiences for clients, enhancing client engagement and satisfaction.",
      coreSkill: "Creative Problem Solving."
    },
    { 
      title: "Asset Management and Approval System",
      tags: ["Power Automate", "SharePoint"],
      image: `${import.meta.env.BASE_URL}asset_mgmt.jpg`,
      tech: "Microsoft Power Automate, SharePoint.",
      impact: "Built approval automation to accurately track and manage company assets and lifecycle requests.",
      coreSkill: "Application System Management."
    },
    { 
      title: "Legal Team Document Management and Reminder System",
      tags: ["Document Management", "Power Automate"],
      image: `${import.meta.env.BASE_URL}legal_doc.png`,
      tech: "SharePoint, Microsoft Power Automate.",
      impact: "Ensured legal compliance and timely renewals by automating document tracking and reminder alerts.",
      coreSkill: "Workflow Optimization."
    },
    { 
      title: "Change Price Approval System",
      tags: ["Power Automate", "Approval Flow"],
      image: `${import.meta.env.BASE_URL}change_price.jpg`,
      tech: "Microsoft Power Automate, SharePoint.",
      impact: "Accelerated the pricing change process by replacing manual emails with a trackable automated approval flow.",
      coreSkill: "Process Automation."
    },
    { 
      title: "Migration for Desktop App to Web App for Export System",
      tags: ["Web App", "Migration"],
      image: `${import.meta.env.BASE_URL}migration.jpg`,
      tech: "Web Technologies, APIs, Database Migration.",
      impact: "Modernized the export system architecture, improving accessibility and reducing desktop-specific technical issues.",
      coreSkill: "Application System Management."
    }
  ];

  const closeModal = (e) => {
    if (e.target.className === 'modal-overlay') {
      setSelectedProject(null);
    }
  };

  return (
    <section className="section-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 700, position: 'relative', margin: 0, paddingBottom: '15px' }}>
          Key Projects
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', background: '#3b82f6', borderRadius: '2px' }}></div>
        </h2>
      </div>

      <div className="cards-grid">
        {projects.map((project, index) => (
          <div key={index} className="card" onClick={() => setSelectedProject(project)}>
            <div className="card-img-container">
              <img src={project.image} alt={project.title} className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <div className="modal-tags">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="modal-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', maxHeight: '300px', objectFit: 'cover' }} />
              
              <div className="modal-section">
                <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>The Tech</h4>
                <p style={{ color: '#e2e8f0', lineHeight: 1.6 }}>{selectedProject.tech}</p>
              </div>
              
              <div className="modal-section" style={{ marginTop: '20px' }}>
                <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>The Impact</h4>
                <p style={{ color: '#e2e8f0', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: selectedProject.impact.replace(/(\d+\+.*?(?=\s|,|\.|$))/g, '<strong>$1</strong>') }}></p>
              </div>
              
              <div className="modal-section" style={{ marginTop: '20px' }}>
                <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>Core Skill</h4>
                <p style={{ color: '#e2e8f0', lineHeight: 1.6 }}>{selectedProject.coreSkill}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

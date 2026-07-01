import React, { useState } from 'react';
import { 
  RefreshCcw, BarChart2, Briefcase, Cpu, Layers, 
  Cloud, Database, FileText, MonitorPlay, Network 
} from 'lucide-react';

const Skills = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    {
      id: 'change_management',
      name: 'Change Mgmt',
      icon: <RefreshCcw size={32} />,
      title: 'Change Management',
      desc: 'Led system enhancements and change request management across 33+ sites, ensuring smooth transitions and high adoption rates among users.'
    },
    {
      id: 'analytical_skills',
      name: 'Analytical',
      icon: <BarChart2 size={32} />,
      title: 'Analytical Skills',
      desc: 'Expert in analyzing complex business requirements, defining KPIs, and extracting insights from raw data to drive operational efficiency.'
    },
    {
      id: 'project_management',
      name: 'Project Mgmt',
      icon: <Briefcase size={32} />,
      title: 'Project Management',
      desc: 'Managed end-to-end project lifecycles, from creating business and technical specifications to successful deployments across nationwide branches.'
    },
    {
      id: 'ai_systems',
      name: 'AI Systems',
      icon: <Cpu size={32} />,
      title: 'AI Systems',
      desc: 'Integrated custom AI software solutions, such as automated PDF invoice recognition systems that extract data directly into Excel.'
    },
    {
      id: 'application_management',
      name: 'App Mgmt',
      icon: <Layers size={32} />,
      title: 'Application System Management',
      desc: 'Provided full lifecycle support and troubleshooting for critical business applications, including SFA systems and custom web apps.'
    },
    {
      id: 'microsoft_365',
      name: 'Microsoft 365',
      icon: <Cloud size={32} />,
      title: 'Microsoft 365',
      desc: 'Extensive experience leveraging the Microsoft 365 ecosystem to streamline enterprise communication, document management, and collaboration.'
    },
    {
      id: 'sql',
      name: 'SQL',
      icon: <Database size={32} />,
      title: 'SQL',
      desc: 'Proficient in writing complex SQL queries for data visualization, dashboard creation, and automated reporting.'
    },
    {
      id: 'microsoft_office',
      name: 'MS Office',
      icon: <FileText size={32} />,
      title: 'Microsoft Office',
      desc: 'Advanced proficiency in Excel, Word, and PowerPoint, utilizing them for deep data analysis, documentation, and executive reporting.'
    },
    {
      id: 'presentation',
      name: 'Presentation',
      icon: <MonitorPlay size={32} />,
      title: 'Presentation Skills',
      desc: 'Strong ability to communicate technical concepts to non-technical stakeholders and deliver effective training, recognized as a Power Automate Class Trainer.'
    },
    {
      id: 'rest_api',
      name: 'REST API',
      icon: <Network size={32} />,
      title: 'REST API',
      desc: 'Experienced in API integration, connecting web-based applications and automating data flows between distinct enterprise systems.'
    }
  ];

  return (
    <section className="section-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <h2 className="section-title">Technical Toolkit</h2>
      
      <div className="tools-container" style={{ marginTop: '20px' }}>
        {tools.map(tool => (
          <div 
            key={tool.id} 
            className={`tool-circle ${selectedTool?.id === tool.id ? 'active' : ''}`}
            onClick={() => setSelectedTool(tool)}
          >
            <div className="tool-icon">{tool.icon}</div>
            <div className="tool-name">{tool.name}</div>
          </div>
        ))}
      </div>

      <div className="tool-info-panel">
        {!selectedTool ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', animation: 'fadeIn 0.3s ease' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.2rem', marginBottom: '10px', fontWeight: 600 }}>Select a tool to learn more</h3>
            <p style={{ color: '#8b9bb4', fontSize: '0.95rem' }}>Click on any of the icons above to see my experience and capabilities with that specific technology.</p>
          </div>
        ) : (
          <div style={{ padding: '40px 30px', textAlign: 'center', animation: 'fadeIn 0.3s ease' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.4rem', marginBottom: '15px', fontWeight: 600 }}>{selectedTool.title}</h3>
            <p style={{ color: '#e2e8f0', fontSize: '1rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>{selectedTool.desc}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;

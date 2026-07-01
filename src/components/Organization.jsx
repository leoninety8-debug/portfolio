import React from 'react';
import { Users, Landmark, Gamepad2, Briefcase, BookOpen, Megaphone } from 'lucide-react';

const Organization = () => {
  const orgs = [
    {
      period: "Apr 2025 - Present",
      role: "Treasurer",
      org: "Majelis Hukum dan Ham Muhammadiyah Tangerang Selatan",
      desc: "Managed the organizational budget and maintained precise cash flow records. Generated comprehensive monthly financial reports. Represented the council with Civil Society Organizations to address violence against key populations in Tangerang.",
      icon: <Landmark size={28} />
    },
    {
      period: "Nov 2022",
      role: "Liaison Officer Coordinator",
      org: "Pekan Olahraga Provinsi Banten",
      desc: "Directed and coordinated field staff operations. Communicated critical committee updates to event participants. Managed scheduling and logistics for sports contingents.",
      icon: <Users size={28} />
    },
    {
      period: "May 2022 - Feb 2024",
      role: "Head of Athletes and Achievements",
      org: "E Sport Indonesia ESI Banten",
      desc: "Mentored esport athletes across Banten Province. Evaluated athlete performance metrics. Compiled comprehensive data on regional esport athletes. Managed a central database of athletes and their competitive achievements.",
      icon: <Gamepad2 size={28} />
    },
    {
      period: "Nov 2018 - Feb 2022",
      role: "Ketua Umum",
      org: "Ikatan Pelajar Muhammadiyah Tangerang Selatan",
      desc: "Directed city level administrators and oversaw daily operations. Established annual organizational goals and performance targets. Executed strategic decisions to drive organizational growth.",
      icon: <Briefcase size={28} />
    },
    {
      period: "Jul 2016 - Nov 2018",
      role: "Ketua Bidang Perkaderan",
      org: "Ikatan Pelajar Muhammadiyah Tangerang Selatan",
      desc: "Designed training modules to onboard all members in Tangerang Selatan. Executed orientation programs. Evaluated and tracked member capacity development.",
      icon: <BookOpen size={28} />
    },
    {
      period: "Sep 2016 - Jul 2017",
      role: "Staff Dept Kajian Aksi Strategis",
      org: "Badan Eksekutif Mahasiswa Fakultas Vokasi",
      desc: "Analyzed and reviewed proposed campus and city policies. Formulated discussion materials for student forums. Strategized and planned actionable field initiatives.",
      icon: <Megaphone size={28} />
    }
  ];

  return (
    <section className="section-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 700, position: 'relative', margin: 0, paddingBottom: '15px' }}>
          Organization & Volunteer
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', background: '#3b82f6', borderRadius: '2px' }}></div>
        </h2>
      </div>

      <div className="glass-grid">
        {orgs.map((org, index) => (
          <div key={index} className="glass-card">
            <div className="glass-icon">
              {org.icon}
            </div>
            <div className="glass-content">
              <span className="glass-period">{org.period}</span>
              <h3 className="glass-role">{org.role}</h3>
              <div className="glass-org">{org.org}</div>
              <p className="glass-desc">{org.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organization;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Shield,
    Lock,
    Server,
    Users,
    FileText,
    AlertTriangle,
    CheckCircle,
    Key,
    Eye,
    UserCheck,
    Bell,
    Clipboard,
    Monitor,
    HardDrive,
    ArrowRight,
    Mail,
    Phone,
    Activity,
    BookOpen,
    ShieldCheck
} from 'lucide-react';
import NexalithLogo from '../components/NexalithLogo';

const Hipaa = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'commitment',
            icon: <ShieldCheck size={22} />,
            title: 'Our Commitment to HIPAA',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patronum X is built from the ground up to comply with the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and its implementing regulations, including the Privacy Rule, Security Rule, and Breach Notification Rule. As a platform that processes Protected Health Information (PHI) for healthcare billing operations, HIPAA compliance is not an afterthought -- it is a core architectural principle.
                    </p>
                    <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                        <p className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] mb-4">Our HIPAA Compliance Pillars</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { title: 'Technical Safeguards', desc: 'Encryption, access controls, audit logging, and integrity verification at every layer.', icon: <Lock size={18} /> },
                                { title: 'Administrative Safeguards', desc: 'Policies, procedures, workforce training, and designated security personnel.', icon: <Clipboard size={18} /> },
                                { title: 'Physical Safeguards', desc: 'Infrastructure isolation, deployment controls, and facility access management.', icon: <Server size={18} /> }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl p-4 border border-primary-100/50">
                                    <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                        {item.icon}
                                    </div>
                                    <p className="text-[13px] font-black text-primary-800 mb-1">{item.title}</p>
                                    <p className="text-[12px] text-primary-600 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patronum X functions as a Business Associate under HIPAA when processing PHI on behalf of Covered Entities. We maintain comprehensive documentation of our compliance program and make it available to customers upon request.
                    </p>
                </div>
            )
        },
        {
            id: 'technical-safeguards',
            icon: <Lock size={22} />,
            title: 'Technical Safeguards',
            content: (
                <div className="space-y-6">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Our technical safeguards address the HIPAA Security Rule requirements under 45 CFR 164.312. Every technical control is implemented in production and verified through regular testing.
                    </p>
                    <div className="space-y-4">
                        {[
                            {
                                icon: <Key size={18} />,
                                title: 'Field-Level PGCrypto Encryption',
                                desc: 'Patient names, dates of birth, Social Security numbers, and insurance member IDs are encrypted at the database column level using PostgreSQL PGCrypto with AES-256 symmetric encryption. Encryption keys are stored outside the database in environment variables, ensuring that even direct database access does not expose plaintext PHI.',
                                tag: '164.312(a)(2)(iv) - Encryption and Decryption'
                            },
                            {
                                icon: <Shield size={18} />,
                                title: 'JWT Authentication & Session Management',
                                desc: 'All API access is authenticated via JSON Web Tokens (JWT) with short-lived access tokens and secure refresh token rotation. Tokens include role claims used for authorization decisions. Failed authentication attempts are rate-limited and logged. Session timeouts enforce automatic logout after periods of inactivity.',
                                tag: '164.312(d) - Person or Entity Authentication'
                            },
                            {
                                icon: <Users size={18} />,
                                title: 'Role-Based Access Control (RBAC)',
                                desc: 'Patronum X implements a five-role RBAC system: Super Admin, Admin/Manager, Team Lead, Billing Staff, and Payment Poster. Each role has precisely scoped permissions that limit access to only the data and functions required for their job duties. API endpoints enforce role checks on every request.',
                                tag: '164.312(a)(1) - Access Control'
                            },
                            {
                                icon: <Activity size={18} />,
                                title: 'Comprehensive Audit Logging',
                                desc: 'Every action in the system is logged with user attribution, timestamp, IP address, and the specific data accessed or modified. We use django-auditlog to track all changes to claim records, patient data, user accounts, and system configurations. Audit logs are immutable and retained for a minimum of six years.',
                                tag: '164.312(b) - Audit Controls'
                            },
                            {
                                icon: <Monitor size={18} />,
                                title: 'Transmission Security',
                                desc: 'All data in transit is encrypted using TLS 1.2 or higher through our Nginx reverse proxy. Internal service-to-service communication within the Docker network uses encrypted channels. API responses never include PHI in URL parameters or error messages.',
                                tag: '164.312(e)(1) - Transmission Security'
                            },
                            {
                                icon: <CheckCircle size={18} />,
                                title: 'Data Integrity Controls',
                                desc: 'Database integrity is maintained through PostgreSQL transactional guarantees, foreign key constraints, and application-level validation. Status transitions follow a defined state machine that prevents invalid claim lifecycle progressions. All modifications are tracked through our audit system.',
                                tag: '164.312(c)(1) - Integrity'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[15px] font-black text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-3">{item.desc}</p>
                                        <span className="inline-flex items-center px-3 py-1 bg-slate-50 rounded-lg border border-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-wider">
                                            {item.tag}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'administrative-safeguards',
            icon: <Clipboard size={22} />,
            title: 'Administrative Safeguards',
            content: (
                <div className="space-y-6">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Our administrative safeguards address the requirements under 45 CFR 164.308. These policies and procedures govern how our workforce interacts with PHI and how we manage security across the organization.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                icon: <BookOpen size={18} />,
                                title: 'Workforce Training',
                                desc: 'All Patronum X employees with access to systems containing PHI complete HIPAA security and privacy training upon hire and annually thereafter. Training covers PHI identification, proper handling procedures, incident reporting, and sanctions for violations.',
                                tag: '164.308(a)(5)'
                            },
                            {
                                icon: <UserCheck size={18} />,
                                title: 'Security Officer',
                                desc: 'Patronum X has designated a Security Officer responsible for the development and implementation of our HIPAA security program. The Security Officer oversees risk assessments, policy updates, incident response, and compliance auditing.',
                                tag: '164.308(a)(2)'
                            },
                            {
                                icon: <AlertTriangle size={18} />,
                                title: 'Incident Response Plan',
                                desc: 'We maintain a documented incident response plan that covers identification, containment, eradication, and recovery from security incidents. The plan includes escalation procedures, communication templates, and post-incident review requirements.',
                                tag: '164.308(a)(6)'
                            },
                            {
                                icon: <Eye size={18} />,
                                title: 'Risk Assessment',
                                desc: 'Patronum X conducts comprehensive risk assessments annually and whenever significant changes are made to our systems. Assessments identify threats and vulnerabilities to PHI, evaluate current safeguards, and determine risk levels requiring remediation.',
                                tag: '164.308(a)(1)(ii)(A)'
                            },
                            {
                                icon: <Users size={18} />,
                                title: 'Workforce Access Management',
                                desc: 'Access to PHI is granted based on the minimum necessary standard. Employee access is reviewed quarterly, and access is revoked immediately upon termination or role change. All access provisioning and de-provisioning is documented.',
                                tag: '164.308(a)(3)'
                            },
                            {
                                icon: <FileText size={18} />,
                                title: 'Policy Documentation',
                                desc: 'All HIPAA-related policies and procedures are documented, version-controlled, and reviewed annually. Policies cover data classification, acceptable use, password management, remote access, mobile device security, and data disposal.',
                                tag: '164.308(a)(1)'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-all">
                                <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-500 mb-3">
                                    {item.icon}
                                </div>
                                <h4 className="text-[14px] font-black text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-3">{item.desc}</p>
                                <span className="inline-flex items-center px-2.5 py-1 bg-emerald-50 rounded-lg text-[9px] font-black text-emerald-600 uppercase tracking-wider">
                                    {item.tag}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'physical-safeguards',
            icon: <HardDrive size={22} />,
            title: 'Physical Safeguards',
            content: (
                <div className="space-y-6">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Our physical safeguards address the requirements under 45 CFR 164.310. Patronum X provides flexible deployment options that allow organizations to maintain physical control over their data.
                    </p>
                    <div className="space-y-4">
                        {[
                            {
                                icon: <Server size={18} />,
                                title: 'On-Premise Deployment Option',
                                desc: 'Patronum X can be deployed entirely on your organization\'s own infrastructure, giving you complete physical control over servers, storage, and network equipment containing PHI. On-premise deployments use our Docker Compose configuration to run all services within your controlled environment. This eliminates third-party data center dependencies and allows you to apply your existing physical security controls.',
                                highlight: 'Full physical control over PHI storage'
                            },
                            {
                                icon: <Lock size={18} />,
                                title: 'Docker Container Isolation',
                                desc: 'All Patronum X services run in isolated Docker containers with defined resource limits and network policies. The database container is never exposed to external networks. Inter-container communication occurs over a private Docker bridge network. Only the Nginx reverse proxy container has external port exposure (80/443), creating a single point of ingress that can be monitored and secured.',
                                highlight: 'Network-isolated container architecture'
                            },
                            {
                                icon: <HardDrive size={18} />,
                                title: 'Data Storage Controls',
                                desc: 'Database volumes are persisted to designated storage locations that can be encrypted at the filesystem level using your organization\'s disk encryption solution. Backup procedures are documented and can be customized to comply with your organization\'s backup and disaster recovery policies. Media disposal procedures ensure secure deletion of data from decommissioned storage.',
                                highlight: 'Customer-controlled storage encryption'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[15px] font-black text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-3">{item.desc}</p>
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 rounded-lg">
                                            <CheckCircle size={12} className="text-violet-500" />
                                            <span className="text-[10px] font-black text-violet-600 uppercase tracking-wider">{item.highlight}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'baa',
            icon: <FileText size={22} />,
            title: 'Business Associate Agreement (BAA)',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patronum X provides a Business Associate Agreement (BAA) to all customers whose use of our platform involves the processing of Protected Health Information. The BAA is required under HIPAA when a Business Associate (Patronum X) creates, receives, maintains, or transmits PHI on behalf of a Covered Entity.
                    </p>
                    <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                        <p className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] mb-4">Our BAA Covers</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                'Permitted uses and disclosures of PHI',
                                'Obligation to implement appropriate safeguards',
                                'Reporting requirements for security incidents and breaches',
                                'Requirements for subcontractor agreements',
                                'Return or destruction of PHI upon termination',
                                'Access to PHI for amendment and accounting of disclosures',
                                'Compliance with the HIPAA Security Rule',
                                'Termination provisions for material breach'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                    <CheckCircle size={14} className="text-primary-500 shrink-0 mt-0.5" />
                                    <span className="text-[13px] text-primary-800 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        BAAs are included with all enterprise subscriptions. To request a BAA or review our standard BAA template, contact us at <a href="mailto:business@patronumx.com" className="text-primary-500 font-bold hover:underline">business@patronumx.com</a>.
                    </p>
                </div>
            )
        },
        {
            id: 'breach-notification',
            icon: <Bell size={22} />,
            title: 'Breach Notification Procedures',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patronum X maintains breach notification procedures in compliance with the HIPAA Breach Notification Rule (45 CFR Part 164, Subpart D). In the event of a breach of unsecured PHI, we follow a structured response process:
                    </p>
                    <div className="space-y-3">
                        {[
                            { step: '01', title: 'Detection & Assessment', desc: 'Our monitoring systems and audit logs enable rapid detection of potential breaches. Upon identification, our incident response team performs a risk assessment to determine whether the event constitutes a breach under HIPAA, applying the four-factor test prescribed by HHS.', time: 'Within 24 hours' },
                            { step: '02', title: 'Containment & Remediation', desc: 'Immediate steps are taken to contain the incident, including revoking compromised credentials, isolating affected systems, and patching vulnerabilities. Forensic evidence is preserved for investigation purposes.', time: 'Within 48 hours' },
                            { step: '03', title: 'Covered Entity Notification', desc: 'If a breach is confirmed, Patronum X notifies the affected Covered Entity without unreasonable delay and no later than 30 days after discovery. Notification includes the nature of the breach, types of PHI involved, steps taken to mitigate harm, and recommended actions.', time: 'Within 30 days' },
                            { step: '04', title: 'Documentation & Review', desc: 'All breaches are thoroughly documented, including the investigation findings, number of individuals affected, remediation actions taken, and process improvements implemented. A post-incident review is conducted to identify lessons learned and prevent recurrence.', time: 'Ongoing' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center shrink-0">
                                    <span className="text-[16px] font-black text-rose-500">{item.step}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-[14px] font-black text-slate-900">{item.title}</h4>
                                        <span className="px-2 py-0.5 bg-rose-50 text-rose-600 rounded-md text-[9px] font-black uppercase tracking-wider">{item.time}</span>
                                    </div>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'patient-rights',
            icon: <UserCheck size={22} />,
            title: 'Patient Rights',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patronum X supports Covered Entities in fulfilling their obligations under the HIPAA Privacy Rule regarding individual rights. Our platform is designed to facilitate the following patient rights:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            { right: 'Right to Access', desc: 'Our data export capabilities enable Covered Entities to provide patients with copies of their PHI maintained in our system upon request.' },
                            { right: 'Right to Amendment', desc: 'Patronum X supports data correction workflows that allow authorized users to amend patient records, with all changes tracked in the audit log.' },
                            { right: 'Right to Accounting of Disclosures', desc: 'Our comprehensive audit logging tracks all access to and disclosures of PHI, enabling Covered Entities to provide an accounting of disclosures upon request.' },
                            { right: 'Right to Request Restrictions', desc: 'The RBAC system and workflow configuration allow Covered Entities to implement restrictions on the use or disclosure of PHI as requested by patients.' },
                            { right: 'Right to Confidential Communications', desc: 'Our role-based access controls ensure PHI is only communicated through authorized channels to authorized personnel.' },
                            { right: 'Right to Complain', desc: 'Patients may direct complaints about PHI handling to their healthcare provider (Covered Entity) or directly to the HHS Office for Civil Rights.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                                <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-[13px] font-black text-slate-800">{item.right}</p>
                                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'contact',
            icon: <Mail size={22} />,
            title: 'Compliance Contact',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        For questions about our HIPAA compliance program, to request a BAA, to report a potential security incident, or to request our compliance documentation, please contact our Security and Compliance team:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: <Mail size={18} />, label: 'Email', value: 'business@patronumx.com', href: 'mailto:business@patronumx.com' },
                            { icon: <Phone size={18} />, label: 'Phone', value: '+92 303 5921629', href: 'tel:+923035921629' },
                            { icon: <FileText size={18} />, label: 'Address', value: 'PATRONUM X (PRIVATE) LIMITED\nIslamabad, Pakistan', href: null }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 text-center">
                                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 mx-auto mb-3">
                                    {item.icon}
                                </div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                                {item.href ? (
                                    <a href={item.href} className="text-[14px] font-bold text-primary-500 hover:underline whitespace-pre-line">{item.value}</a>
                                ) : (
                                    <p className="text-[14px] font-bold text-slate-700 whitespace-pre-line">{item.value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-bg-main font-sans overflow-x-hidden selection:bg-primary-100 selection:text-primary-900">
            {/* Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[45%] bg-primary-500/8 blur-[150px] rounded-full animate-pulse" style={{ animationDuration: '15s' }}></div>
                <div className="absolute bottom-[10%] left-[-5%] w-[35%] h-[35%] bg-accent-500/5 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-0 background-grid opacity-[0.08]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-3xl border-b border-primary-100/20">
                <div className="max-w-[1400px] mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
                    <div className="flex items-center cursor-pointer group" onClick={() => navigate('/')}>
                        <NexalithLogo size={0.7} theme="light" />
                    </div>
                    <div className="hidden lg:flex items-center gap-12">
                        {[
                            { label: 'Solutions', path: '/solutions' },
                            { label: 'Platform', path: '/platform' },
                            { label: 'Pricing', path: '/pricing' },
                            { label: 'Security', path: '/security' },
                            { label: 'About', path: '/about' },
                        ].map((item) => (
                            <button key={item.path} onClick={() => navigate(item.path)} className="text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group/link bg-transparent border-none cursor-pointer text-slate-600 hover:text-primary-600">
                                {item.label}
                                <span className="absolute -bottom-1.5 left-0 h-0.5 bg-primary-600 transition-all duration-300 w-0 group-hover/link:w-full"></span>
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate('/login')} className="bg-slate-950 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg shadow-slate-950/15 transition-all active:scale-95">
                            Sign In
                        </button>
                    </div>
                </div>
            </nav>

            <main className="pt-40 pb-32">
                <div className="max-w-[900px] mx-auto px-8 md:px-12">
                    {/* Hero */}
                    <div className="text-center space-y-8 mb-20">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm rounded-full border border-primary-100/60">
                            <Shield size={14} className="text-primary-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Compliance</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[0.9]">
                            HIPAA Compliance
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed tracking-tight">
                            Patronum X is engineered to meet the rigorous requirements of HIPAA. From field-level encryption to comprehensive audit logging, every component of our platform is designed to protect Protected Health Information.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {['AES-256 Encryption', 'Audit Logging', 'RBAC', 'BAA Available', 'On-Premise Option'].map(tag => (
                                <span key={tag} className="px-3 py-1.5 bg-white border border-primary-100 rounded-lg text-[9px] font-black uppercase tracking-wider text-primary-600 shadow-sm">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-8">
                        {sections.map((section, i) => (
                            <div key={i} id={section.id} className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 hover:shadow-lg transition-all duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight">{section.title}</h2>
                                </div>
                                {section.content}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 bg-slate-950 rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4">Need our compliance documentation?</h2>
                            <p className="text-slate-400 font-medium text-lg mb-8 max-w-xl mx-auto">
                                We are happy to share our full HIPAA compliance documentation, risk assessment summaries, and BAA template.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="mailto:business@patronumx.com" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg shadow-primary-500/25 transition-all active:scale-95 flex items-center gap-2 no-underline">
                                    <Mail size={16} />
                                    Request BAA
                                </a>
                                <button onClick={() => navigate('/security')} className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 hover:bg-white/20 flex items-center gap-2">
                                    Security Overview <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 py-20 mt-40 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
                        <div className="lg:col-span-4 space-y-6">
                            <NexalithLogo size={0.55} theme="dark" />
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">Empowering healthcare providers with intelligent revenue cycle management.</p>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.25em] opacity-40">Platform</h4>
                                <ul className="space-y-3">
                                    {[{ l: 'Solutions', p: '/solutions' }, { l: 'Platform', p: '/platform' }, { l: 'Pricing', p: '/pricing' }, { l: 'Security', p: '/security' }].map(item => (
                                        <li key={item.l}><button onClick={() => navigate(item.p)} className="text-sm font-medium text-slate-500 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0">{item.l}</button></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.25em] opacity-40">Company</h4>
                                <ul className="space-y-3">
                                    {[{ l: 'About', p: '/about' }, { l: 'Contact', p: '/contact' }, { l: 'Privacy', p: '/privacy' }, { l: 'Terms', p: '/terms' }].map(item => (
                                        <li key={item.l}><button onClick={() => navigate(item.p)} className="text-sm font-medium text-slate-500 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0">{item.l}</button></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="hidden sm:block space-y-4">
                                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.25em] opacity-40">Contact</h4>
                                <div className="space-y-3 text-sm font-medium text-slate-500">
                                    <p>Islamabad, Pakistan</p>
                                    <p className="text-white">+92 303 5921629</p>
                                    <p className="text-primary-400">business@patronumx.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.25em]">&copy; 2026 Patronum X</p>
                        <div className="flex items-center gap-6">
                            {[{ l: 'Privacy', p: '/privacy' }, { l: 'Terms', p: '/terms' }, { l: 'HIPAA', p: '/hipaa' }].map(item => (
                                <button key={item.l} onClick={() => navigate(item.p)} className="text-[10px] font-black text-slate-600 hover:text-white uppercase tracking-[0.2em] bg-transparent border-none cursor-pointer p-0 transition-colors">{item.l}</button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">All Systems Operational</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Hipaa;

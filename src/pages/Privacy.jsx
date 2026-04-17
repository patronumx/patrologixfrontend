import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Shield,
    Lock,
    Eye,
    Database,
    UserCheck,
    Clock,
    Share2,
    FileText,
    Mail,
    Phone,
    AlertCircle,
    CheckCircle,
    Server,
    Key,
    Users,
    ArrowRight
} from 'lucide-react';
import NexalithLogo from '../components/NexalithLogo';

const Privacy = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'information-collected',
            icon: <Database size={22} />,
            title: '1. Information We Collect',
            content: (
                <div className="space-y-6">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patronum X collects information necessary to provide our medical billing workflow management services. We collect information in the following categories:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            {
                                label: 'Account Information',
                                items: ['Full name and job title', 'Business email address', 'Organization name', 'Role and department', 'Login credentials (hashed)']
                            },
                            {
                                label: 'Billing & Claims Data',
                                items: ['Patient demographics (encrypted)', 'Insurance information (encrypted)', 'CPT and ICD codes', 'Claim status and history', 'Payment and remittance data']
                            },
                            {
                                label: 'Usage & Technical Data',
                                items: ['Login timestamps and IP addresses', 'Feature usage patterns', 'Browser and device information', 'Audit trail actions', 'Session duration metrics']
                            }
                        ].map((category, i) => (
                            <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                                <p className="text-[10px] font-black text-primary-500 uppercase tracking-[0.2em] mb-3">{category.label}</p>
                                <ul className="space-y-2">
                                    {category.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                            <CheckCircle size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                                            <span className="text-[13px] text-slate-600 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'how-we-use',
            icon: <Eye size={22} />,
            title: '2. How We Use Your Information',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        We use collected information solely for the purposes of delivering, maintaining, and improving our medical billing platform. Specifically:
                    </p>
                    <div className="space-y-3">
                        {[
                            { purpose: 'Service Delivery', desc: 'Processing and routing claims through our workflow engine, managing user accounts, and providing role-based dashboard access.' },
                            { purpose: 'Security & Fraud Prevention', desc: 'Monitoring for unauthorized access, enforcing multi-factor authentication, maintaining audit trails, and detecting anomalous activity.' },
                            { purpose: 'Regulatory Compliance', desc: 'Meeting HIPAA requirements for Protected Health Information (PHI), maintaining audit logs, and supporting breach notification obligations.' },
                            { purpose: 'Platform Improvement', desc: 'Analyzing aggregated, de-identified usage patterns to improve workflow efficiency, user interface design, and system performance.' },
                            { purpose: 'Communication', desc: 'Sending account-related notifications, security alerts, service updates, and responding to support requests.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle size={14} className="text-primary-500" />
                                </div>
                                <div>
                                    <p className="text-[14px] font-black text-slate-800 mb-1">{item.purpose}</p>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'data-protection',
            icon: <Lock size={22} />,
            title: '3. Data Protection Measures',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patronum X employs industry-leading security measures to protect your data at every layer of our platform:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { icon: <Key size={18} />, title: 'Encryption at Rest', desc: 'All PHI fields are encrypted using PostgreSQL PGCrypto with AES-256 field-level encryption. Sensitive data is never stored in plaintext.' },
                            { icon: <Shield size={18} />, title: 'Encryption in Transit', desc: 'All data transmitted between clients and servers is protected via TLS 1.2+ encryption through our Nginx reverse proxy.' },
                            { icon: <Users size={18} />, title: 'Access Controls', desc: 'Role-Based Access Control (RBAC) with five distinct roles ensures users only access data necessary for their function.' },
                            { icon: <Server size={18} />, title: 'Infrastructure Security', desc: 'Dockerized deployment with internal network isolation. Only the reverse proxy is exposed to the host network.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[14px] font-black text-slate-800 mb-1">{item.title}</p>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'phi-handling',
            icon: <Shield size={22} />,
            title: '4. Protected Health Information (PHI)',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        As a platform that processes medical billing data, Patronum X handles Protected Health Information (PHI) in strict accordance with the Health Insurance Portability and Accountability Act (HIPAA).
                    </p>
                    <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                        <p className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] mb-3">PHI Safeguards</p>
                        <div className="space-y-2.5">
                            {[
                                'Patient names, dates of birth, SSNs, and insurance IDs are encrypted at the field level using PGCrypto',
                                'PHI is only accessible to users with appropriate RBAC permissions for their workflow stage',
                                'All access to PHI-containing records is logged in our audit trail with user attribution and timestamps',
                                'PHI is never included in system logs, error reports, or analytics data',
                                'We execute Business Associate Agreements (BAAs) with all customers who process PHI through our platform',
                                'Breach notification procedures comply with the HIPAA Breach Notification Rule (45 CFR Part 164, Subpart D)'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                    <CheckCircle size={14} className="text-primary-500 shrink-0 mt-0.5" />
                                    <span className="text-[13px] text-primary-800 font-medium leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        For a comprehensive overview of our HIPAA compliance program, please visit our <button onClick={() => navigate('/hipaa')} className="text-primary-500 font-black hover:underline bg-transparent border-none cursor-pointer p-0">HIPAA Compliance</button> page.
                    </p>
                </div>
            )
        },
        {
            id: 'data-retention',
            icon: <Clock size={22} />,
            title: '5. Data Retention',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        We retain data only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and support legitimate business operations.
                    </p>
                    <div className="space-y-3">
                        {[
                            { type: 'Active Account Data', period: 'Duration of service agreement', detail: 'All account, claims, and workflow data is retained while your subscription is active.' },
                            { type: 'Claims & Billing Records', period: 'Minimum 7 years after claim closure', detail: 'In accordance with healthcare record retention requirements and payer audit timelines.' },
                            { type: 'Audit Logs', period: '6 years from date of creation', detail: 'HIPAA requires audit logs to be retained for a minimum of six years.' },
                            { type: 'Post-Termination Data', period: '90 days after account closure', detail: 'After termination, data is available for export for 90 days, after which it is securely deleted.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <Clock size={14} className="text-amber-500" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <p className="text-[14px] font-black text-slate-800">{item.type}</p>
                                        <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded-md text-[10px] font-black uppercase tracking-wider">{item.period}</span>
                                    </div>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'third-party',
            icon: <Share2 size={22} />,
            title: '6. Third-Party Sharing',
            content: (
                <div className="space-y-4">
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <Shield size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[14px] font-black text-emerald-800 mb-1">We do not sell your data. Period.</p>
                                <p className="text-[13px] text-emerald-700 font-medium leading-relaxed">
                                    Patronum X will never sell, rent, lease, or trade your personal information or Protected Health Information to third parties for marketing or any other purpose.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        We may share limited information only in the following circumstances:
                    </p>
                    <div className="space-y-2.5">
                        {[
                            { scenario: 'Service Providers', desc: 'We may engage subprocessors who assist in operating our platform (e.g., infrastructure hosting). All subprocessors are bound by BAAs and equivalent data protection obligations.' },
                            { scenario: 'Legal Requirements', desc: 'We may disclose information when required by law, subpoena, court order, or other legal process, or when necessary to protect the rights, property, or safety of Patronum X or others.' },
                            { scenario: 'With Your Consent', desc: 'We may share data with third parties when you have explicitly authorized such sharing, such as clearinghouse integrations or payer portal connections configured by your organization.' },
                            { scenario: 'Business Transfers', desc: 'In the event of a merger, acquisition, or sale of assets, your data may be transferred. We will notify you and provide options before any such transfer of PHI.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <AlertCircle size={16} className="text-slate-400 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-[14px] font-black text-slate-800 mb-1">{item.scenario}</p>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'your-rights',
            icon: <UserCheck size={22} />,
            title: '7. Your Rights',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Depending on your jurisdiction and the nature of the data, you may have the following rights regarding your personal information:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            { right: 'Right to Access', desc: 'Request a copy of the personal data we hold about you.' },
                            { right: 'Right to Correction', desc: 'Request correction of inaccurate or incomplete personal data.' },
                            { right: 'Right to Deletion', desc: 'Request deletion of your personal data, subject to legal retention requirements.' },
                            { right: 'Right to Data Portability', desc: 'Request your data in a structured, machine-readable format for transfer.' },
                            { right: 'Right to Restrict Processing', desc: 'Request that we limit how we use your data in certain circumstances.' },
                            { right: 'Right to Withdraw Consent', desc: 'Withdraw consent for optional data processing activities at any time.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <CheckCircle size={14} className="text-primary-500 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-[13px] font-black text-slate-800">{item.right}</p>
                                    <p className="text-[12px] text-slate-500 font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        To exercise any of these rights, please contact our Privacy Officer at <a href="mailto:business@patronumx.com" className="text-primary-500 font-bold hover:underline">business@patronumx.com</a>. We will respond to all requests within 30 days.
                    </p>
                </div>
            )
        },
        {
            id: 'contact',
            icon: <Mail size={22} />,
            title: '8. Contact Us',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        If you have questions about this Privacy Policy, our data practices, or wish to exercise your privacy rights, please contact us:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: <Mail size={18} />, label: 'Email', value: 'business@patronumx.com', href: 'mailto:business@patronumx.com' },
                            { icon: <Phone size={18} />, label: 'Phone', value: '+92 303 5921629', href: 'tel:+923035921629' },
                            { icon: <FileText size={18} />, label: 'Address', value: 'PATRONUM X (PRIVATE) LIMITED\nIslamabad, Pakistan', href: null }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100 text-center">
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
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Legal</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[0.9]">
                            Privacy Policy
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed tracking-tight">
                            How Patronum X collects, uses, protects, and handles your data. We are committed to transparency and the protection of your personal information and Protected Health Information.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            <span>Last Updated: April 2026</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>PATRONUM X (PRIVATE) LIMITED</span>
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
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4">Privacy questions?</h2>
                            <p className="text-slate-400 font-medium text-lg mb-8 max-w-xl mx-auto">
                                Our team is here to answer any questions about how we handle your data.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="mailto:business@patronumx.com" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg shadow-primary-500/25 transition-all active:scale-95 flex items-center gap-2 no-underline">
                                    <Mail size={16} />
                                    Contact Privacy Team
                                </a>
                                <button onClick={() => navigate('/hipaa')} className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 hover:bg-white/20 flex items-center gap-2">
                                    HIPAA Compliance <ArrowRight size={16} />
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

export default Privacy;

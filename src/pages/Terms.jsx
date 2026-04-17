import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FileText,
    Shield,
    UserCheck,
    AlertTriangle,
    Database,
    Clock,
    Scale,
    XCircle,
    Gavel,
    RefreshCw,
    Mail,
    Phone,
    CheckCircle,
    ArrowRight,
    Server,
    Lock
} from 'lucide-react';
import NexalithLogo from '../components/NexalithLogo';

const Terms = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: 'acceptance',
            icon: <CheckCircle size={22} />,
            title: '1. Acceptance of Terms',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        By accessing or using the Patronum X platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you (whether personally or on behalf of an entity, "you") and PATRONUM X (PRIVATE) LIMITED ("Patronum X", "we", "us", or "our"), a company headquartered in Islamabad, Pakistan.
                    </p>
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                            <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-[13px] text-amber-800 font-medium leading-relaxed">
                                If you do not agree to all of these Terms, you are not authorized to access or use the Service. Your continued use of the Service following the posting of any changes to these Terms constitutes acceptance of those changes.
                            </p>
                        </div>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        These Terms apply to all users of the Service, including administrators, billing staff, managers, and any other individuals authorized by your organization to access the platform.
                    </p>
                </div>
            )
        },
        {
            id: 'service-description',
            icon: <Server size={22} />,
            title: '2. Service Description',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patrologix is a medical billing workflow management platform designed for healthcare revenue cycle management (RCM). The Service provides:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            { feature: 'Claim Lifecycle Management', desc: 'Automated routing of medical claims through intake, charge entry, submission, payment posting, and denial management stages.' },
                            { feature: 'Workflow Automation', desc: 'FIFO queue-based task distribution, SLA monitoring, stuck job detection, and automated status transitions.' },
                            { feature: 'Role-Based Dashboards', desc: 'Specialized interfaces for administrators, managers, team leads, billing staff, and payment posters.' },
                            { feature: 'Reporting & Analytics', desc: 'AR aging analysis, collection rate tracking, denial rate monitoring, and per-staff performance metrics.' },
                            { feature: 'Security Infrastructure', desc: 'HIPAA-compliant data handling with field-level encryption, audit logging, MFA, and role-based access controls.' },
                            { feature: 'Integration Capabilities', desc: 'RESTful API endpoints for clearinghouse connectivity, payer portal integration, and third-party system interoperability.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-[13px] font-black text-slate-800">{item.feature}</p>
                                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        The specific features available to you depend on your subscription plan and deployment type (cloud-hosted or on-premise).
                    </p>
                </div>
            )
        },
        {
            id: 'account-responsibilities',
            icon: <UserCheck size={22} />,
            title: '3. Account Responsibilities',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        When you create an account on Patrologix, you agree to the following responsibilities:
                    </p>
                    <div className="space-y-3">
                        {[
                            { duty: 'Accurate Information', desc: 'You must provide accurate, current, and complete registration information and keep it updated throughout the duration of your use.' },
                            { duty: 'Credential Security', desc: 'You are responsible for maintaining the confidentiality of your login credentials, including enabling and using multi-factor authentication (MFA) when required by your organization.' },
                            { duty: 'Authorized Use', desc: 'You must not share your account credentials with others. Each user must have their own individual account. You are responsible for all activity that occurs under your account.' },
                            { duty: 'Prompt Notification', desc: 'You must notify Patronum X immediately of any unauthorized access or use of your account, or any other breach of security, at business@patronumx.com.' },
                            { duty: 'Administrator Obligations', desc: 'Organization administrators are responsible for managing user access, assigning appropriate roles, deactivating departed employees, and ensuring their team complies with these Terms.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle size={14} className="text-primary-500" />
                                </div>
                                <div>
                                    <p className="text-[14px] font-black text-slate-800 mb-1">{item.duty}</p>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'acceptable-use',
            icon: <Shield size={22} />,
            title: '4. Acceptable Use',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        You agree to use the Service only for its intended purpose: managing medical billing workflows for legitimate healthcare revenue cycle operations. You agree not to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            'Use the Service for any unlawful purpose or in violation of any applicable regulations, including HIPAA',
                            'Attempt to gain unauthorized access to other accounts, systems, or networks connected to the Service',
                            'Upload, transmit, or distribute malicious code, viruses, or any other harmful technology',
                            'Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Service',
                            'Use automated means (bots, scrapers, crawlers) to access the Service without written permission',
                            'Circumvent, disable, or interfere with security features, including RBAC restrictions and audit logging',
                            'Submit fraudulent claims data or use the platform to facilitate healthcare fraud',
                            'Sublicense, resell, or redistribute access to the Service without a written reseller agreement'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5 p-3 bg-rose-50/50 rounded-xl border border-rose-100/50">
                                <XCircle size={14} className="text-rose-500 shrink-0 mt-0.5" />
                                <span className="text-[13px] text-slate-600 font-medium leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Violation of acceptable use policies may result in immediate suspension or termination of your access without notice or refund.
                    </p>
                </div>
            )
        },
        {
            id: 'data-ownership',
            icon: <Database size={22} />,
            title: '5. Data Ownership',
            content: (
                <div className="space-y-4">
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <Database size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[14px] font-black text-emerald-800 mb-1">Your data belongs to you.</p>
                                <p className="text-[13px] text-emerald-700 font-medium leading-relaxed">
                                    Patronum X does not claim ownership over any data you or your users submit to the Service. All claims data, patient information, billing records, and organizational data remain your property.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {[
                            { point: 'Customer Data', desc: 'You retain all rights, title, and interest in your data. We process your data solely to provide the Service as described in these Terms and our Privacy Policy.' },
                            { point: 'License to Operate', desc: 'By submitting data to the Service, you grant Patronum X a limited, non-exclusive license to process, store, and transmit your data solely for the purpose of providing and improving the Service.' },
                            { point: 'Data Export', desc: 'You may export your data at any time through the platform\'s reporting features or by requesting a data export from our support team. We support standard formats including CSV and JSON.' },
                            { point: 'Data Deletion', desc: 'Upon termination of your account, you may request deletion of your data. We will comply within 90 days, subject to legal retention requirements for healthcare records.' },
                            { point: 'Aggregated Data', desc: 'We may create anonymized, aggregated statistical data from your use of the Service. Such data cannot identify you or any individual and may be used to improve our platform.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <CheckCircle size={14} className="text-primary-500 shrink-0 mt-1" />
                                <div>
                                    <p className="text-[14px] font-black text-slate-800 mb-1">{item.point}</p>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'service-availability',
            icon: <Clock size={22} />,
            title: '6. Service Availability & SLA',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patronum X strives to maintain high availability for all customers. Our service level commitments are as follows:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { metric: '99.9%', label: 'Uptime Target', desc: 'For cloud-hosted deployments, measured monthly excluding scheduled maintenance.' },
                            { metric: '< 1hr', label: 'Critical Response', desc: 'Response time for severity-1 issues affecting all users or data integrity.' },
                            { metric: '24hr', label: 'Maintenance Notice', desc: 'Advance notice for scheduled maintenance windows, typically performed off-hours.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100 text-center">
                                <p className="text-3xl font-black text-slate-900 tracking-tight">{item.metric}</p>
                                <p className="text-[11px] font-black text-primary-500 uppercase tracking-wider mt-1">{item.label}</p>
                                <p className="text-[12px] text-slate-500 font-medium mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        For on-premise deployments, service availability is the responsibility of the customer's infrastructure team. Patronum X provides deployment documentation, Docker configurations, and technical support to assist with uptime management.
                    </p>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patronum X is not liable for downtime caused by factors outside our reasonable control, including internet service disruptions, force majeure events, or third-party service failures.
                    </p>
                </div>
            )
        },
        {
            id: 'limitation-liability',
            icon: <Scale size={22} />,
            title: '7. Limitation of Liability',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        To the maximum extent permitted by applicable law:
                    </p>
                    <div className="space-y-3">
                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Disclaimer of Warranties</p>
                            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                                The Service is provided on an "as is" and "as available" basis. Patronum X disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or completely secure.
                            </p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Limitation of Damages</p>
                            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                                In no event shall Patronum X, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunity, arising out of or related to your use of the Service, regardless of the theory of liability.
                            </p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Liability Cap</p>
                            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                                Patronum X's total cumulative liability to you for all claims arising from or related to the Service shall not exceed the total amount paid by you to Patronum X during the twelve (12) months immediately preceding the event giving rise to the claim.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'termination',
            icon: <XCircle size={22} />,
            title: '8. Termination',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Either party may terminate the service relationship under the following conditions:
                    </p>
                    <div className="space-y-3">
                        {[
                            { type: 'Termination by You', desc: 'You may terminate your account at any time by providing 30 days written notice to business@patronumx.com. You remain responsible for any fees incurred prior to the effective termination date.' },
                            { type: 'Termination by Patronum X', desc: 'We may suspend or terminate your access immediately if you breach these Terms, fail to pay fees when due, engage in fraudulent or illegal activity, or if continued service poses a security or compliance risk.' },
                            { type: 'Effect of Termination', desc: 'Upon termination, your right to access the Service ceases immediately. Your data will be available for export for 90 days following termination. After this period, data will be securely deleted in accordance with our data retention policy.' },
                            { type: 'Survival', desc: 'Sections related to data ownership, limitation of liability, governing law, and any accrued payment obligations shall survive termination of these Terms.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-[12px] font-black text-slate-500">{String.fromCharCode(65 + i)}</span>
                                </div>
                                <div>
                                    <p className="text-[14px] font-black text-slate-800 mb-1">{item.type}</p>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'governing-law',
            icon: <Gavel size={22} />,
            title: '9. Governing Law',
            content: (
                <div className="space-y-4">
                    <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                        <p className="text-[13px] text-primary-800 font-medium leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in Islamabad, Pakistan, and the parties hereby consent to personal jurisdiction and venue therein.
                        </p>
                    </div>
                    <div className="space-y-2.5">
                        {[
                            'Disputes shall first be attempted to be resolved through good-faith negotiation between the parties for a period of 30 days.',
                            'If negotiation fails, disputes may be submitted to binding arbitration under the rules of the American Arbitration Association (AAA).',
                            'Nothing in these Terms prevents either party from seeking injunctive relief in court to prevent irreparable harm.',
                            'The prevailing party in any legal action shall be entitled to recover reasonable attorneys\' fees and costs.'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                                <CheckCircle size={14} className="text-primary-500 shrink-0 mt-0.5" />
                                <span className="text-[13px] text-slate-600 font-medium leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'changes',
            icon: <RefreshCw size={22} />,
            title: '10. Changes to Terms',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Patronum X reserves the right to modify these Terms at any time. When we make changes, we will:
                    </p>
                    <div className="space-y-2.5">
                        {[
                            'Update the "Last Updated" date at the top of this page',
                            'Notify account administrators via email at least 30 days before material changes take effect',
                            'Post a notice within the platform dashboard for all active users',
                            'Provide a summary of changes and their impact on your use of the Service'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                                <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span className="text-[13px] text-slate-600 font-medium leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Your continued use of the Service after the effective date of any modifications constitutes acceptance of the revised Terms. If you do not agree to the updated Terms, you must stop using the Service and may terminate your account as described in Section 8.
                    </p>
                </div>
            )
        },
        {
            id: 'contact',
            icon: <Mail size={22} />,
            title: '11. Contact Information',
            content: (
                <div className="space-y-4">
                    <p className="text-slate-500 font-medium leading-relaxed">
                        For questions about these Terms of Service, please contact us:
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
                            <FileText size={14} className="text-primary-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Legal</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[0.9]">
                            Terms of Service
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed tracking-tight">
                            The terms and conditions governing your use of the Patronum X medical billing workflow management platform. Please read these terms carefully before using our Service.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            <span>Effective: April 2026</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>PATRONUM X (PRIVATE) LIMITED</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>Islamabad, PK</span>
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
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4">Have questions about our terms?</h2>
                            <p className="text-slate-400 font-medium text-lg mb-8 max-w-xl mx-auto">
                                Our legal team is happy to clarify any part of these terms or discuss enterprise agreements.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="mailto:business@patronumx.com" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg shadow-primary-500/25 transition-all active:scale-95 flex items-center gap-2 no-underline">
                                    <Mail size={16} />
                                    Contact Legal Team
                                </a>
                                <button onClick={() => navigate('/privacy')} className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 hover:bg-white/20 flex items-center gap-2">
                                    Privacy Policy <ArrowRight size={16} />
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

export default Terms;

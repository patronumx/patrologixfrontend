import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    HeartPulse,
    Target,
    Users,
    Zap,
    Activity,
    Award,
    CheckCircle,
    Shield,
    Globe,
    Clock,
    Building2,
    MapPin,
    Phone,
    Mail,
    TrendingUp,
    Database,
    Layers,
    FileText,
    DollarSign,
    Lock,
    Cpu,
    BarChart
} from 'lucide-react';
import NexalithLogo from '../components/NexalithLogo';

const About = () => {
    const navigate = useNavigate();

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
                            <button key={item.path} onClick={() => navigate(item.path)} className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group/link bg-transparent border-none cursor-pointer ${item.path === '/about' ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}>
                                {item.label}
                                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${item.path === '/about' ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
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
                <div className="max-w-[1200px] mx-auto px-8 md:px-12">
                    {/* Hero */}
                    <div className="text-center space-y-8 mb-24">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm rounded-full border border-primary-100/60">
                            <HeartPulse size={14} className="text-primary-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">About Patronum X</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[0.9]">
                            Healthcare deserves <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">better billing.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed tracking-tight">
                            We build the infrastructure that lets healthcare providers focus on patients instead of paperwork. Patronum X automates the operational chaos of revenue cycle management so your team can do what they do best.
                        </p>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
                        <div className="bg-white rounded-3xl border border-slate-100 p-10 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-4">Our Mission</h3>
                            <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-4">
                                To eliminate the operational bottlenecks that prevent healthcare billing teams from working at their full potential. Every lost claim, missed SLA, and manual handoff represents revenue left on the table and patients waiting longer for resolution.
                            </p>
                            <p className="text-slate-500 font-medium leading-relaxed text-[16px]">
                                Patronum X was built by people who have seen firsthand how chaotic medical billing operations can be — claims lost between departments, Excel spreadsheets used as workflow tools, and no visibility into where things are stuck. We built the solution we wished existed.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl border border-slate-100 p-10 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-6">
                                <TrendingUp size={28} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-4">Our Vision</h3>
                            <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-4">
                                A world where every medical claim is processed efficiently, every denial is systematically resolved, and every healthcare provider gets paid for the care they deliver — on time, every time.
                            </p>
                            <p className="text-slate-500 font-medium leading-relaxed text-[16px]">
                                We envision Patronum X as the standard operating system for medical billing — the platform that billing companies, hospitals, and healthcare groups rely on to orchestrate their entire revenue cycle from a single pane of glass.
                            </p>
                        </div>
                    </div>

                    {/* The Problem We Solve */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">The Problem</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                Medical billing is broken
                            </h2>
                            <p className="max-w-2xl mx-auto text-slate-500 font-medium mt-6 text-lg leading-relaxed">
                                The average medical billing operation loses 5-10% of revenue to preventable errors, missed follow-ups, and workflow inefficiencies. Here's what we fix.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    problem: 'Lost Claims',
                                    desc: 'Claims slip through cracks between departments. With manual handoffs, there is no system ensuring every claim reaches the next stage.',
                                    solution: 'Auto-routing on every status change. Zero manual handoffs. FIFO queue distribution.',
                                    icon: <FileText size={22} />
                                },
                                {
                                    problem: 'SLA Violations',
                                    desc: 'Without automated tracking, claims sit idle for days or weeks. Teams don\'t know which claims are aging until it\'s too late.',
                                    solution: 'Per-stage SLA thresholds with real-time alerts. Stuck job detection every 5 minutes.',
                                    icon: <Clock size={22} />
                                },
                                {
                                    problem: 'Denial Pileup',
                                    desc: 'Denied claims lack a systematic resolution process. They accumulate without structured follow-up, appeals, or escalation paths.',
                                    solution: 'Dedicated denial management stage with appeal tracking, resubmission, and write-off workflows.',
                                    icon: <Activity size={22} />
                                },
                                {
                                    problem: 'No Visibility',
                                    desc: 'Managers can\'t see where claims are, who\'s working on what, or which payers are causing the most denials. Decisions are made blind.',
                                    solution: 'Real-time dashboards with AR aging, collection rates, denial rates, and per-staff performance.',
                                    icon: <BarChart size={22} />
                                },
                                {
                                    problem: 'Compliance Risk',
                                    desc: 'Without proper audit trails and encryption, organizations risk HIPAA violations. Manual processes leave gaps in traceability.',
                                    solution: 'Field-level encryption, complete audit trail, role-based access, and BAA-ready infrastructure.',
                                    icon: <Shield size={22} />
                                },
                                {
                                    problem: 'Uneven Workloads',
                                    desc: 'Some staff are overloaded while others are idle. Without fair distribution, burnout and errors increase across the team.',
                                    solution: 'FIFO queue distribution with per-user performance tracking and time-per-task metrics.',
                                    icon: <Users size={22} />
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-xl transition-all duration-500 group">
                                    <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 mb-5 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-all">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-[16px] font-black text-slate-950 tracking-tight mb-2">{item.problem}</h4>
                                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-4">{item.desc}</p>
                                    <div className="pt-4 border-t border-slate-50">
                                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-wider mb-1">Our Solution</p>
                                        <p className="text-[13px] text-slate-600 font-medium leading-relaxed">{item.solution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Platform by the Numbers */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">By The Numbers</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                What Patronum X delivers
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {[
                                { metric: '5', label: 'Automated Stages', desc: 'End-to-end claim lifecycle', icon: <Layers size={20} /> },
                                { metric: '17', label: 'Status Tracking Points', desc: 'Complete visibility', icon: <Activity size={20} /> },
                                { metric: '5', label: 'Role Dashboards', desc: 'Purpose-built for each team', icon: <Users size={20} /> },
                                { metric: '15+', label: 'API Endpoints', desc: 'Full RESTful coverage', icon: <Database size={20} /> },
                                { metric: '0', label: 'Manual Handoffs', desc: 'Fully automated routing', icon: <Zap size={20} /> },
                                { metric: '24/7', label: 'Async Processing', desc: 'Celery background workers', icon: <Cpu size={20} /> },
                                { metric: '100%', label: 'Audit Coverage', desc: 'Every action logged', icon: <Shield size={20} /> },
                                { metric: '4', label: 'Encrypted Fields', desc: 'PHI protected at rest', icon: <Lock size={20} /> },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 text-center hover:shadow-lg hover:border-primary-100 transition-all duration-500 group">
                                    <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <p className="text-3xl font-black text-slate-900 tracking-tight">{item.metric}</p>
                                    <p className="text-[11px] font-black text-slate-600 tracking-tight mt-1">{item.label}</p>
                                    <p className="text-[10px] font-medium text-slate-400 mt-0.5">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Patronum X */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">Why Patronum X</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                What makes us different
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Zap size={28} />,
                                    title: 'Zero Manual Handoffs',
                                    desc: 'Most billing platforms still require someone to manually assign claims to the next team. Patronum X eliminates this entirely. Every status change triggers automatic routing to the correct department. No emails, no Slack messages, no missed assignments.',
                                    highlight: 'Claims never get lost between departments.'
                                },
                                {
                                    icon: <Activity size={28} />,
                                    title: 'Real-Time Visibility',
                                    desc: 'Operations managers see every claim across every stage. SLA alerts catch problems before they become revenue leaks. AR aging buckets show exactly where money is sitting. Staff performance metrics identify bottlenecks and training opportunities.',
                                    highlight: 'Know the status of every dollar, in real time.'
                                },
                                {
                                    icon: <Award size={28} />,
                                    title: 'Staff Accountability',
                                    desc: 'Per-user performance tracking with time-per-task metrics. FIFO queue distribution ensures fair workloads. Every action is attributed and timestamped. Managers can see exactly how long each stage takes and who is processing what.',
                                    highlight: 'Fair distribution. Clear metrics. No guesswork.'
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-xl transition-all duration-500 group">
                                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-slate-950 tracking-tight mb-4">{item.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[15px] mb-4">{item.desc}</p>
                                    <div className="pt-4 border-t border-slate-50">
                                        <p className="text-[14px] font-black text-primary-600">{item.highlight}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Who We Serve */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">Who We Serve</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                Built for healthcare billing teams
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'Medical Billing Companies',
                                    desc: 'Third-party billing services managing claims for multiple healthcare providers across specialties. Patronum X handles the operational complexity of multi-payer, multi-specialty billing at scale.',
                                    icon: <Building2 size={24} />,
                                    fit: 'Perfect for teams of 5-50 billing staff'
                                },
                                {
                                    title: 'Hospital Revenue Cycle Teams',
                                    desc: 'In-house billing departments at hospitals and health systems. Manage the full claim lifecycle from patient registration through final payment collection with complete audit compliance.',
                                    icon: <HeartPulse size={24} />,
                                    fit: 'Enterprise deployments with on-premise hosting'
                                },
                                {
                                    title: 'Specialty Practice Groups',
                                    desc: 'Multi-location specialty practices (surgery, radiology, laboratory) with complex coding requirements. Patronum X supports 8+ specialties with payer-specific billing rules.',
                                    icon: <Users size={24} />,
                                    fit: 'Specialty-specific workflow customization'
                                },
                                {
                                    title: 'RCM Consulting Firms',
                                    desc: 'Revenue cycle management consultants who need a platform to deploy for their healthcare clients. White-label ready architecture with role-based access for client organizations.',
                                    icon: <Globe size={24} />,
                                    fit: 'Multi-tenant capable for client management'
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-xl transition-all duration-500 group">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 shrink-0 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-black text-slate-950 tracking-tight mb-3">{item.title}</h3>
                                            <p className="text-slate-500 font-medium leading-relaxed text-[15px] mb-4">{item.desc}</p>
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 rounded-lg">
                                                <CheckCircle size={12} className="text-primary-500" />
                                                <span className="text-[10px] font-black text-primary-600 uppercase tracking-wider">{item.fit}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact & CTA */}
                    <div className="bg-slate-950 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/15 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em] mb-4">Get In Touch</p>
                                <h3 className="text-3xl font-black tracking-tight mb-4">Ready to transform your billing operations?</h3>
                                <p className="text-slate-400 font-medium leading-relaxed mb-8 text-lg">
                                    Whether you're a billing company processing thousands of claims or a hospital looking to modernize your revenue cycle, we'd love to show you what Patronum X can do.
                                </p>
                                <div className="flex flex-wrap gap-4 mb-10">
                                    <button
                                        onClick={() => navigate('/login')}
                                        className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg shadow-primary-500/25 transition-all active:scale-95 flex items-center gap-2"
                                    >
                                        Start Free Trial
                                        <ArrowRight size={16} />
                                    </button>
                                    <a href="mailto:business@patronumx.com" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 flex items-center gap-2 no-underline">
                                        <Mail size={16} />
                                        Contact Sales
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {['Free Demo', 'No Credit Card', 'HIPAA Compliant', 'On-Premise Option'].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-wider text-slate-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Building2 size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Company</p>
                                        <p className="text-[15px] font-bold">PATRONUM X (PRIVATE) LIMITED</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Headquarters</p>
                                        <p className="text-[15px] font-bold">Islamabad, Pakistan</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Phone</p>
                                        <p className="text-[15px] font-bold">+92 303 5921629</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                                        <p className="text-[15px] font-bold text-primary-400">business@patronumx.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Globe size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Industry Focus</p>
                                        <p className="text-[15px] font-bold">Healthcare Revenue Cycle Management</p>
                                    </div>
                                </div>
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
                        <div className="flex items-center gap-6">
                            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.25em]">&copy; 2026 Patronum X</p>
                            {[{ l: 'Privacy', p: '/privacy' }, { l: 'Terms', p: '/terms' }, { l: 'HIPAA', p: '/hipaa' }].map(item => (
                                <button key={item.l} onClick={() => navigate(item.p)} className="text-[9px] font-black text-slate-700 uppercase tracking-[0.2em] hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0">{item.l}</button>
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

export default About;

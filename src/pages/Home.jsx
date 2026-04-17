import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Shield,
    BarChart,
    Zap,
    ArrowRight,
    Database,
    ShieldCheck,
    Globe,
    Cpu,
    ArrowUpRight,
    TrendingUp,
    CheckCircle,
    Clock,
    DollarSign,
    FileCheck
} from 'lucide-react';
import NexalithLogo from '../components/NexalithLogo';

const Home = () => {
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
                            <button key={item.path} onClick={() => navigate(item.path)} className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] hover:text-primary-600 transition-all duration-300 relative group/link bg-transparent border-none cursor-pointer">
                                {item.label}
                                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover/link:w-full"></span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-slate-950 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg shadow-slate-950/15 transition-all active:scale-95"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </nav>

            <main className="pt-40 pb-32">
                {/* Hero */}
                <div className="max-w-[1400px] mx-auto px-8 md:px-12">
                    <div className="text-center space-y-10 mb-32">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm text-slate-950 rounded-full border border-primary-100/60 animate-fade-in">
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute inset-0"></div>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 relative"></div>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Platform Active</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-950 tracking-[-0.04em] leading-[0.85] animate-slide-up">
                            Revenue Cycle <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Intelligence</span> Platform
                        </h1>

                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed animate-slide-up opacity-0 tracking-tight" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                            End-to-end medical billing orchestration for healthcare providers.
                            Streamline claims, accelerate payments, eliminate denials.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 pt-6 animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            <button
                                onClick={() => navigate('/login')}
                                className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 rounded-2xl font-black tracking-[0.15em] text-[12px] uppercase shadow-lg shadow-primary-500/25 transition-all active:scale-95 flex items-center gap-3 group"
                            >
                                Get Started
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={() => navigate('/solutions')} className="bg-white hover:bg-slate-50 text-slate-700 px-10 py-4 rounded-2xl font-black tracking-[0.15em] text-[12px] uppercase border border-slate-200 transition-all active:scale-95">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32 animate-slide-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                        {[
                            { icon: <TrendingUp size={20} />, value: '99.2%', label: 'First-Pass Rate', color: 'primary' },
                            { icon: <Clock size={20} />, value: '12 Days', label: 'Avg. AR Days', color: 'accent' },
                            { icon: <DollarSign size={20} />, value: '+24.8%', label: 'Revenue Lift', color: 'emerald' },
                            { icon: <CheckCircle size={20} />, value: '100%', label: 'HIPAA Compliant', color: 'blue' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 text-center hover:shadow-lg hover:border-primary-100 transition-all duration-500 group">
                                <div className={`w-10 h-10 bg-${stat.color}-50 text-${stat.color}-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                                    {stat.icon}
                                </div>
                                <p className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Dashboard Preview */}
                    <div className="relative animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg-main to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-primary-500/8 blur-[120px] rounded-full scale-110 -z-10"></div>
                        <div className="p-4 bg-white/50 backdrop-blur-md rounded-3xl border border-white/80 shadow-xl">
                            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-inner group relative">
                                <div className="h-12 bg-gray-50/90 border-b border-gray-100 flex items-center px-6 gap-3">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-400/30 group-hover:bg-rose-400 transition-all"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400/30 group-hover:bg-amber-400 transition-all"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-400/30 group-hover:bg-emerald-400 transition-all"></div>
                                    </div>
                                    <div className="mx-auto bg-white border border-gray-200 rounded-lg px-8 py-1 text-[10px] font-bold text-slate-400 tracking-widest">
                                        app.patronumx.com
                                    </div>
                                </div>
                                <div className="w-full bg-gradient-to-br from-slate-50 via-primary-50/20 to-accent-50/10 relative overflow-hidden p-6">
                                    {/* Top stat cards */}
                                    <div className="grid grid-cols-4 gap-3 mb-4">
                                        {[
                                            { label: 'Total Claims', value: '$2.4M', change: '+12.3%' },
                                            { label: 'Processed Today', value: '1,284', change: '+8.1%' },
                                            { label: 'Pending Review', value: '342', change: '-5.2%' },
                                            { label: 'Collection Rate', value: '96.8%', change: '+2.4%' },
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                                                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
                                                <p className="text-lg font-black text-slate-900 tracking-tight leading-none">{stat.value}</p>
                                                <p className={`text-[9px] font-bold mt-1 ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-amber-500'}`}>{stat.change} vs last month</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Main content row */}
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 col-span-2">
                                            <div className="flex items-center justify-between mb-3">
                                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-wider">Monthly Revenue</p>
                                                <div className="flex gap-3">
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                                        <span className="text-[8px] font-bold text-slate-400">Collected</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-2 h-2 rounded-full bg-primary-200"></div>
                                                        <span className="text-[8px] font-bold text-slate-400">Billed</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-end gap-[6px] h-[90px]">
                                                {[
                                                    { billed: 65, collected: 55 }, { billed: 72, collected: 62 },
                                                    { billed: 58, collected: 50 }, { billed: 80, collected: 72 },
                                                    { billed: 68, collected: 60 }, { billed: 85, collected: 78 },
                                                    { billed: 75, collected: 68 }, { billed: 90, collected: 82 },
                                                    { billed: 70, collected: 65 }, { billed: 82, collected: 76 },
                                                    { billed: 88, collected: 80 }, { billed: 78, collected: 72 },
                                                ].map((d, i) => (
                                                    <div key={i} className="flex-1 flex gap-[2px] items-end">
                                                        <div className="flex-1 bg-primary-200 rounded-sm" style={{ height: `${d.billed}%` }}></div>
                                                        <div className="flex-1 bg-primary-500 rounded-sm" style={{ height: `${d.collected}%` }}></div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-between mt-2">
                                                {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                                                    <span key={m} className="text-[7px] font-bold text-slate-300 flex-1 text-center">{m}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-wider mb-3">Claims Status</p>
                                            <div className="relative w-24 h-24 mx-auto mb-3">
                                                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
                                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="3.5" strokeDasharray="55 45" strokeDashoffset="0" />
                                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="3.5" strokeDasharray="22 78" strokeDashoffset="-55" />
                                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeDasharray="13 87" strokeDashoffset="-77" />
                                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#ef4444" strokeWidth="3.5" strokeDasharray="10 90" strokeDashoffset="-90" />
                                                </svg>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <span className="text-sm font-black text-slate-900 leading-none">4,821</span>
                                                    <span className="text-[7px] font-bold text-slate-400">Total</span>
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                {[
                                                    { label: 'Paid', pct: '55%', color: 'bg-emerald-500' },
                                                    { label: 'In Process', pct: '22%', color: 'bg-blue-500' },
                                                    { label: 'Pending', pct: '13%', color: 'bg-amber-500' },
                                                    { label: 'Denied', pct: '10%', color: 'bg-red-500' },
                                                ].map((s, i) => (
                                                    <div key={i} className="flex items-center justify-between">
                                                        <div className="flex items-center gap-1.5">
                                                            <div className={`w-2 h-2 rounded-full ${s.color}`}></div>
                                                            <span className="text-[8px] font-bold text-slate-500">{s.label}</span>
                                                        </div>
                                                        <span className="text-[8px] font-black text-slate-700">{s.pct}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom row */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-wider mb-2">Top Payers</p>
                                            {[
                                                { name: 'Blue Cross', amt: '$842K', bar: 'w-[85%]' },
                                                { name: 'Aetna', amt: '$614K', bar: 'w-[65%]' },
                                                { name: 'UnitedHealth', amt: '$528K', bar: 'w-[55%]' },
                                            ].map((p, i) => (
                                                <div key={i} className="mb-1.5 last:mb-0">
                                                    <div className="flex justify-between mb-0.5">
                                                        <span className="text-[8px] font-bold text-slate-600">{p.name}</span>
                                                        <span className="text-[8px] font-black text-slate-800">{p.amt}</span>
                                                    </div>
                                                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                        <div className={`h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full ${p.bar}`}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-wider mb-2">Recent Activity</p>
                                            {[
                                                { action: 'Claim #4821 paid', time: '2m ago', dot: 'bg-emerald-500' },
                                                { action: 'Batch upload (142)', time: '18m ago', dot: 'bg-blue-500' },
                                                { action: 'Denial appeal sent', time: '1h ago', dot: 'bg-amber-500' },
                                            ].map((a, i) => (
                                                <div key={i} className="flex items-start gap-2 mb-1.5 last:mb-0">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${a.dot} mt-1 shrink-0`}></div>
                                                    <div className="min-w-0">
                                                        <p className="text-[8px] font-bold text-slate-700 truncate">{a.action}</p>
                                                        <p className="text-[7px] font-medium text-slate-400">{a.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-wider mb-2">AR Aging</p>
                                            {[
                                                { range: '0-30 days', amt: '$1.2M', color: 'bg-emerald-500' },
                                                { range: '31-60 days', amt: '$680K', color: 'bg-blue-500' },
                                                { range: '61-90 days', amt: '$420K', color: 'bg-amber-500' },
                                                { range: '90+ days', amt: '$198K', color: 'bg-red-500' },
                                            ].map((a, i) => (
                                                <div key={i} className="flex items-center justify-between mb-1 last:mb-0">
                                                    <div className="flex items-center gap-1.5">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${a.color}`}></div>
                                                        <span className="text-[7px] font-bold text-slate-500">{a.range}</span>
                                                    </div>
                                                    <span className="text-[8px] font-black text-slate-700">{a.amt}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none"></div>
                                    <div className="absolute bottom-6 left-0 right-0 text-center z-10">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Live Dashboard Preview</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Overview */}
                <section className="max-w-[1200px] mx-auto px-8 mt-40">
                    <div className="text-center mb-20">
                        <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">Core Capabilities</p>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                            Everything you need to <br className="hidden md:block" />
                            optimize revenue flow
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Cpu size={24} />, color: 'primary', title: 'Smart RCM Engine', desc: 'Automated claim processing with intelligent routing, multi-payer orchestration, and real-time status tracking.', link: '/solutions' },
                            { icon: <ShieldCheck size={24} />, color: 'emerald', title: 'Compliance Built-in', desc: 'HIPAA-grade infrastructure with encrypted PHI, full audit trails, and role-based access controls.', link: '/security' },
                            { icon: <Database size={24} />, color: 'amber', title: 'Analytics & Insights', desc: 'Real-time dashboards, AR aging reports, denial pattern analysis, and revenue forecasting tools.', link: '/platform' }
                        ].map((item, i) => (
                            <div key={i} className="group bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-xl hover:border-primary-100 transition-all duration-500">
                                <div className={`w-12 h-12 bg-${item.color}-50 rounded-2xl flex items-center justify-center text-${item.color}-500 mb-6 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-black text-slate-950 tracking-tight mb-3">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-[15px]">{item.desc}</p>
                                <button onClick={() => navigate(item.link)} className="flex items-center gap-2 text-primary-500 font-black text-[10px] uppercase tracking-[0.2em] mt-6 group-hover:translate-x-1 transition-transform cursor-pointer bg-transparent border-none p-0">
                                    Learn more <ArrowUpRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Workflow Steps */}
                <section className="max-w-[1200px] mx-auto px-8 mt-40">
                    <div className="text-center mb-20">
                        <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">How It Works</p>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                            Streamlined billing workflow
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Upload Claims', desc: 'Bulk import patient data via Excel or API integration', icon: <FileCheck size={22} /> },
                            { step: '02', title: 'Auto-Route', desc: 'Claims are intelligently routed to the right team', icon: <Zap size={22} /> },
                            { step: '03', title: 'Process & Submit', desc: 'Billing staff reviews, codes, and submits to payers', icon: <BarChart size={22} /> },
                            { step: '04', title: 'Track & Collect', desc: 'Real-time payment tracking and denial management', icon: <DollarSign size={22} /> },
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <div className="bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-lg hover:border-primary-100 transition-all duration-500 h-full">
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="text-[11px] font-black text-primary-400 tracking-widest">{item.step}</span>
                                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary-500 group-hover:bg-primary-50 transition-all">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-[15px] font-black text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-slate-200 z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button onClick={() => navigate('/solutions')} className="bg-transparent border border-slate-200 hover:border-primary-200 hover:bg-primary-50 text-slate-600 hover:text-primary-600 px-8 py-3 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 inline-flex items-center gap-2 cursor-pointer">
                            See Full Pipeline <ArrowRight size={14} />
                        </button>
                    </div>
                </section>

                {/* Specialties */}
                <section className="max-w-[1200px] mx-auto px-8 mt-40 relative">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
                        <div className="space-y-4">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em]">Specializations</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                                Built for complex <br className="hidden md:block" />medical billing
                            </h2>
                        </div>
                        <div className="flex items-center gap-2 px-5 py-2.5 bg-white shadow-sm rounded-full border border-slate-100">
                            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">8+ Specialties</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { title: 'Lithotripsy', desc: 'Complex stone procedures' },
                            { title: 'Robotic Surgery', desc: 'High-value coding' },
                            { title: 'Wound Care', desc: 'Skin graft billing' },
                            { title: 'Radiology', desc: 'Imaging-specific RCM' },
                            { title: 'Laboratory', desc: 'High-volume diagnostics' },
                            { title: 'Credentialing', desc: 'Provider enrollment' },
                            { title: 'AR Recovery', desc: 'Aged claim resolution' },
                            { title: 'Prior-Auths', desc: 'Medical necessity' }
                        ].map((spec, i) => (
                            <div key={i} className="group bg-white rounded-2xl border border-slate-100 p-6 hover:bg-slate-950 hover:border-slate-800 transition-all duration-500 cursor-pointer" onClick={() => navigate('/solutions')}>
                                <h4 className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em] group-hover:text-primary-400 transition-colors">
                                    {spec.title}
                                </h4>
                                <p className="text-[15px] font-black text-slate-900 group-hover:text-white transition-colors tracking-tight leading-snug">{spec.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-[1200px] mx-auto px-8 mt-40">
                    <div className="bg-primary-500 rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Ready to automate your billing?</h2>
                            <p className="text-white/80 font-medium text-lg mb-8 max-w-xl mx-auto">
                                See how Patronum X can eliminate manual handoffs and improve your collection rate.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={() => navigate('/login')} className="bg-white text-primary-600 px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg transition-all active:scale-95 hover:bg-slate-50 flex items-center gap-2 cursor-pointer border-none">
                                    Start Free Trial <ArrowRight size={16} />
                                </button>
                                <button onClick={() => navigate('/about')} className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 hover:bg-white/20 cursor-pointer">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 py-20 mt-40 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
                        <div className="lg:col-span-4 space-y-6">
                            <NexalithLogo size={0.55} theme="dark" />
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
                                Empowering healthcare providers with intelligent revenue cycle management.
                            </p>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-primary-500 transition-colors cursor-pointer">
                                    <Globe size={16} />
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-primary-500 transition-colors cursor-pointer">
                                    <Shield size={16} />
                                </div>
                            </div>
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
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.25em]">
                                &copy; 2026 Patronum X
                            </p>
                            <div className="flex gap-6">
                                {[{ l: 'Privacy', p: '/privacy' }, { l: 'HIPAA', p: '/hipaa' }, { l: 'Terms', p: '/terms' }].map(item => (
                                    <button key={item.l} onClick={() => navigate(item.p)} className="text-[9px] font-black text-slate-700 uppercase tracking-[0.2em] hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0">
                                        {item.l}
                                    </button>
                                ))}
                            </div>
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

export default Home;

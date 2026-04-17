import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    HeartPulse,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Monitor,
    FileText,
    Rocket,
    Send,
    Clock,
    Building2,
    CheckCircle,
    MessageSquare,
    ChevronDown
} from 'lucide-react';
import NexalithLogo from '../components/NexalithLogo';

const Contact = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        plan: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const steps = [
        {
            num: '1',
            icon: <Calendar size={24} />,
            title: 'Schedule a Demo',
            desc: 'Pick a time that works for your team. We offer 30-minute and 60-minute sessions tailored to your needs.',
        },
        {
            num: '2',
            icon: <Monitor size={24} />,
            title: 'See the Platform',
            desc: 'Get a live walkthrough of Patronum X with your own data scenarios. See how claims flow through the 5-stage workflow.',
        },
        {
            num: '3',
            icon: <FileText size={24} />,
            title: 'Get a Custom Quote',
            desc: 'We\'ll build a pricing package based on your claim volume, team size, and integration requirements.',
        },
        {
            num: '4',
            icon: <Rocket size={24} />,
            title: 'Start Onboarding',
            desc: 'Our team handles migration, training, and go-live support. Most teams are fully operational within 2 weeks.',
        },
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
                <div className="max-w-[1200px] mx-auto px-8 md:px-12">
                    {/* Hero */}
                    <div className="text-center space-y-8 mb-24">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm rounded-full border border-primary-100/60">
                            <MessageSquare size={14} className="text-primary-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Contact & Demo Request</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[0.9]">
                            Let's transform your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">revenue cycle.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed tracking-tight">
                            Whether you're ready for a live demo or just have questions, our team is here to help. See how Patronum X can streamline your billing operations and maximize reimbursements.
                        </p>
                    </div>

                    {/* Form + Contact Info Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-32">
                        {/* Contact Form */}
                        <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 p-10 md:p-12 hover:shadow-xl transition-all duration-500">
                            <h2 className="text-2xl font-black text-slate-950 tracking-tight mb-2">Request a Demo</h2>
                            <p className="text-slate-500 font-medium text-[15px] mb-8">Fill out the form below and we'll get back to you within one business day.</p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Dr. Jane Smith"
                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Work Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="jane@clinic.com"
                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            placeholder="ABC Billing Group"
                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="(555) 123-4567"
                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Plan Interest</label>
                                    <div className="relative">
                                        <select
                                            name="plan"
                                            value={form.plan}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="">Select a plan...</option>
                                            <option value="starter">Starter - Small Teams</option>
                                            <option value="professional">Professional - Growing Operations</option>
                                            <option value="enterprise">Enterprise - Full Scale</option>
                                            <option value="unsure">Not sure yet</option>
                                        </select>
                                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your billing operations, team size, and what challenges you're facing..."
                                        rows={5}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg shadow-primary-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                                >
                                    <Send size={16} />
                                    Submit Request
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-xl transition-all duration-500">
                                <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-5">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-lg font-black text-slate-950 tracking-tight mb-2">Headquarters</h3>
                                <p className="text-slate-500 font-medium text-[15px] leading-relaxed">
                                    Islamabad<br />
                                    Pakistan
                                </p>
                            </div>
                            <div className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-xl transition-all duration-500">
                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-5">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-lg font-black text-slate-950 tracking-tight mb-2">Phone</h3>
                                <p className="text-slate-500 font-medium text-[15px]">+92 303 5921629</p>
                                <p className="text-slate-400 text-xs font-medium mt-1">Mon - Fri, 8am - 6pm EST</p>
                            </div>
                            <div className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-xl transition-all duration-500">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-5">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-lg font-black text-slate-950 tracking-tight mb-2">Email</h3>
                                <p className="text-primary-500 font-medium text-[15px]">business@patronumx.com</p>
                                <p className="text-slate-400 text-xs font-medium mt-1">We respond within 24 hours</p>
                            </div>
                            <div className="bg-slate-950 rounded-3xl p-8 text-white">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                                    <Clock size={24} />
                                </div>
                                <h3 className="text-lg font-black tracking-tight mb-2">Quick Response</h3>
                                <p className="text-slate-400 font-medium text-[15px] leading-relaxed">
                                    Average response time under 4 hours during business hours. Enterprise inquiries get priority routing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* What to Expect */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">What to Expect</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                From demo to go-live
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed mt-6">
                                Our streamlined onboarding process gets your team up and running fast with minimal disruption to your existing workflows.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, i) => (
                                <div key={i} className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-xl transition-all duration-500 relative group">
                                    <div className="absolute top-6 right-6 text-[64px] font-black text-slate-100 leading-none select-none group-hover:text-primary-100 transition-colors">
                                        {step.num}
                                    </div>
                                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-lg font-black text-slate-950 tracking-tight mb-3">{step.title}</h3>
                                    <p className="text-slate-500 font-medium text-[14px] leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-slate-950 rounded-3xl p-12 md:p-16 text-center">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full border border-white/10 mb-8">
                            <HeartPulse size={14} className="text-primary-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Ready to Get Started?</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                            Join 200+ billing teams <br className="hidden md:block" />already using Patronum X.
                        </h2>
                        <p className="max-w-xl mx-auto text-slate-400 text-lg font-medium mb-10">
                            No long-term contracts. Free migration support. Go live in as little as two weeks.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button onClick={() => navigate('/pricing')} className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg shadow-primary-500/20 transition-all active:scale-95 flex items-center gap-3">
                                View Pricing
                                <ArrowRight size={16} />
                            </button>
                            <button onClick={() => navigate('/platform')} className="bg-white/10 hover:bg-white/15 text-white px-10 py-4 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase border border-white/10 transition-all active:scale-95">
                                Explore Platform
                            </button>
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

export default Contact;

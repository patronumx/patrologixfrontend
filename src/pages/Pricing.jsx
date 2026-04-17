import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    CheckCircle,
    Zap,
    Building2,
    Crown,
    Users,
    HelpCircle,
    Shield,
    Clock,
    Database,
    Cpu,
    Phone,
    ChevronDown,
    ChevronUp,
    DollarSign
} from 'lucide-react';
import NexalithLogo from '../components/NexalithLogo';

const Pricing = () => {
    const navigate = useNavigate();
    const [annual, setAnnual] = useState(true);
    const [openFaq, setOpenFaq] = useState(null);

    const plans = [
        {
            name: 'Starter',
            desc: 'For small billing teams getting started with workflow automation',
            monthlyPrice: 499,
            annualPrice: 399,
            icon: <Zap size={24} />,
            color: 'blue',
            highlight: false,
            features: [
                'Up to 15 staff users',
                'Up to 1,000 claims/month',
                '5-stage automated workflow',
                'Excel bulk import',
                'Role-based dashboards',
                'SLA monitoring & alerts',
                'Email support',
                'Standard reporting',
            ],
            excluded: [
                'Custom SLA thresholds',
                'API access',
                'Dedicated account manager',
                'On-premise deployment',
                'Custom integrations',
            ],
            cta: 'Start Free Trial',
        },
        {
            name: 'Professional',
            desc: 'For growing billing operations that need full platform capabilities',
            monthlyPrice: 1299,
            annualPrice: 999,
            icon: <Building2 size={24} />,
            color: 'primary',
            highlight: true,
            badge: 'Most Popular',
            features: [
                'Up to 50 staff users',
                'Up to 10,000 claims/month',
                '5-stage automated workflow',
                'Excel bulk import',
                'Role-based dashboards (all 5)',
                'SLA monitoring with custom thresholds',
                'Priority email & phone support',
                'Advanced reporting & analytics',
                'Staff performance tracking',
                'Escalation & hold workflows',
                'AR aging analysis',
                'API access',
            ],
            excluded: [
                'Dedicated account manager',
                'On-premise deployment',
                'Custom integrations',
            ],
            cta: 'Start Free Trial',
        },
        {
            name: 'Enterprise',
            desc: 'For large organizations requiring full control and compliance',
            monthlyPrice: null,
            annualPrice: null,
            icon: <Crown size={24} />,
            color: 'slate',
            highlight: false,
            features: [
                'Unlimited staff users',
                'Unlimited claims',
                '5-stage automated workflow',
                'Excel bulk import',
                'All role-based dashboards',
                'Custom SLA thresholds',
                'Dedicated account manager',
                'On-premise deployment option',
                'Custom integrations & API',
                'Advanced reporting & exports',
                'Staff performance tracking',
                'HIPAA BAA included',
                'SOC 2 compliance support',
                'Custom training & onboarding',
                '24/7 priority support',
            ],
            excluded: [],
            cta: 'Contact Sales',
        },
    ];

    const faqs = [
        {
            q: 'Is there a free trial?',
            a: 'Yes. Starter and Professional plans include a 14-day free trial with full feature access. No credit card required to start. You can import real data and test all workflows before committing.'
        },
        {
            q: 'What counts as a "claim"?',
            a: 'A claim is a single patient billing job that enters the system, whether created manually or via Excel bulk upload. Each claim is tracked through the full 5-stage workflow. Claims that are resubmitted after denial count as the same claim, not a new one.'
        },
        {
            q: 'Can I upgrade or downgrade anytime?',
            a: 'Yes. You can upgrade at any time and the prorated difference will be applied to your current billing cycle. Downgrades take effect at the start of your next billing cycle to ensure no disruption to your workflows.'
        },
        {
            q: 'Do you offer HIPAA Business Associate Agreements?',
            a: 'Yes. Enterprise plans include a standard BAA as part of the subscription. Professional plan customers can request a BAA for an additional compliance fee. All plans include field-level encryption and audit trails by default.'
        },
        {
            q: 'What is the on-premise deployment option?',
            a: 'Enterprise customers can deploy Patronum X entirely on their own infrastructure using our Docker containers. This means your patient data never leaves your network. We provide the deployment package, documentation, and support for setup.'
        },
        {
            q: 'How does the Excel bulk import work?',
            a: 'Upload standard Excel files (.xlsx) with patient data. Our smart parser auto-detects common column names like "Patient Name", "Claim ID", "Payer", and "DOS". All uploads are atomic — if any row fails validation, the entire batch is rolled back with per-row error reporting.'
        },
        {
            q: 'What support is included?',
            a: 'Starter includes email support (48hr response). Professional includes priority email and phone support (4hr response during business hours). Enterprise includes 24/7 priority support with a dedicated account manager and quarterly business reviews.'
        },
        {
            q: 'Can I add more users to my plan?',
            a: 'Yes. Additional users can be added to Starter ($49/user/month) and Professional ($39/user/month) plans. Enterprise plans include unlimited users.'
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
                            <button key={item.path} onClick={() => navigate(item.path)} className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group/link bg-transparent border-none cursor-pointer ${item.path === '/pricing' ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}>
                                {item.label}
                                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${item.path === '/pricing' ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
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
                    <div className="text-center space-y-8 mb-16">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm rounded-full border border-primary-100/60">
                            <DollarSign size={14} className="text-primary-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Pricing</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[0.9]">
                            Simple, transparent <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">pricing.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed tracking-tight">
                            No hidden fees. No per-claim charges. Just straightforward monthly pricing based on your team size and volume.
                        </p>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <span className={`text-[12px] font-black uppercase tracking-wider ${!annual ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
                        <button
                            onClick={() => setAnnual(!annual)}
                            className={`relative w-14 h-7 rounded-full transition-all ${annual ? 'bg-primary-500' : 'bg-slate-200'}`}
                        >
                            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all ${annual ? 'left-8' : 'left-1'}`}></div>
                        </button>
                        <span className={`text-[12px] font-black uppercase tracking-wider ${annual ? 'text-slate-900' : 'text-slate-400'}`}>Annual</span>
                        {annual && (
                            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[9px] font-black uppercase tracking-wider">Save 20%</span>
                        )}
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                        {plans.map((plan, i) => (
                            <div key={i} className={`relative rounded-3xl p-8 transition-all duration-500 hover:shadow-xl ${plan.highlight ? 'bg-slate-950 text-white border-2 border-primary-500 shadow-2xl shadow-primary-500/10 scale-[1.02]' : 'bg-white border border-slate-100'}`}>
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white rounded-full text-[9px] font-black uppercase tracking-wider shadow-lg">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-white/10 text-primary-400' : `bg-${plan.color}-50 text-${plan.color}-500`}`}>
                                    {plan.icon}
                                </div>

                                <h3 className={`text-xl font-black tracking-tight mb-2 ${plan.highlight ? 'text-white' : 'text-slate-950'}`}>{plan.name}</h3>
                                <p className={`text-[13px] font-medium mb-6 leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>

                                <div className="mb-8">
                                    {plan.monthlyPrice ? (
                                        <>
                                            <div className="flex items-baseline gap-1">
                                                <span className={`text-4xl font-black tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-950'}`}>
                                                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                                                </span>
                                                <span className={`text-[12px] font-bold ${plan.highlight ? 'text-slate-400' : 'text-slate-400'}`}>/month</span>
                                            </div>
                                            {annual && (
                                                <p className={`text-[11px] font-medium mt-1 ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                                                    Billed annually (${plan.annualPrice * 12}/year)
                                                </p>
                                            )}
                                        </>
                                    ) : (
                                        <div>
                                            <span className={`text-3xl font-black tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-950'}`}>Custom</span>
                                            <p className={`text-[12px] font-medium mt-1 ${plan.highlight ? 'text-slate-400' : 'text-slate-400'}`}>Tailored to your organization</p>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={() => navigate(plan.monthlyPrice ? '/login' : '/contact')}
                                    className={`w-full py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 mb-8 ${plan.highlight ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/25' : 'bg-slate-950 hover:bg-slate-800 text-white shadow-lg shadow-slate-950/15'}`}
                                >
                                    {plan.cta}
                                </button>

                                <div className="space-y-3">
                                    {plan.features.map((feat, j) => (
                                        <div key={j} className="flex items-center gap-2.5">
                                            <CheckCircle size={14} className={`shrink-0 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-500'}`} />
                                            <span className={`text-[13px] font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
                                        </div>
                                    ))}
                                    {plan.excluded.map((feat, j) => (
                                        <div key={`ex-${j}`} className="flex items-center gap-2.5 opacity-40">
                                            <div className={`w-3.5 h-3.5 rounded-full border ${plan.highlight ? 'border-slate-600' : 'border-slate-300'} shrink-0`}></div>
                                            <span className={`text-[13px] font-medium line-through ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Comparison */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">Compare Plans</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                Full feature comparison
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b-2 border-slate-100">
                                            <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-wider w-1/3">Feature</th>
                                            <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-wider text-center">Starter</th>
                                            <th className="p-6 text-[11px] font-black text-primary-500 uppercase tracking-wider text-center bg-primary-50/30">Professional</th>
                                            <th className="p-6 text-[11px] font-black text-slate-400 uppercase tracking-wider text-center">Enterprise</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feat: 'Staff Users', s: '15', p: '50', e: 'Unlimited' },
                                            { feat: 'Claims / Month', s: 'Unlimited', p: 'Unlimited', e: 'Unlimited' },
                                            { feat: 'Automated Workflow', s: true, p: true, e: true },
                                            { feat: 'Excel Bulk Import', s: true, p: true, e: true },
                                            { feat: 'Role-Based Dashboards', s: '3 roles', p: 'All 5 roles', e: 'All 5 roles' },
                                            { feat: 'SLA Monitoring', s: 'Default', p: 'Custom thresholds', e: 'Custom thresholds' },
                                            { feat: 'Reporting Dashboard', s: 'Basic', p: 'Advanced', e: 'Advanced + Export' },
                                            { feat: 'Staff Performance Tracking', s: false, p: true, e: true },
                                            { feat: 'AR Aging Analysis', s: 'Basic', p: 'Full', e: 'Full' },
                                            { feat: 'API Access', s: false, p: true, e: true },
                                            { feat: 'Field-Level Encryption', s: true, p: true, e: true },
                                            { feat: 'Audit Trail', s: true, p: true, e: true },
                                            { feat: 'HIPAA BAA', s: false, p: 'Add-on', e: 'Included' },
                                            { feat: 'On-Premise Deployment', s: false, p: false, e: true },
                                            { feat: 'Custom Integrations', s: false, p: false, e: true },
                                            { feat: 'Dedicated Account Manager', s: false, p: false, e: true },
                                            { feat: 'Support', s: 'Email (48hr)', p: 'Email + Phone (4hr)', e: '24/7 Priority' },
                                            { feat: 'Onboarding', s: 'Self-serve', p: 'Guided setup', e: 'Custom training' },
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50">
                                                <td className="p-4 pl-6 text-[13px] font-bold text-slate-700">{row.feat}</td>
                                                {[row.s, row.p, row.e].map((val, j) => (
                                                    <td key={j} className={`p-4 text-center ${j === 1 ? 'bg-primary-50/20' : ''}`}>
                                                        {val === true ? (
                                                            <CheckCircle size={16} className="text-emerald-500 mx-auto" />
                                                        ) : val === false ? (
                                                            <span className="text-slate-200 text-lg">—</span>
                                                        ) : (
                                                            <span className="text-[12px] font-bold text-slate-600">{val}</span>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* What's Included */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">Every Plan Includes</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                No feature gates on security
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: <Shield size={20} />, label: 'Field-Level Encryption', desc: 'PGCrypto encrypted PHI' },
                                { icon: <Database size={20} />, label: 'Complete Audit Trail', desc: 'Every action logged' },
                                { icon: <Users size={20} />, label: 'Role-Based Access', desc: '5-role RBAC system' },
                                { icon: <Clock size={20} />, label: 'SLA Monitoring', desc: 'Stuck job alerts' },
                                { icon: <Cpu size={20} />, label: '5-Stage Workflow', desc: 'Fully automated pipeline' },
                                { icon: <Zap size={20} />, label: 'Auto-Routing', desc: 'Zero manual handoffs' },
                                { icon: <CheckCircle size={20} />, label: 'Excel Import', desc: 'Smart column mapping' },
                                { icon: <Phone size={20} />, label: 'Free Onboarding', desc: 'Get started quickly' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-5 text-center hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <p className="text-[13px] font-black text-slate-900 mb-0.5">{item.label}</p>
                                    <p className="text-[11px] font-medium text-slate-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">FAQ</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                Common questions
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-3">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-sm transition-all">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left bg-transparent border-none cursor-pointer"
                                    >
                                        <span className="text-[15px] font-black text-slate-900 pr-4">{faq.q}</span>
                                        {openFaq === i ? <ChevronUp size={18} className="text-slate-400 shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-6 pb-6 -mt-2">
                                            <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-slate-950 rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Not sure which plan is right?</h2>
                            <p className="text-slate-400 font-medium text-lg mb-8 max-w-xl mx-auto">
                                Talk to our team for a personalized recommendation based on your claim volume and team size.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={() => navigate('/contact')} className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg shadow-primary-500/25 transition-all active:scale-95 flex items-center gap-2 border-none cursor-pointer">
                                    Schedule a Demo <ArrowRight size={16} />
                                </button>
                                <button onClick={() => navigate('/login')} className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 hover:bg-white/10 cursor-pointer">
                                    Start Free Trial
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

export default Pricing;

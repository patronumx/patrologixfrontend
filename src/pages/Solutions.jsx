import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    FileCheck,
    Eye,
    DollarSign,
    AlertTriangle,
    Target,
    Cpu,
    Workflow,
    Database,
    Layers,
    Clock,
    CheckCircle,
    BarChart,
    Upload,
    Zap,
    TrendingUp,
    ArrowUpRight,
    Users,
    RefreshCw,
    FileSpreadsheet
} from 'lucide-react';
import NexalithLogo from '../components/NexalithLogo';

const Solutions = () => {
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
                            <button key={item.path} onClick={() => navigate(item.path)} className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group/link bg-transparent border-none cursor-pointer ${item.path === '/solutions' ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}>
                                {item.label}
                                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${item.path === '/solutions' ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
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
                {/* Hero */}
                <div className="max-w-[1200px] mx-auto px-8 md:px-12">
                    <div className="text-center space-y-8 mb-24">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm rounded-full border border-primary-100/60">
                            <Cpu size={14} className="text-primary-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Revenue Cycle Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[0.9]">
                            Every claim. <br />
                            Every stage. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Fully automated.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed tracking-tight">
                            Patronum X replaces manual claim routing, spreadsheet tracking, and departmental silos with a single automated pipeline that moves every job from submission to payment without human handoffs.
                        </p>
                    </div>

                    {/* Core Problem / Solution */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
                        <div className="bg-rose-50/50 rounded-3xl p-10 border border-rose-100/50">
                            <p className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em] mb-6">Without Patronum X</p>
                            <div className="space-y-4">
                                {[
                                    'Claims get lost between departments',
                                    'Manual task assignment creates bottlenecks',
                                    'No visibility into where claims are stuck',
                                    'SLA violations go unnoticed for days',
                                    'Staff workload is unevenly distributed',
                                    'Denials pile up without systematic follow-up',
                                    'No time tracking per stage or per staff',
                                    'Compliance audit trails are incomplete',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="text-rose-500 text-xs font-black">&times;</span>
                                        </div>
                                        <span className="text-[15px] text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-emerald-50/50 rounded-3xl p-10 border border-emerald-100/50">
                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-6">With Patronum X</p>
                            <div className="space-y-4">
                                {[
                                    'Claims auto-route to the right department instantly',
                                    'Zero manual assignment — FIFO queue distribution',
                                    'Real-time dashboard shows every claim\'s status',
                                    'Automatic SLA alerts before thresholds are breached',
                                    'Fair workload balancing across all staff',
                                    'Structured denial workflow with appeal tracking',
                                    'Per-stage and per-user time tracking built in',
                                    'Complete audit trail for every action taken',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-[15px] text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 3 Core Solutions */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">Core Solutions</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                Three engines, one platform
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {/* RCM Engine */}
                            <div className="bg-white rounded-3xl border border-slate-100 p-10 md:p-14 hover:shadow-xl transition-all duration-500">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6">
                                            <Cpu size={28} />
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-950 tracking-tight mb-4">Smart RCM Engine</h3>
                                        <p className="text-slate-500 font-medium leading-relaxed text-lg mb-6">
                                            The core of Patronum X. A 5-stage automated pipeline that processes medical claims from initial submission through final payment collection. Every status transition triggers automatic routing — no manual intervention needed.
                                        </p>
                                        <div className="space-y-3">
                                            {[
                                                '17 distinct job statuses covering every scenario',
                                                'Automatic current_role updates on status change',
                                                'Priority levels: Normal, High, Urgent',
                                                'Claim amounts tracked up to $9,999,999.99',
                                                'Hold & escalation with mandatory reason logging',
                                            ].map((feat, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                                                    <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Status Flow</p>
                                        <div className="space-y-3">
                                            {[
                                                { from: 'Draft', to: 'Submitted', color: 'bg-slate-200' },
                                                { from: 'Submitted', to: 'Under Review', color: 'bg-blue-200' },
                                                { from: 'Under Review', to: 'Accepted / Rejected', color: 'bg-primary-200' },
                                                { from: 'Accepted', to: 'Paid Full / Partial / Denied', color: 'bg-emerald-200' },
                                                { from: 'Denied', to: 'Appeal / Resubmit / Write-off', color: 'bg-amber-200' },
                                                { from: 'Partial', to: 'AR Follow-up / Close', color: 'bg-violet-200' },
                                            ].map((flow, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className={`px-3 py-1.5 ${flow.color} rounded-lg`}>
                                                        <span className="text-[11px] font-black text-slate-700">{flow.from}</span>
                                                    </div>
                                                    <ArrowRight size={14} className="text-slate-300" />
                                                    <span className="text-[12px] font-bold text-slate-500">{flow.to}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Workflow Automation */}
                            <div className="bg-white rounded-3xl border border-slate-100 p-10 md:p-14 hover:shadow-xl transition-all duration-500">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className="order-2 lg:order-1">
                                        <div className="bg-slate-950 rounded-2xl p-8 text-white">
                                            <p className="text-[9px] font-black text-primary-400 uppercase tracking-[0.3em] mb-6">Automation Rules</p>
                                            <div className="space-y-4">
                                                {[
                                                    { trigger: 'Billing submits claim', action: 'Auto-routes to Ops Manager queue', icon: <Upload size={16} /> },
                                                    { trigger: 'Ops Manager accepts', action: 'Auto-routes to Payment queue', icon: <Eye size={16} /> },
                                                    { trigger: 'Payment posts denial', action: 'Auto-routes to AR/Denial queue', icon: <DollarSign size={16} /> },
                                                    { trigger: 'AR resubmits appeal', action: 'Returns to Clearinghouse review', icon: <RefreshCw size={16} /> },
                                                    { trigger: 'Job idle > SLA threshold', action: 'Stuck job alert triggered', icon: <AlertTriangle size={16} /> },
                                                ].map((rule, i) => (
                                                    <div key={i} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-primary-400">
                                                            {rule.icon}
                                                        </div>
                                                        <div>
                                                            <p className="text-[11px] font-black text-white mb-0.5">{rule.trigger}</p>
                                                            <p className="text-[11px] font-medium text-slate-400">{rule.action}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-1 lg:order-2">
                                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-6">
                                            <Workflow size={28} />
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-950 tracking-tight mb-4">Workflow Automation</h3>
                                        <p className="text-slate-500 font-medium leading-relaxed text-lg mb-6">
                                            Every status change triggers an automatic action. When billing submits a claim, it instantly appears in the operations manager's queue. When a payment is denied, it auto-routes to the AR/denial team. No emails, no Slack messages, no manual reassignment.
                                        </p>
                                        <div className="space-y-3">
                                            {[
                                                'Zero-touch department transitions',
                                                'FIFO queue ensures fair distribution',
                                                'Escalation path for complex cases',
                                                'Hold status with SLA-aware timers',
                                                'Complete history of every transition',
                                            ].map((feat, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                                                    <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Analytics & Reporting */}
                            <div className="bg-white rounded-3xl border border-slate-100 p-10 md:p-14 hover:shadow-xl transition-all duration-500">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6">
                                            <Database size={28} />
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-950 tracking-tight mb-4">Analytics & Reporting</h3>
                                        <p className="text-slate-500 font-medium leading-relaxed text-lg mb-6">
                                            Know where every dollar stands. Real-time dashboards track total claims, revenue collected, outstanding AR, denial rates, and collection percentages. Per-staff performance metrics identify top performers and training opportunities.
                                        </p>
                                        <div className="space-y-3">
                                            {[
                                                'AR aging buckets: 0-30, 31-60, 61-90, 90+ days',
                                                'Per-user task completion time tracking',
                                                'Status, priority, and queue distribution charts',
                                                'Denial rate and collection rate KPIs',
                                                'Custom date-range filtering',
                                                'Exportable reporting dashboard',
                                            ].map((feat, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                                                    <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Key Metrics</p>
                                            <div className="grid grid-cols-2 gap-4">
                                                {[
                                                    { label: 'Collection Rate', value: '96.8%', trend: '+2.4%' },
                                                    { label: 'Denial Rate', value: '4.2%', trend: '-1.8%' },
                                                    { label: 'Avg. AR Days', value: '12', trend: '-3 days' },
                                                    { label: 'First-Pass Rate', value: '99.2%', trend: '+0.8%' },
                                                ].map((m, i) => (
                                                    <div key={i} className="bg-white rounded-xl p-4 border border-slate-100">
                                                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1">{m.label}</p>
                                                        <p className="text-xl font-black text-slate-900 tracking-tight">{m.value}</p>
                                                        <p className="text-[10px] font-bold text-emerald-500 mt-0.5">{m.trend}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">AR Aging Distribution</p>
                                            <div className="space-y-3">
                                                {[
                                                    { range: '0-30 days', pct: 48, color: 'bg-emerald-500' },
                                                    { range: '31-60 days', pct: 27, color: 'bg-blue-500' },
                                                    { range: '61-90 days', pct: 17, color: 'bg-amber-500' },
                                                    { range: '90+ days', pct: 8, color: 'bg-red-500' },
                                                ].map((a, i) => (
                                                    <div key={i}>
                                                        <div className="flex justify-between mb-1">
                                                            <span className="text-[11px] font-bold text-slate-600">{a.range}</span>
                                                            <span className="text-[11px] font-black text-slate-800">{a.pct}%</span>
                                                        </div>
                                                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                                            <div className={`h-full ${a.color} rounded-full`} style={{ width: `${a.pct}%` }}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5-Stage Pipeline */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">The Pipeline</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                5 stages, fully automated
                            </h2>
                            <p className="max-w-2xl mx-auto text-slate-500 font-medium mt-6 text-lg leading-relaxed">
                                Each stage has a dedicated team, a purpose-built dashboard, configurable SLA thresholds, and automatic routing to the next stage.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    step: '01', title: 'Claim Submission', role: 'Billing Staff', icon: <FileCheck size={24} />, color: 'blue',
                                    desc: 'Billing staff creates or imports claims via Excel bulk upload. Each claim captures patient name, claim ID, insurance provider, date of service, claim amount, and priority level. Claims start in "Draft" status and move to "Submitted" when ready for review.',
                                    features: ['Excel bulk import with smart column mapping', 'Manual claim creation with all required fields', 'Edit and resubmit rejected claims', 'View rejection reasons inline'],
                                    sla: '24 hours in Draft'
                                },
                                {
                                    step: '02', title: 'Clearinghouse Review', role: 'Operations Manager', icon: <Eye size={24} />, color: 'primary',
                                    desc: 'Operations manager reviews submitted claims for accuracy and completeness. Claims can be accepted (forwarded to payment) or rejected (returned to billing with a reason). This stage acts as a quality gate before claims reach payers.',
                                    features: ['Accept or reject with reason logging', 'View all submitted claims in queue', 'Priority-based sorting', 'Bulk review capabilities'],
                                    sla: '48 hours Submitted, 72 hours Under Review'
                                },
                                {
                                    step: '03', title: 'Payment Posting', role: 'Payment Staff', icon: <DollarSign size={24} />, color: 'emerald',
                                    desc: 'Payment team posts payer responses. Full payments close the claim. Partial payments trigger AR follow-up with the outstanding balance auto-calculated. Denials are routed to the denial management team with documentation.',
                                    features: ['Post full, partial, or denied payments', 'Auto-calculate outstanding balance', 'Payment amount and notes tracking', 'Automatic routing based on outcome'],
                                    sla: '48 hours in Accepted'
                                },
                                {
                                    step: '04', title: 'Denial Management', role: 'AR/Denial Team', icon: <AlertTriangle size={24} />, color: 'amber',
                                    desc: 'Denied claims land here for structured resolution. The team can prepare appeals, resubmit claims (which returns them to clearinghouse review), or write off uncollectable amounts with documented reasons.',
                                    features: ['Appeal preparation and tracking', 'Resubmit to clearinghouse for re-review', 'Write-off with amount and reason', 'Denial pattern visibility'],
                                    sla: '120 hours (5 business days)'
                                },
                                {
                                    step: '05', title: 'AR Follow-Up', role: 'AR/Denial Team', icon: <Target size={24} />, color: 'violet',
                                    desc: 'Partial payments and aged claims are tracked here. The team follows up on outstanding balances, negotiates payment plans, sends reminders, and ultimately closes or writes off claims based on collection outcomes.',
                                    features: ['Outstanding balance tracking', 'Collection effort documentation', 'Close as paid or adjusted', 'AR aging bucket analysis'],
                                    sla: '120 hours (5 business days)'
                                },
                            ].map((stage, i) => (
                                <div key={i} className="bg-white rounded-3xl border border-slate-100 p-8 md:p-10 hover:shadow-lg transition-all duration-500 group">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                        <div className="lg:col-span-1 flex lg:flex-col items-center gap-3">
                                            <div className={`w-14 h-14 bg-${stage.color}-50 rounded-2xl flex items-center justify-center text-${stage.color}-500 group-hover:scale-110 transition-transform`}>
                                                {stage.icon}
                                            </div>
                                            <span className="text-[11px] font-black text-primary-400 tracking-widest">{stage.step}</span>
                                        </div>
                                        <div className="lg:col-span-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h3 className="text-xl font-black text-slate-950 tracking-tight">{stage.title}</h3>
                                                <span className={`px-3 py-1 bg-${stage.color}-50 text-${stage.color}-600 rounded-lg text-[8px] font-black uppercase tracking-wider`}>{stage.role}</span>
                                            </div>
                                            <p className="text-slate-500 font-medium leading-relaxed text-[15px]">{stage.desc}</p>
                                        </div>
                                        <div className="lg:col-span-5 space-y-3">
                                            {stage.features.map((feat, j) => (
                                                <div key={j} className="flex items-center gap-2.5">
                                                    <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                                                    <span className="text-[13px] text-slate-600 font-medium">{feat}</span>
                                                </div>
                                            ))}
                                            <div className="mt-4 px-3 py-2 bg-amber-50 rounded-lg border border-amber-100 inline-flex items-center gap-2">
                                                <Clock size={12} className="text-amber-500" />
                                                <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider">SLA: {stage.sla}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bulk Import Feature */}
                    <div className="mb-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-slate-950 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[80px] rounded-full -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-1000"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                        <FileSpreadsheet size={28} />
                                    </div>
                                    <h3 className="text-3xl font-black tracking-tight mb-4">Excel Bulk Import</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed mb-8 text-lg">
                                        Upload hundreds of claims at once. Our smart parser auto-detects common column variations so you don't need to reformat your spreadsheets.
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em]">Recognized Column Names</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                '"Claim ID" or "Job ID" or "claim_id"',
                                                '"Patient Name" or "patient_name"',
                                                '"Payer" or "Insurance Provider"',
                                                '"DOS" or "Date of Service"',
                                                '"Amount" or "Claim Amount"',
                                                '"Priority" or "priority_level"',
                                            ].map((col, i) => (
                                                <div key={i} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg">
                                                    <code className="text-[10px] font-bold text-primary-300">{col}</code>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['Atomic Transactions', 'Per-Row Errors', 'Auto TimeTracking', 'Metadata Capture'].map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-wider text-slate-300">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-10 md:p-12 border border-slate-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full -mr-24 -mt-24"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6">
                                        <Clock size={28} />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-950 tracking-tight mb-4">SLA Monitoring</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed mb-8 text-lg">
                                        Every workflow stage has a configurable SLA threshold. Jobs that exceed their SLA are automatically flagged with severity-based alerts.
                                    </p>
                                    <div className="space-y-3 mb-8">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Default Thresholds</p>
                                        {[
                                            { stage: 'Draft', time: '24 hours', severity: 'Warning' },
                                            { stage: 'Submitted', time: '48 hours', severity: 'Warning' },
                                            { stage: 'Under Review', time: '72 hours', severity: 'Critical' },
                                            { stage: 'Accepted', time: '48 hours', severity: 'Warning' },
                                            { stage: 'Denied / Partial', time: '120 hours', severity: 'Critical' },
                                            { stage: 'On Hold', time: '168 hours', severity: 'Critical' },
                                        ].map((t, i) => (
                                            <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                                                <span className="text-[13px] font-bold text-slate-700">{t.stage}</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[12px] font-medium text-slate-400">{t.time}</span>
                                                    <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${t.severity === 'Critical' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'}`}>{t.severity}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['5-Min Refresh', 'Auto Escalation', 'Severity Levels', 'Ops Manager Alerts'].map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-black uppercase tracking-wider text-slate-500">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-20">
                        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
                            <div className="space-y-4">
                                <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em]">Specializations</p>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                                    Built for complex <br className="hidden md:block" />medical billing
                                </h2>
                                <p className="text-slate-500 font-medium text-lg max-w-xl">
                                    Patronum X handles the unique billing requirements of high-complexity medical specialties where coding accuracy and payer-specific rules matter most.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-white shadow-sm rounded-full border border-slate-100">
                                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">8+ Specialties</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { title: 'Lithotripsy', desc: 'Complex stone procedure billing with equipment-specific coding and multi-component claim management' },
                                { title: 'Robotic Surgery', desc: 'High-value da Vinci and robotic-assisted procedure coding with modifier-specific requirements' },
                                { title: 'Wound Care', desc: 'Skin graft, debridement, and chronic wound billing with size-based coding and medical necessity' },
                                { title: 'Radiology', desc: 'Imaging-specific RCM covering CT, MRI, X-ray, and interventional radiology with TC/PC splits' },
                                { title: 'Laboratory', desc: 'High-volume diagnostic test billing with panel-specific coding and frequency limitations' },
                                { title: 'Credentialing', desc: 'Provider enrollment and re-credentialing tracking across multiple payers and facility types' },
                                { title: 'AR Recovery', desc: 'Aged claim resolution specializing in 90+ day outstanding balances and payer negotiation' },
                                { title: 'Prior-Auths', desc: 'Pre-authorization and medical necessity documentation with payer-specific requirement tracking' }
                            ].map((spec, i) => (
                                <div key={i} className="group bg-white rounded-2xl border border-slate-100 p-6 hover:bg-slate-950 hover:border-slate-800 transition-all duration-500 cursor-pointer">
                                    <h4 className="text-[10px] font-black text-slate-400 mb-3 uppercase tracking-[0.2em] group-hover:text-primary-400 transition-colors">
                                        {spec.title}
                                    </h4>
                                    <p className="text-[14px] font-medium text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed">{spec.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-primary-500 rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Ready to automate your billing?</h2>
                            <p className="text-white/80 font-medium text-lg mb-8 max-w-xl mx-auto">
                                See how Patronum X can eliminate manual handoffs and improve your collection rate.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={() => navigate('/login')} className="bg-white text-primary-600 px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg transition-all active:scale-95 hover:bg-slate-50 flex items-center gap-2">
                                    Start Free Trial <ArrowRight size={16} />
                                </button>
                                <button onClick={() => navigate('/about')} className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 hover:bg-white/20">
                                    Contact Sales
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
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
                                Empowering healthcare providers with intelligent revenue cycle management.
                            </p>
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

export default Solutions;

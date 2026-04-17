import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    ShieldCheck,
    Layers,
    FileText,
    DollarSign,
    Target,
    BarChart,
    CheckCircle,
    Users,
    Clock,
    Database,
    Server,
    Cpu,
    Zap,
    Upload,
    Eye,
    AlertTriangle,
    Activity,
    Monitor,
    Smartphone,
    Lock,
    RefreshCw,
    GitBranch
} from 'lucide-react';
import NexalithLogo from '../components/NexalithLogo';

const Platform = () => {
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
                            <button key={item.path} onClick={() => navigate(item.path)} className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group/link bg-transparent border-none cursor-pointer ${item.path === '/platform' ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}>
                                {item.label}
                                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${item.path === '/platform' ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
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
                            <Monitor size={14} className="text-primary-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Platform Overview</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[0.9]">
                            One platform. <br />
                            Five dashboards. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Zero confusion.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed tracking-tight">
                            Every role in your billing operation gets a purpose-built dashboard showing only what they need. No clutter, no information overload, just their queue and their tools.
                        </p>
                    </div>

                    {/* Role Dashboards - Deep Dive */}
                    <div className="space-y-8 mb-32">
                        {/* Admin */}
                        <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700">
                                            <ShieldCheck size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-950 tracking-tight">Admin Dashboard</h3>
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[8px] font-black uppercase tracking-wider">Full System Access</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        The admin has complete control over the system without touching operational workflows. Manage users, configure SLA thresholds, review full audit logs, and monitor system health. Admins can see everything but are deliberately separated from day-to-day claim processing to maintain segregation of duties.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Create, edit, deactivate, and assign roles to users',
                                            'View complete audit logs for all users and actions',
                                            'Configure workflow rules and SLA thresholds',
                                            'Monitor system health metrics and uptime',
                                            'Access hidden admin portal via secure route',
                                            'Cannot perform operational tasks (billing, payment, etc.)',
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5">Admin Capabilities</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { label: 'User Management', icon: <Users size={18} />, desc: 'Create & manage staff accounts' },
                                            { label: 'Audit Logs', icon: <Eye size={18} />, desc: 'Every action tracked & logged' },
                                            { label: 'SLA Config', icon: <Clock size={18} />, desc: 'Set thresholds per stage' },
                                            { label: 'System Health', icon: <Activity size={18} />, desc: 'Uptime & performance metrics' },
                                            { label: 'Role Assignment', icon: <GitBranch size={18} />, desc: '5 roles with specific perms' },
                                            { label: 'Security', icon: <Lock size={18} />, desc: 'MFA, password policies' },
                                        ].map((cap, i) => (
                                            <div key={i} className="bg-white rounded-xl p-4 border border-slate-100">
                                                <div className="text-slate-400 mb-2">{cap.icon}</div>
                                                <p className="text-[12px] font-black text-slate-800 mb-0.5">{cap.label}</p>
                                                <p className="text-[10px] font-medium text-slate-400">{cap.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Operations Manager */}
                        <div className="bg-white rounded-3xl border border-primary-100 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500">
                                            <Layers size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-950 tracking-tight">Operations Manager</h3>
                                            <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-lg text-[8px] font-black uppercase tracking-wider">Command Center</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        The nerve center of your billing operation. The operations manager sees all jobs across all departments, uploads new claims via Excel bulk import, monitors SLA compliance, handles escalations, and tracks staff performance. This is the only role that has visibility into every queue.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Excel bulk upload with smart column auto-detection',
                                            'Cross-department job monitoring and queue overview',
                                            'Real-time stuck jobs widget with severity alerts',
                                            'Staff performance tracker with per-user metrics',
                                            'Clearinghouse review: accept or reject submitted claims',
                                            'Handle escalated jobs from all departments',
                                            'All Jobs date-wise view for historical analysis',
                                            'Completed jobs bridge review queue',
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-slate-950 rounded-2xl p-6 text-white">
                                        <p className="text-[9px] font-black text-primary-400 uppercase tracking-[0.3em] mb-4">Dashboard Widgets</p>
                                        <div className="space-y-3">
                                            {[
                                                { name: 'Ingestion Terminal', desc: 'Drag & drop Excel upload with validation', icon: <Upload size={16} /> },
                                                { name: 'SLA Thresholds', desc: 'Stuck jobs with critical/warning severity', icon: <AlertTriangle size={16} /> },
                                                { name: 'Staff Performance', desc: 'Per-user task completion times', icon: <Users size={16} /> },
                                                { name: 'Data Command Center', desc: 'All records with date filtering', icon: <Database size={16} /> },
                                                { name: 'Bridge Review Queue', desc: 'Payment completed jobs review', icon: <CheckCircle size={16} /> },
                                                { name: 'Escalation Nodes', desc: 'High priority intercepted jobs', icon: <AlertTriangle size={16} /> },
                                            ].map((w, i) => (
                                                <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                                                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-primary-400">{w.icon}</div>
                                                    <div>
                                                        <p className="text-[11px] font-black text-white">{w.name}</p>
                                                        <p className="text-[10px] font-medium text-slate-400">{w.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-primary-50 rounded-2xl p-5 border border-primary-100 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white shrink-0">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[12px] font-black text-primary-900">AI Intelligence Panel</p>
                                            <p className="text-[11px] font-medium text-primary-600">Neural routing, anomaly watch, and payer prediction status</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Billing Staff */}
                        <div className="bg-white rounded-3xl border border-blue-100 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                                            <FileText size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-950 tracking-tight">Billing Staff</h3>
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[8px] font-black uppercase tracking-wider">Claim Submission</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        Billing staff see only their queue: draft claims waiting to be submitted and rejected claims that need correction. The interface is streamlined to show claim details, rejection reasons (if any), and a clear submit action. No access to payment or AR data.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'View all draft and rejected claims in their queue',
                                            'Submit claims to clearinghouse with one click',
                                            'See rejection reasons inline for quick correction',
                                            'Edit claim details before resubmission',
                                            'Patient info, insurance, DOS, amount fields',
                                            'Priority tagging (Normal, High, Urgent)',
                                            'Queue isolated — cannot see other departments',
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                                    <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.3em] mb-5">Claim Lifecycle</p>
                                    <div className="space-y-4">
                                        {[
                                            { status: 'Draft', desc: 'New claim created, awaiting submission', action: 'Submit' },
                                            { status: 'Submitted', desc: 'Sent to clearinghouse for review', action: 'Wait' },
                                            { status: 'Rejected', desc: 'Returned with reason, needs correction', action: 'Edit & Resubmit' },
                                            { status: 'Accepted', desc: 'Approved, moves to payment queue', action: 'Complete' },
                                        ].map((s, i) => (
                                            <div key={i} className="bg-white rounded-xl p-4 border border-blue-100/50">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[12px] font-black text-slate-800">{s.status}</span>
                                                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[8px] font-black uppercase">{s.action}</span>
                                                </div>
                                                <p className="text-[11px] text-slate-500 font-medium">{s.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Staff */}
                        <div className="bg-white rounded-3xl border border-emerald-100 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                                            <DollarSign size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-950 tracking-tight">Payment Staff</h3>
                                            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[8px] font-black uppercase tracking-wider">Payment Posting</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        Payment staff see only accepted claims ready for payment posting. Three clear actions: post full payment (closes the claim), post partial payment (auto-calculates balance, routes to AR), or mark as denied (routes to denial management). Outstanding balances are computed automatically.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Post full payment — closes the claim immediately',
                                            'Post partial payment — auto-calculates outstanding balance',
                                            'Mark as denied — routes to denial management team',
                                            'Payment amount and notes tracking per transaction',
                                            'Claim amount vs. payment amount comparison',
                                            'Automatic routing based on payment outcome',
                                            'Queue isolated — only sees accepted claims',
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
                                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-5">Payment Outcomes</p>
                                    <div className="space-y-4">
                                        {[
                                            { outcome: 'Paid in Full', route: 'Closed - Paid', color: 'bg-emerald-500', desc: 'Full amount received, claim auto-closes' },
                                            { outcome: 'Partial Payment', route: 'AR Follow-up', color: 'bg-blue-500', desc: 'Balance auto-calculated, routes to AR team' },
                                            { outcome: 'Denied', route: 'Denial Management', color: 'bg-rose-500', desc: 'Claim routed to denial team for appeal' },
                                        ].map((o, i) => (
                                            <div key={i} className="bg-white rounded-xl p-5 border border-emerald-100/50">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className={`w-3 h-3 rounded-full ${o.color}`}></div>
                                                    <span className="text-[13px] font-black text-slate-800">{o.outcome}</span>
                                                </div>
                                                <p className="text-[12px] text-slate-500 font-medium mb-2">{o.desc}</p>
                                                <div className="flex items-center gap-2">
                                                    <ArrowRight size={12} className="text-slate-300" />
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Routes to: {o.route}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AR/Denial */}
                        <div className="bg-white rounded-3xl border border-amber-100 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
                                            <Target size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-950 tracking-tight">AR / Denial Team</h3>
                                            <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-lg text-[8px] font-black uppercase tracking-wider">Recovery & Resolution</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        The AR/Denial team handles denied claims, partial payment follow-ups, and aged receivables. They can file appeals (resubmitting to clearinghouse), write off uncollectable amounts, close resolved claims, or continue follow-up on outstanding balances. AR aging analysis helps prioritize high-value recovery efforts.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'View all denied and partially paid claims',
                                            'Resubmit claims for appeal (returns to clearinghouse)',
                                            'Write off with custom amount and documented reason',
                                            'Close jobs as paid, adjusted, or written off',
                                            'Outstanding balance auto-calculation',
                                            'AR aging bucket analysis (0-30, 31-60, 61-90, 90+)',
                                            'Collection effort tracking and documentation',
                                            'Escalate complex cases to operations manager',
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
                                        <p className="text-[9px] font-black text-amber-500 uppercase tracking-[0.3em] mb-4">Resolution Options</p>
                                        <div className="space-y-3">
                                            {[
                                                { action: 'Resubmit Appeal', desc: 'Sends claim back to clearinghouse for re-review with updated documentation', icon: <RefreshCw size={16} /> },
                                                { action: 'Write Off', desc: 'Document uncollectable amount with reason, close the claim', icon: <FileText size={16} /> },
                                                { action: 'Close - Paid', desc: 'Mark as fully resolved after successful collection', icon: <CheckCircle size={16} /> },
                                                { action: 'Escalate', desc: 'Flag for operations manager review with priority override', icon: <AlertTriangle size={16} /> },
                                            ].map((a, i) => (
                                                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-amber-100/50">
                                                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 shrink-0">{a.icon}</div>
                                                    <div>
                                                        <p className="text-[12px] font-black text-slate-800">{a.action}</p>
                                                        <p className="text-[11px] font-medium text-slate-500">{a.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reporting */}
                        <div className="bg-white rounded-3xl border border-violet-100 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-500">
                                            <BarChart size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-950 tracking-tight">Reporting Dashboard</h3>
                                            <span className="px-3 py-1 bg-violet-50 text-violet-600 rounded-lg text-[8px] font-black uppercase tracking-wider">Intelligence</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        Available to admins and operations managers via the Intelligence toggle. Aggregates key performance indicators across the entire billing operation with visual charts and progress indicators. Custom date-range filtering allows point-in-time analysis.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Total claims, revenue, collections, outstanding AR',
                                            'Completion rate, denial rate, collection rate KPIs',
                                            'Status distribution pie/bar charts',
                                            'Priority distribution breakdown',
                                            'Queue distribution across departments',
                                            'Date-range filtering for custom reports',
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-violet-50/50 rounded-2xl p-6 border border-violet-100">
                                    <p className="text-[9px] font-black text-violet-500 uppercase tracking-[0.3em] mb-5">Report Metrics</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { label: 'Total Claims', value: '$2.4M', icon: <Database size={16} /> },
                                            { label: 'Collected', value: '$2.32M', icon: <DollarSign size={16} /> },
                                            { label: 'Collection Rate', value: '96.8%', icon: <Target size={16} /> },
                                            { label: 'Denial Rate', value: '4.2%', icon: <AlertTriangle size={16} /> },
                                            { label: 'Avg AR Days', value: '12', icon: <Clock size={16} /> },
                                            { label: 'First Pass', value: '99.2%', icon: <CheckCircle size={16} /> },
                                        ].map((m, i) => (
                                            <div key={i} className="bg-white rounded-xl p-4 border border-violet-100/50">
                                                <div className="text-violet-400 mb-2">{m.icon}</div>
                                                <p className="text-[18px] font-black text-slate-900 tracking-tight">{m.value}</p>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{m.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">Technology</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                Enterprise-grade stack
                            </h2>
                        </div>

                        <div className="bg-slate-950 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden mb-8">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { label: 'Frontend', tech: 'React 19', framework: 'Vite + Tailwind CSS 4', desc: 'Modern SPA with real-time updates, responsive design, and blazing-fast HMR development.' },
                                    { label: 'Backend', tech: 'Django 6.0', framework: 'Django REST Framework', desc: 'Battle-tested Python backend with token auth, serializers, viewsets, and automatic API documentation.' },
                                    { label: 'Database', tech: 'PostgreSQL 14+', framework: 'PGCrypto Encryption', desc: 'ACID-compliant relational database with field-level encryption for PHI and full-text search.' },
                                    { label: 'Async Engine', tech: 'Celery + Redis', framework: 'Celery Beat Scheduler', desc: 'Background task processing for bulk uploads, eligibility checks, and nightly AR aging reports.' },
                                ].map((t, i) => (
                                    <div key={i} className="space-y-4">
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">{t.label}</p>
                                        <p className="text-2xl font-black">{t.tech}</p>
                                        <p className="text-[11px] font-bold text-primary-400">{t.framework}</p>
                                        <p className="text-sm text-slate-400 font-medium leading-relaxed">{t.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Deployment', value: 'Docker + Compose', desc: 'Container orchestration' },
                                { label: 'Web Server', value: 'Gunicorn + Nginx', desc: 'Production-grade serving' },
                                { label: 'Auth', value: 'JWT + MFA', desc: 'Token-based + TOTP 2FA' },
                                { label: 'Logging', value: 'django-auditlog', desc: 'Full action tracking' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all">
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-2">{item.label}</p>
                                    <p className="text-[16px] font-black text-slate-900 tracking-tight mb-1">{item.value}</p>
                                    <p className="text-[12px] font-medium text-slate-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-primary-500 rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">See the platform in action</h2>
                            <p className="text-white/80 font-medium text-lg mb-8 max-w-xl mx-auto">
                                Every role, every dashboard, every workflow — experience Patronum X with a guided demo.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={() => navigate('/login')} className="bg-white text-primary-600 px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg transition-all active:scale-95 hover:bg-slate-50 flex items-center gap-2">
                                    Start Free Trial <ArrowRight size={16} />
                                </button>
                                <button onClick={() => navigate('/solutions')} className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 hover:bg-white/20">
                                    View Solutions
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

export default Platform;

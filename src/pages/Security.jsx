import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    Shield,
    Lock,
    Eye,
    KeyRound,
    Server,
    CheckCircle,
    ShieldCheck,
    Database,
    Users,
    Clock,
    AlertTriangle,
    FileText,
    Fingerprint,
    Network,
    HardDrive,
    MonitorCheck,
    Scan,
    ShieldAlert,
    UserCheck,
    Activity,
    RefreshCw
} from 'lucide-react';
import NexalithLogo from '../components/NexalithLogo';

const Security = () => {
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
                            <button key={item.path} onClick={() => navigate(item.path)} className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group/link bg-transparent border-none cursor-pointer ${item.path === '/security' ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}>
                                {item.label}
                                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${item.path === '/security' ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
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
                            <Shield size={14} className="text-primary-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Security & Compliance</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[0.9]">
                            Healthcare-grade <br />
                            security. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">By default.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed tracking-tight">
                            Patronum X is built from the ground up for HIPAA compliance. Every layer — from database encryption to API authentication to audit logging — is designed to protect patient data and meet regulatory requirements.
                        </p>
                    </div>

                    {/* Compliance Badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
                        {[
                            { badge: 'HIPAA', title: 'PHI Protection', desc: 'Full Protected Health Information safeguards with field-level encryption and access controls', icon: <ShieldCheck size={24} /> },
                            { badge: 'RBAC', title: 'Access Control', desc: 'Role-based permissions ensure users only see and access data relevant to their function', icon: <UserCheck size={24} /> },
                            { badge: 'AES-256', title: 'Encryption', desc: 'PGCrypto field-level encryption at rest, TLS in transit for all data communications', icon: <Lock size={24} /> },
                            { badge: 'SOC 2', title: 'Audit Ready', desc: 'Complete audit trail infrastructure ready for SOC 2 Type II certification process', icon: <FileText size={24} /> },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-7 text-center hover:shadow-xl hover:border-primary-100 transition-all duration-500 group">
                                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <p className="text-xl font-black text-slate-900 mb-1">{item.badge}</p>
                                <p className="text-[10px] font-black text-primary-500 uppercase tracking-wider mb-3">{item.title}</p>
                                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Deep Dive Security Sections */}
                    <div className="space-y-8 mb-32">
                        {/* Data Encryption */}
                        <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500">
                                            <Lock size={28} />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-950 tracking-tight">Field-Level Encryption</h3>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        Unlike application-level encryption that protects data only in transit, Patronum X uses PostgreSQL PGCrypto to encrypt sensitive fields at the column level in the database itself. Even if someone gains direct database access, patient data remains encrypted and unreadable.
                                    </p>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        All encryption/decryption happens transparently through Django's ORM layer, meaning application code works with plaintext while the database stores only ciphertext. No performance compromise, no code complexity.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Patient names encrypted at the database column level',
                                            'Patient IDs encrypted — no plaintext in storage',
                                            'Insurance provider information encrypted',
                                            'PGCrypto extension for PostgreSQL-native encryption',
                                            'Transparent encryption/decryption via Django ORM',
                                            'No plaintext PHI stored anywhere in the database',
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-950 rounded-2xl p-8 text-white">
                                    <p className="text-[9px] font-black text-primary-400 uppercase tracking-[0.3em] mb-6">Encrypted Fields</p>
                                    <div className="space-y-4">
                                        {[
                                            { field: 'patient_name', type: 'TextPGPSymmetricKeyField', example: 'John D***' },
                                            { field: 'patient_id', type: 'TextPGPSymmetricKeyField', example: 'MRN-****-7821' },
                                            { field: 'insurance_provider', type: 'TextPGPSymmetricKeyField', example: 'Blue C****' },
                                        ].map((f, i) => (
                                            <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                                                <div className="flex items-center justify-between mb-2">
                                                    <code className="text-[12px] font-bold text-primary-400">{f.field}</code>
                                                    <Lock size={14} className="text-emerald-400" />
                                                </div>
                                                <p className="text-[10px] font-medium text-slate-400 mb-1">{f.type}</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="text-[9px] font-black text-slate-500 uppercase">DB Value:</span>
                                                    <code className="text-[10px] font-mono text-rose-400 bg-white/5 px-2 py-0.5 rounded">\\xc30d04070302...</code>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                        <p className="text-[10px] font-black text-emerald-400 uppercase tracking-wider mb-1">Result</p>
                                        <p className="text-[12px] text-emerald-300 font-medium">Direct SQL queries return encrypted ciphertext only. PHI is never exposed outside the application layer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Audit Trail */}
                        <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                                            <Eye size={28} />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-950 tracking-tight">Complete Audit Trail</h3>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        Every single action in Patronum X is logged with full attribution. The JobHistory model captures who did what, when, what changed, and how long the previous stage took. Combined with django-auditlog for model-level tracking, you have a complete, tamper-evident record of every operation.
                                    </p>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        This level of audit trail is essential for HIPAA compliance audits, dispute resolution, and internal quality assurance. Every claim has a full lifecycle timeline showing exactly how it was processed.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'User attribution on every action (who did it)',
                                            'Timestamp logging with timezone awareness',
                                            'Status transition tracking (from → to)',
                                            'Time spent in previous stage calculated automatically',
                                            'Free-text notes and reasons captured per action',
                                            'django-auditlog for User, Job, JobHistory, TimeTracking models',
                                            'IP address logging capability for enhanced traceability',
                                            'Full claim lifecycle timeline reconstruction',
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5">Audit Log Entry Example</p>
                                        <div className="space-y-3">
                                            {[
                                                { label: 'Action', value: 'Status changed: submitted → accepted' },
                                                { label: 'User', value: 'ops_manager_01 (Operations Manager)' },
                                                { label: 'Timestamp', value: '2026-04-09 14:23:18 UTC' },
                                                { label: 'Time in Previous Stage', value: '4h 12m (submitted)' },
                                                { label: 'Notes', value: 'Verified insurance eligibility, approved for processing' },
                                                { label: 'Job ID', value: 'CLM-2026-004821' },
                                            ].map((entry, i) => (
                                                <div key={i} className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-0">
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider w-24 shrink-0 pt-0.5">{entry.label}</span>
                                                    <span className="text-[13px] font-medium text-slate-700">{entry.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 flex items-start gap-4">
                                        <Activity size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[12px] font-black text-emerald-800 mb-1">4 Models Under Audit</p>
                                            <p className="text-[11px] font-medium text-emerald-600">User, Job, JobHistory, and TimeTracking are all registered with django-auditlog for comprehensive change tracking.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Authentication & Access */}
                        <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
                                            <KeyRound size={28} />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-950 tracking-tight">Authentication & Access Control</h3>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        Multi-layered authentication with JWT tokens, optional TOTP-based multi-factor authentication, enforced password complexity, and role-based access control at both the API and database query levels. Each role can only access their own queue — API endpoints enforce this at the viewset level.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
                                        <p className="text-[9px] font-black text-amber-500 uppercase tracking-[0.3em] mb-4">Auth Layers</p>
                                        <div className="space-y-3">
                                            {[
                                                { layer: 'JWT Tokens', desc: 'Access + refresh token pairs with configurable expiry', icon: <KeyRound size={16} /> },
                                                { layer: 'TOTP MFA', desc: 'Time-based one-time passwords with QR code setup', icon: <Fingerprint size={16} /> },
                                                { layer: 'Password Policy', desc: '8+ chars, uppercase, lowercase, digits, special chars', icon: <Lock size={16} /> },
                                                { layer: 'Rate Limiting', desc: 'django-ratelimit protects against brute force', icon: <ShieldAlert size={16} /> },
                                                { layer: 'Session Mgmt', desc: 'Token refresh rotation and secure cookie handling', icon: <RefreshCw size={16} /> },
                                            ].map((l, i) => (
                                                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-amber-100/50">
                                                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 shrink-0">{l.icon}</div>
                                                    <div>
                                                        <p className="text-[12px] font-black text-slate-800">{l.layer}</p>
                                                        <p className="text-[11px] font-medium text-slate-500">{l.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RBAC Table */}
                            <div className="mt-10">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Role-Based Access Matrix</p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b-2 border-slate-100">
                                                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-wider">Permission</th>
                                                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-wider text-center">Admin</th>
                                                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-wider text-center">Ops Mgr</th>
                                                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-wider text-center">Billing</th>
                                                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-wider text-center">Payment</th>
                                                <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-wider text-center">AR/Denial</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { perm: 'Manage Users', admin: true, ops: false, bill: false, pay: false, ar: false },
                                                { perm: 'Upload Excel', admin: false, ops: true, bill: false, pay: false, ar: false },
                                                { perm: 'Submit Claims', admin: false, ops: false, bill: true, pay: false, ar: false },
                                                { perm: 'Accept/Reject Claims', admin: false, ops: true, bill: false, pay: false, ar: false },
                                                { perm: 'Post Payments', admin: false, ops: false, bill: false, pay: true, ar: false },
                                                { perm: 'Manage Denials', admin: false, ops: false, bill: false, pay: false, ar: true },
                                                { perm: 'View All Queues', admin: true, ops: true, bill: false, pay: false, ar: false },
                                                { perm: 'View Reports', admin: true, ops: true, bill: false, pay: false, ar: false },
                                                { perm: 'View Audit Logs', admin: true, ops: false, bill: false, pay: false, ar: false },
                                                { perm: 'Escalate Jobs', admin: false, ops: false, bill: true, pay: true, ar: true },
                                                { perm: 'Hold Jobs', admin: false, ops: true, bill: true, pay: true, ar: true },
                                                { perm: 'Change Password', admin: true, ops: true, bill: true, pay: true, ar: true },
                                            ].map((row, i) => (
                                                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50">
                                                    <td className="py-3 text-[13px] font-bold text-slate-700">{row.perm}</td>
                                                    {[row.admin, row.ops, row.bill, row.pay, row.ar].map((val, j) => (
                                                        <td key={j} className="py-3 text-center">
                                                            {val ? (
                                                                <CheckCircle size={16} className="text-emerald-500 mx-auto" />
                                                            ) : (
                                                                <span className="text-slate-200 text-lg">—</span>
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

                        {/* Infrastructure Security */}
                        <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                                            <Server size={28} />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-950 tracking-tight">Infrastructure Security</h3>
                                    </div>
                                    <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-6">
                                        Patronum X is designed for on-premise deployment, giving your organization full control over where patient data lives. Docker containerization provides isolated, reproducible environments. No third-party cloud dependencies for core operations means your data never leaves your network.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Docker containerization with separate containers for each service',
                                            'Nginx reverse proxy with configurable SSL/TLS termination',
                                            'Gunicorn WSGI server for production-grade request handling',
                                            'Environment-based configuration — secrets never in code',
                                            'PostgreSQL with ACID compliance for data integrity',
                                            'Redis for Celery broker — no external message queue dependency',
                                            'Whitenoise for efficient static file serving',
                                            'On-premise deployment — your data stays on your infrastructure',
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span className="text-[14px] text-slate-600 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-950 rounded-2xl p-8 text-white">
                                    <p className="text-[9px] font-black text-primary-400 uppercase tracking-[0.3em] mb-6">Docker Architecture</p>
                                    <div className="space-y-3">
                                        {[
                                            { container: 'django', desc: 'Application server (Gunicorn)', port: '8000', color: 'bg-primary-500' },
                                            { container: 'postgres', desc: 'Database (PGCrypto enabled)', port: '5432', color: 'bg-emerald-500' },
                                            { container: 'redis', desc: 'Celery broker & cache', port: '6379', color: 'bg-rose-500' },
                                            { container: 'celery-worker', desc: 'Async task processing', port: '—', color: 'bg-amber-500' },
                                            { container: 'celery-beat', desc: 'Scheduled tasks (AR aging)', port: '—', color: 'bg-violet-500' },
                                            { container: 'nginx', desc: 'Reverse proxy & SSL', port: '80/443', color: 'bg-blue-500' },
                                        ].map((c, i) => (
                                            <div key={i} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/5">
                                                <div className={`w-3 h-3 rounded-full ${c.color} shrink-0`}></div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <code className="text-[12px] font-bold text-white">{c.container}</code>
                                                        <span className="text-[10px] font-mono text-slate-500">:{c.port}</span>
                                                    </div>
                                                    <p className="text-[10px] font-medium text-slate-400">{c.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-wider mb-1">Network Isolation</p>
                                        <p className="text-[12px] text-blue-300 font-medium">All containers communicate via internal Docker network. Only Nginx is exposed to the host network.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Checklist */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <p className="text-[11px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">Security Checklist</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                                Every box checked
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { category: 'Data Protection', items: ['PGCrypto field-level encryption', 'Encrypted PHI at rest', 'TLS encryption in transit', 'No plaintext PHI in database'] },
                                { category: 'Authentication', items: ['JWT access + refresh tokens', 'TOTP multi-factor auth', 'Password complexity enforcement', 'Rate limiting on auth endpoints'] },
                                { category: 'Authorization', items: ['5-role RBAC system', 'API endpoint guards', 'Queue isolation by role', 'Admin-only system config'] },
                                { category: 'Audit & Logging', items: ['Every action logged with user', 'Status transition tracking', 'Time-per-stage recording', 'django-auditlog on 4 models'] },
                                { category: 'Infrastructure', items: ['On-premise Docker deployment', 'Internal Docker networking', 'Environment-based secrets', 'No cloud data dependency'] },
                                { category: 'Operational', items: ['Session management', 'Password change enforcement', 'User deactivation support', 'Segregation of duties'] },
                            ].map((section, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6">
                                    <p className="text-[10px] font-black text-primary-500 uppercase tracking-[0.3em] mb-4">{section.category}</p>
                                    <div className="space-y-2.5">
                                        {section.items.map((item, j) => (
                                            <div key={j} className="flex items-center gap-2.5">
                                                <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                                                <span className="text-[13px] text-slate-600 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BAA / Compliance */}
                    <div className="bg-slate-950 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden mb-20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                        <div className="relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <p className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em] mb-4">HIPAA Compliance</p>
                                    <h3 className="text-3xl font-black tracking-tight mb-4">Business Associate Agreement</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed mb-6 text-lg">
                                        Patronum X provides a standard Business Associate Agreement (BAA) as part of enterprise deployments. Our BAA covers all aspects of PHI handling, including storage, transmission, access controls, breach notification procedures, and data retention policies.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Standard BAA template included with enterprise license',
                                            'Covers PHI storage, transmission, and access',
                                            'Breach notification procedures defined',
                                            'Data retention and disposal policies',
                                            'Subcontractor obligations documented',
                                            'Annual security assessment commitment',
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                                                <span className="text-[13px] text-slate-300 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { title: 'Administrative Safeguards', desc: 'Role-based access, workforce training, security officer designation, incident response procedures' },
                                        { title: 'Physical Safeguards', desc: 'On-premise deployment ensures physical control over data storage and access to server infrastructure' },
                                        { title: 'Technical Safeguards', desc: 'Encryption at rest and in transit, audit controls, integrity controls, transmission security' },
                                    ].map((safeguard, i) => (
                                        <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                            <h4 className="text-[13px] font-black text-white mb-2">{safeguard.title}</h4>
                                            <p className="text-[12px] text-slate-400 font-medium leading-relaxed">{safeguard.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-primary-500 rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Security questions?</h2>
                            <p className="text-white/80 font-medium text-lg mb-8 max-w-xl mx-auto">
                                Our team is ready to walk through our security architecture and compliance documentation.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button onClick={() => navigate('/about')} className="bg-white text-primary-600 px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase shadow-lg transition-all active:scale-95 hover:bg-slate-50 flex items-center gap-2">
                                    Contact Security Team <ArrowRight size={16} />
                                </button>
                                <button onClick={() => navigate('/login')} className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-black tracking-[0.15em] text-[11px] uppercase transition-all active:scale-95 hover:bg-white/20">
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

export default Security;

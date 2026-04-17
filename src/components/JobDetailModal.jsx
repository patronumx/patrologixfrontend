import React from 'react';
import {
    X,
    Clock,
    User,
    FileText,
    Activity,
    DollarSign,
    Calendar,
    Building2,
    CheckCircle2,
    AlertCircle,
    Hash,
    ArrowRight,
    ShieldCheck,
    CreditCard,
    History,
    ClipboardList,
    Layers
} from 'lucide-react';

const JobDetailModal = ({ job, isOpen, onClose }) => {
    if (!job || !isOpen) return null;

    const getStatusTheme = (status) => {
        const themes = {
            'draft': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', dot: 'bg-blue-500' },
            'submitted': { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', dot: 'bg-indigo-500' },
            'accepted': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', dot: 'bg-emerald-500' },
            'rejected': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', dot: 'bg-rose-500' },
            'paid_full': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', dot: 'bg-emerald-500' },
            'paid_partial': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', dot: 'bg-amber-500' },
            'denied': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', dot: 'bg-rose-500' },
            'written_off': { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-100', dot: 'bg-slate-500' },
            'on_hold': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', dot: 'bg-amber-500' },
            'escalated': { bg: 'bg-primary-500', text: 'text-white', border: 'border-primary-600', dot: 'bg-white' },
            'closed': { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-200', dot: 'bg-slate-400' }
        };
        return themes[status] || themes['draft'];
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const theme = getStatusTheme(job.status);
    const balance = job.payment_amount
        ? (parseFloat(job.claim_amount) - parseFloat(job.payment_amount)).toFixed(2)
        : parseFloat(job.claim_amount).toFixed(2);

    return (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center px-4 pt-28 pb-6 bg-slate-950/40 backdrop-blur-xl animate-fade-in">
            <div className="bg-white rounded-[2rem] shadow-2xl max-w-6xl w-full max-h-[calc(100vh-8.5rem)] overflow-hidden flex flex-col border border-white/20 animate-slide-up">

                {/* Compact Clinical Header */}
                <div className="bg-slate-50/50 border-b border-slate-100 px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-5 min-w-0">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${theme.bg} ${theme.text} border ${theme.border} shadow-lg shadow-slate-900/5`}>
                            <Activity size={24} />
                        </div>
                        <div className="min-w-0">
                            <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                                <h2 className="text-2xl font-black text-slate-950 tracking-tight">Case: #{job.claim_id}</h2>
                                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg ${theme.bg} ${theme.text} ${theme.border} border`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${theme.dot} animate-pulse`}></div>
                                    <span className="text-[9px] font-black tracking-[0.15em]">{job.status.replace('_', ' ')}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 flex-wrap">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                    <Calendar size={12} className="text-primary-500" />
                                    {formatDate(job.created_at)}
                                </p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                    <Hash size={12} className="text-primary-500" />
                                    ID: {job.id}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-300 hover:text-primary-500 hover:border-primary-100 transition-all shadow-sm flex-shrink-0 ml-4"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Analytical Intelligence Workspace */}
                <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 scrollbar-hide">

                    {/* Compact Metrics Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { label: 'Patient', icon: <User />, val: job.patient_name, sub: `ID: ${job.patient_id || 'N/A'}`, color: 'primary' },
                            { label: 'Claim Amount', icon: <DollarSign />, val: `$${parseFloat(job.claim_amount).toLocaleString()}`, sub: 'Revenue', color: 'slate' },
                            { label: 'Payment', icon: <CreditCard />, val: `$${parseFloat(job.payment_amount || 0).toLocaleString()}`, sub: 'Settled', color: 'emerald' },
                            { label: 'Balance', icon: <Activity />, val: `$${balance}`, sub: 'Outstanding', color: 'primary' }
                        ].map((stat, i) => (
                            <div key={i} className="group p-4 bg-slate-50/60 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-md hover:border-primary-100 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className={`w-8 h-8 rounded-lg bg-${stat.color === 'slate' ? 'slate' : 'primary'}-100/60 text-${stat.color === 'slate' ? 'slate' : 'primary'}-500 flex items-center justify-center flex-shrink-0`}>
                                        {React.cloneElement(stat.icon, { size: 15 })}
                                    </div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em]">{stat.label}</p>
                                </div>
                                <p className="text-lg font-black text-slate-950 tracking-tight leading-none mb-1 break-words">{stat.val}</p>
                                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{stat.sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Core Intelligence Segments */}
                        <div className="lg:col-span-3 space-y-6">
                            <section className="animate-fade-in">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-md">
                                        <ClipboardList size={16} />
                                    </div>
                                    <h3 className="text-[10px] font-black text-slate-950 uppercase tracking-[0.25em]">Procedural Architecture</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                                    <div className="space-y-1.5">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Primary Payer</p>
                                        <div className="p-3 bg-white rounded-xl border border-slate-100 text-sm font-bold text-slate-900 shadow-sm uppercase tracking-wide">
                                            {job.insurance_provider || 'FEDERAL COVERAGE'}
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Priority</p>
                                        <div className={`p-3 rounded-xl border text-sm font-black text-center shadow-sm uppercase tracking-widest ${job.priority === 'urgent' ? 'bg-primary-50 text-primary-600 border-primary-100' :
                                                job.priority === 'medium' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                    'bg-emerald-50 text-emerald-600 border-emerald-100'
                                            }`}>
                                            {job.priority || 'NORMAL'}
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 col-span-full">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Notes</p>
                                        <div className="text-sm font-medium text-slate-600 leading-relaxed bg-white/80 p-5 rounded-xl border border-slate-100 shadow-inner min-h-[80px]">
                                            {job.description || 'No procedural narratives for this node.'}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {job.metadata && Object.keys(job.metadata).length > 0 && (
                                <section className="animate-fade-in">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-8 h-8 rounded-lg bg-primary-500 text-white flex items-center justify-center shadow-md">
                                            <Layers size={16} />
                                        </div>
                                        <h3 className="text-[10px] font-black text-slate-950 uppercase tracking-[0.25em]">Metadata</h3>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-slate-900 p-6 rounded-2xl shadow-lg">
                                        {Object.entries(job.metadata).map(([key, value]) => (
                                            <div key={key} className="space-y-1 group/item">
                                                <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] group-hover/item:text-primary-400 transition-colors">{key.replace(/_/g, ' ')}</p>
                                                <p className="text-xs font-bold text-white tracking-wide break-words opacity-80" title={String(value)}>{String(value)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {(job.denial_reason || job.close_reason) && (
                                <section className="animate-fade-in">
                                    <div className="p-6 bg-rose-50 border-2 border-rose-100 rounded-2xl flex gap-5 items-start relative overflow-hidden group">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-rose-500 shadow-sm flex-shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                                            <AlertCircle size={24} />
                                        </div>
                                        <div className="flex-1 space-y-2 min-w-0">
                                            <h4 className="text-[9px] font-black text-rose-600 uppercase tracking-[0.25em]">Critical Signal Interruption</h4>
                                            <p className="text-base font-black text-rose-950 leading-snug break-words">
                                                "{job.denial_reason || job.close_reason}"
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Audit & Telemetry Sidebar */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                                <div className="flex items-center gap-3 mb-5">
                                    <History className="text-primary-500" size={18} />
                                    <h3 className="text-[10px] font-black text-slate-950 uppercase tracking-[0.25em]">Chronology</h3>
                                </div>
                                <div className="space-y-5 relative max-h-[360px] overflow-y-auto pr-1 scrollbar-hide before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                                    {job.history && job.history.length > 0 ? (
                                        job.history.map((h, i) => (
                                            <TimelineItem
                                                key={h.id}
                                                status={h.action}
                                                date={h.timestamp}
                                                desc={h.notes}
                                                user={h.user_name}
                                                active={i === 0}
                                                last={i === job.history.length - 1}
                                            />
                                        ))
                                    ) : (
                                        <TimelineItem
                                            status="Case Initialized"
                                            date={job.created_at}
                                            active={true}
                                            last={true}
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Velocity Metrics */}
                            <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 text-white group">
                                <div className="flex items-center gap-3 mb-6">
                                    <Clock className="text-primary-500" size={18} />
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-white transition-colors">Queue Telemetry</h3>
                                </div>
                                <div className="space-y-5">
                                    {job.time_tracks && job.time_tracks.length > 0 ? (
                                        job.time_tracks.map((track) => (
                                            <div key={track.id} className="flex items-center justify-between group/track">
                                                <div className="min-w-0 mr-3">
                                                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-primary-500 mb-0.5 group-hover/track:text-white transition-colors">{track.status.replace(/_/g, ' ')}</p>
                                                    <p className="text-[8px] text-slate-600 font-bold truncate">{formatDate(track.entered_at)}</p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <p className="text-base font-black tracking-tight text-white leading-none mb-0.5">
                                                        {track.duration_seconds
                                                            ? `${Math.floor(track.duration_seconds / 60)}m ${track.duration_seconds % 60}s`
                                                            : 'LIVE'}
                                                    </p>
                                                    <div className="inline-flex items-center gap-1">
                                                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                                                        <p className="text-[7px] font-black text-slate-500 uppercase tracking-widest">Efficiency</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-xs font-bold text-slate-600 italic">Streaming initialization...</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Compact Footer */}
                <div className="px-8 py-5 bg-slate-50/50 border-t border-slate-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-8 py-3 bg-slate-950 text-white rounded-xl hover:bg-slate-900 transition-all text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-3 group shadow-lg shadow-slate-950/20"
                    >
                        Synchronize & Exit
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const TimelineItem = ({ status, date, active, last, desc, user }) => (
    <div className={`relative pl-8 ${last ? '' : 'pb-2'}`}>
        <div className={`absolute left-0 top-1 w-5 h-5 rounded-full border-[3px] border-white shadow-sm flex items-center justify-center z-10 ${active ? 'bg-primary-500 animate-pulse' : 'bg-slate-300'}`}>
            {active && <div className="w-1 h-1 rounded-full bg-white"></div>}
        </div>
        <div className="group/item">
            <div className="flex items-center justify-between gap-2 mb-1">
                <p className={`text-[9px] font-black ${active ? 'text-slate-950' : 'text-slate-400'} uppercase tracking-[0.15em]`}>{status}</p>
                {user && <p className="text-[7px] font-black bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-tight group-hover/item:bg-primary-500 group-hover/item:text-white transition-colors">{user}</p>}
            </div>
            {date && <p className="text-[8px] font-bold text-slate-400 mb-1.5">{new Date(date).toLocaleString()}</p>}
            {desc && <p className="text-[11px] font-medium text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-slate-100 shadow-sm">{desc}</p>}
        </div>
    </div>
);

export default JobDetailModal;

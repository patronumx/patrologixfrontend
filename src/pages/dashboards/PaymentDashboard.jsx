import React, { useState, useEffect } from 'react';
import { jobService } from '../../services/api';
import {
    CheckCircle,
    AlertCircle,
    DollarSign,
    RefreshCw,
    Activity,
    ChevronRight,
    Search,
    Lock,
    User,
    ArrowRight,
    TrendingUp,
    CreditCard,
    Ban,
    Check,
    X,
    Layers,
    PauseCircle,
    ShieldAlert,
    Play,
    CheckCircle2
} from 'lucide-react';
import JobDetailModal from '../../components/JobDetailModal';
import NexalithLogo from '../../components/NexalithLogo';

const PaymentDashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [processingJobId, setProcessingJobId] = useState(null);
    const [paymentAmount, setPaymentAmount] = useState('');
    const [denialReason, setDenialReason] = useState('');
    const [actionType, setActionType] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [reasonValue, setReasonValue] = useState('');
    const [acceptingJobId, setAcceptingJobId] = useState(null);
    const [notification, setNotification] = useState(null);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await jobService.getJobs({ status: 'accepted' });
            setJobs(response.data);
            setError(null);
        } catch (err) {
            console.error("Error fetching payment jobs", err);
            setError("Settlement interface synchronisation error.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const showNotification = (type, message) => {
        setNotification({ type, message });
    };

    const handleAcceptTask = async (jobId) => {
        setAcceptingJobId(jobId);
        try {
            await jobService.acceptTask(jobId);
            showNotification('success', 'Task accepted. Processing clock started.');
            fetchJobs();
        } catch (err) {
            const msg = err.response?.data?.error || 'Failed to accept task.';
            showNotification('error', msg);
        } finally {
            setAcceptingJobId(null);
        }
    };

    const isJobAccepted = (job) => {
        return job.assigned_to !== null && job.assigned_to !== undefined;
    };

    const handlePostPayment = async (jobId, type) => {
        if ((type === 'full' || type === 'partial') && (!paymentAmount || parseFloat(paymentAmount) <= 0)) {
            showNotification('error', 'Enter a valid payment amount.');
            return;
        }
        if (type === 'denied' && !denialReason.trim()) {
            showNotification('error', 'Enter a denial reason before establishing the trace.');
            return;
        }
        if ((type === 'hold' || type === 'escalate') && !reasonValue.trim()) {
            showNotification('error', 'Enter a justification before continuing.');
            return;
        }

        try {
            if (type === 'full') {
                await jobService.postPaymentFull(jobId, paymentAmount);
                showNotification('success', 'Full payment posted successfully. Routed to archive.');
            } else if (type === 'partial') {
                await jobService.postPaymentPartial(jobId, paymentAmount);
                showNotification('success', 'Partial payment posted. Routed to AR queue.');
            } else if (type === 'denied') {
                await jobService.postPaymentDenied(jobId, denialReason);
                showNotification('success', 'Denial posted. Routed to Denial Management.');
            } else if (type === 'hold') {
                await jobService.hold(jobId, reasonValue);
                showNotification('success', 'Job placed on hold.');
            } else if (type === 'escalate') {
                await jobService.escalate(jobId, reasonValue);
                showNotification('success', 'Job escalated to Operations Manager.');
            }

            setProcessingJobId(null);
            setPaymentAmount('');
            setDenialReason('');
            setActionType(null);
            setReasonValue('');
            fetchJobs();
        } catch (err) {
            const msg = err.response?.data?.error || 'Action failed.';
            showNotification('error', msg);
        }
    };

    const filteredJobs = jobs.filter(job =>
        job.claim_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.patient_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-12 animate-fade-in">
            {/* Notification Toast */}
            {notification && (
                <div className="fixed top-28 right-6 z-[200] animate-slide-up max-w-md">
                    <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border ${
                        notification.type === 'success'
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                            : 'bg-rose-50 border-rose-200 text-rose-800'
                    }`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            notification.type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}>
                            {notification.type === 'success'
                                ? <CheckCircle2 size={20} className="text-white" />
                                : <AlertCircle size={20} className="text-white" />
                            }
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-0.5">
                                {notification.type === 'success' ? 'Operation Successful' : 'Operation Failed'}
                            </p>
                            <p className="text-sm font-bold">{notification.message}</p>
                        </div>
                        <button onClick={() => setNotification(null)} className="p-1 hover:bg-white/50 rounded-lg transition-all flex-shrink-0">
                            <X size={16} />
                        </button>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
                <div>
                    <h2 className="text-4xl font-black text-[#111827] mb-2 tracking-tight">Settlement Node</h2>
                    <div className="flex items-center gap-4">
                        <div className="clinical-badge bg-emerald-50 text-emerald-600 border-emerald-100 py-1.5 px-3">
                            <NexalithLogo size={0.2} variant="iconOnly" className="mr-1" />
                            Ledger Online
                        </div>
                        <div className="h-4 w-[1px] bg-gray-200"></div>
                        <p className="text-sm font-bold text-[#64748b]">{jobs.length} Pending Operational Settlements</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button onClick={fetchJobs} className="btn btn-primary px-8 flex items-center gap-2">
                        <RefreshCw size={18} className={loading ? 'animate-spin' : ''} /> Sync Ledger
                    </button>
                </div>
            </div>

            {error && (
                <div className="p-6 bg-rose-50 text-rose-700 rounded-3xl border border-rose-100 flex items-center gap-4 animate-shake">
                    <AlertCircle className="w-6 h-6" />
                    <p className="font-bold">{error}</p>
                </div>
            )}

            {/* Financial Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="stat-card">
                    <p className="subtle-label">Settlement Pipeline</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-gray-900 tracking-tight">
                            ${jobs.reduce((acc, job) => acc + parseFloat(job.claim_amount), 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-sm">
                            <DollarSign size={20} />
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <p className="subtle-label">Accepted Signals</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-gray-900 tracking-tight">{jobs.length}</span>
                        <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center shadow-sm">
                            <CheckCircle size={20} />
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <p className="subtle-label">Avg. Reconcile Time</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-gray-900 tracking-tight">4.2h</span>
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center shadow-sm">
                            <NexalithLogo size={0.3} variant="iconOnly" />
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <p className="subtle-label">Ledger Accuracy</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-gray-900 tracking-tight">100%</span>
                        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center shadow-sm">
                            <Lock size={20} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Command Workspace */}
            <div className="medical-card overflow-hidden">
                <div className="p-8 border-b border-gray-50 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <Layers className="text-primary-500" size={20} />
                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest">Settlement Sequence Queue</h3>
                    </div>
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Interrogate Claim ID..."
                            className="pl-12 pr-6 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all w-64 shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="clinical-table">
                        <thead>
                            <tr>
                                <th>Claim Sequence</th>
                                <th>Biological Entity</th>
                                <th>Operational Origin</th>
                                <th>Financial Exposure</th>
                                <th>Signal Status</th>
                                <th>Task Ownership</th>
                                <th className="text-right">Tactical Response</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="7" className="py-20 text-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
                                            <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Synchronizing Ledger...</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredJobs.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="py-20 text-center">
                                        <div className="flex flex-col items-center gap-4 opacity-40">
                                            <CreditCard size={48} className="text-gray-300" />
                                            <p className="text-sm font-black text-gray-400 uppercase tracking-widest">No Sequences Pending Settlement</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                filteredJobs.map((job) => {
                                    const accepted = isJobAccepted(job);
                                    const isAccepting = acceptingJobId === job.id;

                                    return (
                                        <tr key={job.id} className="group">
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                                        <Activity size={14} />
                                                    </div>
                                                    <span className="text-sm font-black text-gray-900 leading-none">{job.claim_id}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">
                                                        <User size={14} />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-700 leading-none mb-1">{job.patient_name}</p>
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PID: {job.patient_id || 'N/A'}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{job.insurance_provider || 'FEDERAL PAYER'}</span>
                                            </td>
                                            <td>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-black text-gray-900">${parseFloat(job.claim_amount).toLocaleString()}</span>
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gross Exposure</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="clinical-badge bg-emerald-50 text-emerald-600 border-emerald-100">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                                    {job.status.toUpperCase()}
                                                </div>
                                            </td>
                                            {/* Task Ownership Column */}
                                            <td>
                                                {accepted ? (
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                                                            <CheckCircle2 size={14} className="text-emerald-500" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-wider leading-none mb-0.5">Accepted</p>
                                                            <p className="text-[9px] font-bold text-gray-400 leading-none">{job.assigned_to_name || 'You'}</p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => handleAcceptTask(job.id)}
                                                        disabled={isAccepting}
                                                        className="h-9 px-4 flex items-center gap-2 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all border border-indigo-100 font-black text-[10px] uppercase tracking-widest disabled:opacity-50"
                                                    >
                                                        {isAccepting ? (
                                                            <>
                                                                <div className="w-3.5 h-3.5 border-2 border-indigo-300 border-t-indigo-600 rounded-full animate-spin"></div>
                                                                Accepting...
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Play size={12} /> Accept Task
                                                            </>
                                                        )}
                                                    </button>
                                                )}
                                            </td>
                                            <td className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => { setProcessingJobId(job.id); setActionType('payment'); setPaymentAmount(job.claim_amount); }}
                                                        disabled={!accepted}
                                                        className={`h-10 px-4 flex items-center gap-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border ${
                                                            accepted
                                                                ? 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-500 hover:text-white'
                                                                : 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                                                        }`}
                                                        title={!accepted ? 'Accept the task first' : 'Post Settlement'}
                                                    >
                                                        <DollarSign size={14} /> Post Settlement
                                                    </button>
                                                    <button
                                                        onClick={() => { setProcessingJobId(job.id); setActionType('denied'); }}
                                                        disabled={!accepted}
                                                        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all border ${
                                                            accepted
                                                                ? 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-500 hover:text-white'
                                                                : 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                                                        }`}
                                                        title="Execution Denial Posting"
                                                    >
                                                        <Ban size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => { setProcessingJobId(job.id); setActionType('hold'); }}
                                                        className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-amber-500 hover:text-white transition-all border border-gray-100"
                                                        title="Put on Hold"
                                                    >
                                                        <PauseCircle size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => { setProcessingJobId(job.id); setActionType('escalate'); }}
                                                        className="w-10 h-10 flex items-center justify-center bg-gray-50 text-rose-400 rounded-xl hover:bg-rose-500 hover:text-white transition-all border border-gray-100"
                                                        title="Escalate to Manager"
                                                    >
                                                        <ShieldAlert size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedJob(job)}
                                                        className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 hover:bg-white hover:text-primary-500 rounded-xl transition-all border border-gray-100"
                                                    >
                                                        <ArrowRight size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Tactical Modals */}
            {processingJobId && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary-900/40 backdrop-blur-md animate-fade-in">
                    <div className="medical-card w-full max-w-xl p-10 shadow-2xl animate-scale-up">
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${actionType === 'payment' ? 'bg-emerald-500 shadow-emerald-900/20' :
                                actionType === 'denied' ? 'bg-rose-500 shadow-rose-900/20' :
                                    actionType === 'hold' ? 'bg-amber-600' : 'bg-rose-600'
                                }`}>
                                {actionType === 'payment' ? <CreditCard size={24} /> :
                                    actionType === 'denied' ? <Ban size={24} /> :
                                        actionType === 'hold' ? <PauseCircle size={24} /> : <ShieldAlert size={24} />}
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                                    {actionType === 'payment' ? 'Post Settlement Signal' :
                                        actionType === 'denied' ? 'Post Denial Signal' :
                                            actionType === 'hold' ? 'Suspend Procedure (Hold)' : 'Escalate Trace to Management'}
                                </h3>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Operational ID: {processingJobId}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {actionType === 'hold' || actionType === 'escalate' ? (
                                <div>
                                    <label className="subtle-label">Clinical Intelligence / Justification</label>
                                    <textarea
                                        className="w-full px-6 py-4 bg-gray-50 border-gray-100 rounded-2xl font-bold text-gray-700 min-h-[120px] focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all"
                                        placeholder="Provide detailed reasoning for this tactical adjustment..."
                                        value={reasonValue}
                                        onChange={(e) => setReasonValue(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handlePostPayment(processingJobId, actionType)}
                                        className={`w-full mt-6 btn py-4 text-white font-black shadow-xl ${actionType === 'hold' ? 'bg-amber-600' : 'bg-rose-600'}`}
                                    >
                                        Establish {actionType.toUpperCase()} Trace
                                    </button>
                                </div>
                            ) : actionType === 'payment' ? (
                                <div>
                                    <label className="subtle-label">Settlement Amount Received</label>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-extrabold">$</span>
                                        <input
                                            type="number"
                                            className="w-full pl-10 pr-6 py-4 bg-gray-50 border-gray-100 rounded-2xl font-black text-gray-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all"
                                            placeholder="0.00"
                                            value={paymentAmount}
                                            onChange={(e) => setPaymentAmount(e.target.value)}
                                        />
                                    </div>
                                    <div className="mt-6 flex gap-3">
                                        <button
                                            onClick={() => handlePostPayment(processingJobId, 'full')}
                                            className="btn btn-primary flex-1 py-4"
                                        >
                                            Confirm Full Reconcile
                                        </button>
                                        <button
                                            onClick={() => handlePostPayment(processingJobId, 'partial')}
                                            className="btn btn-secondary flex-1 py-4 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                                        >
                                            Partial Reconcile
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => setActionType('denied')}
                                        className="w-full mt-3 btn bg-rose-500 hover:bg-rose-600 text-white py-4 shadow-xl shadow-rose-900/20"
                                    >
                                        Denial
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <label className="subtle-label">Denial Intelligence / Reason Code</label>
                                    <textarea
                                        className="w-full px-6 py-4 bg-gray-50 border-gray-100 rounded-2xl font-bold text-gray-700 min-h-[120px] focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all"
                                        placeholder="Identify the reason for signal rejection..."
                                        value={denialReason}
                                        onChange={(e) => setDenialReason(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handlePostPayment(processingJobId, 'denied')}
                                        className="w-full mt-6 btn bg-rose-500 hover:bg-rose-600 text-white py-4 shadow-xl shadow-rose-900/20"
                                    >
                                        Establish Denial Trace
                                    </button>
                                </div>
                            )}

                            <button
                                onClick={() => { setProcessingJobId(null); setActionType(null); }}
                                className="w-full btn btn-secondary py-3 text-[10px]"
                            >
                                Abort Sequence
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {selectedJob && (
                <JobDetailModal
                    job={selectedJob}
                    isOpen={!!selectedJob}
                    onClose={() => setSelectedJob(null)}
                />
            )}
        </div>
    );
};

export default PaymentDashboard;

import React, { useState, useEffect } from 'react';
import { jobService } from '../../services/api';
import {
    CheckCircle,
    AlertCircle,
    RefreshCw,
    XCircle,
    FileX,
    Activity,
    ChevronRight,
    Search,
    User,
    ArrowRight,
    TrendingDown,
    ShieldAlert,
    Archive,
    Check,
    X,
    Layers,
    PauseCircle,
    Play,
    CheckCircle2
} from 'lucide-react';
import JobDetailModal from '../../components/JobDetailModal';
import NexalithLogo from '../../components/NexalithLogo';

const ARDenialDashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [processingJobId, setProcessingJobId] = useState(null);
    const [actionType, setActionType] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [writeOffAmount, setWriteOffAmount] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [acceptingJobId, setAcceptingJobId] = useState(null);
    const [notification, setNotification] = useState(null);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await jobService.getJobs();
            const arJobs = response.data.filter(job =>
                job.status === 'denied' || job.status === 'paid_partial'
            );
            setJobs(arJobs);
            setError(null);
        } catch (err) {
            console.error("Error fetching AR jobs", err);
            setError("Escalation queue synchronisation failure.");
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
            showNotification('success', 'Task accepted. Recovery clock started.');
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

    const handleAction = async (jobId, type) => {
        try {
            if (type === 'resubmit') {
                await jobService.resubmitClaim(jobId, inputValue || 'System triggered resubmission');
                showNotification('success', 'Claim resubmitted successfully.');
            } else if (type === 'writeoff') {
                if (!writeOffAmount || parseFloat(writeOffAmount) <= 0) return;
                await jobService.writeOff(jobId, writeOffAmount, inputValue || 'Uncollectable balance');
                showNotification('success', 'Write-off executed successfully.');
            } else if (type === 'close') {
                await jobService.closeJob(jobId, inputValue || 'Manual administrative closure');
                showNotification('success', 'Job closed successfully.');
            } else if (type === 'hold') {
                await jobService.hold(jobId, inputValue || 'Operational blocker - Investigation required');
                showNotification('success', 'Job placed on hold.');
            } else if (type === 'escalate') {
                await jobService.escalate(jobId, inputValue || 'High-risk case escalation');
                showNotification('success', 'Job escalated to Operations Manager.');
            }

            setProcessingJobId(null);
            setActionType(null);
            setInputValue('');
            setWriteOffAmount('');
            fetchJobs();
        } catch (err) {
            const msg = err.response?.data?.error || 'Action failed.';
            showNotification('error', msg);
        }
    };

    const calculateBalance = (job) => {
        if (job.status === 'paid_partial' && job.payment_amount) {
            return (parseFloat(job.claim_amount) - parseFloat(job.payment_amount)).toFixed(2);
        }
        return parseFloat(job.claim_amount).toFixed(2);
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

            {/* Control Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
                <div>
                    <h2 className="text-4xl font-black text-[#111827] mb-2 tracking-tight">Recovery Command</h2>
                    <div className="flex items-center gap-4">
                        <div className="clinical-badge bg-rose-50 text-rose-500 border-rose-100 py-1.5 px-3">
                            <NexalithLogo size={0.2} variant="iconOnly" className="mr-1" />
                            Critical Recovery Suite
                        </div>
                        <div className="h-4 w-[1px] bg-gray-200"></div>
                        <p className="text-sm font-bold text-[#64748b]">Security Node Status: <span className="text-emerald-500 font-extrabold">ENFORCED</span></p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
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
                    <button
                        onClick={fetchJobs}
                        disabled={loading}
                        className="btn btn-secondary px-6 flex items-center gap-2"
                    >
                        <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                        Sync Node
                    </button>
                </div>
            </div>

            {/* Performance Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="stat-card">
                    <p className="subtle-label">Escalated Capital</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-gray-900 tracking-tight">
                            ${jobs.reduce((acc, job) => acc + parseFloat(calculateBalance(job)), 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center shadow-sm">
                            <TrendingDown size={20} />
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <p className="subtle-label">Recovery Node</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-gray-900 tracking-tight">{jobs.length}</span>
                        <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center shadow-sm">
                            <Archive size={20} />
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <p className="subtle-label">Resolution Rate</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-gray-900 tracking-tight">42%</span>
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-sm">
                            <CheckCircle size={20} />
                        </div>
                    </div>
                </div>
                <div className="stat-card">
                    <p className="subtle-label">Audit Risk</p>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-gray-900 tracking-tight">LOW</span>
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shadow-sm">
                            <NexalithLogo size={0.3} variant="iconOnly" />
                        </div>
                    </div>
                </div>
            </div>

            {error && (
                <div className="p-6 bg-rose-50 text-rose-700 rounded-3xl border border-rose-100 flex items-center gap-4 animate-shake">
                    <AlertCircle className="w-6 h-6" />
                    <p className="font-bold">{error}</p>
                </div>
            )}

            {/* Main Command Workspace */}
            <div className="medical-card overflow-hidden">
                <div className="p-8 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Layers className="text-primary-500" size={20} />
                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest">Recovery Sequence Queue</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">Live Scan Active</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="clinical-table">
                        <thead>
                            <tr>
                                <th>Claim Sequence</th>
                                <th>Biological Entity</th>
                                <th>Financial Exposure</th>
                                <th>Signal Status</th>
                                <th>Task Ownership</th>
                                <th>Operational Link</th>
                                <th className="text-right">Tactical Response</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="7" className="py-20 text-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
                                            <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Synchronizing Recovery Logs...</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredJobs.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="py-20 text-center">
                                        <div className="flex flex-col items-center gap-4 opacity-40">
                                            <Archive size={48} className="text-gray-300" />
                                            <p className="text-sm font-black text-gray-400 uppercase tracking-widest">No Escalated Sequences Detected</p>
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
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-black text-gray-900">${calculateBalance(job)}</span>
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Outstanding Exposure</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={`clinical-badge ${job.status === 'denied' ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                                    <div className={`w-1.5 h-1.5 rounded-full ${job.status === 'denied' ? 'bg-rose-500' : 'bg-amber-500'} animate-pulse`}></div>
                                                    {job.status.replace('_', ' ').toUpperCase()}
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
                                            <td>
                                                <span className="text-xs font-bold text-gray-500">{job.insurance_provider || job.payer_name || 'FEDERAL PAYER'}</span>
                                            </td>
                                            <td className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => { setProcessingJobId(job.id); setActionType('resubmit'); }}
                                                        disabled={!accepted}
                                                        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all border ${
                                                            accepted
                                                                ? 'bg-primary-50 text-primary-600 border-primary-100 hover:bg-primary-500 hover:text-white'
                                                                : 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                                                        }`}
                                                        title={!accepted ? 'Accept the task first' : 'Initiate Resubmission'}
                                                    >
                                                        <RefreshCw size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => { setProcessingJobId(job.id); setActionType('writeoff'); setWriteOffAmount(calculateBalance(job)); }}
                                                        disabled={!accepted}
                                                        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all border ${
                                                            accepted
                                                                ? 'bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-500 hover:text-white'
                                                                : 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                                                        }`}
                                                        title={!accepted ? 'Accept the task first' : 'Execution Write-off'}
                                                    >
                                                        <FileX size={16} />
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
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${actionType === 'resubmit' ? 'bg-primary-500 shadow-primary-900/20' :
                                actionType === 'writeoff' ? 'bg-amber-500 shadow-amber-900/20' :
                                    actionType === 'hold' ? 'bg-amber-600' : 'bg-rose-600'
                                }`}>
                                {actionType === 'resubmit' ? <RefreshCw size={24} /> :
                                    actionType === 'writeoff' ? <FileX size={24} /> :
                                        actionType === 'hold' ? <PauseCircle size={24} /> : <ShieldAlert size={24} />}
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                                    {actionType === 'resubmit' ? 'Initiate Claim Resubmission' :
                                        actionType === 'writeoff' ? 'Execute Balance Write-off' :
                                            actionType === 'hold' ? 'Suspend Procedure (Hold)' : 'Escalate Trace to Management'}
                                </h3>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Operational ID: {processingJobId}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {actionType === 'writeoff' && (
                                <div>
                                    <label className="subtle-label">Exposure Amount to Write-off</label>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-extrabold">$</span>
                                        <input
                                            type="number"
                                            className="w-full pl-10 pr-6 py-4 bg-gray-50 border-gray-100 rounded-2xl font-black text-gray-900 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all"
                                            placeholder="0.00"
                                            value={writeOffAmount}
                                            onChange={(e) => setWriteOffAmount(e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="subtle-label">Clinical Intelligence / Justification</label>
                                <textarea
                                    className="w-full px-6 py-4 bg-gray-50 border-gray-100 rounded-2xl font-bold text-gray-700 min-h-[120px] focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all"
                                    placeholder="Provide detailed reasoning for this tactical adjustment..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => handleAction(processingJobId, actionType)}
                                    className="btn btn-primary flex-1 py-4"
                                >
                                    Confirm Execution Trace
                                </button>
                                <button
                                    onClick={() => { setProcessingJobId(null); setActionType(null); }}
                                    className="btn btn-secondary px-10"
                                >
                                    Abort
                                </button>
                            </div>
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

export default ARDenialDashboard;

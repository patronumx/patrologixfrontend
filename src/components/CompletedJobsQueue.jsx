import React, { useState, useEffect } from 'react';
import { jobService } from '../services/api';
import {
    CheckCircle,
    AlertTriangle,
    DollarSign,
    RefreshCw,
    Search,
    ArrowUpRight,
    XCircle,
    Activity
} from 'lucide-react';
import JobDetailModal from './JobDetailModal';

const CompletedJobsQueue = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const statuses = ['paid_full', 'paid_partial', 'denied', 'written_off'];
            const responses = await Promise.all(
                statuses.map(status => jobService.getJobs({ status }))
            );
            const allJobs = responses.flatMap(r => Array.isArray(r.data) ? r.data : []);
            allJobs.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            setJobs(allJobs);
        } catch (err) {
            console.error("Error fetching completed jobs", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.claim_id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.patient_name?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || job.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const statusConfig = {
        paid_full: { label: 'Paid Full', color: 'emerald', icon: <CheckCircle size={10} /> },
        paid_partial: { label: 'Partial', color: 'amber', icon: <AlertTriangle size={10} /> },
        denied: { label: 'Denied', color: 'rose', icon: <XCircle size={10} /> },
        written_off: { label: 'Written Off', color: 'slate', icon: <XCircle size={10} /> },
    };

    const counts = {
        all: jobs.length,
        paid_full: jobs.filter(j => j.status === 'paid_full').length,
        paid_partial: jobs.filter(j => j.status === 'paid_partial').length,
        denied: jobs.filter(j => j.status === 'denied').length,
        written_off: jobs.filter(j => j.status === 'written_off').length,
    };

    return (
        <div className="animate-fade-in">
            {/* Filter Tabs */}
            <div className="p-4 border-b border-slate-100 flex flex-wrap items-center gap-2">
                {[
                    { key: 'all', label: 'All' },
                    { key: 'paid_full', label: 'Paid Full' },
                    { key: 'paid_partial', label: 'Partial' },
                    { key: 'denied', label: 'Denied' },
                    { key: 'written_off', label: 'Written Off' },
                ].map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setFilterStatus(tab.key)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filterStatus === tab.key
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                            }`}
                    >
                        {tab.label} <span className="ml-1 opacity-60">{counts[tab.key]}</span>
                    </button>
                ))}
            </div>

            {/* Search + Refresh */}
            <div className="p-4 border-b border-slate-50 flex items-center justify-between gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input
                        type="text"
                        placeholder="Filter by claim ID or patient name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-xs font-bold focus:ring-2 focus:ring-primary-500/10 transition-all"
                    />
                </div>
                <button
                    onClick={fetchJobs}
                    className={`p-2 bg-slate-50 rounded-xl text-slate-500 hover:bg-slate-100 transition-all ${loading ? 'animate-spin' : ''}`}
                >
                    <RefreshCw size={16} />
                </button>
            </div>

            {loading ? (
                <div className="p-20 flex flex-col items-center justify-center text-gray-400 gap-3">
                    <div className="w-8 h-8 border-3 border-slate-100 border-t-slate-600 rounded-full animate-spin"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading...</p>
                </div>
            ) : filteredJobs.length === 0 ? (
                <div className="p-20 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mb-4">
                        <Activity size={32} />
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">No Completed Jobs Found</p>
                </div>
            ) : (
                <div className="overflow-hidden">
                    <div className="max-h-[500px] overflow-y-auto">
                        <table className="w-full text-left">
                            <thead className="sticky top-0 bg-slate-50/90 backdrop-blur-sm">
                                <tr>
                                    <th className="px-6 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">Claim</th>
                                    <th className="px-6 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                                    <th className="px-6 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                                    <th className="px-6 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredJobs.map((job) => {
                                    const cfg = statusConfig[job.status] || statusConfig.paid_full;
                                    return (
                                        <tr key={job.id} className="group hover:bg-slate-50/50 transition-all">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-lg bg-${cfg.color}-100 text-${cfg.color}-600 flex items-center justify-center`}>
                                                        <DollarSign size={14} />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-black text-gray-900 leading-none mb-1">#{job.claim_id}</p>
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{job.patient_name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-${cfg.color}-50 text-${cfg.color}-600`}>
                                                    {cfg.icon} {cfg.label}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm font-black text-slate-900">
                                                    ${Number(job.payment_amount || 0).toLocaleString()}
                                                </p>
                                                <p className="text-[10px] text-slate-400 font-bold">
                                                    of ${Number(job.claim_amount || 0).toLocaleString()}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => setSelectedJob(job)}
                                                    className="h-8 px-4 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-slate-600 uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2 ml-auto"
                                                >
                                                    Review <ArrowUpRight size={12} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {selectedJob && (
                <JobDetailModal
                    job={selectedJob}
                    isOpen={!!selectedJob}
                    onClose={() => {
                        setSelectedJob(null);
                        fetchJobs();
                    }}
                />
            )}
        </div>
    );
};

export default CompletedJobsQueue;

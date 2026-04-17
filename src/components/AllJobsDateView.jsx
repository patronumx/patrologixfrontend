import React, { useState, useEffect, useMemo } from 'react';
import { jobService } from '../services/api';
import {
    Calendar,
    Search,
    RefreshCw,
    ChevronDown,
    ChevronRight,
    ArrowUpRight,
    Filter,
    Database
} from 'lucide-react';
import JobDetailModal from './JobDetailModal';

const statusConfig = {
    draft: { label: 'Draft', color: 'slate' },
    submitted: { label: 'Submitted', color: 'blue' },
    under_review: { label: 'Under Review', color: 'indigo' },
    accepted: { label: 'Accepted', color: 'sky' },
    in_progress: { label: 'In Progress', color: 'violet' },
    pending_payment: { label: 'Pending Payment', color: 'amber' },
    paid_full: { label: 'Paid Full', color: 'emerald' },
    paid_partial: { label: 'Partial', color: 'yellow' },
    denied: { label: 'Denied', color: 'rose' },
    rejected: { label: 'Rejected', color: 'red' },
    on_hold: { label: 'On Hold', color: 'orange' },
    escalated: { label: 'Escalated', color: 'rose' },
    written_off: { label: 'Written Off', color: 'gray' },
    closed_paid: { label: 'Closed', color: 'emerald' },
    closed_adjusted: { label: 'Adjusted', color: 'teal' },
    dismissed: { label: 'Dismissed', color: 'slate' },
};

const AllJobsDateView = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all'); // 'all', 'claim', 'patient'
    const [selectedDate, setSelectedDate] = useState('');
    const [expandedDates, setExpandedDates] = useState({});

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await jobService.getJobs({ ordering: '-created_at' });
            const data = Array.isArray(response.data) ? response.data : [];
            setJobs(data);
            // Auto-expand the first date group
            if (data.length > 0) {
                const firstDate = new Date(data[0].created_at).toLocaleDateString('en-CA');
                setExpandedDates({ [firstDate]: true });
            }
        } catch (err) {
            console.error("Error fetching all jobs", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    // Filter jobs by search term and filter type
    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            if (!searchTerm) return true;
            const term = searchTerm.toLowerCase();
            if (filterType === 'claim') {
                return job.claim_id?.toLowerCase().includes(term);
            } else if (filterType === 'patient') {
                return job.patient_name?.toLowerCase().includes(term);
            }
            // 'all' - search both
            return job.claim_id?.toLowerCase().includes(term) ||
                job.patient_name?.toLowerCase().includes(term);
        });
    }, [jobs, searchTerm, filterType]);

    // Group jobs by date
    const groupedByDate = useMemo(() => {
        const groups = {};
        filteredJobs.forEach(job => {
            const dateKey = new Date(job.created_at).toLocaleDateString('en-CA'); // YYYY-MM-DD
            if (!groups[dateKey]) {
                groups[dateKey] = [];
            }
            groups[dateKey].push(job);
        });
        // Sort dates descending
        const sortedKeys = Object.keys(groups).sort((a, b) => b.localeCompare(a));
        return sortedKeys.map(date => ({ date, jobs: groups[date] }));
    }, [filteredJobs]);

    // Filter by specific date if selected
    const displayGroups = useMemo(() => {
        if (!selectedDate) return groupedByDate;
        return groupedByDate.filter(g => g.date === selectedDate);
    }, [groupedByDate, selectedDate]);

    // Get unique dates for the date picker
    const availableDates = useMemo(() => {
        const dates = new Set();
        jobs.forEach(job => {
            dates.add(new Date(job.created_at).toLocaleDateString('en-CA'));
        });
        return Array.from(dates).sort((a, b) => b.localeCompare(a));
    }, [jobs]);

    const toggleDate = (date) => {
        setExpandedDates(prev => ({ ...prev, [date]: !prev[date] }));
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr + 'T00:00:00');
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (dateStr === today.toLocaleDateString('en-CA')) return 'Today';
        if (dateStr === yesterday.toLocaleDateString('en-CA')) return 'Yesterday';

        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (dateStr) => {
        return new Date(dateStr).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="animate-fade-in">
            {/* Search & Filter Bar */}
            <div className="p-5 border-b border-slate-100 space-y-4">
                {/* Filter Type Tabs */}
                <div className="flex items-center gap-2">
                    <Filter size={12} className="text-slate-400" />
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mr-2">Search By:</span>
                    {[
                        { key: 'all', label: 'All' },
                        { key: 'claim', label: 'Claim ID' },
                        { key: 'patient', label: 'Patient Name' },
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setFilterType(tab.key)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filterType === tab.key
                                ? 'bg-slate-900 text-white shadow-sm'
                                : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Search Input + Date Picker + Refresh */}
                <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                        <input
                            type="text"
                            placeholder={
                                filterType === 'claim' ? 'Search by Claim ID...' :
                                filterType === 'patient' ? 'Search by Patient Name...' :
                                'Search by Claim ID or Patient Name...'
                            }
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-xs font-bold focus:ring-2 focus:ring-primary-500/10 transition-all"
                        />
                    </div>

                    {/* Date Picker */}
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        <select
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="pl-9 pr-8 py-2.5 bg-gray-50 border-none rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-primary-500/10 appearance-none cursor-pointer"
                        >
                            <option value="">All Dates</option>
                            {availableDates.map(date => (
                                <option key={date} value={date}>{formatDate(date)} ({jobs.filter(j => new Date(j.created_at).toLocaleDateString('en-CA') === date).length})</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={12} />
                    </div>

                    <button
                        onClick={fetchJobs}
                        className={`p-2.5 bg-slate-50 rounded-xl text-slate-500 hover:bg-slate-100 transition-all ${loading ? 'animate-spin' : ''}`}
                    >
                        <RefreshCw size={16} />
                    </button>
                </div>
            </div>

            {/* Summary Bar */}
            <div className="px-5 py-3 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {filteredJobs.length} Total Records • {displayGroups.length} Date Groups
                </span>
                {searchTerm && (
                    <button
                        onClick={() => { setSearchTerm(''); setFilterType('all'); setSelectedDate(''); }}
                        className="text-[10px] font-black text-primary-500 uppercase tracking-widest hover:text-primary-700 transition-colors"
                    >
                        Clear Filters
                    </button>
                )}
            </div>

            {/* Content */}
            {loading ? (
                <div className="p-20 flex flex-col items-center justify-center text-gray-400 gap-3">
                    <div className="w-8 h-8 border-3 border-slate-100 border-t-slate-600 rounded-full animate-spin"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Records...</p>
                </div>
            ) : displayGroups.length === 0 ? (
                <div className="p-20 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mb-4">
                        <Database size={32} />
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">No Records Found</p>
                </div>
            ) : (
                <div className="max-h-[600px] overflow-y-auto">
                    {displayGroups.map(({ date, jobs: dateJobs }) => (
                        <div key={date} className="border-b border-slate-50 last:border-0">
                            {/* Date Header - Collapsible */}
                            <button
                                onClick={() => toggleDate(date)}
                                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Calendar size={14} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-black text-slate-900 tracking-tight">{formatDate(date)}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-lg text-[10px] font-black uppercase tracking-wider">
                                        {dateJobs.length} {dateJobs.length === 1 ? 'Record' : 'Records'}
                                    </span>
                                    {expandedDates[date] ? <ChevronDown size={16} className="text-slate-400" /> : <ChevronRight size={16} className="text-slate-400" />}
                                </div>
                            </button>

                            {/* Jobs Table for this date */}
                            {expandedDates[date] && (
                                <div className="animate-fade-in">
                                    <table className="w-full text-left">
                                        <thead className="bg-slate-50/70">
                                            <tr>
                                                <th className="px-6 py-2.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Claim</th>
                                                <th className="px-6 py-2.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Patient</th>
                                                <th className="px-6 py-2.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                                                <th className="px-6 py-2.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Provider</th>
                                                <th className="px-6 py-2.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                                                <th className="px-6 py-2.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Time</th>
                                                <th className="px-6 py-2.5 text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {dateJobs.map(job => {
                                                const cfg = statusConfig[job.status] || { label: job.status, color: 'slate' };
                                                return (
                                                    <tr key={job.id} className="group hover:bg-slate-50/50 transition-all">
                                                        <td className="px-6 py-3">
                                                            <p className="text-xs font-black text-slate-900">#{job.claim_id}</p>
                                                        </td>
                                                        <td className="px-6 py-3">
                                                            <p className="text-xs font-bold text-slate-600">{job.patient_name || '—'}</p>
                                                        </td>
                                                        <td className="px-6 py-3">
                                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-${cfg.color}-50 text-${cfg.color}-600`}>
                                                                {cfg.label}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-3">
                                                            <p className="text-[10px] font-bold text-slate-500 truncate max-w-[120px]">{job.insurance_provider || '—'}</p>
                                                        </td>
                                                        <td className="px-6 py-3">
                                                            <p className="text-xs font-black text-slate-900">${Number(job.claim_amount || 0).toLocaleString()}</p>
                                                        </td>
                                                        <td className="px-6 py-3">
                                                            <p className="text-[10px] font-bold text-slate-400">{formatTime(job.created_at)}</p>
                                                        </td>
                                                        <td className="px-6 py-3 text-right">
                                                            <button
                                                                onClick={() => setSelectedJob(job)}
                                                                className="h-7 px-3 bg-white border border-slate-200 rounded-lg text-[9px] font-black text-slate-600 uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center gap-1.5 ml-auto"
                                                            >
                                                                View <ArrowUpRight size={10} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ))}
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

export default AllJobsDateView;

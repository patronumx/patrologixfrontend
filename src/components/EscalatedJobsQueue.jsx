import React, { useState, useEffect } from 'react';
import { jobService } from '../services/api';
import {
    Activity,
    AlertCircle,
    RefreshCw,
    ExternalLink,
    Search,
    ShieldAlert,
    User,
    ArrowUpRight,
    History
} from 'lucide-react';
import JobDetailModal from './JobDetailModal';

const EscalatedJobsQueue = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await jobService.getJobs({ status: 'escalated' });
            setJobs(response.data);
        } catch (err) {
            console.error("Error fetching escalated jobs", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter(job =>
        job.claim_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.patient_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="animate-fade-in">
            <div className="p-6 border-b border-rose-50 flex items-center justify-between gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input
                        type="text"
                        placeholder="Search escalated traces..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-xs font-bold focus:ring-2 focus:ring-rose-500/10 transition-all"
                    />
                </div>
                <button
                    onClick={fetchJobs}
                    className={`p-2 bg-rose-50 rounded-xl text-rose-500 hover:bg-rose-100 transition-all ${loading ? 'animate-spin' : ''}`}
                >
                    <RefreshCw size={16} />
                </button>
            </div>

            {loading ? (
                <div className="p-20 flex flex-col items-center justify-center text-gray-400 gap-3">
                    <div className="w-8 h-8 border-3 border-rose-50 border-t-rose-600 rounded-full animate-spin"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-rose-600/50">Trace Scan Active...</p>
                </div>
            ) : filteredJobs.length === 0 ? (
                <div className="p-20 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mb-4">
                        <Activity size={32} />
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">No Escalations Detected</p>
                </div>
            ) : (
                <div className="max-h-[500px] overflow-y-auto p-5 space-y-3">
                    {filteredJobs.map((job) => (
                        <div
                            key={job.id}
                            className="group bg-white border border-rose-100/60 rounded-2xl p-5 hover:shadow-md hover:border-rose-200 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0">
                                        <ShieldAlert size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-black text-gray-900 leading-none mb-1 truncate">#{job.claim_id}</p>
                                        <div className="flex items-center gap-2">
                                            <User size={10} className="text-gray-400 flex-shrink-0" />
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight truncate">{job.patient_name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 rounded-lg flex-shrink-0">
                                    <AlertCircle size={10} className="text-rose-500" />
                                    <span className="text-[9px] font-black text-rose-600 uppercase tracking-wide">Escalated</span>
                                </div>
                            </div>
                            <p className="text-[11px] font-medium text-gray-500 leading-relaxed mb-4 pl-[52px]">
                                {job.history?.[0]?.notes || "Manager review required."}
                            </p>
                            <div className="pl-[52px]">
                                <button
                                    onClick={() => setSelectedJob(job)}
                                    className="h-9 px-5 bg-rose-50 border border-rose-100 rounded-xl text-[10px] font-black text-rose-600 uppercase tracking-widest hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all flex items-center gap-2"
                                >
                                    Resolve <ArrowUpRight size={12} />
                                </button>
                            </div>
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

export default EscalatedJobsQueue;

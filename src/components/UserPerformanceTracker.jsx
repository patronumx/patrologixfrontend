import React, { useState, useEffect } from 'react';
import { jobService } from '../services/api';
import {
    Clock,
    RefreshCw,
    ChevronDown,
    ChevronUp,
    Zap,
    TrendingUp,
    Target,
    Activity,
    ArrowUpRight,
    Timer,
    CheckCircle2,
    Loader2,
    BarChart3
} from 'lucide-react';
import JobDetailModal from './JobDetailModal';

const roleColors = {
    billing: { bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', ring: 'ring-blue-500/20', label: 'Billing' },
    payment: { bg: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', ring: 'ring-emerald-500/20', label: 'Payment' },
    ar_denial: { bg: 'bg-violet-500', light: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100', ring: 'ring-violet-500/20', label: 'AR / Denial' },
};

const defaultRole = { bg: 'bg-slate-500', light: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-100', ring: 'ring-slate-500/20', label: 'Staff' };

const UserPerformanceTracker = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);

    const fetchPerformance = async () => {
        setLoading(true);
        try {
            const response = await jobService.getUserPerformance();
            setData(response.data);
            // Auto-select first user
            if (response.data?.users?.length > 0 && !selectedUserId) {
                setSelectedUserId(response.data.users[0].user_id);
            }
        } catch (err) {
            console.error("Error fetching user performance", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPerformance();
    }, []);

    const getDurationColor = (seconds) => {
        if (seconds === 0) return { bg: 'bg-slate-50', text: 'text-slate-500', dot: 'bg-slate-400' };
        if (seconds < 3600) return { bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-500' };
        if (seconds < 14400) return { bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-500' };
        return { bg: 'bg-rose-50', text: 'text-rose-600', dot: 'bg-rose-500' };
    };

    const handleViewJob = async (jobId) => {
        try {
            const response = await jobService.getJobDetail(jobId);
            setSelectedJob(response.data);
        } catch (err) {
            console.error("Error fetching job detail", err);
        }
    };

    const selectedUser = data?.users?.find(u => u.user_id === selectedUserId);

    if (loading) {
        return (
            <div className="p-20 flex flex-col items-center justify-center gap-4">
                <div className="w-10 h-10 border-3 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Analyzing Performance Metrics...</p>
            </div>
        );
    }

    if (!data || !data.users || data.users.length === 0) {
        return (
            <div className="p-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-300 rounded-2xl flex items-center justify-center mb-4">
                    <BarChart3 size={32} />
                </div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">No Performance Data Available</p>
                <p className="text-[10px] text-slate-300 mt-2">Staff metrics will appear once tasks are processed</p>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            {/* Top Bar */}
            <div className="px-8 py-4 bg-indigo-50/30 border-b border-indigo-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                        {data.users.length} Staff Members Tracked
                    </span>
                    <span className="text-slate-200">|</span>
                    <span className="text-[10px] font-bold text-slate-400">
                        {data.users.reduce((sum, u) => sum + u.completed_tasks, 0)} Total Tasks Completed
                    </span>
                </div>
                <button
                    onClick={fetchPerformance}
                    className={`p-2 bg-white rounded-xl text-indigo-500 hover:bg-indigo-50 transition-all border border-indigo-100 shadow-sm ${loading ? 'animate-spin' : ''}`}
                >
                    <RefreshCw size={14} />
                </button>
            </div>

            {/* Staff Cards Grid */}
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.users.map(user => {
                        const role = roleColors[user.role] || defaultRole;
                        const avgDur = getDurationColor(user.avg_duration_seconds);
                        const isSelected = selectedUserId === user.user_id;

                        return (
                            <button
                                key={user.user_id}
                                onClick={() => setSelectedUserId(isSelected ? null : user.user_id)}
                                className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-300 group ${
                                    isSelected
                                        ? `${role.border} bg-white shadow-lg ring-4 ${role.ring} scale-[1.02]`
                                        : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-md'
                                }`}
                            >
                                {/* Selected indicator */}
                                {isSelected && (
                                    <div className={`absolute -top-1 -right-1 w-5 h-5 ${role.bg} rounded-full flex items-center justify-center shadow-md`}>
                                        <ChevronDown size={12} className="text-white" />
                                    </div>
                                )}

                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-11 h-11 rounded-xl ${role.bg} text-white flex items-center justify-center font-black text-base shadow-lg`}>
                                        {user.full_name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-black text-slate-900 tracking-tight truncate">{user.full_name}</p>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-wider ${role.light} ${role.text}`}>
                                                {role.label}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-slate-50 rounded-xl p-2.5 text-center">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <CheckCircle2 size={10} className="text-emerald-500" />
                                        </div>
                                        <p className="text-lg font-black text-slate-900 leading-none">{user.completed_tasks}</p>
                                        <p className="text-[7px] font-black text-slate-400 uppercase tracking-wider mt-1">Done</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-xl p-2.5 text-center">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <Loader2 size={10} className="text-primary-500" />
                                        </div>
                                        <p className="text-lg font-black text-primary-600 leading-none">{user.active_tasks}</p>
                                        <p className="text-[7px] font-black text-slate-400 uppercase tracking-wider mt-1">Active</p>
                                    </div>
                                    <div className={`${avgDur.bg} rounded-xl p-2.5 text-center`}>
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <Timer size={10} className={avgDur.text} />
                                        </div>
                                        <p className={`text-base font-black ${avgDur.text} leading-none`}>{user.avg_duration_display}</p>
                                        <p className="text-[7px] font-black text-slate-400 uppercase tracking-wider mt-1">Avg</p>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Expanded User Detail Panel */}
            {selectedUser && (
                <div className="border-t border-indigo-100 animate-fade-in">
                    {/* Performance Summary Bar */}
                    <div className="px-8 py-5 bg-gradient-to-r from-indigo-50/50 via-white to-indigo-50/50">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg ${(roleColors[selectedUser.role] || defaultRole).bg} text-white flex items-center justify-center font-black text-xs shadow`}>
                                    {selectedUser.full_name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-sm font-black text-slate-900">{selectedUser.full_name}</p>
                                    <p className="text-[9px] font-bold text-slate-400">Performance Breakdown</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedUserId(null)}
                                className="p-1.5 hover:bg-slate-100 rounded-lg transition-all"
                            >
                                <ChevronUp size={16} className="text-slate-400" />
                            </button>
                        </div>

                        {/* Metric Cards */}
                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                                        <Zap size={14} className="text-emerald-500" />
                                    </div>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Fastest</span>
                                </div>
                                <p className="text-xl font-black text-emerald-600 tracking-tight">{selectedUser.min_duration_display}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center">
                                        <TrendingUp size={14} className="text-amber-500" />
                                    </div>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Average</span>
                                </div>
                                <p className="text-xl font-black text-amber-600 tracking-tight">{selectedUser.avg_duration_display}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-rose-50 flex items-center justify-center">
                                        <Target size={14} className="text-rose-500" />
                                    </div>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Slowest</span>
                                </div>
                                <p className="text-xl font-black text-rose-600 tracking-tight">{selectedUser.max_duration_display}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center">
                                        <BarChart3 size={14} className="text-indigo-500" />
                                    </div>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Total</span>
                                </div>
                                <p className="text-xl font-black text-indigo-600 tracking-tight">{selectedUser.total_tasks} <span className="text-sm text-slate-400 font-bold">tasks</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Task Timeline Table */}
                    {selectedUser.recent_tasks.length > 0 ? (
                        <div className="overflow-hidden">
                            <div className="px-8 py-3 bg-slate-50/70 border-y border-slate-100 flex items-center justify-between">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Recent Task Timeline</span>
                                <span className="text-[9px] font-bold text-slate-300">{selectedUser.recent_tasks.length} tasks shown</span>
                            </div>
                            <div className="max-h-[320px] overflow-y-auto">
                                <table className="w-full text-left">
                                    <thead className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-100">
                                        <tr>
                                            <th className="px-8 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">Claim</th>
                                            <th className="px-4 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">Patient</th>
                                            <th className="px-4 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">Action Taken</th>
                                            <th className="px-4 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">Accepted At</th>
                                            <th className="px-4 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">Completed At</th>
                                            <th className="px-4 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">Time Taken</th>
                                            <th className="px-6 py-3 text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {selectedUser.recent_tasks.map((task, idx) => {
                                            const dColor = getDurationColor(task.duration_seconds);
                                            return (
                                                <tr key={idx} className="group hover:bg-indigo-50/30 transition-all">
                                                    <td className="px-8 py-3.5">
                                                        <p className="text-xs font-black text-slate-900">#{task.claim_id}</p>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <p className="text-[11px] font-bold text-slate-600 truncate max-w-[140px]">{task.patient_name}</p>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 text-[9px] font-black text-slate-600 uppercase tracking-wider truncate max-w-[180px]">
                                                            {task.last_action}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <div>
                                                            <p className="text-[10px] font-bold text-slate-700">
                                                                {new Date(task.accepted_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                            </p>
                                                            <p className="text-[9px] font-bold text-slate-400">
                                                                {new Date(task.accepted_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5">
                                                        <div>
                                                            <p className="text-[10px] font-bold text-slate-700">
                                                                {new Date(task.completed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                            </p>
                                                            <p className="text-[9px] font-bold text-slate-400">
                                                                {new Date(task.completed_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-right">
                                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black ${dColor.bg} ${dColor.text}`}>
                                                            <span className={`w-1.5 h-1.5 rounded-full ${dColor.dot}`}></span>
                                                            {task.duration_display}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-3.5 text-right">
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); handleViewJob(task.job_id); }}
                                                            className="h-7 px-3 bg-white border border-slate-200 rounded-lg text-[9px] font-black text-slate-500 uppercase tracking-wider hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all flex items-center gap-1 ml-auto opacity-0 group-hover:opacity-100"
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
                        </div>
                    ) : (
                        <div className="px-8 py-12 text-center">
                            <div className="w-12 h-12 bg-slate-50 text-slate-300 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Activity size={24} />
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No completed tasks yet for this user</p>
                        </div>
                    )}
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

export default UserPerformanceTracker;

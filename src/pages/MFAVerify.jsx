import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import api from '../api/axiosClient';
import { useNavigate } from 'react-router-dom';

const MFAVerify = () => {
  const [token, setToken] = useState('');
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/mfa/verify/', { otp_token: token });
      navigate('/dashboard'); // Success redirect
    } catch (err) {
      setError('Invalid OTP code. Please try again.');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-900 border-t-4 border-indigo-500 rounded text-slate-200">
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl max-w-sm w-full mx-4 border border-slate-700">
        <h2 className="text-2xl font-bold text-center text-white mb-6 tracking-wide">Enter MFA Code</h2>
        <form onSubmit={handleVerify} className="space-y-6">
          <input
            type="text"
            className="w-full bg-slate-900 border border-slate-700 p-4 rounded text-center text-xl tracking-[0.5em] text-indigo-400 focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="000000"
            value={token}
            maxLength={6}
            onChange={(e) => setToken(e.target.value)}
          />
          {error && <p className="text-red-400 text-sm text-center font-medium bg-red-900/20 p-2 rounded">{error}</p>}
          <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 font-semibold text-white rounded-lg shadow transition-all duration-200" type="submit">
            Verify Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default MFAVerify;

import React, { useState } from 'react';
import { 
  Mail, MapPin, Send, MessageSquare, 
  CheckCircle2, Copy, Check, ArrowUpRight, Sparkles, 
  AlertCircle, Loader2, ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Gmail Web Compose Direct Link (100% Guaranteed to land in inbox)
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry - Senior React / Mobile Engineer'
  )}&body=${encodeURIComponent(
    `Hi Ani,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}\n`
  )}`;

  // Default mailto link for Outlook / Apple Mail / System default client
  const defaultMailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Ani,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}\n`
  )}`;

  // AJAX submission to FormSubmit gateway
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject || 'New Contact Request from Portfolio',
          message: formData.message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionStatus('fallback');
      }
    } catch (err) {
      console.warn('Form gateway encountered an issue, offering direct Gmail compose:', err);
      setSubmissionStatus('fallback');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let’s Build Something Exceptional
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Open for Senior Software Engineer, Lead Mobile Developer, or High-Impact FinTech roles across UAE, Remote & Global locations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-white">
                Direct Contact
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you have an inquiry regarding high-scale React/React Native engineering, banking integrations, or an exciting career opportunity, feel free to get in touch.
              </p>

              <div className="space-y-3 pt-2">
                {/* Official Email */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-slate-500">Official Email</div>
                        <div className="text-sm font-bold text-white font-mono">{personalInfo.email}</div>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* 1-Click Launch Gmail */}
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-red-600/20 transition-all hover:scale-[1.01]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Gmail (Direct Compose)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Base Location */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-500">Base Locations</div>
                    <div className="text-xs font-bold text-slate-200">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-300 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Available for Full-time Roles & Contracts</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Immediate / negotiable joining for Dubai/UAE, GCC, hybrid, or full remote positions.
                </p>
              </div>

            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl relative">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-white">
                  Send a Message
                </h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                  To: {personalInfo.email}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below. You can send via the instant gateway or launch Gmail directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Recruiter / Engineering Leader"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Senior React / Mobile Engineer Role"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Your Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Ani, we would like to discuss an opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Primary and Secondary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-98 disabled:opacity-60 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send via Web Gateway</span>
                      </>
                    )}
                  </button>

                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs border border-slate-700 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <Mail className="w-4 h-4 text-rose-400" />
                    <span>Send via Gmail (Instant)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>

                {/* Success Notification */}
                {submissionStatus === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs space-y-1.5 animate-fadeIn">
                    <div className="flex items-center gap-2 font-bold text-sm text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Message Dispatched Successfully!</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      Your message has been submitted to <strong>{personalInfo.email}</strong>.
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Note: Please check your Spam/Junk folder if this is the first submission from this domain.
                    </p>
                  </div>
                )}

                {/* Fallback Option */}
                {submissionStatus === 'fallback' && (
                  <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-200 text-xs space-y-2.5 animate-fadeIn">
                    <div className="flex items-center gap-2 font-bold text-cyan-300">
                      <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Ready to Send via Direct Email</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      Click below to immediately open your message directly in Gmail or your default email application:
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs shadow-md transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Launch in Gmail</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                      <a
                        href={defaultMailtoUrl}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                      >
                        <span>Default Email App (Outlook / Apple Mail)</span>
                      </a>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

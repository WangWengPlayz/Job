import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, LogOut, Briefcase, Clock, CheckCircle, XCircle, ToggleLeft, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  getAvailability,
  getJobType,
  setAvailability,
  setJobType,
  type AvailabilityStatus,
  type JobType,
} from "@/lib/availability";

const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY as string;

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<AvailabilityStatus>(getAvailability());
  const [jobType, setJobTypeState] = useState<JobType>(getJobType());
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem("portfolio-admin-session");
    if (session === "true") setAuthed(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_KEY) {
      setAuthed(true);
      sessionStorage.setItem("portfolio-admin-session", "true");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("portfolio-admin-session");
    setAuthed(false);
    setPassword("");
  };

  const handleSave = () => {
    setAvailability(status);
    setJobType(jobType);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-sm"
        >
          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
              <Lock size={28} />
            </div>
            <h1 className="text-2xl font-bold mb-1">Admin Panel</h1>
            <p className="text-sm text-muted-foreground mb-7">Enter your password to continue</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center tracking-widest"
                data-testid="input-admin-password"
                autoFocus
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-destructive font-medium"
                >
                  {error}
                </motion.p>
              )}
              <Button type="submit" className="w-full gap-2" data-testid="button-admin-login">
                <ShieldCheck size={16} /> Unlock
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-6">
              <a href="/" className="hover:text-primary transition-colors">← Back to Portfolio</a>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">Mart John F. Labaco — Portfolio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View Portfolio
            </a>
            <Button variant="outline" size="sm" className="gap-2" onClick={handleLogout} data-testid="button-admin-logout">
              <LogOut size={14} /> Logout
            </Button>
          </div>
        </motion.div>

        {/* Availability Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 mb-5"
        >
          <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
            <Briefcase size={18} className="text-primary" /> Availability Status
          </h2>
          <p className="text-sm text-muted-foreground mb-5">This controls the badge shown on your portfolio hero section.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Available */}
            <button
              onClick={() => setStatus("available")}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                status === "available"
                  ? "border-green-500 bg-green-500/10"
                  : "border-border bg-muted/30 hover:border-green-500/40"
              }`}
              data-testid="button-status-available"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${status === "available" ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}`}>
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm">Available for Work</p>
                <p className="text-xs text-muted-foreground">Shows green badge on portfolio</p>
              </div>
              {status === "available" && (
                <ToggleRight size={22} className="ml-auto text-green-500" />
              )}
              {status !== "available" && (
                <ToggleLeft size={22} className="ml-auto text-muted-foreground" />
              )}
            </button>

            {/* Busy */}
            <button
              onClick={() => setStatus("busy")}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                status === "busy"
                  ? "border-rose-500 bg-rose-500/10"
                  : "border-border bg-muted/30 hover:border-rose-500/40"
              }`}
              data-testid="button-status-busy"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${status === "busy" ? "bg-rose-500 text-white" : "bg-muted text-muted-foreground"}`}>
                <XCircle size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm">Currently Busy</p>
                <p className="text-xs text-muted-foreground">Shows red badge on portfolio</p>
              </div>
              {status === "busy" && (
                <ToggleRight size={22} className="ml-auto text-rose-500" />
              )}
              {status !== "busy" && (
                <ToggleLeft size={22} className="ml-auto text-muted-foreground" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Job Type Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-border rounded-2xl p-6 mb-5"
        >
          <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
            <Clock size={18} className="text-primary" /> Job Type Preference
          </h2>
          <p className="text-sm text-muted-foreground mb-5">Shown alongside your availability badge.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {([
              { value: "fulltime", label: "Full-Time", desc: "40 hrs/week" },
              { value: "parttime", label: "Part-Time", desc: "Less than 40 hrs" },
              { value: "both", label: "Both", desc: "Full-Time or Part-Time" },
            ] as { value: JobType; label: string; desc: string }[]).map((opt) => (
              <button
                key={opt.value}
                onClick={() => setJobTypeState(opt.value)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  jobType === opt.value
                    ? "border-primary bg-primary/10"
                    : "border-border bg-muted/30 hover:border-primary/40"
                }`}
                data-testid={`button-jobtype-${opt.value}`}
              >
                <p className={`font-semibold text-sm mb-1 ${jobType === opt.value ? "text-primary" : "text-foreground"}`}>
                  {opt.label}
                </p>
                <p className="text-xs text-muted-foreground">{opt.desc}</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Preview & Save */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold mb-4">Preview Badge</h2>
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm ${
                status === "available"
                  ? "bg-green-500/10 text-green-600 dark:text-green-400"
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status === "available" ? "bg-green-500" : "bg-rose-500"}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${status === "available" ? "bg-green-500" : "bg-rose-500"}`}></span>
              </span>
              {status === "busy"
                ? "Currently Busy"
                : jobType === "fulltime"
                  ? "Available · Full-Time"
                  : jobType === "parttime"
                    ? "Available · Part-Time"
                    : "Available · Full-Time or Part-Time"}
            </div>
          </div>

          <Button
            onClick={handleSave}
            className="w-full gap-2"
            data-testid="button-admin-save"
          >
            {saved ? (
              <><CheckCircle size={16} /> Saved Successfully!</>
            ) : (
              <><ShieldCheck size={16} /> Save &amp; Apply to Portfolio</>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Changes apply immediately on this device. Visitors see the status stored in their own browser.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

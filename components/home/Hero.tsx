"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="aos-section pb-6">
      <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr] lg:items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-aos-border/80 bg-aos-surface/70 px-3 py-1 text-xs text-aos-muted shadow-aos-soft">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-aos-primary to-aos-accent" />
            AI Office for modern businesses
          </p>

          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Your entire{" "}
            <span className="aos-gradient-text">office in one AI suite</span>.
          </h1>

          <p className="max-w-xl text-sm text-aos-muted sm:text-base">
            AOS Office Suite gives you a Super Agent as a digital operations
            lead and a full team of AI departments for HR, Accounting, CRM,
            Support, Scheduling, and more—so work moves without waiting on
            humans, but humans stay in control.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-gradient-to-r from-aos-primary to-aos-accent px-5 py-2 text-xs font-medium text-aos-text shadow-aos-soft transition hover:brightness-110">
              Request early access
            </button>
            <button className="rounded-full border border-aos-border px-4 py-2 text-xs font-medium text-aos-muted transition hover:border-aos-primary hover:text-aos-text">
              View product tour
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 text-[11px] text-aos-muted">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-aos-primary" />
              <span>Super Agent + Department Agents</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-aos-accent" />
              <span>Voice, calendar, email, internal tools</span>
            </div>
          </div>
        </motion.div>

        {/* Right: visual card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative"
        >
          <div className="aos-glass relative overflow-hidden rounded-3xl p-5 sm:p-6 lg:p-7">
            <div className="flex items-center justify-between gap-3 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-aos-muted">
                  Super Agent
                </p>
                <p className="mt-1 text-sm font-semibold">Aurora • AOS CEO</p>
              </div>
              <div className="relative h-16 w-16 rounded-full bg-gradient-to-tr from-aos-primary via-aos-accent to-aos-primary shadow-aos-soft">
                <div className="absolute inset-[5px] rounded-full bg-aos-bg/70" />
                <div className="absolute inset-[9px] rounded-full border border-aos-primary/60" />
                <div className="absolute inset-[14px] rounded-full border border-aos-accent/60 opacity-80" />
              </div>
            </div>

            <div className="grid gap-3 text-[11px] sm:text-xs">
              <div className="aos-glass flex items-center justify-between rounded-2xl border border-aos-border/80 px-3 py-2.5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-aos-muted">
                    Live tasks
                  </p>
                  <p className="text-xs font-medium">Reschedule client calls</p>
                </div>
                <span className="rounded-full bg-aos-primary/15 px-2 py-1 text-[10px] text-aos-primary">
                  In progress
                </span>
              </div>

              <div className="flex gap-3">
                <div className="aos-glass flex-1 rounded-2xl border border-aos-border/80 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-aos-muted">
                    Departments
                  </p>
                  <p>HR • Accounting • CRM • Support</p>
                </div>
                <div className="aos-glass flex-1 rounded-2xl border border-aos-border/80 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-aos-muted">
                    Channels
                  </p>
                  <p>Phone • Email • Chat • Calendar</p>
                </div>
              </div>

              <div className="aos-glass rounded-2xl border border-aos-border/80 px-3 py-2">
                <p className="text-[10px] uppercase tracking-[0.22em] text-aos-muted">
                  Last action
                </p>
                <p className="mt-1">
                  “Confirm with Taylor, move payroll review to Thursday 3 PM,
                  update calendar, and send recap.”
                </p>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-6 left-10 right-10 h-10 rounded-full bg-gradient-to-r from-aos-primary/40 via-aos-accent/40 to-aos-primary/40 blur-3xl opacity-70" />
        </motion.div>
      </div>
    </section>
  );
}

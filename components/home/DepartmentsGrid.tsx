import {
  Briefcase,
  Calculator,
  Users,
  Headset,
  CalendarDays,
  Kanban
} from "lucide-react";

const departments = [
  {
    icon: Users,
    name: "HR",
    tagline: "Onboarding, approvals, and policies on autopilot.",
    badge: "People"
  },
  {
    icon: Calculator,
    name: "Accounting",
    tagline: "Expenses, invoices, and reconciliations without chasing anyone.",
    badge: "Finance"
  },
  {
    icon: Briefcase,
    name: "CRM",
    tagline: "Follow-ups, notes, and pipelines that never go stale.",
    badge: "Sales"
  },
  {
    icon: Headset,
    name: "Support",
    tagline: "Tickets answered with your tone and knowledge base.",
    badge: "Customer"
  },
  {
    icon: CalendarDays,
    name: "Scheduling",
    tagline: "Calendar orchestration across clients and teams.",
    badge: "Time"
  },
  {
    icon: Kanban,
    name: "Projects",
    tagline: "Tasks, owners, and updates organized automatically.",
    badge: "Ops"
  }
];

export default function DepartmentsGrid() {
  return (
    <section id="departments" className="aos-section">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-aos-muted">
            Departments
          </p>
          <h2 className="mt-2 text-lg font-semibold sm:text-xl">
            Agents that feel like real teams.
          </h2>
        </div>
        <p className="hidden max-w-xs text-xs text-aos-muted sm:block">
          Start with the core: HR, Accounting, CRM, Support, Scheduling, and
          Projects. Add more as your business evolves.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <article
            key={dept.name}
            className="aos-glass group relative flex flex-col justify-between rounded-3xl border border-aos-border/80 p-4 transition hover:border-aos-primary/70 hover:shadow-aos-card"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-aos-surface-alt/80 shadow-aos-soft">
                <dept.icon size={16} className="text-aos-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{dept.name}</h3>
                <p className="text-[11px] text-aos-muted">{dept.badge}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-aos-muted">{dept.tagline}</p>
            <div className="mt-4 text-[11px] text-aos-primary group-hover:underline">
              View workflows →
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

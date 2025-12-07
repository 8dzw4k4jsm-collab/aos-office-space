const steps = [
  {
    label: "01",
    title: "Connect your business",
    body: "Sync calendar, email, and tools you already use so AOS can see the moving parts."
  },
  {
    label: "02",
    title: "Train once, not forever",
    body: "Give Aurora your playbook—how you talk, who you serve, and what “done” means for each task."
  },
  {
    label: "03",
    title: "Assign departments",
    body: "Let HR, Accounting, CRM, and Support agents take the repeat work while you approve key decisions."
  }
];

export default function HowItWorks() {
  return (
    <section id="product" className="aos-section pt-4">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-aos-muted">
          How it works
        </p>
        <h2 className="mt-2 text-lg font-semibold sm:text-xl">
          One Super Agent. Multiple departments. Human in the loop.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.label}
            className="aos-glass rounded-3xl border border-aos-border/80 p-4"
          >
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-aos-muted">
              {step.label}
            </div>
            <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
            <p className="mt-2 text-xs text-aos-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

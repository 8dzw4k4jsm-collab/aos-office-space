export default function CtaSection() {
  return (
    <section id="pricing" className="aos-section pt-8">
      <div className="aos-glass rounded-3xl border border-aos-border/80 px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <div className="grid gap-6 sm:grid-cols-[2fr,1.2fr] sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-aos-muted">
              Early access
            </p>
            <h2 className="mt-2 text-lg font-semibold sm:text-xl">
              Start with one office. Scale to every brand.
            </h2>
            <p className="mt-3 text-xs text-aos-muted sm:text-sm">
              We’re onboarding a small group of teams to shape AOS. Get priority
              access, direct input on the roadmap, and pricing that’s locked in
              as we grow.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-xs">
            <div className="flex items-center justify-between rounded-2xl bg-aos-surface-alt/80 px-4 py-3">
              <div>
                <p className="font-medium">Founding teams</p>
                <p className="text-[11px] text-aos-muted">
                  Flat, simple pricing. No per-seat chaos.
                </p>
              </div>
              <p className="text-sm font-semibold">$— / mo</p>
            </div>
            <button className="w-full rounded-full bg-gradient-to-r from-aos-primary to-aos-accent px-5 py-2.5 text-xs font-medium text-aos-text shadow-aos-soft transition hover:brightness-110">
              Join the waitlist
            </button>
            <p className="text-[11px] text-aos-muted">
              Prefer a walkthrough?{" "}
              <a href="#contact" className="text-aos-primary underline">
                Book a demo call
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

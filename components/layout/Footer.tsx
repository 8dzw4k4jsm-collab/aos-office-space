export default function Footer() {
  return (
    <footer className="border-t border-aos-border/70 bg-aos-bg/80">
      <div className="aos-container flex flex-col gap-4 py-6 text-xs text-aos-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} AOS Office Suite. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#docs" className="hover:text-aos-text">
            Docs
          </a>
          <a href="#pricing" className="hover:text-aos-text">
            Pricing
          </a>
          <a href="#contact" className="hover:text-aos-text">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

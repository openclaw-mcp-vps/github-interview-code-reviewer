export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Review Candidate Code Like a{" "}
          <span className="text-[#58a6ff]">Senior Engineer</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste a GitHub repo URL and get a comprehensive technical review in seconds — code quality, architecture, best practices, and a hiring score. No more guessing.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Reviewing — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["GitHub Integration", "AI Code Analysis", "Shareable Reports", "Multi-dimension Scoring", "Architecture Review", "Best Practices Check"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to hire smarter</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repo reviews",
              "AI scoring across 6 dimensions",
              "Shareable PDF/link reports",
              "GitHub OAuth integration",
              "Architecture & security analysis",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the code review work?",
              a: "You submit a GitHub repository URL. Our AI fetches the code, analyzes it across six dimensions — readability, architecture, security, performance, test coverage, and best practices — and generates a detailed report with scores and actionable feedback."
            },
            {
              q: "Can I share reports with my hiring team?",
              a: "Yes. Every review generates a shareable link and a downloadable PDF report you can forward to colleagues, hiring managers, or store in your ATS."
            },
            {
              q: "What languages and frameworks are supported?",
              a: "Our AI supports all major languages including JavaScript, TypeScript, Python, Go, Rust, Java, and more. It understands popular frameworks like React, Next.js, Django, and Spring."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#6e7681] text-xs pb-8">
        &copy; {new Date().getFullYear()} GitHub Interview Code Reviewer. All rights reserved.
      </footer>
    </main>
  );
}

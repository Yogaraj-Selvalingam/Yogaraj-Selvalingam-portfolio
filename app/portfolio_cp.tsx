"use client";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-8 py-5">
          <h1 className="font-semibold text-xl">
            Yogaraj<span className="text-blue-600">.</span>
          </h1>
        </div>
      </header>

      <section className="px-8 py-24">
        <p className="text-blue-600 font-semibold">
          SENIOR DIGITAL VERIFICATION ENGINEER
        </p>

        <h1 className="mt-4 text-6xl font-bold">
          Building confidence
          <br />
          <span className="text-blue-600">
            from specification to silicon.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-slate-600">
          I'm Yogaraj Selvalingam. I turn complex silicon into reliable
          products through functional verification, automation and thoughtful
          engineering.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-slate-600">Years in verification</div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="text-3xl font-bold">UVM</div>
            <div className="text-slate-600">Reusable environments</div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <div className="text-3xl font-bold">Python</div>
            <div className="text-slate-600">Engineering automation</div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Technical Expertise
          </h2>

          <p className="text-slate-300 mb-12 text-lg">
            Technologies, protocols, tools and methodologies I use to build
            confidence from specification to silicon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <div className="rounded-3xl border border-slate-700 p-6">
              <h3 className="text-xl font-semibold mb-4">
                Verification
              </h3>

              <ul className="space-y-2 text-slate-300">
                <li>SystemVerilog</li>
                <li>UVM</li>
                <li>Assertions (SVA)</li>
                <li>Coverage Driven Verification</li>
                <li>Formal Verification</li>
                <li>Gate-Level Simulation</li>
                <li>UPF Verification</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-700 p-6">
              <h3 className="text-xl font-semibold mb-4">
                Protocols
              </h3>

              <ul className="space-y-2 text-slate-300">
                <li>AXI</li>
                <li>AHB</li>
                <li>APB</li>
                <li>USB</li>
                <li>DDR</li>
                <li>Ethernet</li>
                <li>USXGMII</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-700 p-6">
              <h3 className="text-xl font-semibold mb-4">
                Programming
              </h3>

              <ul className="space-y-2 text-slate-300">
                <li>Python</li>
                <li>Shell Scripting</li>
                <li>Bash</li>
                <li>tcsh</li>
                <li>Perl</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-700 p-6">
              <h3 className="text-xl font-semibold mb-4">
                Tools
              </h3>

              <ul className="space-y-2 text-slate-300">
                <li>Cadence Jasper</li>
                <li>Verisium AI</li>
                <li>vManager</li>
                <li>Xcelium</li>
                <li>VCS</li>
                <li>Questa</li>
</ul>
</div>

<div className="rounded-3xl border border-slate-700 p-6">
  <h3 className="text-xl font-semibold mb-4">
    Power & Sign-off
  </h3>

  <ul className="space-y-2 text-slate-300">
    <li>UPF</li>
    <li>Isolation</li>
    <li>Retention</li>
    <li>Power-State Validation</li>
    <li>GLS</li>
    <li>Debug</li>
  </ul>
</div>

<div className="rounded-3xl border border-slate-700 p-6">
  <h3 className="text-xl font-semibold mb-4">
    Specializations
  </h3>

  <ul className="space-y-2 text-slate-300">
    <li>ASIC Verification</li>
    <li>SoC Verification</li>
    <li>Regression Automation</li>
    <li>Power-Aware Verification</li>
    <li>AI-Assisted Verification</li>
  </ul>
</div>

</div>
</div>
</section>
<section className="bg-white px-8 py-24">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold mb-6">
      Selected Work
    </h2>

    <p className="text-slate-600 mb-12 text-lg">
      Representative engineering themes that showcase verification depth,
      automation and practical problem solving.
    </p>

    <div className="grid gap-6 md:grid-cols-2">

      <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="text-sm font-semibold text-blue-600">
          HIGH-SPEED CONNECTIVITY
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          Ethernet & USXGMII Verification
        </h3>

        <p className="mt-4 text-slate-600">
          Verification of packet flows, register behavior,
          interrupts, functional modes and coverage closure for
          high-speed connectivity designs.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="text-sm font-semibold text-blue-600">
          PRODUCTIVITY
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          Regression Automation
        </h3>

        <p className="mt-4 text-slate-600">
          Python and shell workflows that reduce repetitive work,
          generate regression inputs and improve setup consistency.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="text-sm font-semibold text-blue-600">
          SILICON CONFIDENCE
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          Power-Aware & Gate-Level Verification
        </h3>

        <p className="mt-4 text-slate-600">
          Isolation, retention, UPF validation, gate-level simulation,
          debug and sign-off readiness.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="text-sm font-semibold text-blue-600">
          INNOVATION
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          AI-Assisted Debug
        </h3>

        <p className="mt-4 text-slate-600">
          Exploring AI-supported regression analysis,
          failure categorization and root-cause discovery.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-slate-100 px-8 py-24">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold mb-6">
      Beyond The Testbench
    </h2>

    <p className="text-slate-600 mb-12 text-lg">
      The work I value most does more than close coverage.
      It makes engineering simpler, clearer and more scalable
      for the people around me.
    </p>

    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold">
          Tools & Automation
        </h3>

        <p className="mt-4 text-slate-600">
          Building practical Python and shell tools that simplify
          regression setup, generate inputs, improve consistency
          and reduce repetitive engineering work.
        </p>

        <ul className="mt-6 space-y-2 text-slate-700">
          <li>VSIF generation</li>
          <li>Regression workflows</li>
          <li>Setup automation</li>
          <li>Debug helpers</li>
        </ul>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold">
          Knowledge Sharing
        </h3>

        <p className="mt-4 text-slate-600">
          Turning complex engineering topics into clear,
          reusable guidance through workshops, demos and
          technical mentoring.
        </p>

        <ul className="mt-6 space-y-2 text-slate-700">
          <li>Python workshops</li>
          <li>Technical demos</li>
          <li>Verification guidance</li>
          <li>AI adoption</li>
        </ul>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold">
          Leadership & Community
        </h3>

        <p className="mt-4 text-slate-600">
          Contributing beyond individual deliverables through
          mentoring, reviews, process improvements and team
          enablement.
        </p>

        <ul className="mt-6 space-y-2 text-slate-700">
          <li>Mentoring</li>
          <li>Code reviews</li>
          <li>Process improvement</li>
          <li>Team enablement</li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section className="bg-white px-8 py-24">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-5xl font-bold mb-6">
      Let's Connect
    </h2>

    <p className="text-slate-600 mb-12 text-lg">
      Interested in verification, automation, AI-assisted engineering,
      or simply connecting with fellow engineers?
    </p>

    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="text-blue-600 font-semibold mb-3">
          EMAIL
        </div>

        <div className="text-slate-800 break-all">
          yogaraj.selvalingam09@gmail.com
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="text-blue-600 font-semibold mb-3">
          PHONE
        </div>

        <div className="text-slate-800">
          +31 6 4987 0444
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="text-blue-600 font-semibold mb-3">
          LINKEDIN
        </div>

        <a
          href="https://www.linkedin.com/in/yogaraj-s-689121aa/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Profile
        </a>
      </div>

    </div>
  </div>
</section>

</main>
  );
}
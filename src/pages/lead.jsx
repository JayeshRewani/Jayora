import React, { useState } from "react";

export default function Lead() {
  const [form, setForm] = useState({ name: "", instagram: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("https://jayora-db.onrender.com/api/v1/creator-tool/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          instagramusername: form.instagram,
        }),
      });
      if (res.ok) setSubmitted(true);
      else alert("Failed to submit. Please try again.");
    } catch {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Be+Vietnam+Pro:wght@300;400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Gochi+Hand&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0");
        .lead-ms {
          font-family: "Material Symbols Outlined";
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
          -webkit-font-smoothing: antialiased;
        }
        .lead-ms-fill {
          font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
        }
        .lead-handwritten {
          font-family: "Gochi Hand", cursive;
        }
      `}</style>

      <div
        className="dark w-full min-h-[max(884px,100dvh)] min-h-screen text-white font-['Be_Vietnam_Pro',sans-serif] selection:bg-[#ff55f1] selection:text-white overflow-x-hidden"
        style={{
          backgroundColor: "#0e0e0e",
          backgroundImage: "radial-gradient(circle at 2px 2px, #191919 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      >
        <main className="pt-10 pb-16 px-6 max-w-4xl mx-auto relative">
          <div className="max-w-lg mx-auto relative">
          {/* Subtle Glitch Elements Background */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
            <div className="absolute top-20 left-10 w-24 h-px bg-[#a1a6ff] rotate-12" />
            <div className="absolute top-40 right-10 w-16 h-[2px] bg-[#ff55f1] -rotate-45" />
            <div className="absolute bottom-60 left-1/4 w-1 h-1 bg-[#aaffdc] rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#a1a6ff] rounded-full shadow-[0_0_10px_#a1a6ff]" />
            <div className="lead-handwritten text-[#ff55f1] absolute top-32 right-8 rotate-12 text-xl opacity-50">
              #glitch
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative mb-12 mt-4 text-left">
            <div className="absolute -top-6 -right-4 z-10">
              <div className="bg-[#ff55f1] text-black font-black py-2 px-4 rotate-12 shadow-[4px_4px_0px_0px_#000000] border-2 border-black">
                FREE 🔥
              </div>
            </div>
            <h1 className="font-['Space_Grotesk',sans-serif] font-bold italic text-4xl md:text-5xl tracking-tighter text-white mb-2 drop-shadow-[0_0_15px_rgba(255,85,241,0.4)]">
              Get Your Viral <br />
              <span className="text-[#ff55f1] italic">Reel Ideas 🚀</span>
            </h1>
            <p className="lead-handwritten text-[#aaffdc] text-xl -rotate-1 ml-2">
              Takes less than 10 seconds
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 relative">
              {/* Instagram Field */}
              <div className="relative group">
                <div className="absolute -left-12 top-0 pointer-events-none hidden sm:block">
                  <div className="lead-handwritten text-[#ff55f1] text-lg rotate-[-15deg] whitespace-nowrap">
                    Start here
                    <span className="lead-ms block text-3xl rotate-[20deg]">north_east</span>
                  </div>
                </div>
                <div className="bg-[#131313] p-6 border-4 border-[#a1a6ff] shadow-[6px_6px_0px_0px_#ff55f1] transition-all hover:-translate-y-1 active:translate-y-0.5">
                  <label
                    htmlFor="lead-instagram"
                    className="block font-['Space_Grotesk',sans-serif] font-bold text-xs uppercase tracking-widest text-[#5860ff] mb-2"
                  >
                    Instagram Username
                  </label>
                  <div className="flex items-center gap-3 border-b-2 border-[#484848] focus-within:border-[#aaffdc] transition-colors py-2">
                    <span className="text-[#ff55f1] font-bold text-xl">@</span>
                    <input
                      id="lead-instagram"
                      name="instagram"
                      value={form.instagram}
                      onChange={handleChange}
                      className="bg-transparent border-none focus:ring-0 text-white text-xl font-['Space_Grotesk',sans-serif] w-full placeholder:text-[#484848] outline-none"
                      placeholder="yourname"
                      type="text"
                      autoComplete="username"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Name Field */}
              <div className="bg-[#191919] p-6 border-4 border-[#262626] shadow-[6px_6px_0px_0px_#a1a6ff] rotate-[1deg]">
                <label
                  htmlFor="lead-name"
                  className="block font-['Space_Grotesk',sans-serif] font-bold text-xs uppercase tracking-widest text-[#ababab] mb-2"
                >
                  Name (optional)
                </label>
                <div className="flex items-center gap-3 border-b-2 border-[#484848] focus-within:border-[#ff55f1] transition-colors py-2">
                  <input
                    id="lead-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-transparent border-none focus:ring-0 text-white text-xl font-['Space_Grotesk',sans-serif] w-full placeholder:text-[#484848] outline-none"
                    placeholder="What do we call you?"
                    type="text"
                    autoComplete="name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="bg-[#131313] p-6 border-4 border-[#ff55f1] shadow-[6px_6px_0px_0px_#191919] -rotate-[1deg]">
                  <label
                    htmlFor="lead-email"
                    className="block font-['Space_Grotesk',sans-serif] font-bold text-xs uppercase tracking-widest text-[#ff55f1] mb-2"
                  >
                    Email (optional)
                  </label>
                  <div className="flex items-center gap-3 border-b-2 border-[#484848] focus-within:border-[#a1a6ff] transition-colors py-2">
                    <input
                      id="lead-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-transparent border-none focus:ring-0 text-white text-xl font-['Space_Grotesk',sans-serif] w-full placeholder:text-[#484848] outline-none"
                      placeholder="hello@creators.com"
                      type="email"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="lead-handwritten text-[#aaffdc] mt-4 text-lg rotate-1 flex items-center gap-2">
                  <span className="lead-ms text-xl">visibility</span>
                  We analyze your content style 👀
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#ff55f1] text-black font-['Space_Grotesk',sans-serif] font-black text-2xl py-6 uppercase tracking-tighter shadow-[8px_8px_0px_0px_#a1a6ff] hover:shadow-[4px_4px_0px_0px_#a1a6ff] hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                >
                  <div className="flex items-center justify-center gap-3 group-hover:scale-110 transition-transform">
                    {loading ? "Generating…" : "Generate My Ideas"}
                    <span className={`lead-ms text-4xl ${loading ? "" : "lead-ms-fill"}`}>bolt</span>
                  </div>
                </button>
              </div>
            </form>
          ) : (
            <div className="relative rounded-lg border-4 border-[#aaffdc] bg-[#131313] p-8 text-center shadow-[8px_8px_0px_0px_#a1a6ff]">
              <p className="font-['Space_Grotesk',sans-serif] text-2xl font-black italic text-[#aaffdc] mb-2">
                You&apos;re in
              </p>
              <p className="text-[#ababab] text-sm leading-relaxed">
                Your personalised reel ideas are on the way. Check your inbox or DMs soon.
              </p>
            </div>
          )}

          {/* Aesthetic Scrap */}
          <div className="mt-16 p-4 bg-[#2c2c2c] border-2 border-[#484848] rotate-2 max-w-[280px] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#ff55f1]/30 backdrop-blur-sm" />
            <p className="text-xs font-['Plus_Jakarta_Sans',sans-serif] uppercase text-[#ababab] mb-2">
              Latest Trend
            </p>
            <p className="font-['Space_Grotesk',sans-serif] font-bold text-[#a1a6ff]">
              &ldquo;POV: You finally found the tool that makes editing fun again...&rdquo;
            </p>
            <div className="flex gap-1 mt-3">
              <div className="w-2 h-2 rounded-full bg-[#ff6e84]" />
              <div className="w-2 h-2 rounded-full bg-[#aaffdc]" />
              <div className="w-2 h-2 rounded-full bg-[#a1a6ff]" />
            </div>
          </div>
          </div>

          {/* Recent Wins (from main_dashboard_2 / Stitch) */}
          <section className="mt-20 w-full grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-12 mb-8">
              <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-4xl uppercase italic border-b-4 border-[#a1a6ff] inline-block">
                Recent Wins
              </h2>
            </div>
            <div className="md:col-span-7 bg-[#1f1f1f] p-6 border-2 border-[#484848] rotate-[-1deg] relative overflow-hidden group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="bg-[#00fdc1] text-[#005c44] text-[10px] font-bold px-2 py-0.5 rounded-none uppercase">
                    Trending Now
                  </span>
                  <h3 className="font-['Space_Grotesk',sans-serif] text-2xl font-bold mt-2">
                    The &apos;Lo-Fi&apos; Aesthetic Pivot
                  </h3>
                </div>
                <span className="lead-ms text-[#ff55f1] text-4xl">trending_up</span>
              </div>
              <div className="h-48 w-full bg-zinc-900 overflow-hidden mb-4">
                <img
                  alt="Lo-fi creative desk with neon lights"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCksD-lAt6yz5ugsGuRmSvZjNNpOX4tgt3ZMBa0cE8VW0DHov_te4_8jiFEkTzk6Ws2Js1nETgfQmjWGDt1ISMG9Ghh2uWWiDOk_HNvMz8YgyNKYtdFP_O_zK06nxHP0t848s9Y6SuiwT3KmyNPCkx7J4moS7WFt6yMDn1mNVHr18hrE9ATsbbhshHQXnByOAGtRRXLalJIrhLK5d2BhRSdyHTZlmcLahXHqXV54m0k_3MSCHYTzEGl8MdroG-7cEpUZjnh_yovV6bA"
                />
              </div>
              <p className="text-[#ababab] font-['Be_Vietnam_Pro',sans-serif] text-sm">
                Engagement up by 240% for creators switching to raw, unedited storytelling styles this
                month.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="bg-[#aa00a3] p-6 rotate-[2deg] shadow-[4px_4px_0_0_#000000] flex-1">
                <h3 className="font-['Space_Grotesk',sans-serif] text-[#fff5f9] font-black text-3xl italic leading-none mb-2">
                  3.2M VIEWS
                </h3>
                <p className="text-[#fff5f9]/80 text-xs font-bold uppercase">Average reach for Engine users</p>
              </div>
              <div className="bg-black border-2 border-[#aaffdc] p-6 rotate-[-2deg]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="lead-ms text-[#aaffdc]">verified_user</span>
                  <span className="font-['Space_Grotesk',sans-serif] font-bold text-[#aaffdc]">
                    VAULT SECURED
                  </span>
                </div>
                <p className="text-zinc-400 text-xs font-['Be_Vietnam_Pro',sans-serif]">
                  All your generated hooks and scripts are encrypted and stored in your private vault.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Additional Decorative Doodle (not bottom nav) */}
        <div className="fixed bottom-32 left-4 pointer-events-none opacity-40">
          <span className="lead-ms text-6xl text-[#aaffdc] rotate-[-20deg]">draw</span>
        </div>
      </div>
    </>
  );
}

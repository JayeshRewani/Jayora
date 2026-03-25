import React, { useState, useEffect } from "react";

export default function Lead() {
  const [form, setForm] = useState({ name: "", instagram: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveFeature(p => (p + 1) % 4), 2800);
    return () => clearInterval(t);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("https://jayora-db.onrender.com/api/v1/creator-tool/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, instagramusername: form.instagram }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: "💡", label: "Reel Idea", value: "Client ₹10k loss turned into a viral story" },
    { icon: "🎣", label: "Hook (3 sec)", value: '"You won\'t believe what happened next…"' },
    { icon: "🎵", label: "Viral Audio", value: "Lo-fi storytelling · 2.4M uses this week" },
    { icon: "✂️", label: "Edit Style", value: "Fast cuts + text overlay + zoom-in reveal" },
  ];

  const problems = ["Kya post karu?", "Kaunsa trend use karu?", "Kaunsa audio viral hai?", "Mere content pe kya chalega?"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --black: #0c0c0c;
          --white: #ffffff;
          --cream: #f6f4ef;
          --accent: #ff4500;
          --muted: #999;
          --border: rgba(0,0,0,0.08);
        }

        .cie-root {
          min-height: 100vh;
          background: var(--cream);
          font-family: "Amiamie", sans-serif;
          color: var(--black);
          overflow-x: hidden;
          position: relative;
        }

        /* ── Floating BG ── */
        .cie-bg {
          position: fixed; inset: 0;
          pointer-events: none; overflow: hidden; z-index: 0;
        }
        .fl { position: absolute; background: var(--white); border: 1.5px solid rgba(0,0,0,0.07); }
        .fl-1 { width:400px;height:400px;border-radius:50%;    top:-10%;left:-8%; animation: flt 26s ease-in-out infinite; }
        .fl-2 { width:250px;height:250px;border-radius:14px;   top:5%;  left:70%;animation: flt 20s ease-in-out infinite; animation-delay:-6s;  transform:rotate(18deg); }
        .fl-3 { width:170px;height:340px;border-radius:999px;  top:58%; left:5%; animation: flt 30s ease-in-out infinite; animation-delay:-10s; transform:rotate(28deg); }
        .fl-4 { width:310px;height:310px;border-radius:50%;    top:62%; left:73%;animation: flt 22s ease-in-out infinite; animation-delay:-3s; }
        .fl-5 { width:100px;height:100px;border-radius:50%;    top:36%; left:46%;animation: flt 16s ease-in-out infinite; animation-delay:-7s; }
        .fl-6 { width:230px;height:85px; border-radius:999px;  top:83%; left:33%;animation: flt 24s ease-in-out infinite; animation-delay:-4s;  transform:rotate(-14deg); }
        .fl-7 { width:75px; height:75px; border-radius:10px;   top:17%; left:29%;animation: flt 18s ease-in-out infinite; animation-delay:-12s; transform:rotate(42deg); }

        @keyframes flt {
          0%,100%{ transform: translateY(0); }
          40%    { transform: translateY(-22px); }
          70%    { transform: translateY(12px); }
        }

        /* ── Layout ── */
        .cie-page {
          position: relative; z-index: 1;
          max-width: 1060px; margin: 0 auto;
          padding: 44px 24px 72px;
          display: grid;
          grid-template-columns: 1fr 410px;
          gap: 60px;
          align-items: start;
        }
        @media(max-width:840px){
          .cie-page{ grid-template-columns:1fr; gap:36px; padding:32px 18px 56px; }
          .cie-right{ order:-1; }
        }

        /* ── Animations ── */
        @keyframes up {
          from{opacity:0;transform:translateY(24px);}
          to  {opacity:1;transform:translateY(0);}
        }
        .a1{opacity:0;animation:up .5s ease forwards .1s;}
        .a2{opacity:0;animation:up .5s ease forwards .2s;}
        .a3{opacity:0;animation:up .5s ease forwards .3s;}
        .a4{opacity:0;animation:up .5s ease forwards .4s;}
        .a5{opacity:0;animation:up .5s ease forwards .5s;}
        .a6{opacity:0;animation:up .6s ease forwards .35s;}

        /* ── Left col ── */
        .topbar {
          display:flex; align-items:center; gap:10px; margin-bottom:36px;
        }
        .logomark {
          width:33px;height:33px;background:var(--black);border-radius:9px;
          display:flex;align-items:center;justify-content:center;font-size:15px;
        }
        .logoname {
          font-family:"Amiamie",sans-serif; font-weight:700; font-size:14px;
        }
        .stagepill {
          margin-left:auto; background:var(--black); color:var(--cream);
          font-size:10px; font-weight:500; letter-spacing:.12em; text-transform:uppercase;
          padding:4px 12px; border-radius:999px; display:flex;align-items:center;gap:5px;
        }
        .ldot {
          width:5px;height:5px;border-radius:50%;background:#4ade80;
          animation:blink 2s ease-in-out infinite;
        }
        @keyframes blink{0%,100%{opacity:1;}50%{opacity:.25;}}

        .hl {
          font-family:"Amiamie",sans-serif; font-weight:800;
          font-size:clamp(52px,7vw,86px); line-height:.98; letter-spacing:-.025em;
          margin-bottom:18px;
        }
        .hl-outline { color:transparent; -webkit-text-stroke:2.5px var(--black); }
        .hl-accent  { color:var(--accent); }

        .subtext {
          font-size:18px; font-weight:300; color:#555; line-height:1.75;
          max-width:400px; margin-bottom:38px;
        }

        /* Problems */
        .sec-label {
          font-size:10px; font-weight:500; letter-spacing:.14em;
          text-transform:uppercase; color:var(--muted); margin-bottom:12px;
        }
        .prob-wrap { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:44px; }
        .ptag {
          background:var(--white); border:1.5px solid var(--border);
          border-radius:999px; padding:7px 14px; font-size:12.5px; color:#444;
          display:flex; align-items:center; gap:6px;
        }
        .ptag::before {
          content:''; width:5px;height:5px;border-radius:50%;
          background:var(--accent); flex-shrink:0;
        }

        /* Blueprint card */
        .bp-card {
          background:var(--white); border:1.5px solid var(--border);
          border-radius:18px; overflow:hidden;
        }
        .bp-head {
          background:var(--black); color:var(--cream);
          padding:13px 20px; display:flex; align-items:center; justify-content:space-between;
          font-family:"Amiamie",sans-serif; font-size:12px; font-weight:600;
          letter-spacing:.08em; text-transform:uppercase;
        }
        .bp-head span { opacity:.4; font-size:10px; font-family:"Amiamie",sans-serif; font-weight:400; letter-spacing:.06em; }

        .frow {
          display:flex; align-items:center; gap:14px;
          padding:12px 20px; border-bottom:1px solid #f0ede8;
          transition: background .25s;
        }
        .frow:last-child{border-bottom:none;}
        .frow.on { background:#faf9f6; }

        .ficon {
          width:34px;height:34px;border-radius:9px;background:var(--cream);
          display:flex;align-items:center;justify-content:center;font-size:16px;
          flex-shrink:0; transition:background .25s;
        }
        .frow.on .ficon { background:var(--black); }

        .flabel { font-size:10px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); margin-bottom:2px; }
        .fval   { font-size:13px; color:var(--black); font-weight:400; line-height:1.4; }
        .frow.on .fval { font-weight:500; }

        .findic {
          margin-left:auto; width:6px;height:6px;border-radius:50%;
          background:var(--accent); opacity:0; transition:opacity .3s; flex-shrink:0;
        }
        .frow.on .findic { opacity:1; }

        /* ── Right col ── */
        .cie-right { position:sticky; top:30px; }
        @media(max-width:840px){ .cie-right{ position:static; } }

        .fcard {
          background:var(--white); border:1.5px solid var(--border);
          border-radius:24px; padding:36px 32px 30px;
          box-shadow:0 2px 4px rgba(0,0,0,.03), 0 16px 48px rgba(0,0,0,.07);
        }
        @media(max-width:840px){ .fcard{padding:28px 22px 24px;} }

        .f-eyebrow { font-size:10px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:8px; }
        .f-title   { font-family:"Amiamie",sans-serif;font-weight:700;font-size:28px;line-height:1.2;margin-bottom:6px; }
        .f-desc    { font-size:13px;color:#888;font-weight:300;line-height:1.65;margin-bottom:26px; }
        .f-desc strong{color:var(--black);font-weight:500;}

        .field { margin-bottom:12px; }
        .f-lbl { font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#777;margin-bottom:6px;display:block; }
        .req   { color:var(--accent); margin-left:2px; }
        .f-inp {
          width:100%;padding:12px 14px;border:1.5px solid #e5e2dc;
          border-radius:11px;background:#faf9f7;font-family:"Amiamie",sans-serif;
          font-size:14px;color:var(--black);outline:none;
          transition:border-color .2s,background .2s,box-shadow .2s; -webkit-appearance:none;
        }
        .f-inp::placeholder{color:#bfbbb5;}
        .f-inp:focus{border-color:var(--black);background:var(--white);box-shadow:0 0 0 3px rgba(12,12,12,.06);}

        .ctabtn {
          width:100%;padding:15px 20px;margin-top:8px;
          background:var(--black);color:var(--cream);border:none;border-radius:12px;
          font-family:"Amiamie",sans-serif;font-size:16px;font-weight:700;letter-spacing:.04em;
          cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;
          transition:transform .15s,box-shadow .15s; position:relative; overflow:hidden;
        }
        .ctabtn::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.08) 0%,transparent 60%);}
        .ctabtn:not(:disabled):hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(12,12,12,.22);}
        .ctabtn:not(:disabled):active{transform:translateY(0);}
        .ctabtn:disabled{opacity:.55;cursor:not-allowed;}

        .ctaarrow {
          width:20px;height:20px;background:rgba(255,255,255,.12);border-radius:50%;
          display:flex;align-items:center;justify-content:center;transition:transform .2s;
        }
        .ctabtn:not(:disabled):hover .ctaarrow{transform:translateX(3px);}

        .trustrow {
          display:flex;align-items:center;justify-content:center;gap:14px;margin-top:14px;
        }
        .titem { display:flex;align-items:center;gap:4px;font-size:11px;color:#aaa;font-weight:300; }
        .tdot  { color:#d8d4ce; }

        /* Loader */
        .loader{display:flex;gap:4px;align-items:center;}
        .loader span{width:4px;height:4px;background:var(--cream);border-radius:50%;animation:ldot 1.2s ease-in-out infinite;}
        .loader span:nth-child(2){animation-delay:.2s;}
        .loader span:nth-child(3){animation-delay:.4s;}
        @keyframes ldot{0%,80%,100%{transform:scale(.7);opacity:.4;}40%{transform:scale(1);opacity:1;}}

        /* Success */
        .suc { text-align:center; padding:10px 0 6px; animation:up .5s cubic-bezier(.22,1,.36,1); }
        .suc-icon { width:68px;height:68px;border-radius:50%;background:var(--black);display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 20px; }
        .suc-h  { font-family:"Amiamie",sans-serif;font-weight:800;font-size:36px;margin-bottom:10px; }
        .suc-p  { font-size:13.5px;color:#888;font-weight:300;line-height:1.7;margin-bottom:22px; }
        .suc-tags { display:flex;flex-wrap:wrap;justify-content:center;gap:8px; }
        .stag { background:var(--cream);border:1.5px solid var(--border);border-radius:999px;font-size:12px;padding:5px 13px;color:#555; }

        /* Footer */
        .cie-foot { position:relative;z-index:1;text-align:center;padding-bottom:32px; }
        .cie-foot p { font-size:11.5px;color:#bbb;font-weight:300; }
      `}</style>

      <div className="cie-root">

        {/* Floating shapes */}
        <div className="cie-bg">
          <div className="fl fl-1" /><div className="fl fl-2" /><div className="fl fl-3" />
          <div className="fl fl-4" /><div className="fl fl-5" /><div className="fl fl-6" />
          <div className="fl fl-7" />
        </div>

        <div className="cie-page">

          {/* ── LEFT ── */}
          <div>
            {/* Top bar */}
            <div className="topbar a1">
              <div className="logomark">⚡</div>
              <span className="logoname">Creator Idea Engine</span>
              <div className="stagepill"><span className="ldot" /> Early Access</div>
            </div>

            {/* Headline */}
            <h1 className="hl a2">
              Stop<br />
              <span className="hl-outline">Thinking.</span><br />
              Start <span className="hl-accent">Creating.</span>
            </h1>

            <p className="subtext a3">
              AI-powered reel blueprints tailored to your content style — ideas, hooks,
              trending audio & editing guidance. All in seconds.
            </p>

            {/* Problem tags */}
            <div className="a4">
              <div className="sec-label">Sound familiar?</div>
              <div className="prob-wrap">
                {problems.map((p, i) => <div className="ptag" key={i}>{p}</div>)}
              </div>
            </div>

            {/* Blueprint preview */}
            <div className="a5">
              <div className="sec-label">Your complete reel blueprint</div>
              <div className="bp-card">
                <div className="bp-head">
                  Complete Reel Blueprint <span>AI · Personalised</span>
                </div>
                {features.map((f, i) => (
                  <div className={`frow${activeFeature === i ? " on" : ""}`} key={i}>
                    <div className="ficon">{f.icon}</div>
                    <div>
                      <div className="flabel">{f.label}</div>
                      <div className="fval">{f.value}</div>
                    </div>
                    <div className="findic" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT (FORM) ── */}
          <div className="cie-right a6">
            <div className="fcard">
              {!submitted ? (
                <>
                  <div className="f-eyebrow">Free Early Access</div>
                  <div className="f-title">Get Your First Blueprint</div>
                  <p className="f-desc">
                    Enter your Instagram and we'll send you{" "}
                    <strong>2 personalised reel ideas</strong> tailored to your content style.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <label className="f-lbl">Your Name</label>
                      <input type="text" name="name" placeholder="e.g. Rahul" onChange={handleChange} className="f-inp" />
                    </div>
                    <div className="field">
                      <label className="f-lbl">Instagram Username <span className="req">*</span></label>
                      <input type="text" name="instagram" placeholder="@yourhandle" required onChange={handleChange} className="f-inp" />
                    </div>
                    <div className="field">
                      <label className="f-lbl">Email</label>
                      <input type="email" name="email" placeholder="you@email.com" onChange={handleChange} className="f-inp" />
                    </div>

                    <button type="submit" disabled={loading} className="ctabtn">
                      {loading ? (
                        <div className="loader"><span/><span/><span/></div>
                      ) : (
                        <>
                          <span>Get My Free Blueprint</span>
                          <div className="ctaarrow">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5h6M5 2l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </>
                      )}
                    </button>
                  </form>

                  <div className="trustrow">
                    <div className="titem">⭐ 100% Free</div>
                    <span className="tdot">·</span>
                    <div className="titem">🔒 No Spam</div>
                    <span className="tdot">·</span>
                    <div className="titem">⚡ 2 min</div>
                  </div>
                </>
              ) : (
                <div className="suc">
                  <div className="suc-icon">✦</div>
                  <div className="suc-h">You're In!</div>
                  <p className="suc-p">
                    Your personalised reel blueprint is on the way. Check your inbox or Instagram DMs soon.
                  </p>
                  <div className="suc-tags">
                    <span className="stag">💡 Ideas Coming</span>
                    <span className="stag">🎣 Hooks Ready</span>
                    <span className="stag">🎵 Audio Matched</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        <div className="cie-foot">
          <p>Creator Idea Engine · Early Validation · Built for 1k–100k creators</p>
        </div>

      </div>
    </>
  );
}
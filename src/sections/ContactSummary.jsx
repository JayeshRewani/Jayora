import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);

  const items = [
    "INNOVATION",
    "PRECISION",
    "TRUST",
    "COLLABORATION",
    "EXCELLENCE",
  ];

  const items2 = [
    "CONTACT US",
    "CONTACT US",
    "CONTACT US",
    "CONTACT US",
    "CONTACT US",
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "+=1000",
        scrub: true,
        pin: true,
        pinSpacing: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-between min-h-screen overflow-hidden"
    >
      {/* TOP MARQUEE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-black py-2 z-20">
        <Marquee
          items={items}
          speed={0.6}
          className="text-white tracking-widest uppercase"
          icon="solar:star-bold"
          iconClassName="text-white"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="z-10 flex flex-col items-center justify-center text-center h-screen gap-4">
        <p className="font-light text-[40px] sm:text-[64px] md:text-[84px] leading-tight text-white/90">
          “ Let’s build a <br />
          <span className="font-normal text-white">memorable</span> &{" "}
          <span className="italic text-white/90">inspiring</span> <br />
          web application{" "}
          <span className="bg-gradient-to-r from-[#0A1E63] via-[#102D8C] to-[#4E8DFF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(78,141,255,0.7)]">
            together
          </span>{" "}
          “
        </p>
      </div>

      {/* BOTTOM MARQUEE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-b border-white/10 bg-black/90 backdrop-blur-lg py-2 z-20">
        <Marquee
          items={items2}
          reverse
          speed={0.8}
          className="text-white text-lg tracking-[0.2em] uppercase"
          icon="material-symbols-light:square"
          iconClassName="text-[#cfa355]"
        />
      </div>

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E7F1F8]/10 via-[#102D8C]/40 to-[#0A1E63]/90 -z-10" />
    </section>
  );
};

export default ContactSummary;

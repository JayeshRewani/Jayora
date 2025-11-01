import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="title-service-1">
        <p>Architucture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32 bg-gradient-to-r from-[#0A1E63] via-[#102D8C] to-[#4E8DFF] shadow-[0_0_12px_rgba(78,141,255,0.6)] rounded-full" />

        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w-32 bg-gradient-to-r from-[#0A1E63] via-[#102D8C] to-[#4E8DFF] shadow-[0_0_12px_rgba(78,141,255,0.6)] rounded-full" />

        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32 bg-gradient-to-r from-[#0A1E63] via-[#102D8C] to-[#4E8DFF] shadow-[0_0_12px_rgba(78,141,255,0.6)] rounded-full" />

        <p>Scalability</p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;

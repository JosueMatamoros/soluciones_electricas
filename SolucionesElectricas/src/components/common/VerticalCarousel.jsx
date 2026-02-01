import React, { useRef, useState, useEffect } from "react";
import ServiceCard from "../common/ServiceCard";

export default function VerticalCarousel({ services }) {
  const [centerIndex, setCenterIndex] = useState(0);
  const itemRefs = useRef([]);
  const centerIndexRef = useRef(0);

  useEffect(() => {
    centerIndexRef.current = centerIndex;
  }, [centerIndex]);

  useEffect(() => {
    if (!services?.length) return;

    const indexByEl = new Map();
    itemRefs.current.forEach((el, idx) => {
      if (el) indexByEl.set(el, idx);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const candidates = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            idx: indexByEl.get(e.target),
            ratio: e.intersectionRatio,
          }))
          .filter((x) => typeof x.idx === "number");

        if (!candidates.length) return;

        candidates.sort((a, b) => b.ratio - a.ratio);
        const best = candidates[0].idx;

        if (best === centerIndexRef.current) return;
        setCenterIndex(best);
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [services]);

  return (
    <div className="sm:hidden flex flex-col gap-6">
      {services.map((service, idx) => (
        <div
          key={service.id}
          ref={(el) => (itemRefs.current[idx] = el)}
          className={`snap-center transition-all duration-300 px-4 ${
            idx === centerIndex
              ? "scale-100 opacity-100 blur-0"
              : "scale-95 opacity-60 blur-[1px]"
          }`}
          style={{ scrollSnapAlign: "center" }}
        >
          <ServiceCard
            id={service.id}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
}

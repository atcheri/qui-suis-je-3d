import { useRef, type FC, type PropsWithChildren } from "react";

import type { WorkExperience } from "./sections/WorkExperiences/constants";

interface GlowCardProps {
  experience: WorkExperience;
  index: number;
}

const GlowCard: FC<PropsWithChildren<GlowCardProps>> = ({ experience, index, children }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", `${angle + 60}`);
  };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
        <p className="text-white-50 text-lg">{experience.content}</p>
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{experience.what}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;

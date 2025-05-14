import type { FC } from "react";

import { certificates as certifications } from "./constants";
import AnchoredHeader from "../../AnchorHeader";
import { SECTION } from "../../constants";
import GlowCard from "../../GlowCard";

const Certifications: FC = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="flex flex-col items-center">
        <AnchoredHeader anchor={SECTION.CERTIFICATIONS} title="Certifcates" subTitle="What I've recently obtained" />
      </div>
      <div className="flex-center flex-col gap-5">
        <div className="h-full w-full px-5 md:px-10">
          <div className="mt-8 columns-1 md:columns-2 lg:columns-4">
            {certifications.map((cert, index) => (
              <a href={cert.url} key={index} target="_blank">
                <GlowCard card={{ content: cert.title, what: "" }} index={index}>
                  <img src={cert.imageUrl} className="w-full" alt={cert.title} />
                </GlowCard>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

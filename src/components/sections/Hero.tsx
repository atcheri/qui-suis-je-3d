import type { FC } from "react";
import { RESUME_URL, words } from "./constants";
import Button from "../Button";

const Hero: FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="hero-background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Crafting
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>To fuel business growth today</h1>
              <h1>With next gen decentralized tools</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 ">
              Hi, I'm Atsuhiro. <br />
              You can find my{" "}
              <a
                href={RESUME_URL}
                className="underline font-bold"
                target="_blank"
              >
                Resume here
              </a>
              , or
            </p>
            <Button
              text="Discover my work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="discover-work"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;

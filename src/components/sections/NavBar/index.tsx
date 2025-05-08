import { useState, useEffect, type FC } from "react";

import { navLinks } from "./constants";
import { ItsutsuInazumaIcon } from "../../icons";

const NavBar: FC = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          <ItsutsuInazumaIcon className="h-8 w-8 flex-shrink-0 mr-3 fill-indigo-900 dark:fill-slate-200" />
          <span className="font-alice text-3xl text-indigo-900 dark:text-slate-200 tracking-tight whitespace-nowrap">
            5Inazuma
          </span>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;

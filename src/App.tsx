import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import LogoShowCase from "./components/sections/LogoShowCase";
import NavBar from "./components/sections/NavBar";
import TeckStack from "./components/sections/TeckStack";
import WorkExperience from "./components/sections/WorkExperiences";
import WorkShowCase from "./components/sections/WorkShowCase";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <WorkShowCase />
      <LogoShowCase />
      <Features />
      <WorkExperience />
      <TeckStack />
    </>
  );
}

export default App;

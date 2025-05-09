import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import LogoShowCase from "./components/sections/LogoShowCase";
import NavBar from "./components/sections/NavBar";
import WorkShowCase from "./components/sections/WorkShowCase";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <WorkShowCase />
      <LogoShowCase />
      <Features />
    </>
  );
}

export default App;

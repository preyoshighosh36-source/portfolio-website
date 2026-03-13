// App.jsx
import { useEffect } from 'react';
import Hero from './components/Hero'; // relative path
import Skills from "./components/skills/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from './components/experience/experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";





 export default function App() {
  useEffect(()=>{
     AOS.init({
      duration:1000,
     });

  },[])
  return (
    <div>
      <Hero />
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}



import Navbar from "./Navbar/Navbar";
import me from "../assets/me.jpeg";

function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center">

      
      <div className="absolute md:h-[720px] h-[990px] md:w-[1600px] w-[900px] bg-gradient-to-r from-blue-500 to-blue-950 rounded-full transform rotate-6 -top-40 z-0">
      </div>

      <Navbar />

      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pt-32 md:pb-24 mt-24 md:mt-0 z-10"
      >
        
        <div data-aos='fade-up' className="flex-1 md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Preyoshi Ghosh
          </h1>

          <p data-aos='fade-up' data-aos-delay='300' className="text-base sm:text-lg text-gray-300 mb-6">
            Hi! I'm Preyoshi Ghosh, a passionate full-stack developer focused on building scalable, high-performance web applications and delivering seamless user experiences.
          </p>

          <button
            type="button"
            className="text-gray-950 mt-4 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5"
          >
            Contact
          </button>
        </div>

        
       <div data-aos='fade-up' className="flex-1 flex justify-center md:justify-end relative">

  
  <div className="absolute w-[270px] sm:w-[360px] md:w-[420px] h-[270px] sm:h-[360px] md:h-[420px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-2xl opacity-40 animate-pulse">
  </div>

  
  <img
    src={me}
    alt="Preyoshi"
    className="relative z-10 h-[260px] sm:h-[350px] md:h-[400px] w-[260px] sm:w-[350px] md:w-[400px] object-cover rounded-full border-4 border-white shadow-2xl transform transition duration-500 hover:scale-105 animate-[float_6s_ease-in-out_infinite]"
  />

</div>

      </section>

    </div>
  );
}

export default Hero;

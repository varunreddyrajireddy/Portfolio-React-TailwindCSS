import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImg from "../assets/varun.jpeg";

function Hero() {
  return (
    <section className="bg-zinc-800 py-32" id="home">
      <div className="mx-auto w-full px-8 py-8 grid md:grid-cols-2 justify-items-center">
        <article className="sm:ml-24 font-mono text-2xl text-slate-300 leading-normal">
          <p className="text-6xl text-amber-400">
            <span className="text-4xl text-zinc-300">Hey, I&#39;m</span>
            <br />
            <span className="text-amber-400 font-medium ">Varun Reddy</span>
          </p>
          <p className="text-justify text-zinc-300 pt-2 tracking-tight">
            Full Stack Developer with 3 years of expertise. Skilled in HTML,
            CSS, JavaScript, React.js, Next.js, NodeJS, Angular, and Express.js.
            Passionate about building scalable web applications and RESTful
            APIs. Proficient in MySQL and MongoDB for robust data handling.
            Specialize in crafting responsive interfaces for exceptional user
            experiences.
          </p>
          <div className="flex gap-x-5 mt-4">
            <a
              href="https://www.linkedin.com/in/varunreddyr/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-zinc-300 hover:text-violet-500 duration-300 cursor-pointer" />
            </a>
            <a
              href="https://github.com/varunreddyrajireddy"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h-8 w-8 text-zinc-300 hover:text-violet-500 duration-300 cursor-pointer" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img
            src={heroImg}
            className="h-80 lg:h-96 rounded-full w-80 lg:w-96 object-cover ml-48"
          ></img>
        </article>
      </div>
    </section>
  );
}

export default Hero;

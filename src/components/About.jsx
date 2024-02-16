import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section className="bg-zinc-300 py-24" id="about">
      <div className="mx-auto w-full px-8 grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article className="font-mono text-2xl pr-8">
          <span className="text-zinc-800">
            <SectionTitle text="About me" />
          </span>
          <p className="text-zinc-800 mt-1 leading-loose text-justify tracking-tighter">
            I&#39;m a passionate Full Stack Developer with 3-years of hands-on
            experience, I specialize in building dynamic and user-friendly web
            applications using{" "}
            <span className="font-extrabold">HTML, CSS, and JavaScript</span>,
            with an emphasis on{" "}
            <span className="font-extrabold">ReactJS, NodeJS</span> building
            scalable applications and RESTful APIs. Proficient in{" "}
            <span className="font-extrabold">MySQL and MongoDB</span>, ensuring
            robust data management. With a deep understanding of the latest web
            development trends, I am well-versed in creating responsive and
            accessible interfaces that provide an outstanding user experience.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;

import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <section
      className="pt-20 pb-0 mx-auto w-full px-8 bg-zinc-300"
      id="experience"
    >
      <SectionTitle text="Experience" />
      <div className="">
        <div className="my-4 p-4">
          <h1 className="font-bold text-2xl font-mono">
            Bringwise LLC - Frontend Developer - (September 2023 - Present)
          </h1>
          <p className="font-mono text-lg text-justify">
            ➢ Created responsive and engaging user interfaces with React.js for
            various projects. <br />➢ Worked with design and backend teams to
            convert UI/UX designs into usable React components. <br />➢ Utilized
            React Router for smooth navigation in single-page applications.{" "}
            <br />➢ Implemented Redux for state management, improving
            application scalability and maintainability. <br />➢ Used Axios and
            Fetch API to integrate RESTful APIs into React applications for data
            retrieval and manipulation. <br />➢ Contributed to the establishment
            of CI/CD pipelines for continuous integration and deployment using
            tools like Jenkins.
          </p>
        </div>
        <div className="my-4 p-4">
          <h1 className="font-bold font-mono text-2xl">
            Baylor College of Medicine - Frontend Developer - Capstone Project -
            (January 2023 - May 2023)
          </h1>
          <p className="font-mono text-lg text-justify">
            ➢ Created a web app using AngularJS, TypeScript and Node.JS for
            doctors and patients, which provides information on genes and
            genomes, helping in the identification of individuals with specific
            diseases and detailing their diagnostic journeys. <br />➢ Designed
            and implemented various features, including a robust &qout;Global
            Search&qout; functionality, allowing users to search for gene IDs
            and variant IDs with around 40 filters. <br />➢ Utilized Angular
            components to enhance the user interface and overall experience.{" "}
            <br />➢ Hosted the web app using Amazon EC2 instance, leveraging
            Nginx as a server with configured server blocks for domain
            redirection. <br />➢ Employed Process Manager 2 (PM2) to maintain
            uninterrupted operation of the application in the background.
          </p>
        </div>
        <div className="my-4 p-4">
          <h1 className="font-bold text-2xl font-mono">
            Global Tech Hiring Ltd - FullStack Developer - (July 2019 - May
            2021)
          </h1>
          <p className="font-mono text-lg text-justify">
            ➢ Designed the front-end using the React.js library, with a strong
            understanding of Components, States, Props, and Refs. <br />➢
            Hands-on experience utilizing React Hooks, including State Hook,
            Effect Hook, Ref Hook, and others, to manage state and lifecycle
            methods within functional components. <br />➢ Used React Context API
            to efficiently manage and share state across components within the
            React application. <br />➢ Utilized React-Router-Dom to manage the
            path locations of various React components. <br />➢ Utilized
            Redux-toolkit for state management, effectively managing application
            state and facilitating efficient data flow within the application.{" "}
            <br />➢ Familiar with React Query, Axios Http library. <br />➢
            Proficient in utilizing React UI libraries, including Bootstrap, and
            Tailwind CSS. <br />➢ Developed and maintained server-side
            applications using Node.js and Express.js, ensuring scalable and
            efficient backend functionality. <br />➢ Implemented RESTful APIs in
            Node.js, facilitating seamless communication between the frontend
            and backend components <br />➢ Utilized SQL and NoSQL databases
            (MongoDB) for data modeling and management.
            <br />➢ Collaborated with UI/UX designers to implement responsive
            designs and enhance user experiences using TailwindCSS and
            Bootstrap. <br />➢ Proficient in utilizing AWS EC2 instances for
            deploying, managing, and optimizing virtual servers on the Amazon
            Web Services platform.
          </p>
        </div>
        <div className="mt-4 p-4">
          <h1 className="font-bold text-2xl font-mono">
            Global Tech Hiring Ltd - Frontend Developer - Internship - (June
            2018 - December 2018)
          </h1>
          <p className="font-mono text-lg text-justify">
            ➢ Implemented responsive design principles using HTML5 and CSS3,
            ensuring seamless user experiences across desktop, tablet, and
            mobile devices. <br />➢ Utilized media queries and flexbox/grid
            layouts to create adaptive and visually appealing web pages. <br />➢
            Developed interactive and dynamic user interfaces with JavaScript,
            enhancing the overall user engagement on the website. <br />➢
            Proficient in utilizing various built-in methods for strings,
            arrays, and objects in JavaScript (e.g., forEach, filter, slice,
            indexOf, map, reduce). Well-versed in concepts such as closures and
            the &apos;this&apos; keyword. <br />➢ Strong proficiency in
            JavaScript, encompassing DOM manipulation (event bubbling), the
            object model, asynchronous programming, and promises. <br />➢ Gained
            proficiency in ReactJS concepts such as component-based
            architecture, state management, and routing.
            <br />➢ Became familiar with differenet hooks such as useState,
            useEffect, useCallback, useRef, useId etc., <br />➢ Experience in
            working with APIs using fetch, async/await, and the Axios library to
            fetch and display data on the frontend. Proficient in using
            try-catch blocks with async/await and familiar with the use of
            callbacks <br />➢ Implemented AJAX for asynchronous data retrieval,
            optimizing the performance of data-driven web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

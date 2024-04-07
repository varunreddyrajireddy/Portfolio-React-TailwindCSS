import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <section
      className="pt-20 pb-16 mx-auto w-full px-8 bg-zinc-800"
      id="experience"
    >
      <span className=" text-violet-400">
        <SectionTitle text="Professional Experience" />
      </span>
      <div className="">
        <div className="my-4 p-4">
          <div className="flex flex-wrap justify-between">
            <h1 className="font-bold text-2xl font-mono text-amber-400">
              Full Stack Developer,{" "}
              <span className="italic font-normal">Bringwise LLC - </span>
              Frisco, Texas, United States
            </h1>
            <h1 className="font-bold text-2xl font-mono text-amber-400">
              09/2023 - Present
            </h1>
          </div>
          <p className="font-mono text-lg text-justify text-zinc-300 mt-8">
            ➢ Created adaptive user interfaces with React.js, employing hooks
            and functional components to enhance interactivity and
            responsiveness.
            <br /> ➢ Utilized React hooks such as useState, useEffect,
            useContext to manage component state, side effects, and context
            data, improving code readability.
            <br /> ➢ Implemented dynamic routing in the React.js application
            using react-router-dom.
            <br /> ➢ Developed database schemas and models using Mongoose,
            ensuring efficient data organization and optimal performance for
            MongoDB databases.
            <br /> ➢ Utilized MongoDB, MySQL for data storage, retrieval, and
            manipulation.
            <br /> ➢ Utilized MongoDB Atlas for cloud-hosted MongoDB instances,
            managing database clusters and configurations to ensure scalability
            and disaster recovery.
            <br /> ➢ Demonstrated proficiency in hashing and salting techniques
            for enhanced security measures within user authentication and data
            storage processes.
            <br /> ➢ Designed RESTful APIs for seamless communication between
            the frontend and backend systems, ensuring smooth data flow and
            efficient CRUD operations.
            <br /> ➢ Implemented user authentication and authorization
            functionalities using JWT tokens, ensuring secure access to
            sensitive data and endpoints.
            <br /> ➢ Demonstrated familiarity with MVC (Model-View-Controller)
            frameworks, particularly in the context of developing applications
            using the MERN stack.
            <br />
          </p>
        </div>
        <div className="my-4 p-4">
          <div className="flex flex-wrap justify-between">
            <h1 className="font-bold font-mono text-2xl text-amber-400">
              Front End Developer - Capstone Project,{" "}
              <span className="italic font-normal">
                Baylor College of Medicine -{" "}
              </span>
              Houston, Texas, United States
            </h1>
            <h1 className="font-bold font-mono text-2xl text-amber-400">
              01/2023 - 05/2023
            </h1>
          </div>
          <p className="font-mono text-lg text-justify text-zinc-300 mt-8">
            ➢ Created a web app using AngularJS, TypeScript, and Node.js for
            doctors and patients, focusing on gene and genome data for disease
            identification.
            <br /> ➢ Implemented a powerful &quot;Global Search&quot; feature
            with 40 filters for swift gene and variant ID retrieval.
            <br /> ➢ Utilized Angular components for seamless UI navigation
            through complex genetic data.
            <br /> ➢ Ensured uninterrupted app operation with PM2 for robust
            background execution.
            <br /> ➢ Hosted on Amazon EC2 with Nginx for global accessibility.
          </p>
        </div>
        <div className="my-4 p-4">
          <div className="flex flex-wrap justify-between">
            <h1 className="font-bold text-2xl font-mono text-amber-400">
              Full Stack Developer,{" "}
              <span className="italic font-normal">
                Global Tech Hiring Ltd -{" "}
              </span>
              Hyderabad, Telangana, India
            </h1>
            <h1 className="font-bold text-2xl font-mono text-amber-400">
              07/2018 - 05/2021
            </h1>
          </div>
          <p className="font-mono text-lg text-justify text-zinc-300 mt-8">
            ➢ Developed dynamic React.js interfaces with functional components,
            hooks, and state management for interactive user experiences.
            <br /> ➢ Implemented reusable higher-order components (HOCs) and
            React Context API for code modularity and efficient data management.
            <br /> ➢ Designed complex forms with controlled components and
            validation techniques in React.js to ensure data integrity.
            <br /> ➢Integrated react-router-dom for declarative routing within
            SPAs, enhancing UI navigation and flow.
            <br /> ➢ Collaborated with UI/UX designers to ensure responsive
            designs and cross-browser compatibility.
            <br /> ➢ Proficient in JavaScript for DOM manipulation, asynchronous
            programming, and promises.
            <br /> ➢ Implemented data validation with Mongoose schemas and
            optimized database interactions with MongoDB and MySQL in Node.js.
            <br /> ➢ Developed RESTful APIs with Express.js, utilizing
            middleware for scalable and maintainable backend services.
            <br /> ➢ Implemented authentication and authorization middleware
            using JSON Web Tokens (JWT) for secure access control.
            <br /> ➢ Utilized Express.js routers for modular organization of API
            routes, enhancing code readability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

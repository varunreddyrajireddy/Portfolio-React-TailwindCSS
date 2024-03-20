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
          <h1 className="font-bold text-2xl font-mono text-amber-400">
            Full Stack Developer,{" "}
            <span className="italic font-normal">Bringwise LLC</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 09/2023 - Present
          </h1>
          <p className="font-mono text-lg text-justify text-zinc-300 mt-8">
            ➢ Created dynamic and adaptive user interfaces with React.js,
            employing hooks and functional components to enhance interactivity
            and responsiveness.
            <br /> ➢ Designed and implemented complex forms in React.js using
            controlled components, form validation, and error handling
            techniques, ensuring data integrity.
            <br /> ➢ Used React Context API to efficiently manage and share data
            across components avoiding prop drilling.
            <br /> ➢ Utilized MongoDB, MySQL for data storage, retrieval, and
            manipulation.
            <br /> ➢ Implemented dynamic routing in the React.js application’s
            using react-router-dom.
            <br /> ➢ Developed database schemas and models using Mongoose,
            ensuring efficient data organization and optimal performance for
            MongoDB databases.
            <br /> ➢ Utilized MongoDB Atlas for cloud-hosted MongoDB instances,
            managing database clusters and configurations to ensure scalability
            and disaster recovery.
            <br /> ➢ Designed RESTful APIs for seamless communication between
            the frontend and backend systems, ensuring smooth data flow and
            efficient CRUD operations.
            <br /> ➢ Implemented user authentication and authorization
            functionalities using JWT tokens , ensuring secure access to
            sensitive data and endpoints.
            <br /> ➢ Implemented server-side rendering (SSR) , delivering
            dynamic and SEO-friendly web pages with improved performance and
            user experience.
            <br /> ➢ Implemented real-time communication features using Web
            Sockets (e.g., Socket.io), enabling instant messaging and live
            updates within the application.
            <br /> ➢ Integrated Next.js for server-side rendering (SSR) and
            dynamic content generation, improving SEO performance and user
            experience through faster page loads and optimized content delivery.
            <br />➢ Utilized Next.js SSG to pre-render static pages at build
            time, resulting in optimized load times and reduced server load.
            <br /> ➢ Implemented dynamic routes using Next.js file-based
            routing, allowing for dynamic parameterized URLs and flexible page
            rendering.
          </p>
        </div>
        <div className="my-4 p-4">
          <h1 className="font-bold font-mono text-2xl text-amber-400">
            Frontend Developer - Capstone Project,{" "}
            <span className="italic font-normal">
              Baylor College of Medicine
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;01/2023 - 05/2023
          </h1>
          <p className="font-mono text-lg text-justify text-zinc-300 mt-8">
            ➢ Created a web app using AngularJS, TypeScript and Node.JS for
            doctors and patients, which provides information on genes and
            genomes, helping in the identification of individuals with specific
            diseases and detailing their diagnostic journeys. <br />➢ Designed
            and implemented various features, including a Global Search
            functionality, allowing users to search for gene IDs and variant IDs
            with around 40 filters. <br />➢ Utilized Angular components to
            enhance the user interface and overall experience. <br />➢ Hosted
            the web app using Amazon EC2 instance, leveraging Nginx as a server
            with configured server blocks for domain redirection. <br />➢
            Employed Process Manager 2 (PM2) to maintain uninterrupted operation
            of the application in the background.
          </p>
        </div>
        <div className="my-4 p-4">
          <h1 className="font-bold text-2xl font-mono text-amber-400">
            Full Stack Developer,{" "}
            <span className="italic font-normal">Global Tech Hiring Ltd </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;07/2018 - 05/2021
          </h1>
          <p className="font-mono text-lg text-justify text-zinc-300 mt-8">
            ➢ Developed interactive user interfaces using React.js, leveraging
            functional components, hooks, and state management to create dynamic
            front-end experiences.
            <br /> ➢ Implemented reusable higher-order components (HOCs) to
            encapsulate common functionalities and behaviors, promoting code
            reusability and maintainability.
            <br /> ➢ Utilized React hooks such as useState, useEffect,
            useContext to manage component state, side effects, and context
            data, improving code readability.
            <br /> ➢ Designed and implemented complex forms in React.js using
            controlled components, form validation, and error handling
            techniques, ensuring data integrity.
            <br /> ➢ Integrated react-router-dom for declarative routing and
            navigation within single-page applications (SPAs), implementing
            dynamic routing configurations and nested route structures for
            complex UI flows.
            <br /> ➢ Utilized Redux for centralized state management,
            implementing actions, reducers, and selectors to manage
            application-wide data and UI state.
            <br /> ➢ Designed and optimized Redux stores using middleware such
            as redux-thunk to handle asynchronous actions, API calls, and side
            effects.
            <br /> ➢ Implemented AJAX for asynchronous data retrieval also
            familiar with React Query, Axios Http library.
            <br /> ➢ Proficient in JavaScript, encompassing DOM manipulation
            (event bubbling), the object model, asynchronous programming, event
            loop, closures and promises.
            <br /> ➢ Collaborated with UI/UX designers to implement responsive
            designs and ensure cross-browser compatibility, enhancing user
            engagement across various devices.
            <br /> ➢ Utilized Redux Toolkit for state management within the
            React.js application, enhancing scalability and maintainability by
            centralizing application state.
            <br /> ➢ Implemented data validation and schema enforcement using
            Mongoose schemas and validators, ensuring data integrity and
            consistency.
            <br /> ➢ Designed and optimized database interactions in Node.js
            applications, utilizing MongoDB, MySQL for data storage, retrieval,
            and manipulation.
            <br /> ➢ Developed RESTful APIs using Express.js, leveraging
            middleware for request processing, routing, and error handling,
            ensuring scalable and maintainable backend services.
            <br /> ➢ Implemented authentication and authorization middleware in
            Express.js, using JSON Web Tokens (JWT) for secure user
            authentication and access control.
            <br /> ➢ Utilized Express.js routers to organize API routes and
            endpoints into modular and reusable components, facilitating code
            organization and enhancing readability.
            <br /> ➢ Designed custom middleware functions in Express.js to
            handle request validation, and response compression, improving code
            modularity and reusability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

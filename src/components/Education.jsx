import SectionTitle from "./SectionTitle";

const Education = () => {
  return (
    <section
      className="py-20 -mt-4 mx-auto w-full px-8 bg-zinc-800"
      id="education"
    >
      <span className="text-zinc-300">
        <SectionTitle text="Education" />
      </span>
      <p className="text-zinc-300 font-bold text-xl mt-4">
        Master&#39;s in Computer Information Systems,{" "}
        <span className="italic font-normal">
          University of Houston - Clear Lake
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;08/2021 - 08/2023
      </p>
      <p className="text-zinc-300 font-bold text-xl mt-4">
        Bachelor&#39;s in Computer Science,{" "}
        <span className="italic font-normal">
          Bharat Institute of Engineering and Technology
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;08/2015 - 05/2019
      </p>
    </section>
  );
};

export default Education;

import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 w-full fixed">
      <div className="mx-auto w-full px-8 py-2 flex flex-col sm:flex-row sm:gap-x-10 sm:items-center sm:justify-between">
        <h2 className="sm:text-4xl text-2xl font-mono font-bold sm:ml-16 text-amber-400 mb-4 sm:mb-0 text-center py-2 tracking-tighter">
          Varun&#39;s Portfolio
        </h2>
        <div className="flex gap-0 sm:gap-x-5 sm:items-center items-center justify-evenly sm:mr-20">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-xl font-sans font-medium tracking-wide hover:font-bold hover:shadow-inner px-2 rounded-3xl text-amber-400 hover:text-slate-200"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Dropdown from "./Dropdown";
import Logo from "./Logo";
import MiniLogo from "./MiniLogo";

function Navbar() {
  return (
    <nav className="te flex h-[80px] items-center justify-between bg-black px-12 font-sans font-semibold text-white">
      {/* logo section + link */}
      <div className="flex w-[40%] justify-between">
        <div className="flex justify-around">
          <div className="mt-2">
            <Logo />
          </div>
          <div className="ml-2 mt-1 w-[10%]">
            <MiniLogo />
          </div>
        </div>
        <div className="flex w-[70%] justify-around">
          <Dropdown
            text={"WHO WE ARE"}
            dropdown={true}
            links={["About Riot", "Diversity & Inclusion", "Social Impact"]}
          />
          <Dropdown
            text={"WORK WITH US"}
            dropdown={true}
            links={["Jobs", "Offices", "Life At Riot"]}
          />
          <Dropdown text={"NEWS"} dropdown={false} />
        </div>
      </div>
      {/* search + singin section */}
      <div className="flex items-center">
        <div className="px-3">
          <label className="relative block text-gray-400 focus-within:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="pointer-events-none absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              className="rounded-2xl bg-[#333333] p-1 pl-6 text-white outline-none"
              placeholder="SEARCH"
            />
          </label>
        </div>
        <div className="px-3">
          <button className="rounded-2xl bg-[#eb0029] py-[6px] px-4  text-sm text-black">
            SIGN IN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

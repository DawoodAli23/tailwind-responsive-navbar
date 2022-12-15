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
          <Dropdown text={"WHO WE ARE"} dropdown={true} />
          <Dropdown text={"WORK WITH US"} dropdown={true} />
          <Dropdown text={"NEWS"} dropdown={false} />
        </div>
      </div>
      {/* search + singin section */}
      <div>2</div>
    </nav>
  );
}

export default Navbar;

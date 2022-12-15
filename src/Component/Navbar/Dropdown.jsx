const Dropdown = ({ text, dropdown = true }) => {
  return (
    <div className="group">
      <p
        className={` flex cursor-pointer items-center rounded-md ${
          dropdown ? "py-2 pl-3 pr-1" : "mt-1 py-1 px-2"
        }  peer text-[13px] font-semibold tracking-[0.08rem] hover:bg-[#333333]`}
      >
        {text}
        {dropdown ? (
          <span className="material-symbols-outlined  peer text-[20px] text-[#333333] group-hover:text-white">
            arrow_drop_down
          </span>
        ) : (
          <></>
        )}
      </p>
      {dropdown ? (
        <>
          <div
            class="absolute mt-[16px] hidden w-[200px]
            flex-col
            bg-white drop-shadow-lg hover:flex peer-hover:flex"
          >
            <div className="h-2 bg-[#eb0029] "></div>
            <a class="px-5 py-3 text-black" href="#">
              About Us
            </a>
            <a class="px-5 py-3 text-black" href="#">
              Contact Us
            </a>
            <a class="px-5 py-3 text-black" href="#">
              Privacy Policy
            </a>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;

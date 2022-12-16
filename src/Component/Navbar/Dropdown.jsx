const Dropdown = ({ text, links = [], dropdown = true }) => {
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
            className="absolute hidden w-[200px] cursor-pointer
            flex-col border-t-[16px] border-black
            bg-[#292929] pb-2 text-[#c7c7c7] drop-shadow-lg hover:flex peer-hover:flex"
          >
            <div className="h-[4px] bg-[#eb0029] "></div>
            {links.map((link, index) => (
              <a
                key={index}
                class="my-1 mx-3  rounded-md px-5 py-3 text-sm hover:bg-[#333333] hover:text-white"
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;

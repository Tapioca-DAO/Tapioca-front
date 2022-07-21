import { useState } from "react";

const Info = ({ message = "", subMessage = "" }) => {
  const [tipOpen, setTipOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setTipOpen(true)}
        onMouseLeave={() => setTipOpen(false)}
        className="ml-1 flex items-center justify-center outline-none cursor-help hover:text-primary"
        id="headlessui-popover-button-86"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          width="14"
          height="14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      {tipOpen && message ? (
        <div className="absolute z-10 top-5 -right-[114px]">
          <div className="w-[228px] shadow-lg bg-navy-800 rounded-lg border border-navy-100 p-2">
            <div className="flex flex-col gap-2 text-xs text-white font-light">
              <div className="leading-4">{message}</div>
              {subMessage && (
                <div className="leading-4 italic">{subMessage}</div>
              )}
            </div>
          </div>
          <div className="w-2 h-2 z-50"></div>
        </div>
      ) : null}
    </div>
  );
};

export default Info;

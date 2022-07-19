const Toggle = ({ isActive = false, toggle = () => {} }) => (
  <button
    onClick={toggle}
    className="border border-gray-600 flex items-center bg-navy-400/90 relative inline-flex flex-shrink-0 rounded-full cursor-pointer ease-in-out duration-200 toggle-expert-mode-button px-0.5"
    id="headlessui-switch-52"
    role="switch"
    type="button"
    aria-checked="false"
    style={{
      height: "28px",
      width: "57px",
    }}
  >
    <span
      id="toggle-expert-mode-button"
      className={
        isActive
          ? "translate-x-[30px] bg-gradient-to-r from-active-blue to-pink-500 transition-colors transition-transform pointer-events-none p-1 rounded-full shadow-md ease-in-out duration-200 inline-flex items-center justify-center"
          : "translate-x-[2px] bg-gray-600 transition-colors transition-transform pointer-events-none p-1 rounded-full shadow-md ease-in-out duration-200 inline-flex items-center justify-center"
      }
      style={{
        height: "22px",
        width: "22px",
      }}
    >
      {isActive ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="text-navy-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="cursor-pointer"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )}
    </span>
  </button>
);

export default Toggle;

interface Props {
  isExpanded?: boolean;
  expand: () => void;
}

const ExpandArrow = ({ isExpanded = false, expand }: Props) => {
  return (
    <div
      onClick={expand}
      className="flex items-center justify-end flex-grow p-1 rounded cursor-pointer fill-grey-400"
      aria-expanded={isExpanded}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        width="20"
        className={[
          "transition text-grey-200 hover:text-white",
          isExpanded ? "transform rotate-180" : "",
        ].join(" ")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
  );
};

export default ExpandArrow;

interface Props {
  onClick?: () => void;
  className?: string;
}

const Close = ({ onClick, className = "fill-white cursor-pointer" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    className={className}
    onClick={onClick}
  >
    <path d="M7 4a.995.995 0 0 0-.707.293l-2 2a.999.999 0 0 0 0 1.414L11.586 15l-7.293 7.293a.999.999 0 0 0 0 1.414l2 2a.999.999 0 0 0 1.414 0L15 18.414l7.293 7.293a.999.999 0 0 0 1.414 0l2-2a.999.999 0 0 0 0-1.414L18.414 15l7.293-7.293a.999.999 0 0 0 0-1.414l-2-2a.999.999 0 0 0-1.414 0L15 11.586 7.707 4.293A.996.996 0 0 0 7 4z" />
  </svg>
);

export const SmallClose = ({
  onClick,
  className = "w-2.5 h-2.5 fill-white cursor-pointer",
}: Props) => {
  return (
    <svg
      viewBox="0 0 10 10"
      className={className}
      aria-hidden="true"
      onClick={onClick}
    >
      <path
        d="M0 0L10 10M10 0L0 10"
        stroke="currentColor"
        stroke-width="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};
export default Close;

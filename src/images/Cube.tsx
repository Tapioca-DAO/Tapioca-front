import { useState } from "react";

interface Props {
  isActive?: boolean;
  onClick?: () => void;
  activeColorFrom?: string;
  activeColorTo?: string;
}

const Cube = ({ isActive, onClick, activeColorFrom, activeColorTo }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const color = isHovered ? "fill-zinc-200" : "fill-white";

  const activeStyles = isActive
    ? {
        fill: `url(#gradient-${activeColorFrom}-${activeColorTo})`,
      }
    : {};

  return (
    <svg
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-16 md:w-32 h-16 md:h-32 ${onClick ? "cursor-pointer" : ""}`}
      viewBox="0 0 512.132 512.132"
      xmlSpace="preserve"
      onClick={onClick}
    >
      <linearGradient
        id={`gradient-${activeColorFrom}-${activeColorTo}`}
        x2="1"
        y2="1"
      >
        <stop offset="0%" stopColor={activeColorTo} />
        <stop offset="100%" stopColor={activeColorFrom} />
      </linearGradient>

      <path
        className={
          isActive ? (activeColorFrom ? "" : "fill-custom-grey-3") : color
        }
        style={activeStyles}
        d="M254.639 503.599 32.773 392.665V119.599l221.866 110.933z"
        transform="translate(1)"
      />
      <path
        className={
          isActive ? (activeColorFrom ? "" : "fill-custom-grey") : color
        }
        style={activeStyles}
        d="m254.639 503.599 221.867-110.934V119.599L254.639 230.532z"
        transform="translate(1)"
      />
      <path
        className={
          isActive ? (activeColorFrom ? "" : "fill-custom-grey-3") : color
        }
        style={activeStyles}
        d="M32.773 119.599 246.106 8.665l230.4 110.934-221.867 110.933z"
        transform="translate(1)"
      />
      <path d="M255.639 512.132c-1.707 0-2.56 0-3.413-.853L30.359 400.345c-3.413-1.707-5.12-4.267-5.12-7.68V119.599c0-2.56 1.707-5.973 4.267-7.68s5.973-1.707 8.533 0l221.867 110.933c2.56 1.707 5.12 4.267 5.12 7.68v273.067c0 2.56-1.707 5.973-4.267 7.68-1.706 0-3.413.853-5.12.853zM42.306 387.545l204.8 102.4V235.652l-204.8-102.4v254.293z" />
      <path d="M255.639 512.132c-1.707 0-3.413 0-4.267-.853-2.56-1.707-4.267-5.12-4.267-7.68V230.532c0-3.413 1.707-5.973 5.12-7.68l221.867-110.933c2.56-1.707 5.973-.853 8.533 0 2.56 1.707 4.267 4.267 4.267 7.68v273.067c0 3.413-1.707 5.973-5.12 7.68L259.906 511.279c-1.707.853-2.56.853-4.267.853zm8.534-276.48v254.293l204.8-102.4V133.252l-204.8 102.4z" />
      <path d="M255.639 239.065c-1.707 0-2.56 0-3.413-.853L30.359 127.279c-3.413-1.707-5.12-4.267-5.12-7.68s1.707-5.973 4.267-7.68L242.839.985c2.56-.853 5.12-1.707 7.68 0l230.4 110.933c2.56 1.707 5.12 4.267 5.12 7.68s-1.707 5.973-5.12 7.68L259.053 238.212c-.854.853-1.707.853-3.414.853zM52.546 119.599l203.093 101.547 202.24-101.547L247.106 18.052 52.546 119.599z" />
    </svg>
  );
};

export default Cube;

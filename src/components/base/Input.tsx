import React from "react";

const BASE_CLASS = "flex items-center border-4 rounded-xl bg-grey-800 w-full";
const COLOR_STYLES = {
  pink: "border-violet-300",
  purple: "border-purple-300",
  green: "border-green-300",
  blue: "border-blue-300",
};

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  customClasses?: string;
  containerCustomClasses?: string;
  color?: "pink" | "purple" | "green" | "blue";
  label?: string | JSX.Element;
  subLabel?: string | JSX.Element;
  customRightItem?: string | JSX.Element;
  customLeftItem?: string | JSX.Element;
}

const Input = ({
  label,
  subLabel,
  customClasses = "",
  containerCustomClasses = "",
  color = "pink",
  customRightItem,
  customLeftItem,
  type = "text",
  ...htmlAttributes
}: Props) => {
  const inputClassName = [
    customClasses ? customClasses : null,
    BASE_CLASS,
    COLOR_STYLES[color],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerCustomClasses}>
      <div className="flex items-center justify-between pb-1">
        {label && <div>{label}</div>}
        {subLabel && <div className="text-sm text-zinc-400">{subLabel}</div>}
      </div>

      <div className={inputClassName}>
        {customLeftItem}
        <input
          type={type}
          className="w-full bg-transparent focus:outline-none py-1 px-2 md:py-2 text-lg"
          {...htmlAttributes}
        />
        {customRightItem}
      </div>
    </div>
  );
};

export default Input;

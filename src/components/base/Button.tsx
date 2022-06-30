import React from "react";
import LoadingSpinner from "@/components/base/LoadingSpinner";
import { useTranslation } from "react-i18next";

const BUTTON_BASE_CLASS =
  "font-bebas-neue rounded-lg	border-4 text-lg px-4 disabled:border-zinc-500 disabled:text-zinc-500 disabled:cursor-not-allowed";

const BUTTON_COLOR_STYLES = {
  purple: "border-custom-purple",
  green: "border-custom-green",
  blue: "border-custom-blue",
  pink: "border-custom-pink-1",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClasses?: string;
  buttonColor?: "purple" | "green" | "blue" | "pink";
  isLoading?: boolean;
  screenReaderText?: string;
}

const Button = ({
  children,
  customClasses = "",
  buttonColor = "green",
  isLoading = false,
  screenReaderText,
  ...htmlAttributes
}: Props) => {
  const { t } = useTranslation();

  const buttonClassName = [
    customClasses ? customClasses : null,
    BUTTON_BASE_CLASS,
    BUTTON_COLOR_STYLES[buttonColor],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClassName} {...htmlAttributes}>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner xsmall />
          {screenReaderText || t("base.loading")}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

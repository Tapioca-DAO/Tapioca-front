import React from "react";
import LoadingSpinner from "@/components/base/LoadingSpinner";
import { useTranslation } from "react-i18next";

const BUTTON_BASE_CLASS =
  "font-bebas-neue rounded-lg	border-4 px-4 disabled:border-grey-400 disabled:text-grey-400 disabled:cursor-not-allowed";

const BUTTON_COLOR_STYLES = {
  purple: "border-purple-300 hover:border-purple-500/90",
  green: "border-green-300 hover:border-green-500/90",
  blue: "border-blue-300 hover:border-blue-500/90",
  pink: "border-violet-300 hover:border-violet-500/90",
};

const BUTTON_SIZE_STYLES = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  "2xl": "text-2xl",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClasses?: string;
  buttonColor?: "purple" | "green" | "blue" | "pink";
  buttonSize?: "sm" | "md" | "lg" | "2xl";
  isLoading?: boolean;
  screenReaderText?: string;
}

const Button = ({
  children,
  customClasses = "",
  buttonColor = "green",
  buttonSize = "lg",
  isLoading = false,
  screenReaderText,
  ...htmlAttributes
}: Props) => {
  const { t } = useTranslation();

  const buttonClassName = [
    customClasses ? customClasses : null,
    BUTTON_BASE_CLASS,
    BUTTON_COLOR_STYLES[buttonColor],
    BUTTON_SIZE_STYLES[buttonSize],
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

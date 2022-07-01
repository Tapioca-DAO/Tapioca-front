import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { SourceProps } from "react-player/base";
import Close from "@/images/Close";

interface Props {
  video: string | string[] | SourceProps[] | MediaStream;
}

const HelpModal = ({ video }: Props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // if ESC (27) is pressed, we dismiss the dropdown
    const _detectKey = (event: KeyboardEvent) => {
      const key = event.which || event.keyCode;
      if (key === 27) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", _detectKey, false);

    return () => {
      window.removeEventListener("keydown", _detectKey, false);
    };
  });

  const className = [
    "min-h-fit",
    "bg-white",
    "relative",
    "overflow-hidden",
    "rounded",
    "w-4/5 md:w-[64rem] h-[35rem]",
    "shadow",
    "my-10",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <div className="fixed right-6 bottom-6">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center font-bebas-neue bg-purple-300 p-2 px-4 rounded-full"
        >
          {t("base.needHelp")}
        </button>
      </div>

      {isOpen ? (
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(false);
          }}
          className="flex items-center justify-center overflow-auto fixed top-0 left-0 bottom-0 right-0 z-[99999] bg-zinc-900/90"
        >
          <div className={className}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute text-purple-300 right-2 top-2"
            >
              <Close className="fill-purple-300" />
            </button>
            <ReactPlayer
              onEnded={() => setIsOpen(false)}
              url={video}
              width="100%"
              height="100%"
              controls
              playing={true}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HelpModal;

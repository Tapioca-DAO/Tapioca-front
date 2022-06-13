import Close from "@/images/Close";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { SourceProps } from "react-player/base";

interface Props {
  video: string | string[] | SourceProps[] | MediaStream;
}

const HelpModal = ({ video }: Props) => {
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
      <div className="fixed right-6 bottom-6 bg-custom-purple p-2 px-4 rounded-full">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center font-bebas-neue"
        >
          Need Help?
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
              className="absolute text-custom-purple right-2 top-2"
            >
              <Close className="fill-custom-purple" />
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

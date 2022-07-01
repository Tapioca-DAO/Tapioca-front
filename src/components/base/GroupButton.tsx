interface Props {
  selectedOption?: string;
  options: { id: string; children: string | JSX.Element }[];
  size?: string;
  selectItem?: (id: string) => void;
  noBackground?: boolean;
}

const GroupButton = ({
  selectedOption,
  options,
  size,
  selectItem,
  noBackground = false,
}: Props) => (
  <div
    className={`flex items-center border-4 border-green-300 rounded-lg p-0.5 ${
      !noBackground ? "bg-grey-300" : ""
    }`}
  >
    {options.map(({ id, children }) => {
      const className = [
        "flex items-center rounded-lg px-2 font-thin",
        selectedOption === id ? "border-4 border-violet-300 px-1 py-0.5" : "",
        selectedOption === id && !noBackground ? "bg-grey-500" : "",
        size ? `text-${size}` : "",
        selectItem ? "cursor-pointer" : "cursor-default",
      ].join(" ");

      return (
        <button
          key={id}
          onClick={() => {
            if (selectItem) selectItem(id);
          }}
          className={className}
        >
          {children}
        </button>
      );
    })}
  </div>
);

export default GroupButton;

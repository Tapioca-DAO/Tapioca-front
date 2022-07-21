interface Props {
  items: {
    label: string | JSX.Element;
    value: string | JSX.Element;
    hide?: boolean;
  }[];
  results: {
    label: string | JSX.Element;
    value: string | JSX.Element;
    hide?: boolean;
  }[];
}

const LiquidationDisclosure = ({ items, results }: Props) => {
  return (
    <div className="flex flex-col divide-y divide-grey-900">
      <div className="flex flex-col gap-1 pb-2 text-grey-100">
        {items
          .filter(({ hide }) => !hide)
          .map(({ label, value }) => (
            <div className="flex justify-between gap-4">
              <div className="text-xs leading-4 font-medium">{label}</div>
              <div className="text-xs leading-4 font-medium text-right">
                {value}
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col gap-1 pt-2">
        {results
          .filter(({ hide }) => !hide)
          .map(({ label, value }) => (
            <div className="flex justify-between gap-4 text-grey-200/80">
              <div className="text-xs leading-4 font-medium text-secondary">
                {label}
              </div>
              <div className="text-xs leading-4 font-medium text-right text-secondary">
                {value}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LiquidationDisclosure;

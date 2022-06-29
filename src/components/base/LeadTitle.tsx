const TITLE_CLASS =
  "uppercase text-2xl md:text-5xl font-bebas-neue md:leading-10";

const BORDER_CLASS = "border-b-4 border-custom-green";

const SPACE_CLASS = "p-3 md:p-8 md:pb-4";

interface Props {
  title?: string;
  customClasses?: string;
  children?: JSX.Element;
}

const LeadTitle = ({ title = "", customClasses = "", children }: Props) => (
  <div
    className={[TITLE_CLASS, SPACE_CLASS, BORDER_CLASS, customClasses].join(
      " "
    )}
  >
    {title}
    {children}
  </div>
);

export default LeadTitle;

import { Trans } from "react-i18next";

const BorrowTitle = () => (
  <div className="flex md:mt-14 mt-2 text-center border-b-4 border-green-300">
    <div className="px-2 md:text-5xl text-2xl font-bebas-neue mx-1">
      <Trans i18nKey="borrow.borrowAgainstYourTokens">
        <span className="text-green-300" />
        <span className="text-violet-300" />
      </Trans>
    </div>
  </div>
);

export default BorrowTitle;

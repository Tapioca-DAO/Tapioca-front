import { useLocation, Navigate } from "react-router-dom";
import CardLeft from "@/components/borrow/CardLeft";
import CardRight from "@/components/borrow/CardRight";
import BorrowCard from "@/components/borrow/BorrowCard";
import { WalletContext } from "@/providers/WalletContext";
import { useContext, useState } from "react";
import { getQuery } from "@/utils/getQuery";
import { PAIR_LIST } from "@/utils/constants";

const MAIN_QUERY = "main";
const COLLATERAL_QUERY = "collateral";

interface Props {
  main?: string | null;
  collateral?: string | null;
  disabled?: boolean;
}

const BorrowAssets = ({ main, collateral, disabled }: Props) => {
  const location = useLocation();

  const { isConnected, wallet, metamaskNotAvailable } =
    useContext(WalletContext);

  if (!main) {
    main = getQuery(location.search, MAIN_QUERY);
  }

  if (!collateral) {
    collateral = getQuery(location.search, COLLATERAL_QUERY);
  }

  if (!main || !collateral) return <Navigate to="/" />;

  const [collateralAmount, setCollateralAmount] = useState("");
  const [mainAmount, setMainAmount] = useState("");

  const isDisabled =
    disabled || metamaskNotAvailable || !isConnected || !wallet.address;

  const pair = PAIR_LIST.find(
    (item) => item.token === main && item.collateral === collateral
  );

  return (
    <div className="md:flex md:gap-x-4 md:pt-10">
      <CardLeft />
      <BorrowCard
        main={main}
        collateral={collateral}
        isDisabled={isDisabled}
        collateralAmount={collateralAmount}
        mainAmount={mainAmount}
        setCollateralAmount={setCollateralAmount}
        setMainAmount={setMainAmount}
      />
      <CardRight
        pair={pair}
        main={main}
        collateral={collateral}
        collateralAmount={collateralAmount}
        mainAmount={mainAmount}
      />
    </div>
  );
};

export default BorrowAssets;

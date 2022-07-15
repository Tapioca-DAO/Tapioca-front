import { useLocation, Navigate } from "react-router-dom";
import StrategyCard from "@/components/borrow/StrategyCard";
import BorrowCard from "@/components/borrow/BorrowCard";
import { WalletContext } from "@/providers/WalletContext";
import { useContext, useState } from "react";
import { getQuery } from "@/utils/getQuery";
import { BORROW_PAIR_LIST } from "@/utils/constants";

const MAIN_QUERY = "main";
const COLLATERAL_QUERY = "collateral";

interface Props {
  main?: string | null;
  disabled?: boolean;
}

const BorrowAssets = ({ main, collateral }: Props) => {
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
    metamaskNotAvailable ||
    !isConnected ||
    !wallet.address ||
    (main !== "WETH" && collateral !== "USDC");

  const pair = BORROW_PAIR_LIST.find(
    (item) => item.token === main && item.collateral === collateral
  );

  return (
    <div className="my-8 mx-2 md:mx-8 md:flex justify-center gap-4">
      <BorrowCard
        isDisabled={isDisabled}
        main={main}
        collateral={collateral}
        collateralAmount={collateralAmount}
        mainAmount={mainAmount}
        setCollateralAmount={setCollateralAmount}
        setMainAmount={setMainAmount}
      />
      <StrategyCard
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

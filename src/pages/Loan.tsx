import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { WalletContext } from "@/providers/WalletContext";
import Loan from "@/components/loan/Loan";
import ListOfPairs from "@/components/loan/ListOfPairs";
import { getQuery } from "@/utils/getQuery";
import LoadingSpinner from "@/components/LoadingSpinner";

const MAIN_QUERY = "main";
const COLLATERAL_QUERY = "collateral";

const LoadLoan = () => {
  const location = useLocation();
  const main = getQuery(location.search, MAIN_QUERY);
  const collateral = getQuery(location.search, COLLATERAL_QUERY);

  const { isConnected, isConnecting, metamaskNotAvailable, wallet } =
    useContext(WalletContext);

  if (!main || !collateral) return <ListOfPairs />;

  if (isConnecting)
    return (
      <div className="flex justify-center mt-20">
        <LoadingSpinner />
      </div>
    );

  return (
    <Loan
      main={main}
      collateral={collateral}
      isDisabled={!isConnected || metamaskNotAvailable || !wallet}
    />
  );
};

export default LoadLoan;

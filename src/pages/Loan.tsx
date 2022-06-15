import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { WalletContext } from "@/providers/WalletContext";
import Loan from "@/components/loan/Loan";
import ListOfPairs from "@/components/loan/ListOfPairs";
import { getQuery } from "@/utils/getQuery";

const MAIN_QUERY = "main";
const COLLATERAL_QUERY = "collateral";

const LoadLoan = () => {
  const location = useLocation();
  const main = getQuery(location.search, MAIN_QUERY);
  const collateral = getQuery(location.search, COLLATERAL_QUERY);

  const { isConnected, isConnecting, metamaskNotAvailable, wallet } =
    useContext(WalletContext);

  if (!main || !collateral) {
    return <ListOfPairs />;
  }

  if (metamaskNotAvailable) {
    return <div className="text-center mt-10">Metamask not installed.</div>;
  }

  if (isConnecting) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!isConnected || !wallet.address) {
    return <div className="text-center mt-10">Connect your wallet</div>;
  }

  return <Loan main={main} collateral={collateral} />;
};

export default LoadLoan;

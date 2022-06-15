import LoanCard from "@/components/LoanCard";
import { loanHooks } from "@/utils/loanHooks";

interface Props {
  main: string;
  collateral: string;
}

const Loan = ({ main, collateral }: Props) => {
  const useContract = loanHooks();

  const {
    wethBalance,
    wethDeposited,
    isLoadingWeth,
    isMintingWeth,
    isWethApproved,
    isWethApproving,
    mintWETH,
    approveWeth,
    usdcBalance,
    depositedCollateral,
    isMintingUsdc,
    isLoadingUsdc,
    isUsdcApproved,
    isUsdcApproving,
    mintUSDC,
    approveUsdc,
    depositAsset,
    lendAsset,
  } = useContract();

  return (
    <div className="md:m-8 my-4 mx-3 flex flex-col md:flex-row justify-center">
      <LoanCard
        selectedAsset={main}
        deposited={wethDeposited}
        onDeposit={depositAsset}
        onApprove={approveWeth}
        assetBalance={wethBalance}
        isApproved={isWethApproved}
        isApproving={isWethApproving}
        isDepositDisabled={isLoadingWeth || !isUsdcApproved || !isWethApproved}
        mint={mintWETH}
        isMinting={isMintingWeth}
      ></LoanCard>

      <LoanCard
        selectedAsset={collateral}
        isCollateral
        deposited={depositedCollateral}
        onDeposit={lendAsset}
        onApprove={approveUsdc}
        assetBalance={usdcBalance}
        isApproved={isUsdcApproved}
        isApproving={isUsdcApproving}
        isDepositDisabled={isLoadingUsdc || !isUsdcApproved || !isWethApproved}
        mint={mintUSDC}
        isMinting={isMintingUsdc}
      ></LoanCard>
    </div>
  );
};

export default Loan;

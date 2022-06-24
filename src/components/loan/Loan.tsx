import LoanCard from "@/components/LoanCard";
import { loanHooks } from "@/utils/loanHooks";
import { PAIR_LIST } from "@/utils/constants";
import formatter from "@/utils/dolarFormater";

interface Props {
  main: string;
  collateral: string;
  isDisabled: boolean;
}

const Loan = ({ main, collateral, isDisabled }: Props) => {
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

  const pair = PAIR_LIST.find(
    (item) => item.token === main && item.collateral === collateral
  );

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
        isDisabled={isDisabled}
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
        isDisabled={isDisabled}
      ></LoanCard>

      <div className="rounded-lg border-2 border-custom-blue bg-custom-grey-4 p-4 basis-1/5">
        <div className="font-bebas-neue text-2xl text-center pb-2">Market</div>

        <div className="flex justify-between pt-2 text-sm">
          <div>Price</div>
          <div className="text-zinc-400">
            {formatter.format(pair?.tokenPrice || 0)}
          </div>
        </div>

        <div className="flex justify-between pt-2 text-sm">
          <div>APR</div>
          <div className="text-zinc-400">{pair?.apr}%</div>
        </div>

        <div className="flex justify-between pt-2 text-sm">
          <div>LTV</div>
          <div className="text-zinc-400">{pair?.ltv}%</div>
        </div>

        <div className="flex justify-between pt-2 text-sm">
          <div>Strategy</div>
          <div className="text-zinc-400">{pair?.strategy}</div>
        </div>

        <div className="flex justify-between pt-2 text-sm">
          <div>Oracle</div>
          <div className="text-zinc-400">{pair?.oracle}</div>
        </div>
      </div>
    </div>
  );
};

export default Loan;

import { useTranslation } from "react-i18next";
import LoanCard from "@/components/loan/LoanCard";
import LeadTitle from "@/components/base/LeadTitle";
import { loanHooks } from "@/utils/loanHooks";
import { PAIR_LIST } from "@/utils/constants";
import formatter from "@/utils/dolarFormater";
import Bubbles from "@/images/Bubbles";
import GetToken from "@/images/GetToken";

interface Props {
  main: string;
  collateral: string;
  isDisabled: boolean;
}

const Loan = ({ main, collateral, isDisabled }: Props) => {
  const { t } = useTranslation();
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
    <div className="md:m-8 md:flex justify-center">
      <div className="w-full md:basis-3/4 md:bg-custom-grey-4/50 rounded-[30px] mr-4">
        <LeadTitle
          title={t("loan.loan", { main })}
          customClasses="flex items-center justify-between"
        >
          <div className="flex items-center">
            <GetToken
              token={main}
              isSelected
              className="w-8 md:w-10 h-8 md:h-10 z-0 -mr-3"
            />
            <GetToken
              token={collateral}
              isSelected
              className="w-8 md:w-10 h-8 md:h-10 z-100"
            />
          </div>
        </LeadTitle>

        <div className="p-3 md:px-4 md:py-10 flex flex-col md:flex-row justify-center gap-2 md:gap-4">
          <LoanCard
            selectedAsset={main}
            deposited={wethDeposited}
            onDeposit={depositAsset}
            onApprove={approveWeth}
            assetBalance={wethBalance}
            isApproved={isWethApproved}
            isApproving={isWethApproving}
            isDepositDisabled={
              isLoadingWeth || !isUsdcApproved || !isWethApproved
            }
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
            isDepositDisabled={
              isLoadingUsdc || !isUsdcApproved || !isWethApproved
            }
            mint={mintUSDC}
            isMinting={isMintingUsdc}
            isDisabled={isDisabled}
          ></LoanCard>
        </div>
      </div>

      <div className="basis-1/4 md:bg-custom-grey-4/50 md:rounded-[30px] flex flex-col justify-between">
        <div>
          <LeadTitle title={t("loan.market")} />

          <div className="p-3 md:px-8">
            <div className="flex justify-between pt-2 text-sm">
              <div>{t("loan.price", { main })}</div>
              <div className="text-zinc-400">
                {formatter.format(pair?.tokenPrice || 0)}
              </div>
            </div>

            <div className="flex justify-between pt-2 text-sm">
              <div>{t("loan.apr")}</div>
              <div className="text-zinc-400">{pair?.apr}%</div>
            </div>

            <div className="flex justify-between pt-2 text-sm">
              <div>{t("loan.ltv")}</div>
              <div className="text-zinc-400">{pair?.ltv}%</div>
            </div>

            <div className="flex justify-between pt-2 text-sm">
              <div>{t("loan.strategy")}</div>
              <div className="text-zinc-400">{pair?.strategy}</div>
            </div>

            <div className="flex justify-between pt-2 text-sm">
              <div>{t("loan.oracle")}</div>
              <div className="text-zinc-400">{pair?.oracle}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Bubbles className="w-40" />
        </div>
      </div>
    </div>
  );
};

export default Loan;

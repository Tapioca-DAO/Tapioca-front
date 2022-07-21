import { useTranslation } from "react-i18next";
import { borrowHooks } from "@/utils/borrowHooks";
import { formatterWithDecimal } from "@/utils/dolarFormater";
import LoadingSpinner from "@/components/base/LoadingSpinner";
import LiquidationPrice from "@/components/borrow/LiquidationPrice";
import LevaragePosition from "@/components/borrow/LevaragePosition";
import BorrowCardAsset from "@/components/borrow/BorrowCardAsset";

interface Props {
  isDisabled: boolean;
  main: string;
  collateral: string;
  collateralAmount: string;
  mainAmount: string;
  setCollateralAmount: (amount: string) => void;
  setMainAmount: (amount: string) => void;
  collateralPrice?: number;
  liquidation: number;
  apr: number;
  oracle?: string;
  strategy?: string;
  ltv: number;
  health?: number;
}

const BorrowCard = ({
  main,
  collateral,
  collateralAmount,
  mainAmount,
  setCollateralAmount,
  setMainAmount,
  isDisabled,
  collateralPrice,
  liquidation,
  apr,
  ltv,
  oracle,
  strategy,
  health = 0,
}: Props) => {
  const { t } = useTranslation();
  const useContract = borrowHooks();

  const {
    inProgress,
    assetBalance,
    borrow,
    status,
    isApproved,
    isApproving,
    approve,
  } = useContract();

  const liquidationPrice =
    !collateralAmount || !mainAmount
      ? t("borrow.borrowAssets.none")
      : `1 ${collateral} = ${(
          (liquidation * parseFloat(mainAmount)) /
          parseFloat(collateralAmount)
        ).toFixed(3)} ${main}`;

  const positionHealth =
    !collateralAmount || !mainAmount
      ? "0"
      : (
          (health * parseFloat(mainAmount)) /
          parseFloat(collateralAmount)
        ).toFixed(5);

  return (
    <div className="w-full md:bg-navy-300 rounded-[30px] p-4">
      <div className="text-3xl bg-navy-400 rounded-[30px] text-center mb-20 py-1">
        {t("borrow.borrow")}
      </div>

      <BorrowCardAsset
        isCollateral
        value={collateralAmount}
        balance={assetBalance}
        updateValue={(amount: string) => setCollateralAmount(amount)}
        token={collateral}
        disabled={inProgress}
        price={formatterWithDecimal.format(collateralPrice || 0)}
      />

      <BorrowCardAsset
        value={mainAmount}
        updateValue={(amount: string) => setMainAmount(amount)}
        token={main}
        disabled={inProgress}
      />

      <div className="mx-5 flex flex-col gap-2">
        {collateralAmount ? (
          <LevaragePosition
            liquidationPrice={liquidationPrice}
            liquidation={liquidation}
            collateralAmount={collateralAmount}
          />
        ) : null}

        <LiquidationPrice
          liquidationPrice={liquidationPrice}
          apr={apr}
          ltv={ltv}
          oracle={oracle}
          strategy={strategy}
          collateralAmount={collateralAmount}
          mainAmount={mainAmount}
          main={main}
          collateral={collateral}
          positionHealth={positionHealth}
        />
      </div>

      <div className="md:px-8 px-4">
        <button
          onClick={approve}
          className="w-full text-lg mt-8 bg-active-blue hover:bg-active-blue/90 disabled:pointer-events-none disabled:opacity-40 rounded-[14px] h-[52px]"
          disabled={isDisabled || isApproved || isApproving}
        >
          {isApproving ? (
            <div className="flex justify-center items-center font-bold">
              <LoadingSpinner xsmall customColor="fill-white" />
              Approving
            </div>
          ) : (
            <span>
              <span className="font-bold">{t("borrow.approve")}</span> Moonbar
            </span>
          )}
        </button>

        <button
          onClick={() =>
            borrow({
              collateralAmount: parseFloat(collateralAmount) || 0,
              borrowAmount: parseFloat(mainAmount) || 0,
            })
          }
          className="w-full text-lg mt-2 bg-gradient-to-r from-active-blue to-pink-500 hover:bg-active-blue/90 disabled:pointer-events-none disabled:opacity-40 rounded-[14px] h-[52px]"
          disabled={
            isDisabled ||
            !isApproved ||
            !mainAmount ||
            !collateralAmount ||
            inProgress
          }
        >
          {inProgress ? (
            <div className="flex justify-center items-center font-bold">
              <LoadingSpinner xsmall customColor="fill-white" />
              {status.toLocaleLowerCase() || "Loading"}
            </div>
          ) : (
            "Deposit and Borrow"
          )}
        </button>
      </div>
    </div>
  );
};

export default BorrowCard;

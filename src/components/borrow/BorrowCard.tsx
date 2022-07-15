import { useTranslation } from "react-i18next";
import GetToken from "@/images/GetToken";
import MaxButton from "@/images/Max-button.png";
import { borrowHooks } from "@/utils/borrowHooks";
import LoadingSpinner from "@/components/base/LoadingSpinner";
import { formatterWithDecimal } from "@/utils/dolarFormater";

interface Props {
  isDisabled: boolean;
  main: string;
  collateral: string;
  collateralAmount: string;
  mainAmount: string;
  setCollateralAmount: (amount: string) => void;
  setMainAmount: (amount: string) => void;
  collateralPrice?: number;
}

interface ItemProps {
  value: string;
  balance?: string;
  updateValue: (val: string) => void;
  token: string;
  disabled: boolean;
  price?: string;
  isCollateral?: boolean;
}

const BorrowItem = ({
  value,
  balance,
  updateValue,
  token,
  disabled,
  price,
  isCollateral = false,
}: ItemProps) => (
  <div className="bg-navy-400 border border-grey-600 mx-4 my-2 p-4 rounded-[14px]">
    <div className="flex items-center">
      <GetToken token={token} isSelected className="w-8 h-8" />
      <div className="font-bold text-lg ml-1">
        {isCollateral ? "Deposit" : "Borrow"} {token}
      </div>
    </div>

    <div className="flex justify-between items-center px-1 mt-4 gap-6">
      <div className="text-2xl leading-7 tracking-[-0.01em] font-bold relative flex items-baseline flex-grow overflow-hidden">
        <div className="flex w-full">
          <input
            id="input-deposit-balance"
            title="Token Amount"
            type="text"
            pattern="^[0-9]*[.,]?[0-9]*$"
            placeholder="0.00"
            min="0"
            className="relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary leading-[36px] focus:placeholder:text-low-emphesis flex-grow w-full text-left bg-transparent text-inherit disabled:cursor-not-allowed"
            value={value}
            onChange={(e) => updateValue(e.target.value)}
            disabled={disabled}
          />

          {balance && (
            <button
              onClick={() => updateValue(balance)}
              disabled={disabled}
              className="bg-navy-400 z-10"
            >
              <img src={MaxButton} />
            </button>
          )}
        </div>

        {price && (
          <span
            className="text-xs leading-4 font-medium text-grey-300 absolute bottom-2 pointer-events-none"
            style={{
              left: !value ? "55px" : `${value.length * 15}px`,
            }}
          >
            ~{price}
          </span>
        )}
      </div>
      {balance && (
        <button
          className="text-sm text-grey-200 hover:text-white"
          onClick={() => updateValue(balance)}
        >
          Balance: {balance}
        </button>
      )}
    </div>
  </div>
);

const BorrowCard = ({
  main,
  collateral,
  collateralAmount,
  mainAmount,
  setCollateralAmount,
  setMainAmount,
  isDisabled,
  collateralPrice,
}: Props) => {
  const { t } = useTranslation();
  const useContract = borrowHooks();

  const { inProgress, assetBalance, borrow, status } = useContract();

  return (
    <div className="w-full md:bg-navy-300 rounded-[30px] p-4">
      <div className="text-4xl bg-navy-400 rounded-[30px] text-center mb-20">
        {t("borrow.borrow")}
      </div>

      <BorrowItem
        isCollateral
        value={collateralAmount}
        balance={assetBalance}
        updateValue={(amount: string) => setCollateralAmount(amount)}
        token={collateral}
        disabled={inProgress}
        price={formatterWithDecimal.format(collateralPrice || 0)}
      />

      <BorrowItem
        value={mainAmount}
        updateValue={(amount: string) => setMainAmount(amount)}
        token={main}
        disabled={inProgress}
      />

      <div className="mx-5 flex flex-col gap-2">
        <div className="shadow-inner flex p-4 rounded-[14px] border border-grey-600">
          <div className="text-xs leading-4 font-bold text-grey-100">
            Levarage position
          </div>
        </div>

        <div className="shadow-inner flex p-4 rounded-[14px] border border-grey-600">
          <div className="text-xs leading-4 font-bold text-grey-100">
            Liquidation price
          </div>
        </div>
      </div>

      <div className="md:px-8 px-4">
        {/* <button
          onClick={() =>
            borrow({
              collateralAmount: collateralAmount
                ? parseFloat(collateralAmount)
                : 0,
              borrowAmount: mainAmount ? parseFloat(mainAmount) : 0,
            })
          }
          className="w-full text-lg mt-8 bg-active-blue hover:bg-active-blue/90 disabled:pointer-events-none disabled:opacity-40 rounded-[14px] h-[52px]"
          disabled={
            isDisabled || !mainAmount || !collateralAmount || inProgress
          }
        >
          {inProgress ? (
            <div className="flex justify-center items-center font-bold">
              <LoadingSpinner xsmall customColor="fill-white" />
              {status.toLocaleLowerCase() || "Loading"}
            </div>
          ) : (
            <span>
              <span className="font-bold">{t("borrow.approve")}</span> Moonbar
            </span>
          )}
        </button> */}

        {/* active:to-black/40 disabled:pointer-events-none disabled:opacity-40 !bg-gradient-to-r  hover:from-blue/80 hover:to-pink-600/80 focus:from-blue/80 focus:to-pink-600/80 active:from-blue/70 active:to-pink-600/70 focus:border-blue-700 rounded px-4 h-[52px] font-bold flex items-center justify-center gap-1 */}

        <button
          onClick={() =>
            borrow({
              collateralAmount: collateralAmount
                ? parseFloat(collateralAmount)
                : 0,
              borrowAmount: mainAmount ? parseFloat(mainAmount) : 0,
            })
          }
          className="w-full text-lg mt-8 bg-gradient-to-r from-active-blue to-pink-500 hover:bg-active-blue/90 disabled:pointer-events-none disabled:opacity-40 rounded-[14px] h-[52px]"
          disabled={
            isDisabled || !mainAmount || !collateralAmount || inProgress
          }
        >
          {inProgress ? (
            <div className="flex justify-center items-center font-bold">
              <LoadingSpinner xsmall customColor="fill-white" />
              {status.toLocaleLowerCase() || "Loading"}
            </div>
          ) : (
            <span className="font-bold">Approve, Deposit and Borrow</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default BorrowCard;

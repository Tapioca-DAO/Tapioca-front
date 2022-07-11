import { useState } from "react";
import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import MaxButton from "@/images/Max-button.png";
import { useTranslation } from "react-i18next";

interface Props {
  selectedAsset?: string;
  isCollateral?: boolean;
  deposited: string;
  onDeposit: ({ amount }: { amount: number }) => void;
  onApprove: () => void;
  assetBalance?: string;
  children?: React.ReactNode;
  isApproved?: boolean;
  isApproving?: boolean;
  isDepositDisabled?: boolean;
  mint: () => void;
  isMinting: boolean;
  isDisabled: boolean;
}

const LoanCard = ({
  selectedAsset,
  isCollateral = false,
  deposited,
  onDeposit,
  onApprove,
  assetBalance,
  isApproved = false,
  isApproving,
  isDepositDisabled = true,
  mint,
  isMinting,
  isDisabled,
}: Props) => {
  const { t } = useTranslation();

  const [amount, setAmount] = useState("");

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="font-bebas-neue text-2xl">
          {t(isCollateral ? "loan.collateral" : "loan.asset")}:
          <span className="text-violet-300"> {selectedAsset}</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            buttonSize="sm"
            disabled={isDisabled || isApproving || isApproved}
            isLoading={isApproving}
            onClick={onApprove}
          >
            {t(isApproved ? "loan.approved" : "loan.approve")}
          </Button>

          <Button
            buttonSize="sm"
            onClick={mint}
            isLoading={isMinting}
            disabled={isDisabled || isMinting}
          >
            {t("loan.mint")}
          </Button>
        </div>
      </div>

      <div className="mt-4 flex w-full justify-between items-end gap-2 md:gap-4">
        <Input
          inputSize="sm"
          containerCustomClasses="w-full"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="0.0"
          customRightItem={
            <button onClick={() => setAmount(assetBalance || "0")}>
              <img src={MaxButton} />
            </button>
          }
          label={t("loan.deposited", {
            amount: deposited || 0,
            asset: selectedAsset,
          })}
          subLabel={t("loan.balance", {
            amount: assetBalance || 0,
          })}
        />

        <div className="w-28">
          <Button
            customClasses="w-full"
            buttonSize="lg"
            disabled={isDisabled || isDepositDisabled}
            onClick={() =>
              onDeposit({ amount: amount ? parseFloat(amount) : 0 })
            }
            buttonColor="blue"
          >
            {t(isCollateral ? "loan.lend" : "loan.deposit")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoanCard;

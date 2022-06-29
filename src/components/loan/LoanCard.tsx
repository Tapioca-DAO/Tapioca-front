import { useState } from "react";
import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import MaxButton from "@/images/Max-button.png";

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
  const [amount, setAmount] = useState("");

  return (
    <div className="w-full p-4 bg-custom-grey-3 rounded-[20px] border-2 hover:border-custom-purple border-zinc-700">
      <div className="flex justify-between items-center w-full">
        <div className="font-bebas-neue text-2xl">
          {isCollateral ? "Collateral" : "Asset"}:{" "}
          <span className="text-custom-pink-1">{selectedAsset}</span>
        </div>

        <div className="flex items-center">
          <Button
            disabled={isDisabled || isApproving || isApproved}
            isLoading={isApproving}
            onClick={onApprove}
          >
            {isApproved ? "Approved" : "Approve"}
          </Button>

          <Button
            customClasses="ml-2"
            onClick={mint}
            isLoading={isMinting}
            disabled={isDisabled || isMinting}
          >
            Mint
          </Button>
        </div>
      </div>

      <div className="my-10">
        <Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="0.0"
          customRightItem={
            <button onClick={() => setAmount(assetBalance || "0")}>
              <img src={MaxButton} />
            </button>
          }
          label={`Deposited: ${deposited || 0} ${selectedAsset}`}
          subLabel={`Balance: ${assetBalance || 0}`}
        />
      </div>

      <Button
        customClasses="w-full"
        disabled={isDisabled || isDepositDisabled}
        onClick={() => onDeposit({ amount: amount ? parseFloat(amount) : 0 })}
        buttonColor="blue"
      >
        {isCollateral ? "Lend" : "Deposit"}
      </Button>
    </div>
  );
};

export default LoanCard;

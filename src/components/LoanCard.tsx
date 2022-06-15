import { useState } from "react";
import Button from "@/components/Button";

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
}

const LoanCard = ({
  selectedAsset,
  isCollateral = false,
  deposited,
  onDeposit,
  onApprove,
  assetBalance,
  children,
  isApproved = false,
  isApproving,
  isDepositDisabled = true,
  mint,
  isMinting,
}: Props) => {
  const [amount, setAmount] = useState("");

  return (
    <div className="flex flex-col md:basis-1/2 mx-4">
      <div className="flex justify-between items-center w-full mb-2">
        <div className="font-bebas-neue text-2xl">
          {isCollateral ? "Collateral" : "Asset"}:{" "}
          <span className="text-custom-pink-1">{selectedAsset}</span>
        </div>

        <Button onClick={mint} isLoading={isMinting} disabled={isMinting}>
          Mint {selectedAsset}
        </Button>
      </div>
      <div className="rounded-lg border-2 border-custom-blue bg-custom-grey-4 p-4">
        <div className="flex items-center justify-between mb-8">
          <div>{isApproved ? "Approved" : "Approve"} BeachBar</div>
          <Button
            disabled={isApproving || isApproved}
            isLoading={isApproving}
            onClick={onApprove}
          >
            Approve {selectedAsset}
          </Button>
        </div>

        <div className="flex justify-between items-center font-bebas-neue">
          <div className="text-lg">Amount Deposited:</div>
          <span className="text-2xl text-custom-pink-2">
            {deposited} {selectedAsset}
          </span>
        </div>

        <div className="flex justify-between items-center font-bebas-neue">
          <div className="text-lg">In Wallet:</div>
          <span className="text-2xl text-custom-purple">{assetBalance}</span>
        </div>

        <div className="flex justify-between items-center mt-6">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="0.0"
            className="bg-transparent border-b-2 border-custom-green p-1"
          />
          <Button
            disabled={isDepositDisabled}
            onClick={() =>
              onDeposit({ amount: amount ? parseFloat(amount) : 0 })
            }
            buttonColor="blue"
          >
            {isCollateral ? "Lend" : "Deposit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;

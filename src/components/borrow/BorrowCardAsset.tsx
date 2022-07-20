import MaxButton from "@/images/Max-button.png";
import GetToken from "@/images/GetToken";

interface Props {
  value: string;
  balance?: string;
  updateValue: (val: string) => void;
  token: string;
  disabled: boolean;
  price?: string;
  isCollateral?: boolean;
}

const BorrowCardAsset = ({
  value,
  balance,
  updateValue,
  token,
  disabled,
  price,
  isCollateral = false,
}: Props) => (
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

export default BorrowCardAsset;

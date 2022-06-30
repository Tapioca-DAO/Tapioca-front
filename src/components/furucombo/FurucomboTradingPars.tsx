import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import uuid from "uuid";
import { ComboList, OutputEstimateProps } from "@/pages/Flashloans";
import SelectDropdown from "@/components/base/SelectDropdown";
import FurucomboTokenImage from "./FurucomboTokenImage";

interface Props {
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
  inputOptions?: OutputEstimateProps[];
}

const FurucomboTradingPars = ({
  currentSelection,
  setCardCube,
  inputOptions,
}: Props) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState<number>();
  const [selectedOption, setSelectedOption] = useState(
    inputOptions?.[0]?.token
  );

  const currentOptions = useMemo(() => {
    const opts = inputOptions?.find(({ token }) => token === selectedOption);
    if (!opts) return [];
    return Object.keys(opts).reduce((acc: OutputEstimateProps[], op) => {
      if (op !== "token") {
        const swapAmount = opts[op];
        const swapValue = typeof swapAmount === "number" ? swapAmount : 0;
        const total = swapValue * (amount || 0);

        acc.push({
          token: op,
          swapValue,
          total: parseFloat(total.toFixed(5)),
          amount: total,
        });
      }
      return acc;
    }, []);
  }, [inputOptions, selectedOption, amount]);

  return (
    <div>
      <div className="my-1 px-5">
        <div>
          <div className="text-custom-grey-1">{t("flashloans.input")}</div>
          <div className="flex justify-between">
            <SelectDropdown
              selectedOption={selectedOption}
              options={inputOptions?.map((op) => op.token)}
              selectOption={(op: string) => {
                setSelectedOption(op);
                setAmount(undefined);
              }}
            />
            <input
              className="bg-transparent border-b py-2 text-right"
              placeholder="Amount"
              type="number"
              value={amount || ""}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="text-custom-grey-1">
            {t("flashloans.outputEstimate")}
          </div>
          {currentOptions.map(({ token, total }) => (
            <div className="flex items-center justify-between mt-3" key={token}>
              <div className="flex items-center">
                <FurucomboTokenImage token={token} />
                <div className="ml-2">{token}</div>
              </div>
              <div className="text-lg">{total}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        disabled={!selectedOption || !amount}
        onClick={() =>
          setCardCube({
            id: uuid.v4(),
            crn: currentSelection,
            token: selectedOption,
            amount,
            inputOptions: currentOptions,
          })
        }
        className="mt-2 w-full text-center bg-custom-grey-1 p-2 rounded-b disabled:text-zinc-400 disabled:bg-custom-grey-2"
      >
        {t("flashloans.set")}
      </button>
    </div>
  );
};

export default FurucomboTradingPars;

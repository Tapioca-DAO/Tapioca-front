import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import uuid from "uuid";
import { ComboList } from "@/pages/Flashloans";
import SelectDropdown from "@/components/base/SelectDropdown";

interface Props {
  tokens?: string[];
  setCardCube: (props: ComboList) => void;
  network?: string;
  currentSelection: string;
}

const FurucomboBridge = ({
  network,
  tokens,
  setCardCube,
  currentSelection,
}: Props) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(tokens?.[0]);
  const [amount, setAmount] = useState<number>();

  return (
    <div>
      <div className="mt-1 px-2">
        <div className="px-3">
          <div className="text-grey-200 mt-4">{t("flashloans.input")}</div>
          <div className="flex justify-between">
            <SelectDropdown
              selectedOption={selectedOption}
              options={tokens}
              selectOption={(op: string) => setSelectedOption(op)}
            />
            <input
              className="bg-transparent border-b py-2 text-right"
              placeholder="Amount"
              type="number"
              value={amount || ""}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>

          <div className="text-grey-200 mt-4">
            {t("flashloans.network")}
          </div>
          <div className="flex justify-between">{network}</div>
        </div>
      </div>

      <button
        disabled={!amount || !selectedOption}
        onClick={() =>
          setCardCube({
            id: uuid.v4(),
            crn: currentSelection,
            amount,
            token: selectedOption,
            network,
          })
        }
        className="mt-2 w-full text-center bg-grey-600 p-2 rounded-b disabled:text-zinc-600 disabled:bg-grey-800"
      >
        {t("flashloans.set")}
      </button>
    </div>
  );
};

export default FurucomboBridge;

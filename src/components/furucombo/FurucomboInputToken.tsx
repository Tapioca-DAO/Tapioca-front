import { useState } from "react";
import { useTranslation } from "react-i18next";
import uuid from "uuid";
import { ComboList } from "@/pages/Flashloans";
import SelectDropdown from "@/components/base/SelectDropdown";

interface Props {
  tokens?: string[];
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
}

const FurucomboInputToken = ({
  currentSelection,
  tokens,
  setCardCube,
}: Props) => {
  const { t } = useTranslation();

  const [amount, setAmount] = useState<number>();
  const [selectedOption, setSelectedOption] = useState(tokens?.[0]);

  return (
    <div>
      <div className="my-1 px-5">
        <div className="text-custom-grey-1">{t("flashloans.input")}</div>
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
      </div>

      <button
        disabled={!amount || !selectedOption}
        onClick={() =>
          setCardCube({
            id: uuid.v4(),
            crn: currentSelection,
            amount,
            token: selectedOption,
          })
        }
        className="mt-2 w-full text-center bg-custom-grey-1 p-2 rounded-b disabled:text-zinc-400 disabled:bg-custom-grey-2"
      >
        {t("flashloans.set")}
      </button>
    </div>
  );
};

export default FurucomboInputToken;

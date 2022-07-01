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

const FurucomboOutputToken = ({
  currentSelection,
  tokens,
  setCardCube,
}: Props) => {
  const { t } = useTranslation();

  const [amount, setAmount] = useState<number>();
  const [selectedOption, setSelectedOption] = useState(tokens?.[0]);

  return (
    <div>
      <div className="mt-1 px-2">
        <div className="px-3">
          <div className="text-grey-200">{t("flashloans.output")}</div>
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
          {currentSelection === "furucombo:unstake_token" ? (
            <div className="pt-3">
              <div className="flex justify-between">
                <p className="text-xs text-zinc-400">
                  {t("flashloans.combo.currentlyStaked")}
                </p>
                <p className="text-sm">
                  0 <span className="text-zinc-400">{selectedOption}</span>
                </p>
              </div>

              <div className="flex justify-between pt-1">
                <p className="text-xs text-zinc-400">
                  {t("flashloans.combo.rewardsAvailable")}
                </p>
                <p className="text-sm">
                  0 <span className="text-zinc-400">{selectedOption}</span>
                </p>
              </div>
            </div>
          ) : null}

          {currentSelection === "aavev2:borrow" ? (
            <div className="pt-3">
              <div className="flex justify-between">
                <p className="text-xs text-zinc-400">
                  {t("flashloans.combo.borrowAPY")}
                </p>
                <p className="text-sm">0%</p>
              </div>

              <div className="flex justify-between pt-1">
                <p className="text-xs text-zinc-400">
                  {t("flashloans.combo.totalDebt")}
                </p>
                <p className="text-sm">$0</p>
              </div>

              <div className="flex justify-between pt-1">
                <p className="text-xs text-zinc-400">
                  {t("flashloans.combo.totalCollateral")}
                </p>
                <p className="text-sm">$0</p>
              </div>

              <div className="flex justify-between pt-1">
                <p className="text-xs text-zinc-400">
                  {t("flashloans.combo.utilization")}
                </p>
                <p className="text-sm">0%</p>
              </div>
            </div>
          ) : null}

          {currentSelection === "aavev2:flashloan" ? (
            <p className="text-xs text-zinc-400 pt-3">
              {t("flashloans.combo.fee", { amount: 0.09 })}
            </p>
          ) : null}
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
        className="mt-2 w-full text-center bg-grey-600 p-2 rounded-b disabled:text-zinc-600 disabled:bg-grey-800"
      >
        {t("flashloans.set")}
      </button>
    </div>
  );
};

export default FurucomboOutputToken;

import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import uuid from "uuid";
import { ComboList } from "@/pages/Flashloans";
import SelectDropdown from "@/components/base/SelectDropdown";

interface Props {
  tokens?: string[];
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
}

const FurucomboAddress = ({ tokens, setCardCube, currentSelection }: Props) => {
  const { t } = useTranslation();

  const [amount, setAmount] = useState<number>();
  const [address, setAddress] = useState<string>();
  const [selectedOption, setSelectedOption] = useState(tokens?.[0]);

  const addressHasError = useMemo(() => {
    return Boolean(address && address.length < 40);
  }, [address]);

  return (
    <div>
      <div className="mt-1 px-2">
        <div className="px-3">
          <div className="text-custom-grey-1">{t("flashloans.address")}</div>
          <input
            className={`bg-transparent border-b py-2 w-full ${
              addressHasError ? "border-red-500" : ""
            }`}
            placeholder="ENS or Address"
            value={address || ""}
            onChange={(e) => setAddress(e.target.value)}
            maxLength={40}
          />
          {address && addressHasError ? (
            <div className="text-sm text-red-500 mt-0.5">
              {t("errors.invalidAddress")}
            </div>
          ) : null}

          <div className="text-custom-grey-1 mt-4">{t("flashloans.input")}</div>
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

          {currentSelection === "aavev2:repay" ? (
            <div className="pt-3">
              <div className="flex justify-between">
                <p className="text-xs text-zinc-400">
                  {t("flashloans.combo.tokenDebt", { token: selectedOption })}
                </p>

                <p className="text-sm">
                  0 <span className="text-zinc-400">{selectedOption}</span>
                </p>
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

          {currentSelection === "compound:repay" ? (
            <div className="pt-3">
              <div className="flex justify-between">
                <p className="text-xs text-zinc-400">
                  {t("flashloans.combo.outstandingDebt")}
                </p>

                <p className="text-sm">
                  0 <span className="text-zinc-400">{selectedOption}</span>
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <button
        disabled={!amount || !selectedOption || !address || addressHasError}
        onClick={() =>
          setCardCube({
            id: uuid.v4(),
            crn: currentSelection,
            amount,
            token: selectedOption,
            address,
          })
        }
        className="mt-2 w-full text-center bg-custom-grey-1 p-2 rounded-b disabled:text-zinc-400 disabled:bg-custom-grey-2"
      >
        {t("flashloans.set")}
      </button>
    </div>
  );
};

export default FurucomboAddress;

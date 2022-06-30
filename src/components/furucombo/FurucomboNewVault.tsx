import { useMemo, useState } from "react";
import uuid from "uuid";
import { useTranslation } from "react-i18next";
import { ComboList, AssetsOptionsProps } from "@/pages/Flashloans";
import FurucomboTokenImage from "./FurucomboTokenImage";
import SelectDropdown from "@/components/base/SelectDropdown";

interface Props {
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
  assets?: AssetsOptionsProps[];
}

const FurucomboNewVault = ({
  setCardCube,
  currentSelection,
  assets,
}: Props) => {
  const { t } = useTranslation();
  const [vault, setVault] = useState(assets?.[0].asset);

  const [input, setInput] = useState<number>();
  const [output, setOutput] = useState<number>();

  const selectedVault = useMemo(
    () => assets?.find(({ asset }) => asset === vault),
    [assets, vault]
  );

  const vaultHasError = useMemo(() => {
    return Boolean(output && output < (selectedVault?.outputMinimum || 0));
  }, [output, selectedVault]);

  const collateralizationRatio =
    input && output && selectedVault
      ? `${((input * selectedVault?.collateralization) / output).toFixed(2)}%`
      : "N/A";

  const availableToGenerate =
    selectedVault && input
      ? (selectedVault?.generateAmount * input).toFixed(4)
      : 0;

  return (
    <div>
      <div className="mt-1 px-2">
        <div className="text-custom-grey-1">{t("flashloans.asset")}</div>
        <div className="w-1/2">
          <SelectDropdown
            selectedOption={vault}
            options={assets?.map((op) => op.asset)}
            selectOption={(op: string) => setVault(op)}
          />
        </div>

        <div className="mt-2">
          <div className="text-custom-grey-1">{t("flashloans.input")}</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <FurucomboTokenImage token={selectedVault?.input} />
              <div className="ml-2 text-xl">{selectedVault?.input}</div>
            </div>

            <input
              className="bg-transparent border-b py-2 text-right"
              placeholder="Amount"
              type="number"
              value={input || ""}
              onChange={(e) => setInput(parseInt(e.target.value))}
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="text-custom-grey-1">{t("flashloans.output")}</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <FurucomboTokenImage token={selectedVault?.output} />
              <div className="ml-2 text-xl">{selectedVault?.output}</div>
            </div>

            <input
              className={`bg-transparent border-b py-2 w-full text-right ${
                vaultHasError ? "border-red-500" : ""
              }`}
              placeholder="Amount"
              type="number"
              value={output || ""}
              onChange={(e) => setOutput(parseInt(e.target.value))}
            />
          </div>
          {vault && vaultHasError ? (
            <div className="text-right text-xs text-red-500 mt-0.5">
              {t("errors.minimumTokenGenerated", {
                value: selectedVault?.outputMinimum,
                token: selectedVault?.output,
              })}
            </div>
          ) : null}
        </div>

        <div className="pt-4">
          <div className="flex justify-between">
            <p className="text-xs text-zinc-300">
              {t("flashloans.combo.availableToGenerate")}
            </p>
            <p className="text-sm">
              {availableToGenerate} {selectedVault?.output}
            </p>
          </div>

          <div className="flex justify-between pt-1">
            <p className="text-xs text-zinc-300">
              {t("flashloans.combo.collateralizationRatio")}
            </p>
            <p className="text-sm">{collateralizationRatio}</p>
          </div>

          <p className="pt-1 text-xs text-zinc-300">
            {t("flashloans.combo.stabilityFee", { amount: selectedVault?.fee })}
          </p>
        </div>
      </div>

      <button
        disabled={!vault || !output || !input || vaultHasError}
        onClick={() =>
          setCardCube({
            id: uuid.v4(),
            crn: currentSelection,
            token: selectedVault?.input,
            amount: input,
            inputOptions: [
              {
                token: selectedVault?.output || "",
                amount: output || 0,
              },
            ],
          })
        }
        className="mt-2 w-full text-center bg-custom-grey-1 p-2 rounded-b disabled:text-zinc-400 disabled:bg-custom-grey-2"
      >
        {t("flashloans.set")}
      </button>
    </div>
  );
};

export default FurucomboNewVault;

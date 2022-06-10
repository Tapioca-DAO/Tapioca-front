import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import uuid from "uuid";
import {
  ComboList,
  OutputEstimateProps,
  OutputOptionsProps,
} from "@/pages/Flashloans";
import SelectDropdown from "@/components/SelectDropdown";
import FurucomboTokenImage from "./FurucomboTokenImage";

interface Props {
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
  outputsOptions?: OutputEstimateProps[];
}

const FurucomboMultipleInputs = ({
  currentSelection,
  setCardCube,
  outputsOptions,
}: Props) => {
  const { t } = useTranslation();
  const [selectedOutput, selectOutput] = useState(outputsOptions?.[0]?.token);
  const [selectedOptions, setSelectedOptions] = useState<OutputOptionsProps[]>(
    []
  );

  const outputTotal = useMemo(() => {
    return selectedOptions.length
      ? selectedOptions.reduce((acc, op) => {
          acc += op.total || 0;
          return acc;
        }, 0)
      : 0;
  }, [selectedOptions]);

  const opts = outputsOptions?.find(({ token }) => token === selectedOutput);

  const currentOptions = opts
    ? Object.keys(opts).reduce((acc: OutputOptionsProps[], op) => {
        if (op !== "token") {
          acc.push({ token: op, swapValue: opts[op] });
        }
        return acc;
      }, [])
    : [];

  useEffect(() => {
    setSelectedOptions(currentOptions);
  }, [selectedOutput]);

  const selectOptions = (token: string, amount: number, swapAmount: number) => {
    setSelectedOptions(
      selectedOptions.map((item) =>
        item.token === token
          ? { token, amount: amount, total: amount * swapAmount }
          : item
      )
    );
  };

  return (
    <div>
      <div className="my-1 px-5">
        <div>
          <div className="text-custom-grey-1">{t("furucombo.input")}</div>
          {currentOptions.map(({ token, swapValue }) => (
            <div className="flex items-center justify-between mb-3" key={token}>
              <div className="flex items-center">
                <FurucomboTokenImage token={token} />
                <div className="ml-2">{token}</div>
              </div>
              <div>
                <input
                  className="bg-transparent border-b py-2 text-right"
                  placeholder="Amount"
                  type="number"
                  value={
                    selectedOptions.find((op) => op.token === token)?.amount ||
                    ""
                  }
                  onChange={(e) => {
                    const amount = parseInt(e.target.value) || 0;
                    const swapAmount =
                      swapValue && typeof swapValue === "number"
                        ? swapValue
                        : 0;
                    selectOptions(token, amount, swapAmount);
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <div className="text-custom-grey-1">
            {t("furucombo.outputEstimate")}
          </div>
          <div className="flex justify-between">
            <SelectDropdown
                selectedOption={selectedOutput}
                options={outputsOptions?.map((op) => op.token)}
                selectOption={(op: string) => {
                  selectOutput(op);
                  setSelectedOptions([]);
                }}
              />
            <div>{parseFloat(outputTotal.toFixed(5))}</div>
          </div>
        </div>
      </div>

      <button
        disabled={!selectedOutput || !outputTotal}
        onClick={() =>
          setCardCube({
            id: uuid.v4(),
            crn: currentSelection,
            token: selectedOutput,
            amount: parseFloat(outputTotal.toFixed(5)),
            outputsOptions: selectedOptions,
          })
        }
        className="mt-2 w-full text-center bg-custom-grey-1 p-2 rounded-b disabled:text-zinc-400 disabled:bg-custom-grey-2"
      >
        {t("furucombo.set")}
      </button>
    </div>
  );
};

export default FurucomboMultipleInputs;

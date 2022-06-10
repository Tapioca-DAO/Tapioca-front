import { FURUCOMBO_CUBES } from "@/utils/constants";
import InputOutpuSelection from "@/components/furucombo/InputOutpuSelection";
import { ComboList, SelectedDefi } from "@/pages/Flashloans";
import Chevron from "@/images/Chevron";

interface Props {
  goBack: () => void;
  currentSelection: string;
  setCardCube: (props: ComboList) => void;
}

const FurucomboSelectionCard = ({
  goBack,
  currentSelection,
  setCardCube,
}: Props) => {
  const currentSelectedDefi = FURUCOMBO_CUBES.find(
    ({ defiName }) => defiName === currentSelection.split(":")[0]
  ) as SelectedDefi;

  const currentSelectedFeature = currentSelectedDefi?.options.find(
    ({ featureName }) => featureName === currentSelection.split(":")[1]
  );

  return (
    <div className="bg-custom-grey-4 w-full rounded-lg mb-2">
      <div className="flex items-center p-2">
        <div className="basis-1/3">
          <button
            className="w-fit border rounded p-1 text-xs font-bold flex justify-center items-center"
            onClick={goBack}
          >
            <Chevron direction="left" className="-mr-[1px]" />
          </button>
        </div>

        <div className="basis-1/3 text-center text-xl">
          {currentSelectedDefi?.title}
        </div>
        <div className="basis-1/3" />
      </div>

      <div className="flex justify-center">
        <div
          style={{
            background: `linear-gradient(to right, ${currentSelectedDefi.colors.from}, ${currentSelectedDefi.colors.to})`,
          }}
          className="cursor-pointer w-36 p-[1px] rounded relative"
        >
          <div className="rounded flex justify-center py-0.5 px-2 bg-custom-grey-3 text-xs">
            {currentSelectedFeature?.title}
          </div>
        </div>
      </div>

      <InputOutpuSelection
        type={currentSelectedFeature?.type}
        token={currentSelectedFeature?.token}
        tokens={currentSelectedFeature?.tokens}
        network={currentSelectedFeature?.network}
        outputsOptions={currentSelectedFeature?.outputsOptions}
        inputOptions={currentSelectedFeature?.inputOptions}
        transactionType={currentSelectedFeature?.transactionType}
        poolType={currentSelectedFeature?.poolType}
        pools={currentSelectedFeature?.pools}
        assets={currentSelectedFeature?.assets}
        currentSelection={currentSelection}
        setCardCube={setCardCube}
      />
    </div>
  );
};

export default FurucomboSelectionCard;

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cube from "@/images/Cube";
import NewCubeModal from "@/components/furucombo/NewCubeModal";
import FurucomboSelectionCard from "@/components/furucombo/FurucomboSelectionCard";
import SelectedCard from "@/components/furucombo/SelectedCard";

export interface OutputEstimateProps {
  token: string;
  [token: string]: number | string;
}

export interface OutputOptionsProps {
  token: string;
  amount?: number;
  swapValue?: string | number;
  total?: number;
}

export interface AssetsOptionsProps {
  asset: string;
  input: string;
  output: string;
  generateAmount: number;
  outputMinimum: number;
  fee: number;
  collateralization: number;
}

export interface ComboList {
  id: string;
  crn: string;
  token?: string;
  amount?: null | number;
  address?: string;
  network?: string;
  outputsOptions?: OutputOptionsProps[];
  inputOptions?: OutputEstimateProps[];
  vault?: number;
  pool?: string;
}

export interface PoolProps {
  pool: string;
  token?: string;
  tokens?: string;
}

export interface FeatureProps {
  featureName: string;
  title: string;
  type: string;
  token?: string;
  tokens?: string[];
  network?: string;
  outputsOptions?: OutputEstimateProps[];
  inputOptions?: OutputEstimateProps[];
  transactionType?: string;
  poolType?: string;
  pools?: PoolProps[];
  assets?: AssetsOptionsProps[];
}

export interface SelectedDefi {
  title: string;
  defiName: string;
  colors: {
    from: string;
    to: string;
  };
  options: FeatureProps[];
}

const Flashloans = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState("");
  const [combo, setCombo] = useState<ComboList[]>([]);

  const selectCube = (id: string) => {
    setCurrentSelection(id);
  };

  const updateCube = (update: ComboList[]) => {
    setCombo(update);
    localStorage.setItem("combo", JSON.stringify(update));
  };

  const setCardCube = (cube: ComboList) => {
    updateCube([...combo, cube]);
    setCurrentSelection("");
  };

  const removeItem = (id: string) => {
    updateCube(combo.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const localStorageCombo = localStorage.getItem("combo");
    if (localStorageCombo) setCombo(JSON.parse(localStorageCombo));
  }, []);

  return (
    <div className="flex justify-between mt-4">
      {isModalOpen && (
        <NewCubeModal
          selectCube={selectCube}
          closeModal={() => setIsModalOpen(false)}
        />
      )}

      <div className="hidden md:flex md:basis-1/3"></div>

      <div className="md:basis-2/3 w-full">
        {combo.map((combo) => (
          <SelectedCard {...combo} removeItem={removeItem} key={combo.id} />
        ))}

        <div className="flex items-center">
          <div className="md:basis-1/2 flex justify-center mr-2">
            <Cube onClick={() => setIsModalOpen(true)} />
          </div>
          <div className="md:basis-1/2 w-full mr-2">
            {currentSelection && (
              <FurucomboSelectionCard
                setCardCube={setCardCube}
                currentSelection={currentSelection}
                goBack={() => {
                  setCurrentSelection("");
                  setIsModalOpen(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashloans;

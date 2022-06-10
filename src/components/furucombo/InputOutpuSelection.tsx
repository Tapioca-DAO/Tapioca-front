import { FURUCOMBO_TYPES } from "@/utils/furucomboConfig";
import FurucomboClaimOutput from "./FurucomboClaimOutput";
import FurucomboOutputToken from "./FurucomboOutputToken";
import FurucomboAddress from "./FurucomboAddress";
import FurucomboBridge from "./FurucomboBridge";
import FurucomboInputToken from "./FurucomboInputToken";
import FurucomboMultipleInputs from "./FurucomboMultipleInputs";
import FurucomboTradingPars from "./FurucomboTradingPars";
import FurucomboVault from "./FurucomboVault";
import FurucomboPool from "./FurucomboPool";
import FurucomboNewVault from "./FurucomboNewVault";
import FurucomboSwap from "./FurucomboSwap";

import {
  ComboList,
  OutputEstimateProps,
  PoolProps,
  AssetsOptionsProps,
} from "@/pages/Flashloans";

interface Props {
  type?: string;
  token?: string;
  network?: string;
  tokens?: string[];
  outputsOptions?: OutputEstimateProps[];
  inputOptions?: OutputEstimateProps[];
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
  transactionType?: string;
  poolType?: string;
  pools?: PoolProps[];
  assets?: AssetsOptionsProps[];
}

const InputOutpuSelection = ({
  type,
  token,
  setCardCube,
  tokens,
  outputsOptions,
  inputOptions,
  currentSelection,
  network,
  transactionType,
  poolType,
  pools,
  assets,
}: Props) => {
  switch (type) {
    case FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT:
      return (
        <FurucomboClaimOutput
          token={token}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_OUTPUT_TOKEN:
      return (
        <FurucomboOutputToken
          tokens={tokens}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_ADDRESS:
      return (
        <FurucomboAddress
          tokens={tokens}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_BRIGDE:
      return (
        <FurucomboBridge
          tokens={tokens}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
          network={network}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_INPUT_TOKEN:
      return (
        <FurucomboInputToken
          tokens={tokens}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_MULTIPLE_INPUTS:
      return (
        <FurucomboMultipleInputs
          outputsOptions={outputsOptions}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_TRADING_PARS:
      return (
        <FurucomboTradingPars
          inputOptions={inputOptions}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_VAULT:
      return (
        <FurucomboVault
          token={token}
          transactionType={transactionType}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_POOL:
      return (
        <FurucomboPool
          setCardCube={setCardCube}
          currentSelection={currentSelection}
          poolType={poolType}
          pools={pools}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_NEW_VAULT:
      return (
        <FurucomboNewVault
          setCardCube={setCardCube}
          currentSelection={currentSelection}
          assets={assets}
        />
      );

    case FURUCOMBO_TYPES.FURUCOMBO_SWAP:
      return (
        <FurucomboSwap
          inputOptions={inputOptions}
          setCardCube={setCardCube}
          currentSelection={currentSelection}
        />
      );

    default:
      return <div></div>;
  }
};

export default InputOutpuSelection;

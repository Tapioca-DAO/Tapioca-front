import { ComboList, SelectedDefi } from "@/pages/Flashloans";
import { FURUCOMBO_CUBES } from "@/utils/constants";
import formatAddress from "@/utils/formatAddress";
import { useTranslation } from "react-i18next";
import FurucomboTokenImage from "./FurucomboTokenImage";
import Cube from "@/images/Cube";

interface Props extends ComboList {
  removeItem: (id: string) => void;
}

const SelectedCard = ({
  id,
  crn,
  token,
  amount,
  address,
  network,
  outputsOptions,
  inputOptions,
  removeItem,
  pool,
}: Props) => {
  const { t } = useTranslation();

  const defi = FURUCOMBO_CUBES.find(
    ({ defiName }) => defiName === crn.split(":")[0]
  ) as SelectedDefi;

  const feature = defi?.options.find(
    ({ featureName }) => featureName === crn.split(":")[1]
  );

  const tokenPars = token?.split("/");

  return (
    <div key={id} className="flex items-center">
      {" "}
      <div className="md:basis-1/2 flex justify-center mr-2">
        <Cube
          isActive
          activeColorFrom={defi.colors.from}
          activeColorTo={defi.colors.to}
        />
      </div>
      <div className="md:basis-1/2 w-full mr-2">
        <div className="p-2 bg-grey-900 w-full rounded-lg mb-2" key={id}>
          <div className="flex items-center justify-between">
            <div>
              <div
                style={{
                  background: `linear-gradient(to right, ${defi.colors.from}, ${defi.colors.to})`,
                }}
                className="w-fit rounded px-2 py-0.5 text-xs font-bold"
              >
                {defi?.title} - {feature?.title}
              </div>
            </div>
            <button
              className="text-xs underline"
              onClick={() => removeItem(id)}
            >
              {t("flashloans.delete")}
            </button>
          </div>

          {address && (
            <div className="flex justify-between m-2 items-center pb-2 border-b border-zinc-500">
              <div className="text-xl">{formatAddress(address)}</div>
            </div>
          )}

          {pool && (
            <div className="flex m-2 items-center pb-2 border-b border-zinc-500">
              <FurucomboTokenImage token={token} />
              <div className="ml-2 text-xl">{pool}</div>
            </div>
          )}

          {outputsOptions?.length && (
            <div className="m-2 py-2 border-b border-zinc-500">
              {outputsOptions.map(({ token, amount }) => (
                <div
                  className="flex justify-between items-center pb-2"
                  key={`selected-output-${token}`}
                >
                  <div className="flex items-center">
                    <FurucomboTokenImage token={token} />
                    <div className="ml-2 text-xl">{token}</div>
                  </div>

                  <div className="text-xl">{amount || 0}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between m-2 items-center">
            <div className="flex items-center">
              {tokenPars?.map((tokenPar) => (
                <FurucomboTokenImage token={tokenPar}  key={tokenPar}/>
              ))}

              <div className="ml-2 text-xl">{token}</div>
            </div>
            <div className="text-lg">{amount}</div>
          </div>

          {inputOptions?.length && (
            <div className="m-2 pt-2 border-t border-zinc-500">
              {inputOptions.map(({ token, amount }) => (
                <div
                  className="flex justify-between items-center pb-2"
                  key={`selected-input-${token}`}
                >
                  <div className="flex items-center">
                    <FurucomboTokenImage token={token} />
                    <div className="ml-2 text-xl">{token}</div>
                  </div>

                  <div className="text-xl">{amount || 0}</div>
                </div>
              ))}
            </div>
          )}

          {network && (
            <div className="flex justify-between m-2 items-center pt-2 border-t border-zinc-500">
              <div className="text-xl">{network}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
